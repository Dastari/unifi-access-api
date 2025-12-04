import { defineEndpoint } from '../internal/endpoint.js';
export const apiServerEndpoints = {
    uploadApiServerCertificate: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/api_server/certificates',
        rawBody: true,
    }),
    deleteApiServerCertificate: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/api_server/certificates',
    }),
};
//# sourceMappingURL=api-server.js.map