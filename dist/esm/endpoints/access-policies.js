import { defineEndpoint } from '../internal/endpoint.js';
export const accessPolicyEndpoints = {
    createAccessPolicy: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/access_policies',
    }),
    updateAccessPolicy: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/:id',
    }),
    deleteAccessPolicy: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/:id',
    }),
    fetchAccessPolicy: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies/:id',
    }),
    fetchAllAccessPolicies: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies',
    }),
    createHolidayGroup: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/access_policies/holiday_groups',
    }),
    updateHolidayGroup: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    deleteHolidayGroup: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    fetchHolidayGroup: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    fetchAllHolidayGroups: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups',
    }),
    createSchedule: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/access_policies/schedules',
    }),
    updateSchedule: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
    fetchSchedule: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
    fetchAllSchedules: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules',
    }),
    deleteSchedule: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
};
//# sourceMappingURL=access-policies.js.map