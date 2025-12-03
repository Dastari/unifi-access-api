import type {
  AccessPoliciesResponse,
  AccessPolicyResponse,
  CreateAccessPolicyRequest,
  CreateHolidayGroupRequest,
  CreateScheduleRequest,
  HolidayGroupResponse,
  HolidayGroupsResponse,
  ScheduleResponse,
  SchedulesResponse,
  UpdateAccessPolicyRequest,
  UpdateHolidayGroupRequest,
  UpdateScheduleRequest,
} from '../types/access-control.js';
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const accessPolicyEndpoints = {
  createAccessPolicy: {
    method: 'POST',
    path: '/api/v1/developer/access_policies',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateAccessPolicyRequest, AccessPolicyResponse>,

  updateAccessPolicy: {
    method: 'PUT',
    path: '/api/v1/developer/access_policies/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateAccessPolicyRequest, SuccessOnlyResponse>,

  deleteAccessPolicy: {
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  fetchAccessPolicy: {
    method: 'GET',
    path: '/api/v1/developer/access_policies/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, AccessPolicyResponse>,

  fetchAllAccessPolicies: {
    method: 'GET',
    path: '/api/v1/developer/access_policies',
  } satisfies EndpointDefinition<undefined, {
    page_num?: number;
    page_size?: number;
    keyword?: string;
  }, undefined, AccessPoliciesResponse>,

  createHolidayGroup: {
    method: 'POST',
    path: '/api/v1/developer/access_policies/holiday_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateHolidayGroupRequest, HolidayGroupResponse>,

  updateHolidayGroup: {
    method: 'PUT',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateHolidayGroupRequest, SuccessOnlyResponse>,

  deleteHolidayGroup: {
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  fetchHolidayGroup: {
    method: 'GET',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, HolidayGroupResponse>,

  fetchAllHolidayGroups: {
    method: 'GET',
    path: '/api/v1/developer/access_policies/holiday_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, HolidayGroupsResponse>,

  createSchedule: {
    method: 'POST',
    path: '/api/v1/developer/access_policies/schedules',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateScheduleRequest, ScheduleResponse>,

  updateSchedule: {
    method: 'PUT',
    path: '/api/v1/developer/access_policies/schedules/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateScheduleRequest, SuccessOnlyResponse>,

  fetchSchedule: {
    method: 'GET',
    path: '/api/v1/developer/access_policies/schedules/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, ScheduleResponse>,

  fetchAllSchedules: {
    method: 'GET',
    path: '/api/v1/developer/access_policies/schedules',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, SchedulesResponse>,

  deleteSchedule: {
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/schedules/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,
} as const;

export type AccessPolicyEndpoints = typeof accessPolicyEndpoints;
