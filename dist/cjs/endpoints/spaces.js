"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.spaceEndpoints = {
    fetchDoorGroupTopology: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/door_groups/topology',
    }),
    createDoorGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/door_groups',
    }),
    fetchDoorGroupById: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/door_groups/:id',
    }),
    updateDoorGroupById: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/door_groups/:id',
    }),
    fetchAllDoorGroups: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/door_groups',
    }),
    deleteDoorGroupById: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/door_groups/:id',
    }),
    fetchDoorById: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/doors/:id',
    }),
    fetchAllDoors: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/doors',
    }),
    unlockDoor: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/unlock',
    }),
    setDoorLockRule: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/lock_rule',
    }),
    fetchDoorLockRule: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/doors/:id/lock_rule',
    }),
    setDoorEmergencyStatus: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/doors/settings/emergency',
    }),
    fetchDoorEmergencyStatus: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/doors/settings/emergency',
    }),
};
//# sourceMappingURL=spaces.js.map