import type { UploadCertificateResponse } from '../types/api-server.js';
export declare const apiServerEndpoints: {
    readonly uploadApiServerCertificate: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").BodyLike, UploadCertificateResponse, "json">;
    readonly deleteApiServerCertificate: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, UploadCertificateResponse, "json">;
};
export type ApiServerEndpoints = typeof apiServerEndpoints;
//# sourceMappingURL=api-server.d.ts.map