import type { AssignableTouchPassesResponse, CreateNfcEnrollmentSessionRequest, CreateNfcEnrollmentSessionResponse, GeneratePinCodeResponse, ImportThirdPartyNfcCardsResponse, NfcCardResponse, NfcCardsResponse, NfcEnrollmentStatusResponse, PurchaseTouchPassesRequest, PurchaseTouchPassResponse, TouchPassDetailsResponse, TouchPassListResponse, UpdateNfcCardRequest, UpdateTouchPassRequest } from '../types/credentials.js';
import type { SuccessOnlyResponse } from '../types/common.js';
export declare const credentialEndpoints: {
    readonly generatePinCode: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, GeneratePinCodeResponse, "json">;
    readonly createNfcEnrollmentSession: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, CreateNfcEnrollmentSessionRequest, CreateNfcEnrollmentSessionResponse, "json">;
    readonly fetchNfcEnrollmentStatus: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, NfcEnrollmentStatusResponse, "json">;
    readonly deleteNfcEnrollmentSession: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly fetchNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, NfcCardResponse, "json">;
    readonly fetchAllNfcCards: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
    }, undefined, NfcCardsResponse, "json">;
    readonly deleteNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, SuccessOnlyResponse, "json">;
    readonly updateNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, UpdateNfcCardRequest, SuccessOnlyResponse, "json">;
    readonly fetchTouchPassList: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        status?: string;
    }, undefined, TouchPassListResponse, "json">;
    readonly searchTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        condition: string;
    }, undefined, TouchPassListResponse, "json">;
    readonly fetchAssignableTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, AssignableTouchPassesResponse, "json">;
    readonly updateTouchPass: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, UpdateTouchPassRequest, TouchPassDetailsResponse, "json">;
    readonly fetchTouchPassDetails: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, TouchPassDetailsResponse, "json">;
    readonly purchaseTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, PurchaseTouchPassesRequest, PurchaseTouchPassResponse, "json">;
    readonly downloadTouchPassQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../types/common.js").FileResponse, "arrayBuffer">;
    readonly importThirdPartyNfcCards: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../types/common.js").BodyLike, ImportThirdPartyNfcCardsResponse, "json">;
};
export type CredentialEndpoints = typeof credentialEndpoints;
//# sourceMappingURL=credentials.d.ts.map