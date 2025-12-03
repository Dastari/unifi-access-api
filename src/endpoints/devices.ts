import type { AccessMethodSettings, DeviceAccessMethodSettingsResponse, DevicesResponse } from '../types/devices.js';
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const deviceEndpoints = {
  fetchDevices: {
    method: 'GET',
    path: '/api/v1/developer/devices',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, DevicesResponse>,

  fetchDeviceAccessSettings: {
    method: 'GET',
    path: '/api/v1/developer/devices/:device_id/settings',
  } satisfies EndpointDefinition<{ device_id: string }, NoQuery, undefined, DeviceAccessMethodSettingsResponse>,

  updateDeviceAccessSettings: {
    method: 'PUT',
    path: '/api/v1/developer/devices/:device_id/settings',
  } satisfies EndpointDefinition<{ device_id: string }, NoQuery, AccessMethodSettings, SuccessOnlyResponse>,
} as const;

export type DeviceEndpoints = typeof deviceEndpoints;
