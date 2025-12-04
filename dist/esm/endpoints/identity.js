import { defineEndpoint } from '../internal/endpoint.js';
export const identityEndpoints = {
    sendIdentityInvitations: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/users/identity/invitations',
    }),
    fetchAvailableIdentityResources: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users/identity/assignments',
    }),
    assignIdentityResourcesToUser: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/users/:id/identity/assignments',
    }),
    fetchIdentityResourcesForUser: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users/:id/identity/assignments',
    }),
    assignIdentityResourcesToUserGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    }),
    fetchIdentityResourcesForUserGroup: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    }),
};
//# sourceMappingURL=identity.js.map