export const deviceEndpoints = {
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