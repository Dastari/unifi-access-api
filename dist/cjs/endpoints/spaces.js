"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceEndpoints = void 0;
exports.spaceEndpoints = {
    fetchDoorGroupTopology: {
        method: 'GET',
        path: '/api/v1/developer/door_groups/topology',
    },
    createDoorGroup: {
        method: 'POST',
        path: '/api/v1/developer/door_groups',
    },
    fetchDoorGroupById: {
        method: 'GET',
        path: '/api/v1/developer/door_groups/:id',
    },
    updateDoorGroupById: {
        method: 'PUT',
        path: '/api/v1/developer/door_groups/:id',
    },
    fetchAllDoorGroups: {
        method: 'GET',
        path: '/api/v1/developer/door_groups',
    },
    deleteDoorGroupById: {
        method: 'DELETE',
        path: '/api/v1/developer/door_groups/:id',
    },
    fetchDoorById: {
        method: 'GET',
        path: '/api/v1/developer/doors/:id',
    },
    fetchAllDoors: {
        method: 'GET',
        path: '/api/v1/developer/doors',
    },
    unlockDoor: {
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/unlock',
    },
    setDoorLockRule: {
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/lock_rule',
    },
    fetchDoorLockRule: {
        method: 'GET',
        path: '/api/v1/developer/doors/:id/lock_rule',
    },
    setDoorEmergencyStatus: {
        method: 'PUT',
        path: '/api/v1/developer/doors/settings/emergency',
    },
    fetchDoorEmergencyStatus: {
        method: 'GET',
        path: '/api/v1/developer/doors/settings/emergency',
    },
};
//# sourceMappingURL=spaces.js.map