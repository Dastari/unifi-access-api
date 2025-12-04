import type { CreateDoorGroupRequest, DoorEmergencyStatusRequest, DoorEmergencyStatusResponse, DoorGroupResponse, DoorGroupsResponse, DoorLockRuleRequest, DoorLockRuleResponse, DoorResponse, DoorTopologyResponse, DoorsResponse, UnlockDoorRequest, UpdateDoorGroupRequest } from '../types/spaces.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const spaceEndpoints: {
    readonly fetchDoorGroupTopology: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, DoorTopologyResponse, "json">;
    readonly createDoorGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateDoorGroupRequest, DoorGroupResponse, "json">;
    readonly fetchDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, DoorGroupResponse, "json">;
    readonly updateDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateDoorGroupRequest, SuccessOnlyResponse, "json">;
    readonly fetchAllDoorGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, DoorGroupsResponse, "json">;
    readonly deleteDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly fetchDoorById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, DoorResponse, "json">;
    readonly fetchAllDoors: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, DoorsResponse, "json">;
    readonly unlockDoor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UnlockDoorRequest, SuccessOnlyResponse, "json">;
    readonly setDoorLockRule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, DoorLockRuleRequest, SuccessOnlyResponse, "json">;
    readonly fetchDoorLockRule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, DoorLockRuleResponse, "json">;
    readonly setDoorEmergencyStatus: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, DoorEmergencyStatusRequest, SuccessOnlyResponse, "json">;
    readonly fetchDoorEmergencyStatus: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, DoorEmergencyStatusResponse, "json">;
};
export type SpaceEndpoints = typeof spaceEndpoints;
//# sourceMappingURL=spaces.d.ts.map