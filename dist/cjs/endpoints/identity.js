"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.identityEndpoints = {
    sendIdentityInvitations: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/users/identity/invitations',
    }),
    fetchAvailableIdentityResources: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users/identity/assignments',
    }),
    assignIdentityResourcesToUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/users/:id/identity/assignments',
    }),
    fetchIdentityResourcesForUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users/:id/identity/assignments',
    }),
    assignIdentityResourcesToUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    }),
    fetchIdentityResourcesForUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    }),
};
//# sourceMappingURL=identity.js.map