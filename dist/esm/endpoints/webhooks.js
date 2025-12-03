export const webhookEndpoints = {
    fetchWebhookEndpoints: {
        method: 'GET',
        path: '/api/v1/developer/webhooks/endpoints',
    },
    createWebhookEndpoint: {
        method: 'POST',
        path: '/api/v1/developer/webhooks/endpoints',
    },
    updateWebhookEndpoint: {
        method: 'PUT',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    },
    deleteWebhookEndpoint: {
        method: 'DELETE',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    },
};
//# sourceMappingURL=webhooks.js.map