import { defineEndpoint } from '../internal/endpoint.js';
export const systemEndpoints = {
    fetchSystemLogs: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/system/logs',
    }),
    exportSystemLogs: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/system/logs/export',
        responseType: 'arrayBuffer',
    }),
    fetchSystemLogResource: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/system/logs/resource/:id',
    }),
    fetchSystemStaticResource: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/system/static/:path',
        responseType: 'arrayBuffer',
    }),
};
//# sourceMappingURL=system.js.map