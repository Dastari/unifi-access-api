import { endpointDefinitions } from './endpoints/index.js';
import { type UnifiAccessNotificationClient, type UnifiAccessNotificationClientOptions } from './events/notification-client.js';
import { EndpointMethodMap } from './internal/endpoint.js';
export interface UnifiAccessApiOptions {
    /**
      * Base URL of the UniFi Access API, e.g. https://console-ip:12445/.
      */
    baseUrl: string;
    /**
      * API token used for bearer authentication.
      */
    apiKey: string;
    /**
      * Custom fetch implementation. Defaults to global fetch.
      */
    fetch?: typeof fetch;
    /**
      * Default headers merged into every request.
      */
    defaultHeaders?: Record<string, string>;
    /**
      * Optional HTTP(S) agent passed to the underlying fetch implementation. Useful
      * for accepting self-signed certificates in Node environments.
      */
    agent?: unknown;
    /**
      * Default request timeout in milliseconds. Disabled when undefined.
      */
    timeoutMs?: number;
}
export declare class UnifiAccessApiError<T = unknown> extends Error {
    readonly status: number;
    readonly code: string;
    readonly response: T;
    constructor(message: string, status: number, code: string, response: T);
}
export declare class UnifiAccessHttpError extends Error {
    readonly status: number;
    readonly body?: string | undefined;
    constructor(message: string, status: number, body?: string | undefined);
}
type ApiMethods = EndpointMethodMap<typeof endpointDefinitions>;
export declare class UnifiAccessApi implements ApiMethods {
    private readonly options;
    private readonly baseUrl;
    private readonly fetchImpl;
    private readonly defaultHeaders;
    private readonly agent;
    private readonly timeoutMs?;
    constructor(options: UnifiAccessApiOptions);
    private attachEndpoints;
    private invoke;
    private buildUrl;
    private buildHeaders;
    private prepareBody;
    /**
     * Creates a {@link UnifiAccessNotificationClient} configured with the same
     * credentials as this REST client. Useful for consuming real-time device
     * notifications over WebSocket without manually supplying connection
     * parameters.
     */
    createNotificationClient(overrides?: Partial<Omit<UnifiAccessNotificationClientOptions, 'baseUrl' | 'apiKey'>>): UnifiAccessNotificationClient;
    private parseResponse;
    private interpolatePath;
    private buildSignal;
}
export interface UnifiAccessApi extends ApiMethods {
}
export {};
//# sourceMappingURL=client.d.ts.map