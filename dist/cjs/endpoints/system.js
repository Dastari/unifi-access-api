"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemEndpoints = void 0;
exports.systemEndpoints = {
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