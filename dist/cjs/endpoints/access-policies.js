"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessPolicyEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.accessPolicyEndpoints = {
    createAccessPolicy: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/access_policies',
    }),
    updateAccessPolicy: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/:id',
    }),
    deleteAccessPolicy: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/:id',
    }),
    fetchAccessPolicy: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies/:id',
    }),
    fetchAllAccessPolicies: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies',
    }),
    createHolidayGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/access_policies/holiday_groups',
    }),
    updateHolidayGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    deleteHolidayGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    fetchHolidayGroup: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups/:id',
    }),
    fetchAllHolidayGroups: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies/holiday_groups',
    }),
    createSchedule: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/access_policies/schedules',
    }),
    updateSchedule: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
    fetchSchedule: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
    fetchAllSchedules: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/access_policies/schedules',
    }),
    deleteSchedule: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/access_policies/schedules/:id',
    }),
};
//# sourceMappingURL=access-policies.js.map