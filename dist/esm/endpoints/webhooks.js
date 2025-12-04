import { defineEndpoint } from '../internal/endpoint.js';
export const webhookEndpoints = {
    fetchWebhookEndpoints: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/webhooks/endpoints',
    }),
    createWebhookEndpoint: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/webhooks/endpoints',
    }),
    updateWebhookEndpoint: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    }),
    deleteWebhookEndpoint: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    }),
};
//# sourceMappingURL=webhooks.js.map