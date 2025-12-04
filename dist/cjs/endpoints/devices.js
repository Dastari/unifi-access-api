"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.deviceEndpoints = {
    fetchDevices: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/devices',
    }),
    fetchDeviceAccessSettings: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/devices/:device_id/settings',
    }),
    updateDeviceAccessSettings: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/devices/:device_id/settings',
    }),
};
//# sourceMappingURL=devices.js.map