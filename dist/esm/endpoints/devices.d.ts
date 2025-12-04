import type { AccessMethodSettings, DeviceAccessMethodSettingsResponse, DevicesResponse } from '../types/devices.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const deviceEndpoints: {
    readonly fetchDevices: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, DevicesResponse, "json">;
    readonly fetchDeviceAccessSettings: import("../internal/endpoint.js").EndpointDefinition<{
        device_id: string;
    }, undefined, undefined, DeviceAccessMethodSettingsResponse, "json">;
    readonly updateDeviceAccessSettings: import("../internal/endpoint.js").EndpointDefinition<{
        device_id: string;
    }, undefined, AccessMethodSettings, SuccessOnlyResponse, "json">;
};
export type DeviceEndpoints = typeof deviceEndpoints;
//# sourceMappingURL=devices.d.ts.map