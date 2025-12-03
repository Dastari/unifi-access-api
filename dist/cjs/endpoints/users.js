"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEndpoints = void 0;
exports.userEndpoints = {
    createUser: {
        method: 'POST',
        path: '/api/v1/developer/users',
    },
    updateUser: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id',
    },
    fetchUser: {
        method: 'GET',
        path: '/api/v1/developer/users/:id',
    },
    fetchAllUsers: {
        method: 'GET',
        path: '/api/v1/developer/users',
    },
    updateUserAccessPolicies: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id/access_policies',
    },
    assignUserNfcCard: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards',
    },
    unassignUserNfcCard: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards/delete',
    },
    assignUserPinCode: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id/pin_codes',
    },
    unassignUserPinCode: {
        method: 'DELETE',
        path: '/api/v1/developer/users/:id/pin_codes',
    },
    createUserGroup: {
        method: 'POST',
        path: '/api/v1/developer/user_groups',
    },
    fetchAllUserGroups: {
        method: 'GET',
        path: '/api/v1/developer/user_groups',
    },
    fetchUserGroup: {
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id',
    },
    updateUserGroup: {
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id',
    },
    deleteUserGroup: {
        method: 'DELETE',
        path: '/api/v1/developer/user_groups/:id',
    },
    assignUsersToGroup: {
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users',
    },
    unassignUsersFromGroup: {
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users/delete',
    },
    fetchUsersInGroup: {
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users',
    },
    fetchAllUsersInGroup: {
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users/all',
    },
    fetchUserAccessPolicies: {
        method: 'GET',
        path: '/api/v1/developer/users/:id/access_policies',
    },
    updateUserGroupAccessPolicies: {
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    },
    fetchUserGroupAccessPolicies: {
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    },
    deleteUser: {
        method: 'DELETE',
        path: '/api/v1/developer/users/:id',
    },
    searchUsers: {
        method: 'GET',
        path: '/api/v1/developer/users/search',
    },
    assignTouchPassToUser: {
        method: 'PUT',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    },
    unassignTouchPassFromUser: {
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    },
    batchAssignTouchPasses: {
        method: 'PUT',
        path: '/api/v1/developer/users/touch_passes/assign',
    },
    assignLicensePlatesToUser: {
        method: 'PUT',
        path: '/api/v1/developer/users/:id/license_plates',
    },
    unassignLicensePlateFromUser: {
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/license_plates/:license_plate_id',
    },
    uploadUserAvatar: {
        method: 'POST',
        path: '/api/v1/developer/users/:id/avatar',
        rawBody: true,
    },
};
//# sourceMappingURL=users.js.map