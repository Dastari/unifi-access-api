import type { ApiResponse, FileResponse } from './common.js';
export interface SystemLogQuery {
    page_num?: number;
    page_size?: number;
}
export type SystemLogTopic = 'critical' | 'door_openings' | 'updates' | 'device_events' | 'admin_activity' | 'visitor' | string;
export interface FetchSystemLogsRequest {
    topic: SystemLogTopic;
    since?: number;
    until?: number;
    actor_id?: string;
    timezone?: string;
}
export interface SystemLogActor {
    alternate_id?: string;
    alternate_name?: string;
    display_name?: string;
    id?: string;
    type?: string;
    [key: string]: unknown;
}
export interface SystemLogAuthentication {
    credential_provider?: string;
    issuer?: string;
    [key: string]: unknown;
}
export interface SystemLogEventDetail {
    display_message?: string;
    published?: number;
    reason?: string;
    result?: string;
    type?: string;
    [key: string]: unknown;
}
export interface SystemLogRecord {
    '@timestamp': string;
    _id?: string;
    _source?: {
        actor?: SystemLogActor;
        authentication?: SystemLogAuthentication;
        event?: SystemLogEventDetail;
        target?: SystemLogActor[];
        [key: string]: unknown;
    };
    tag?: string;
    [key: string]: unknown;
}
export interface SystemLogsResponse extends ApiResponse<{
    hits: SystemLogRecord[];
}> {
    page?: number;
    total?: number;
}
export type ExportSystemLogsResponse = FileResponse;
export type StaticResourceResponse = FileResponse;
export interface SystemLogResourceResponse extends ApiResponse<Record<string, unknown>> {
}
//# sourceMappingURL=system.d.ts.map