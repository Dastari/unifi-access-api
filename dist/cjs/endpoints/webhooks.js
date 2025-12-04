"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.webhookEndpoints = {
    fetchWebhookEndpoints: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/webhooks/endpoints',
    }),
    createWebhookEndpoint: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/webhooks/endpoints',
    }),
    updateWebhookEndpoint: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    }),
    deleteWebhookEndpoint: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/webhooks/endpoints/:id',
    }),
};
//# sourceMappingURL=webhooks.js.map