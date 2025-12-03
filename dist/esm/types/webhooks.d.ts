import type { ApiResponse } from './common.js';
export interface WebhookHeaders {
    [key: string]: string;
}
export interface WebhookEndpoint {
    id: string;
    endpoint: string;
    name: string;
    secret: string;
    events: string[];
    headers?: WebhookHeaders;
}
export interface WebhookEndpointRequest {
    endpoint: string;
    name: string;
    events: string[];
    headers?: WebhookHeaders;
}
export type WebhookEndpointsResponse = ApiResponse<WebhookEndpoint[]>;
export type WebhookEndpointResponse = ApiResponse<WebhookEndpoint>;
//# sourceMappingURL=webhooks.d.ts.map