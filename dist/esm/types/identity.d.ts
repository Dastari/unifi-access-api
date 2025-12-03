import type { ApiResponse } from './common.js';
export type IdentityResourceType = 'ev_station' | 'vpn' | 'wifi' | 'camera' | string;
export interface IdentityResource {
    id: string;
    name: string;
    deleted: boolean;
    short_name?: string;
    metadata?: Record<string, unknown> | null;
}
export type IdentityResourceMap = Record<IdentityResourceType, IdentityResource[]>;
export interface IdentityAssignmentRequest {
    resource_type: IdentityResourceType;
    resource_ids: string[];
}
export interface IdentityInvitationRequestItem {
    user_id: string;
    email?: string;
}
export interface IdentityInvitationError {
    error_code: string;
    error_msg: string;
    user_email: string;
    user_id: string;
}
export type IdentityInvitationResponse = ApiResponse<IdentityInvitationError[]>;
export type IdentityAvailableResourcesResponse = ApiResponse<IdentityResourceMap>;
//# sourceMappingURL=identity.d.ts.map