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
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const accessPolicyEndpoints = {
  createAccessPolicy: defineEndpoint<undefined, NoQuery, CreateAccessPolicyRequest, AccessPolicyResponse>({
    method: 'POST',
    path: '/api/v1/developer/access_policies',
  }),

  updateAccessPolicy: defineEndpoint<{ id: string }, NoQuery, UpdateAccessPolicyRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/access_policies/:id',
  }),

  deleteAccessPolicy: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/:id',
  }),

  fetchAccessPolicy: defineEndpoint<{ id: string }, NoQuery, undefined, AccessPolicyResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies/:id',
  }),

  fetchAllAccessPolicies: defineEndpoint<undefined, {
    page_num?: number;
    page_size?: number;
    keyword?: string;
  }, undefined, AccessPoliciesResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies',
  }),

  createHolidayGroup: defineEndpoint<undefined, NoQuery, CreateHolidayGroupRequest, HolidayGroupResponse>({
    method: 'POST',
    path: '/api/v1/developer/access_policies/holiday_groups',
  }),

  updateHolidayGroup: defineEndpoint<{ id: string }, NoQuery, UpdateHolidayGroupRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  }),

  deleteHolidayGroup: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  }),

  fetchHolidayGroup: defineEndpoint<{ id: string }, NoQuery, undefined, HolidayGroupResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies/holiday_groups/:id',
  }),

  fetchAllHolidayGroups: defineEndpoint<undefined, NoQuery, undefined, HolidayGroupsResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies/holiday_groups',
  }),

  createSchedule: defineEndpoint<undefined, NoQuery, CreateScheduleRequest, ScheduleResponse>({
    method: 'POST',
    path: '/api/v1/developer/access_policies/schedules',
  }),

  updateSchedule: defineEndpoint<{ id: string }, NoQuery, UpdateScheduleRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/access_policies/schedules/:id',
  }),

  fetchSchedule: defineEndpoint<{ id: string }, NoQuery, undefined, ScheduleResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies/schedules/:id',
  }),

  fetchAllSchedules: defineEndpoint<undefined, NoQuery, undefined, SchedulesResponse>({
    method: 'GET',
    path: '/api/v1/developer/access_policies/schedules',
  }),

  deleteSchedule: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/access_policies/schedules/:id',
  }),
} as const;

export type AccessPolicyEndpoints = typeof accessPolicyEndpoints;
