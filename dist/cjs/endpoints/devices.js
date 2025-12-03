"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceEndpoints = void 0;
exports.deviceEndpoints = {
    fetchDevices: {
        method: 'GET',
        path: '/api/v1/developer/devices',
    },
    fetchDeviceAccessSettings: {
        method: 'GET',
        path: '/api/v1/developer/devices/:device_id/settings',
    },
    updateDeviceAccessSettings: {
        method: 'PUT',
        path: '/api/v1/developer/devices/:device_id/settings',
    },
};
//# sourceMappingURL=devices.js.map