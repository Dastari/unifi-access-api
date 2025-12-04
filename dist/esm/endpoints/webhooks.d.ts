import type { WebhookEndpointRequest, WebhookEndpointResponse, WebhookEndpointsResponse } from '../types/webhooks.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const webhookEndpoints: {
    readonly fetchWebhookEndpoints: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, WebhookEndpointsResponse, "json">;
    readonly createWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, WebhookEndpointRequest, WebhookEndpointResponse, "json">;
    readonly updateWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, WebhookEndpointRequest, WebhookEndpointResponse, "json">;
    readonly deleteWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
};
export type WebhookEndpoints = typeof webhookEndpoints;
//# sourceMappingURL=webhooks.d.ts.map