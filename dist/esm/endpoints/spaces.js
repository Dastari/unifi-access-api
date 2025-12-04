import { defineEndpoint } from '../internal/endpoint.js';
export const spaceEndpoints = {
    fetchDoorGroupTopology: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/door_groups/topology',
    }),
    createDoorGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/door_groups',
    }),
    fetchDoorGroupById: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/door_groups/:id',
    }),
    updateDoorGroupById: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/door_groups/:id',
    }),
    fetchAllDoorGroups: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/door_groups',
    }),
    deleteDoorGroupById: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/door_groups/:id',
    }),
    fetchDoorById: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/doors/:id',
    }),
    fetchAllDoors: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/doors',
    }),
    unlockDoor: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/unlock',
    }),
    setDoorLockRule: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/doors/:id/lock_rule',
    }),
    fetchDoorLockRule: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/doors/:id/lock_rule',
    }),
    setDoorEmergencyStatus: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/doors/settings/emergency',
    }),
    fetchDoorEmergencyStatus: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/doors/settings/emergency',
    }),
};
//# sourceMappingURL=spaces.js.map