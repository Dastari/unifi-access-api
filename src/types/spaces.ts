import type { ApiResponse } from './common.js';
import type { AccessPolicyResource } from './access-control.js';

export type DoorGroupType = 'access' | 'building';

export interface DoorGroupResource extends AccessPolicyResource {
  name?: string;
}

export interface DoorGroup {
  id: string;
  name: string;
  type: DoorGroupType;
  resources: DoorGroupResource[];
}

export interface CreateDoorGroupRequest {
  group_name: string;
  resources: string[];
}

export interface UpdateDoorGroupRequest {
  group_name?: string;
  resources?: string[];
}

export interface Door {
  id: string;
  name: string;
  full_name?: string;
  floor_id?: string;
  type?: string;
  is_bind_hub?: boolean;
  door_lock_relay_status?: 'lock' | 'unlock';
  door_position_status?: 'open' | 'close' | null;
}

export interface DoorLockRule {
  type: string;
  ended_time?: number;
  interval?: number;
}

export interface DoorLockRuleRequest {
  type: string;
  interval?: number;
}

export interface DoorEmergencyStatus {
  status: 'normal' | 'emergency';
}

export interface DoorEmergencyStatusRequest {
  lockdown?: boolean;
  evacuation?: boolean;
}

export type DoorEmergencyStatusResponse = ApiResponse<DoorEmergencyStatus>;

export interface UnlockDoorRequest {
  actor_id?: string;
  actor_name?: string;
  extra?: Record<string, unknown>;
}

export type DoorGroupResponse = ApiResponse<DoorGroup>;
export type DoorGroupsResponse = ApiResponse<DoorGroup[]>;
export type DoorResponse = ApiResponse<Door>;
export type DoorsResponse = ApiResponse<Door[]>;

export interface DoorTopologyResource {
  id: string;
  name: string;
  type: string;
  is_bind_hub?: boolean;
}

export interface DoorTopologyNode {
  id: string;
  name: string;
  type: string;
  resources: DoorTopologyResource[];
}

export interface DoorGroupTopology {
  id: string;
  name: string;
  type: DoorGroupType;
  resource_topologies: DoorTopologyNode[];
}

export type DoorTopologyResponse = ApiResponse<DoorGroupTopology[]>;
export type DoorLockRuleResponse = ApiResponse<DoorLockRule>;
