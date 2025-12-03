import type {
  ExportSystemLogsResponse,
  FetchSystemLogsRequest,
  SystemLogQuery,
  SystemLogResourceResponse,
  SystemLogsResponse,
} from '../types/system.js';
import type { EndpointDefinition } from '../internal/endpoint.js';

type NoQuery = undefined;

export const systemEndpoints = {
  fetchSystemLogs: {
    method: 'POST',
    path: '/api/v1/developer/system/logs',
  } satisfies EndpointDefinition<undefined, SystemLogQuery, FetchSystemLogsRequest, SystemLogsResponse>,

  exportSystemLogs: {
    method: 'POST',
    path: '/api/v1/developer/system/logs/export',
    responseType: 'arrayBuffer',
  } satisfies EndpointDefinition<undefined, NoQuery, FetchSystemLogsRequest, ExportSystemLogsResponse, 'arrayBuffer'>,

  fetchSystemLogResource: {
    method: 'GET',
    path: '/api/v1/developer/system/logs/resource/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SystemLogResourceResponse>,

  fetchSystemStaticResource: {
    method: 'GET',
    path: '/api/v1/developer/system/static/:path',
    responseType: 'arrayBuffer',
  } satisfies EndpointDefinition<{ path: string }, NoQuery, undefined, ExportSystemLogsResponse, 'arrayBuffer'>,
} as const;

export type SystemEndpoints = typeof systemEndpoints;
