import type {
  ExportSystemLogsResponse,
  FetchSystemLogsRequest,
  SystemLogQuery,
  SystemLogResourceResponse,
  SystemLogsResponse,
} from '../types/system.js';
import { defineEndpoint } from '../internal/endpoint.js';

type NoQuery = undefined;

export const systemEndpoints = {
  fetchSystemLogs: defineEndpoint<undefined, SystemLogQuery, FetchSystemLogsRequest, SystemLogsResponse>({
    method: 'POST',
    path: '/api/v1/developer/system/logs',
  }),

  exportSystemLogs: defineEndpoint<undefined, NoQuery, FetchSystemLogsRequest, ExportSystemLogsResponse, 'arrayBuffer'>({
    method: 'POST',
    path: '/api/v1/developer/system/logs/export',
    responseType: 'arrayBuffer',
  }),

  fetchSystemLogResource: defineEndpoint<{ id: string }, NoQuery, undefined, SystemLogResourceResponse>({
    method: 'GET',
    path: '/api/v1/developer/system/logs/resource/:id',
  }),

  fetchSystemStaticResource: defineEndpoint<{ path: string }, NoQuery, undefined, ExportSystemLogsResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/:path',
    responseType: 'arrayBuffer',
  }),
} as const;

export type SystemEndpoints = typeof systemEndpoints;
