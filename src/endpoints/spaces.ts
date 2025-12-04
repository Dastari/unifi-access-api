import type {
  CreateDoorGroupRequest,
  DoorEmergencyStatusRequest,
  DoorEmergencyStatusResponse,
  DoorGroupResponse,
  DoorGroupsResponse,
  DoorLockRuleRequest,
  DoorLockRuleResponse,
  DoorResponse,
  DoorTopologyResponse,
  DoorsResponse,
  UnlockDoorRequest,
  UpdateDoorGroupRequest,
} from '../types/spaces.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const spaceEndpoints = {
  fetchDoorGroupTopology: defineEndpoint<undefined, NoQuery, undefined, DoorTopologyResponse>({
    method: 'GET',
    path: '/api/v1/developer/door_groups/topology',
  }),

  createDoorGroup: defineEndpoint<undefined, NoQuery, CreateDoorGroupRequest, DoorGroupResponse>({
    method: 'POST',
    path: '/api/v1/developer/door_groups',
  }),

  fetchDoorGroupById: defineEndpoint<{ id: string }, NoQuery, undefined, DoorGroupResponse>({
    method: 'GET',
    path: '/api/v1/developer/door_groups/:id',
  }),

  updateDoorGroupById: defineEndpoint<{ id: string }, NoQuery, UpdateDoorGroupRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/door_groups/:id',
  }),

  fetchAllDoorGroups: defineEndpoint<undefined, NoQuery, undefined, DoorGroupsResponse>({
    method: 'GET',
    path: '/api/v1/developer/door_groups',
  }),

  deleteDoorGroupById: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/door_groups/:id',
  }),

  fetchDoorById: defineEndpoint<{ id: string }, NoQuery, undefined, DoorResponse>({
    method: 'GET',
    path: '/api/v1/developer/doors/:id',
  }),

  fetchAllDoors: defineEndpoint<undefined, NoQuery, undefined, DoorsResponse>({
    method: 'GET',
    path: '/api/v1/developer/doors',
  }),

  unlockDoor: defineEndpoint<{ id: string }, NoQuery, UnlockDoorRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/doors/:id/unlock',
  }),

  setDoorLockRule: defineEndpoint<{ id: string }, NoQuery, DoorLockRuleRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/doors/:id/lock_rule',
  }),

  fetchDoorLockRule: defineEndpoint<{ id: string }, NoQuery, undefined, DoorLockRuleResponse>({
    method: 'GET',
    path: '/api/v1/developer/doors/:id/lock_rule',
  }),

  setDoorEmergencyStatus: defineEndpoint<undefined, NoQuery, DoorEmergencyStatusRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/doors/settings/emergency',
  }),

  fetchDoorEmergencyStatus: defineEndpoint<undefined, NoQuery, undefined, DoorEmergencyStatusResponse>({
    method: 'GET',
    path: '/api/v1/developer/doors/settings/emergency',
  }),
} as const;

export type SpaceEndpoints = typeof spaceEndpoints;
