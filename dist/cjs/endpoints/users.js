"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.userEndpoints = {
    createUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/users',
    }),
    updateUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id',
    }),
    fetchUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users/:id',
    }),
    fetchAllUsers: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users',
    }),
    updateUserAccessPolicies: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/access_policies',
    }),
    assignUserNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards',
    }),
    unassignUserNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/nfc_cards/delete',
    }),
    assignUserPinCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/pin_codes',
    }),
    unassignUserPinCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/users/:id/pin_codes',
    }),
    createUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/user_groups',
    }),
    fetchAllUserGroups: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups',
    }),
    fetchUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id',
    }),
    updateUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id',
    }),
    deleteUserGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/user_groups/:id',
    }),
    assignUsersToGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users',
    }),
    unassignUsersFromGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/user_groups/:id/users/delete',
    }),
    fetchUsersInGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users',
    }),
    fetchAllUsersInGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/users/all',
    }),
    fetchUserAccessPolicies: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users/:id/access_policies',
    }),
    updateUserGroupAccessPolicies: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    }),
    fetchUserGroupAccessPolicies: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/user_groups/:id/access_policies',
    }),
    deleteUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/users/:id',
    }),
    searchUsers: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/users/search',
    }),
    assignTouchPassToUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    }),
    unassignTouchPassFromUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
    }),
    batchAssignTouchPasses: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/touch_passes/assign',
    }),
    assignLicensePlatesToUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/users/:id/license_plates',
    }),
    unassignLicensePlateFromUser: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/users/:user_id/license_plates/:license_plate_id',
    }),
    uploadUserAvatar: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/users/:id/avatar',
        rawBody: true,
    }),
};
//# sourceMappingURL=users.js.map