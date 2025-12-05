import type { FetchSystemLogsRequest, StaticResourceResponse, SystemLogQuery, SystemLogResourceResponse, SystemLogsResponse } from '../types/system.js';
export declare const systemEndpoints: {
    readonly fetchSystemLogs: import("../internal/endpoint.js").EndpointDefinition<undefined, SystemLogQuery, FetchSystemLogsRequest, SystemLogsResponse, "json">;
    readonly exportSystemLogs: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, FetchSystemLogsRequest, import("../index.js").FileResponse, "arrayBuffer">;
    readonly fetchSystemLogResource: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SystemLogResourceResponse, "json">;
    readonly fetchSystemStaticResource: import("../internal/endpoint.js").EndpointDefinition<{
        path: string;
    }, undefined, undefined, StaticResourceResponse, "arrayBuffer">;
    readonly getAvatarResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceId: string;
    }, undefined, undefined, StaticResourceResponse, "arrayBuffer">;
    readonly getPreviewResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, StaticResourceResponse, "arrayBuffer">;
    readonly getVideoResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, StaticResourceResponse, "arrayBuffer">;
    readonly getThumbnailResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, StaticResourceResponse, "arrayBuffer">;
};
export type SystemEndpoints = typeof systemEndpoints;
//# sourceMappingURL=system.d.ts.map