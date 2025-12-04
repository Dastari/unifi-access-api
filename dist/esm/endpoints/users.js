import { defineEndpoint } from '../internal/endpoint.js';
export const userEndpoints = {
    createUser: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/users',
    }),
    updateUser: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id',
    }),
    fetchUser: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users/:id',
    }),
    fetchAllUsers: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users',
    }),
    updateUserAccessPolicies: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/access_policies',
    }),
    assignUserNfcCard: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards',
    }),
    unassignUserNfcCard: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards/delete',
    }),
    assignUserPinCode: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/pin_codes',
    }),
    unassignUserPinCode: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/users/:id/pin_codes',
    }),
    createUserGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/user_groups',
    }),
    fetchAllUserGroups: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups',
    }),
    fetchUserGroup: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id',
    }),
    updateUserGroup: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id',
    }),
    deleteUserGroup: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/user_groups/:id',
    }),
    assignUsersToGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users',
    }),
    unassignUsersFromGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users/delete',
    }),
    fetchUsersInGroup: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users',
    }),
    fetchAllUsersInGroup: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users/all',
    }),
    fetchUserAccessPolicies: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users/:id/access_policies',
    }),
    updateUserGroupAccessPolicies: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    }),
    fetchUserGroupAccessPolicies: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    }),
    deleteUser: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/users/:id',
    }),
    searchUsers: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/users/search',
    }),
    assignTouchPassToUser: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    }),
    unassignTouchPassFromUser: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    }),
    batchAssignTouchPasses: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/touch_passes/assign',
    }),
    assignLicensePlatesToUser: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/license_plates',
    }),
    unassignLicensePlateFromUser: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/license_plates/:license_plate_id',
    }),
    uploadUserAvatar: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/users/:id/avatar',
        rawBody: true,
    }),
};
//# sourceMappingURL=users.js.map