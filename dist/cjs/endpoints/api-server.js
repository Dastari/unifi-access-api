"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiServerEndpoints = void 0;
exports.apiServerEndpoints = {
    uploadApiServerCertificate: {
        method: 'POST',
        path: '/api/v1/developer/api_server/certificates',
        rawBody: true,
    },
    deleteApiServerCertificate: {
        method: 'DELETE',
        path: '/api/v1/developer/api_server/certificates',
    },
};
//# sourceMappingURL=api-server.js.map