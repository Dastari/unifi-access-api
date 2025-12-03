export const identityEndpoints = {
    sendIdentityInvitations: {
        method: 'POST',
        path: '/api/v1/developer/users/identity/invitations',
    },
    fetchAvailableIdentityResources: {
        method: 'GET',
        path: '/api/v1/developer/users/identity/assignments',
    },
    assignIdentityResourcesToUser: {
        method: 'POST',
        path: '/api/v1/developer/users/:id/identity/assignments',
    },
    fetchIdentityResourcesForUser: {
        method: 'GET',
        path: '/api/v1/developer/users/:id/identity/assignments',
    },
    assignIdentityResourcesToUserGroup: {
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    },
    fetchIdentityResourcesForUserGroup: {
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/identity/assignments',
    },
};
//# sourceMappingURL=identity.js.map