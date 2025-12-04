import type { AccessPoliciesResponse, AccessPolicyResponse, CreateAccessPolicyRequest, CreateHolidayGroupRequest, CreateScheduleRequest, HolidayGroupResponse, HolidayGroupsResponse, ScheduleResponse, SchedulesResponse, UpdateAccessPolicyRequest, UpdateHolidayGroupRequest, UpdateScheduleRequest } from '../types/access-control.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const accessPolicyEndpoints: {
    readonly createAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateAccessPolicyRequest, AccessPolicyResponse, "json">;
    readonly updateAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateAccessPolicyRequest, SuccessOnlyResponse, "json">;
    readonly deleteAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly fetchAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, AccessPolicyResponse, "json">;
    readonly fetchAllAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        keyword?: string;
    }, undefined, AccessPoliciesResponse, "json">;
    readonly createHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateHolidayGroupRequest, HolidayGroupResponse, "json">;
    readonly updateHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateHolidayGroupRequest, SuccessOnlyResponse, "json">;
    readonly deleteHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly fetchHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, HolidayGroupResponse, "json">;
    readonly fetchAllHolidayGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, HolidayGroupsResponse, "json">;
    readonly createSchedule: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateScheduleRequest, ScheduleResponse, "json">;
    readonly updateSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateScheduleRequest, SuccessOnlyResponse, "json">;
    readonly fetchSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, ScheduleResponse, "json">;
    readonly fetchAllSchedules: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, SchedulesResponse, "json">;
    readonly deleteSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
};
export type AccessPolicyEndpoints = typeof accessPolicyEndpoints;
//# sourceMappingURL=access-policies.d.ts.map