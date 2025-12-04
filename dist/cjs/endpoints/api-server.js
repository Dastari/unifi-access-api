"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiServerEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.apiServerEndpoints = {
    uploadApiServerCertificate: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/api_server/certificates',
        rawBody: true,
    }),
    deleteApiServerCertificate: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/api_server/certificates',
    }),
};
//# sourceMappingURL=api-server.js.map