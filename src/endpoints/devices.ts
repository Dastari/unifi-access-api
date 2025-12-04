import type { AccessMethodSettings, DeviceAccessMethodSettingsResponse, DevicesResponse } from '../types/devices.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const deviceEndpoints = {
  fetchDevices: defineEndpoint<undefined, NoQuery, undefined, DevicesResponse>({
    method: 'GET',
    path: '/api/v1/developer/devices',
  }),

  fetchDeviceAccessSettings: defineEndpoint<{ device_id: string }, NoQuery, undefined, DeviceAccessMethodSettingsResponse>({
    method: 'GET',
    path: '/api/v1/developer/devices/:device_id/settings',
  }),

  updateDeviceAccessSettings: defineEndpoint<{ device_id: string }, NoQuery, AccessMethodSettings, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/devices/:device_id/settings',
  }),
} as const;

export type DeviceEndpoints = typeof deviceEndpoints;
