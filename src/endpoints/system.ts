import type {
  ExportSystemLogsResponse,
  FetchSystemLogsRequest,
  StaticResourceResponse,
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

  fetchSystemStaticResource: defineEndpoint<{ path: string }, NoQuery, undefined, StaticResourceResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/:path',
    responseType: 'arrayBuffer',
  }),

  getAvatarResource: defineEndpoint<{ resourceId: string }, NoQuery, undefined, StaticResourceResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/avatar/:resourceId',
    responseType: 'arrayBuffer',
  }),

  getPreviewResource: defineEndpoint<{ resourceName: string }, NoQuery, undefined, StaticResourceResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/preview/:resourceName',
    responseType: 'arrayBuffer',
  }),

  getVideoResource: defineEndpoint<{ resourceName: string }, NoQuery, undefined, StaticResourceResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/activities_resource/video/:resourceName',
    responseType: 'arrayBuffer',
  }),

  getThumbnailResource: defineEndpoint<{ resourceName: string }, NoQuery, undefined, StaticResourceResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/system/static/activities_resource/thumbnail/:resourceName',
    responseType: 'arrayBuffer',
  }),
} as const;

export type SystemEndpoints = typeof systemEndpoints;
