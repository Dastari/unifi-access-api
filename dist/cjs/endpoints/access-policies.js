"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessPolicyEndpoints = void 0;
exports.accessPolicyEndpoints = {
    createAccessPolicy: {
        method: 'POST',
        path: '/api/v1/developer/access_policies',
    },
    updateAccessPolicy: {
        method: 'PUT',
        path: '/api/v1/developer/access_policies/:id',
    },
    deleteAccessPolicy: {
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/:id',
    },
    fetchAccessPolicy: {
        method: 'GET',
        path: '/api/v1/developer/access_policies/:id',
    },
    fetchAllAccessPolicies: {
        method: 'GET',
        path: '/api/v1/developer/access_policies',
    },
    createHolidayGroup: {
        method: 'POST',
        path: '/api/v1/developer/access_policies/holiday_groups',
    },
    updateHolidayGroup: {
        method: 'PUT',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    },
    deleteHolidayGroup: {
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    },
    fetchHolidayGroup: {
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    },
    fetchAllHolidayGroups: {
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups',
    },
    createSchedule: {
        method: 'POST',
        path: '/api/v1/developer/access_policies/schedules',
    },
    updateSchedule: {
        method: 'PUT',
        path: '/api/v1/developer/access_policies/schedules/:id',
    },
    fetchSchedule: {
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules/:id',
    },
    fetchAllSchedules: {
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules',
    },
    deleteSchedule: {
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/schedules/:id',
    },
};
//# sourceMappingURL=access-policies.js.map