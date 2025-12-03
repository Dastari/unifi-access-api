export const systemEndpoints = {
    fetchSystemLogs: {
        method: 'POST',
        path: '/api/v1/developer/system/logs',
    },
    exportSystemLogs: {
        method: 'POST',
        path: '/api/v1/developer/system/logs/export',
        responseType: 'arrayBuffer',
    },
    fetchSystemLogResource: {
        method: 'GET',
        path: '/api/v1/developer/system/logs/resource/:id',
    },
    fetchSystemStaticResource: {
        method: 'GET',
        path: '/api/v1/developer/system/static/:path',
        responseType: 'arrayBuffer',
    },
};
//# sourceMappingURL=system.js.map