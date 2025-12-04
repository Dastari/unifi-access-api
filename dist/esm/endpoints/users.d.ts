import type { AssignLicensePlatesRequest, AssignNfcCardRequest, AssignPinCodeRequest, BatchAssignTouchPassRequest, BatchAssignTouchPassResponse, CreateUserGroupRequest, CreateUserRequest, CreateUserResponse, FetchAllUserGroupsResponse, FetchAllUsersResponse, FetchGroupUsersResponse, FetchUserAccessPoliciesQuery, FetchUserGroupResponse, FetchUserQuery, FetchUserResponse, FetchUsersQuery, SearchUsersQuery, SearchUsersResponse, TouchPassAssignmentResponse, UnassignNfcCardRequest, UpdateGroupAccessPoliciesRequest, UpdateUserAccessPoliciesRequest, UpdateUserGroupRequest, UpdateUserRequest } from '../types/users.js';
import type { SuccessOnlyResponse } from '../types/common.js';
import type { UserAccessPoliciesResponse } from '../types/users.js';
export declare const userEndpoints: {
    readonly createUser: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateUserRequest, CreateUserResponse, "json">;
    readonly updateUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateUserRequest, SuccessOnlyResponse, "json">;
    readonly fetchUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, FetchUserQuery, undefined, FetchUserResponse, "json">;
    readonly fetchAllUsers: import("../internal/endpoint.js").EndpointDefinition<undefined, FetchUsersQuery, undefined, FetchAllUsersResponse, "json">;
    readonly updateUserAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateUserAccessPoliciesRequest, SuccessOnlyResponse, "json">;
    readonly assignUserNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignNfcCardRequest, SuccessOnlyResponse, "json">;
    readonly unassignUserNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UnassignNfcCardRequest, SuccessOnlyResponse, "json">;
    readonly assignUserPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignPinCodeRequest, SuccessOnlyResponse, "json">;
    readonly unassignUserPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly createUserGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateUserGroupRequest, SuccessOnlyResponse, "json">;
    readonly fetchAllUserGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, FetchAllUserGroupsResponse, "json">;
    readonly fetchUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, FetchUserGroupResponse, "json">;
    readonly updateUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateUserGroupRequest, SuccessOnlyResponse, "json">;
    readonly deleteUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly assignUsersToGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], SuccessOnlyResponse, "json">;
    readonly unassignUsersFromGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], SuccessOnlyResponse, "json">;
    readonly fetchUsersInGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, FetchGroupUsersResponse, "json">;
    readonly fetchAllUsersInGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, FetchGroupUsersResponse, "json">;
    readonly fetchUserAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, FetchUserAccessPoliciesQuery, undefined, UserAccessPoliciesResponse, "json">;
    readonly updateUserGroupAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateGroupAccessPoliciesRequest, SuccessOnlyResponse, "json">;
    readonly fetchUserGroupAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, UserAccessPoliciesResponse, "json">;
    readonly deleteUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly searchUsers: import("../internal/endpoint.js").EndpointDefinition<undefined, SearchUsersQuery, undefined, SearchUsersResponse, "json">;
    readonly assignTouchPassToUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, TouchPassAssignmentResponse, "json">;
    readonly unassignTouchPassFromUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly batchAssignTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, BatchAssignTouchPassRequest, BatchAssignTouchPassResponse, "json">;
    readonly assignLicensePlatesToUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignLicensePlatesRequest, SuccessOnlyResponse, "json">;
    readonly unassignLicensePlateFromUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        license_plate_id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly uploadUserAvatar: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../types/common.js").BodyLike, SuccessOnlyResponse, "json">;
};
export type UserEndpoints = typeof userEndpoints;
//# sourceMappingURL=users.d.ts.map