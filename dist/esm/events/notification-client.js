import { EventEmitter } from 'events';
import WebSocket from 'ws';
/**
 * Minimal event client around the UniFi Access WebSocket endpoint
 * (`/api/v1/developer/devices/notifications`). Emits typed helper events for
 * connection lifecycle and for the parsed notification payloads.
 */
export class UnifiAccessNotificationClient extends EventEmitter {
    baseUrl;
    apiKey;
    agent;
    WebSocketImpl;
    reconnectIntervalMs;
    autoReconnect;
    ws;
    reconnectAttempts = 0;
    explicitClose = false;
    reconnectTimer;
    constructor(options) {
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
    /**
     * Typed overload for `EventEmitter.on`.
     */
    on(event, listener) {
        return super.on(event, listener);
    }
    /**
     * Typed overload for `EventEmitter.once`.
     */
    once(event, listener) {
        return super.once(event, listener);
    }
    /**
     * Typed overload for `EventEmitter.off`.
     */
    off(event, listener) {
        return super.off(event, listener);
    }
    // endregion
    /**
     * Indicates whether the underlying socket is currently open.
     */
    get isConnected() {
        return this.ws !== undefined && this.ws.readyState === this.WebSocketImpl.OPEN;
    }
    /**
     * Establishes the WebSocket connection. Resolves once the socket is open.
     */
    connect() {
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
                socket.off('open', handleOpen);
                socket.off('error', handleError);
            };
            const handleOpen = () => {
                cleanup();
                this.attachSocket(socket);
                resolve();
            };
            const handleError = (error) => {
                cleanup();
                reject(error);
            };
            socket.once('open', handleOpen);
            socket.once('error', handleError);
        });
    }
    /**
     * Gracefully closes the WebSocket connection.
     */
    disconnect(code, reason) {
        this.explicitClose = true;
        clearTimeout(this.reconnectTimer);
        if (this.ws && (this.ws.readyState === this.WebSocketImpl.OPEN || this.ws.readyState === this.WebSocketImpl.CONNECTING)) {
            this.ws.close(code, reason);
        }
        this.ws = undefined;
    }
    attachSocket(socket) {
        this.ws = socket;
        this.reconnectAttempts = 0;
        socket.on('open', () => {
            this.emit('open');
        });
        socket.on('close', (code, buffer) => {
            this.emit('close', code, buffer);
            this.ws = undefined;
            if (!this.explicitClose && this.autoReconnect) {
                this.scheduleReconnect();
            }
        });
        socket.on('error', (error) => {
            const err = error instanceof Error ? error : new Error(String(error));
            this.emit('error', err);
        });
        socket.on('message', (data) => {
            this.emit('raw', data);
            try {
                const parsed = parseNotification(data);
                if (parsed) {
                    this.emit('message', parsed);
                }
            }
            catch (error) {
                this.emit('error', error instanceof Error ? error : new Error(String(error)));
            }
        });
    }
    scheduleReconnect() {
        clearTimeout(this.reconnectTimer);
        this.reconnectAttempts += 1;
        this.emit('reconnect', this.reconnectAttempts);
        this.reconnectTimer = setTimeout(() => {
            this.connect().catch(() => this.scheduleReconnect());
        }, this.reconnectIntervalMs);
    }
    buildWebSocketUrl() {
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
export const createNotificationClientFromApiOptions = (options, overrides = {}) => {
    return new UnifiAccessNotificationClient({
        baseUrl: options.baseUrl,
        apiKey: options.apiKey,
        agent: options.agent,
        autoReconnect: overrides.autoReconnect,
        reconnectIntervalMs: overrides.reconnectIntervalMs,
        WebSocketImpl: overrides.WebSocketImpl,
    });
};
function parseNotification(data) {
    const text = typeof data === 'string' ? data : data.toString('utf8');
    if (!text) {
        return undefined;
    }
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object') {
        return undefined;
    }
    return parsed;
}
function ensureTrailingSlash(input) {
    const url = new URL(input.toString());
    if (!url.pathname.endsWith('/')) {
        url.pathname += '/';
    }
    return url;
}
//# sourceMappingURL=notification-client.js.map