import type { IdentityAssignmentRequest, IdentityAvailableResourcesResponse, IdentityInvitationRequestItem, IdentityInvitationResponse } from '../types/identity.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const identityEndpoints: {
    readonly sendIdentityInvitations: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, IdentityInvitationRequestItem[], IdentityInvitationResponse, "json">;
    readonly fetchAvailableIdentityResources: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        resource_type?: string;
    }, undefined, IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, IdentityAssignmentRequest, SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, IdentityAssignmentRequest, SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, IdentityAvailableResourcesResponse, "json">;
};
export type IdentityEndpoints = typeof identityEndpoints;
//# sourceMappingURL=identity.d.ts.map