import { EventEmitter } from 'events';
import WebSocket, { type ClientOptions as WebSocketClientOptions, type RawData } from 'ws';

import type { UnifiAccessApiOptions } from '../client.js';

/**
 * Notification payload shape emitted by the UniFi Access WebSocket endpoint.
 * The payload varies by event type, therefore the interface keeps most fields
 * optional while preserving the common properties described in the API
 * reference.
 */
export interface UnifiAccessNotification {
  event: string;
  receiver_id?: string;
  event_object_id?: string;
  save_to_history?: boolean;
  [key: string]: unknown;
}

/**
 * Options for {@link UnifiAccessNotificationClient}.
 */
export interface UnifiAccessNotificationClientOptions {
  /**
   * Base URL of the UniFi Access API (e.g. `https://console-ip:12445/`).
   */
  baseUrl: string;
  /**
   * API token with `view:device` permission.
   */
  apiKey: string;
  /**
   * Optional HTTPS agent passed to the underlying WebSocket client.
   */
  agent?: WebSocketClientOptions['agent'];
  /**
   * Custom WebSocket implementation. Defaults to the `ws` package.
   */
  WebSocketImpl?: typeof WebSocket;
  /**
   * Automatically attempt to reconnect when the socket closes unexpectedly.
   * Defaults to `true`.
   */
  autoReconnect?: boolean;
  /**
   * Delay before attempting to reconnect (milliseconds). Defaults to 5000 ms.
   */
  reconnectIntervalMs?: number;
}

/**
 * Event names and handler signatures emitted by
 * {@link UnifiAccessNotificationClient}.
 */
export type NotificationClientEvents = {
  open: () => void;
  close: (code: number, reason: Buffer) => void;
  error: (error: Error) => void;
  message: (payload: UnifiAccessNotification) => void;
  /**
   * Emits the raw message payload before JSON parsing; useful for debugging.
   */
  raw: (data: RawData) => void;
  reconnect: (attempt: number) => void;
};

/**
 * Minimal event client around the UniFi Access WebSocket endpoint
 * (`/api/v1/developer/devices/notifications`). Emits typed helper events for
 * connection lifecycle and for the parsed notification payloads.
 */
export class UnifiAccessNotificationClient extends EventEmitter {
  private readonly baseUrl: URL;
  private readonly apiKey: string;
  private readonly agent?: WebSocketClientOptions['agent'];
  private readonly WebSocketImpl: typeof WebSocket;
  private readonly reconnectIntervalMs: number;
  private readonly autoReconnect: boolean;

  private ws?: WebSocket;
  private reconnectAttempts = 0;
  private explicitClose = false;
  private reconnectTimer?: ReturnType<typeof setTimeout>;

  constructor(options: UnifiAccessNotificationClientOptions) {
    super();
    if (!options.baseUrl) {
      throw new Error('baseUrl is required');
    }
    if (!options.apiKey) {
      throw new Error('apiKey is required');
    }

    this.baseUrl = ensureTrailingSlash(options.baseUrl);
    this.apiKey = options.apiKey;
    this.agent = options.agent;
    this.WebSocketImpl = options.WebSocketImpl ?? WebSocket;
    this.autoReconnect = options.autoReconnect ?? true;
    this.reconnectIntervalMs = options.reconnectIntervalMs ?? 5000;
  }

  // region Typed event helpers
  on(event: 'open', listener: NotificationClientEvents['open']): this;
  on(event: 'close', listener: NotificationClientEvents['close']): this;
  on(event: 'error', listener: NotificationClientEvents['error']): this;
  on(event: 'message', listener: NotificationClientEvents['message']): this;
  on(event: 'raw', listener: NotificationClientEvents['raw']): this;
  on(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
  /**
   * Typed overload for `EventEmitter.on`.
   */
  on(event: string, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  once(event: 'open', listener: NotificationClientEvents['open']): this;
  once(event: 'close', listener: NotificationClientEvents['close']): this;
  once(event: 'error', listener: NotificationClientEvents['error']): this;
  once(event: 'message', listener: NotificationClientEvents['message']): this;
  once(event: 'raw', listener: NotificationClientEvents['raw']): this;
  once(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
  /**
   * Typed overload for `EventEmitter.once`.
   */
  once(event: string, listener: (...args: any[]) => void): this {
    return super.once(event, listener);
  }

  off(event: 'open', listener: NotificationClientEvents['open']): this;
  off(event: 'close', listener: NotificationClientEvents['close']): this;
  off(event: 'error', listener: NotificationClientEvents['error']): this;
  off(event: 'message', listener: NotificationClientEvents['message']): this;
  off(event: 'raw', listener: NotificationClientEvents['raw']): this;
  off(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
  /**
   * Typed overload for `EventEmitter.off`.
   */
  off(event: string, listener: (...args: any[]) => void): this {
    return super.off(event, listener);
  }
  // endregion

  /**
   * Indicates whether the underlying socket is currently open.
   */
  get isConnected(): boolean {
    return this.ws !== undefined && this.ws.readyState === this.WebSocketImpl.OPEN;
  }

  /**
   * Establishes the WebSocket connection. Resolves once the socket is open.
   */
  connect(): Promise<void> {
    if (this.ws && (this.ws.readyState === this.WebSocketImpl.OPEN || this.ws.readyState === this.WebSocketImpl.CONNECTING)) {
      return Promise.resolve();
    }
    this.explicitClose = false;
    clearTimeout(this.reconnectTimer);

    return new Promise((resolve, reject) => {
      const wsUrl = this.buildWebSocketUrl();
      const socket = new this.WebSocketImpl(wsUrl, undefined, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Upgrade: 'websocket',
          Connection: 'Upgrade',
        },
        agent: this.agent,
      });

      const cleanup = () => {
        socket.off('open', handleOpen as any);
        socket.off('error', handleError as any);
      };

      const handleOpen = () => {
        cleanup();
        this.attachSocket(socket);
        resolve();
      };

      const handleError = (error: Error) => {
        cleanup();
        reject(error);
      };

      socket.once('open', handleOpen as any);
      socket.once('error', handleError as any);
    });
  }

  /**
   * Gracefully closes the WebSocket connection.
   */
  disconnect(code?: number, reason?: string): void {
    this.explicitClose = true;
    clearTimeout(this.reconnectTimer);
    if (this.ws && (this.ws.readyState === this.WebSocketImpl.OPEN || this.ws.readyState === this.WebSocketImpl.CONNECTING)) {
      this.ws.close(code, reason);
    }
    this.ws = undefined;
  }

  private attachSocket(socket: WebSocket) {
    this.ws = socket;
    this.reconnectAttempts = 0;

    socket.on('open', () => {
      this.emit('open');
    });

    socket.on('close', (code: number, buffer: Buffer) => {
      this.emit('close', code, buffer);
      this.ws = undefined;
      if (!this.explicitClose && this.autoReconnect) {
        this.scheduleReconnect();
      }
    });

    socket.on('error', (error: unknown) => {
      const err = error instanceof Error ? error : new Error(String(error));
      this.emit('error', err);
    });

    socket.on('message', (data: RawData) => {
      this.emit('raw', data);
      try {
        const parsed = parseNotification(data);
        if (parsed) {
          this.emit('message', parsed);
        }
      } catch (error) {
        this.emit('error', error instanceof Error ? error : new Error(String(error)));
      }
    });
  }

  private scheduleReconnect() {
    clearTimeout(this.reconnectTimer);
    this.reconnectAttempts += 1;
    this.emit('reconnect', this.reconnectAttempts);
    this.reconnectTimer = setTimeout(() => {
      this.connect().catch(() => this.scheduleReconnect());
    }, this.reconnectIntervalMs);
  }

  private buildWebSocketUrl(): string {
    const wsUrl = new URL('/api/v1/developer/devices/notifications', this.baseUrl);
    wsUrl.protocol = wsUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    return wsUrl.toString();
  }
}

/**
 * Convenience helper to create a notification client from an existing
 * {@link UnifiAccessApi} options bag.
 */
/**
 * Convenience wrapper that copies base URL and API key from an existing REST
 * client configuration.
 */
export const createNotificationClientFromApiOptions = (
  options: UnifiAccessApiOptions,
  overrides: Partial<Omit<UnifiAccessNotificationClientOptions, 'baseUrl' | 'apiKey'>> = {},
) => {
  return new UnifiAccessNotificationClient({
    baseUrl: options.baseUrl,
    apiKey: options.apiKey,
    agent: options.agent as WebSocketClientOptions['agent'],
    autoReconnect: overrides.autoReconnect,
    reconnectIntervalMs: overrides.reconnectIntervalMs,
    WebSocketImpl: overrides.WebSocketImpl,
  });
};

function parseNotification(data: RawData): UnifiAccessNotification | undefined {
  const text = typeof data === 'string' ? data : data.toString('utf8');
  if (!text) {
    return undefined;
  }
  const parsed = JSON.parse(text);
  if (!parsed || typeof parsed !== 'object') {
    return undefined;
  }
  return parsed as UnifiAccessNotification;
}

function ensureTrailingSlash(input: string | URL) {
  const url = new URL(input.toString());
  if (!url.pathname.endsWith('/')) {
    url.pathname += '/';
  }
  return url;
}
