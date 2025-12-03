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
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const spaceEndpoints = {
  fetchDoorGroupTopology: {
    method: 'GET',
    path: '/api/v1/developer/door_groups/topology',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, DoorTopologyResponse>,

  createDoorGroup: {
    method: 'POST',
    path: '/api/v1/developer/door_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateDoorGroupRequest, DoorGroupResponse>,

  fetchDoorGroupById: {
    method: 'GET',
    path: '/api/v1/developer/door_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, DoorGroupResponse>,

  updateDoorGroupById: {
    method: 'PUT',
    path: '/api/v1/developer/door_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateDoorGroupRequest, SuccessOnlyResponse>,

  fetchAllDoorGroups: {
    method: 'GET',
    path: '/api/v1/developer/door_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, DoorGroupsResponse>,

  deleteDoorGroupById: {
    method: 'DELETE',
    path: '/api/v1/developer/door_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  fetchDoorById: {
    method: 'GET',
    path: '/api/v1/developer/doors/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, DoorResponse>,

  fetchAllDoors: {
    method: 'GET',
    path: '/api/v1/developer/doors',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, DoorsResponse>,

  unlockDoor: {
    method: 'PUT',
    path: '/api/v1/developer/doors/:id/unlock',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UnlockDoorRequest, SuccessOnlyResponse>,

  setDoorLockRule: {
    method: 'PUT',
    path: '/api/v1/developer/doors/:id/lock_rule',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, DoorLockRuleRequest, SuccessOnlyResponse>,

  fetchDoorLockRule: {
    method: 'GET',
    path: '/api/v1/developer/doors/:id/lock_rule',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, DoorLockRuleResponse>,

  setDoorEmergencyStatus: {
    method: 'PUT',
    path: '/api/v1/developer/doors/settings/emergency',
  } satisfies EndpointDefinition<undefined, NoQuery, DoorEmergencyStatusRequest, SuccessOnlyResponse>,

  fetchDoorEmergencyStatus: {
    method: 'GET',
    path: '/api/v1/developer/doors/settings/emergency',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, DoorEmergencyStatusResponse>,
} as const;

export type SpaceEndpoints = typeof spaceEndpoints;
