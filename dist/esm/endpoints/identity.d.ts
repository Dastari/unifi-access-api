export declare const identityEndpoints: {
    readonly sendIdentityInvitations: {
        method: "POST";
        path: string;
    };
    readonly fetchAvailableIdentityResources: {
        method: "GET";
        path: string;
    };
    readonly assignIdentityResourcesToUser: {
        method: "POST";
        path: string;
    };
    readonly fetchIdentityResourcesForUser: {
        method: "GET";
        path: string;
    };
    readonly assignIdentityResourcesToUserGroup: {
        method: "POST";
        path: string;
    };
    readonly fetchIdentityResourcesForUserGroup: {
        method: "GET";
        path: string;
    };
};
export type IdentityEndpoints = typeof identityEndpoints;
//# sourceMappingURL=identity.d.ts.map