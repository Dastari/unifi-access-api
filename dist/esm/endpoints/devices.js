import { defineEndpoint } from '../internal/endpoint.js';
export const deviceEndpoints = {
    fetchDevices: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/devices',
    }),
    fetchDeviceAccessSettings: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/devices/:device_id/settings',
    }),
    updateDeviceAccessSettings: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/devices/:device_id/settings',
    }),
};
//# sourceMappingURL=devices.js.map