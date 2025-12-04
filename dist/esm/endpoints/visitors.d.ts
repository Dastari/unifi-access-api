import type { AssignVisitorLicensePlatesRequest, AssignVisitorNfcCardRequest, AssignVisitorPinCodeRequest, CreateVisitorRequest, CreateVisitorResponse, FetchVisitorResponse, FetchVisitorsResponse, UnassignVisitorNfcCardRequest, UpdateVisitorRequest } from '../types/visitors.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const visitorEndpoints: {
    readonly createVisitor: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateVisitorRequest, CreateVisitorResponse, "json">;
    readonly fetchVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, FetchVisitorResponse, "json">;
    readonly fetchAllVisitors: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        status?: number;
        keyword?: string;
        page_num?: number;
        page_size?: number;
        'expand[]'?: string | string[];
    }, undefined, FetchVisitorsResponse, "json">;
    readonly updateVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateVisitorRequest, SuccessOnlyResponse, "json">;
    readonly deleteVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly assignVisitorNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignVisitorNfcCardRequest, SuccessOnlyResponse, "json">;
    readonly unassignVisitorNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UnassignVisitorNfcCardRequest, SuccessOnlyResponse, "json">;
    readonly assignVisitorPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignVisitorPinCodeRequest, SuccessOnlyResponse, "json">;
    readonly unassignVisitorPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly assignVisitorQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly unassignVisitorQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly assignVisitorLicensePlates: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, AssignVisitorLicensePlatesRequest, SuccessOnlyResponse, "json">;
    readonly unassignVisitorLicensePlate: import("../internal/endpoint.js").EndpointDefinition<{
        visitor_id: string;
        license_plate_id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
};
export type VisitorEndpoints = typeof visitorEndpoints;
//# sourceMappingURL=visitors.d.ts.map