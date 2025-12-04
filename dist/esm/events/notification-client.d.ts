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
export declare class UnifiAccessNotificationClient extends EventEmitter {
    private readonly baseUrl;
    private readonly apiKey;
    private readonly agent?;
    private readonly WebSocketImpl;
    private readonly reconnectIntervalMs;
    private readonly autoReconnect;
    private ws?;
    private reconnectAttempts;
    private explicitClose;
    private reconnectTimer?;
    constructor(options: UnifiAccessNotificationClientOptions);
    on(event: 'open', listener: NotificationClientEvents['open']): this;
    on(event: 'close', listener: NotificationClientEvents['close']): this;
    on(event: 'error', listener: NotificationClientEvents['error']): this;
    on(event: 'message', listener: NotificationClientEvents['message']): this;
    on(event: 'raw', listener: NotificationClientEvents['raw']): this;
    on(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
    once(event: 'open', listener: NotificationClientEvents['open']): this;
    once(event: 'close', listener: NotificationClientEvents['close']): this;
    once(event: 'error', listener: NotificationClientEvents['error']): this;
    once(event: 'message', listener: NotificationClientEvents['message']): this;
    once(event: 'raw', listener: NotificationClientEvents['raw']): this;
    once(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
    off(event: 'open', listener: NotificationClientEvents['open']): this;
    off(event: 'close', listener: NotificationClientEvents['close']): this;
    off(event: 'error', listener: NotificationClientEvents['error']): this;
    off(event: 'message', listener: NotificationClientEvents['message']): this;
    off(event: 'raw', listener: NotificationClientEvents['raw']): this;
    off(event: 'reconnect', listener: NotificationClientEvents['reconnect']): this;
    /**
     * Indicates whether the underlying socket is currently open.
     */
    get isConnected(): boolean;
    /**
     * Establishes the WebSocket connection. Resolves once the socket is open.
     */
    connect(): Promise<void>;
    /**
     * Gracefully closes the WebSocket connection.
     */
    disconnect(code?: number, reason?: string): void;
    private attachSocket;
    private scheduleReconnect;
    private buildWebSocketUrl;
}
/**
 * Convenience helper to create a notification client from an existing
 * {@link UnifiAccessApi} options bag.
 */
/**
 * Convenience wrapper that copies base URL and API key from an existing REST
 * client configuration.
 */
export declare const createNotificationClientFromApiOptions: (options: UnifiAccessApiOptions, overrides?: Partial<Omit<UnifiAccessNotificationClientOptions, "baseUrl" | "apiKey">>) => UnifiAccessNotificationClient;
//# sourceMappingURL=notification-client.d.ts.map