import type { AccessPolicyResource, ScheduleWeeklySlots } from './access-control.js';
import type { ApiResponse, PaginatedResponse } from './common.js';
import type { LicensePlateCredential, NfcCard, PinCode } from './credentials.js';
export type VisitorStatus = 'UPCOMING' | 'VISITED' | 'VISITING' | 'CANCELLED' | 'NO_VISIT' | 'ACTIVE';
export type VisitorReason = 'Interview' | 'Business' | 'Cooperation' | 'Others' | string;
export interface VisitorScheduleAssignment {
    id?: string;
    type?: string;
    name?: string;
    week_schedule?: ScheduleWeeklySlots;
}
export interface VisitorResource extends AccessPolicyResource {
    name?: string;
}
export interface VisitorNfcCard extends Pick<NfcCard, 'token' | 'display_id'> {
    id: string;
}
export interface UnifiAccessVisitor {
    id: string;
    first_name: string;
    last_name: string;
    status: VisitorStatus;
    inviter_id?: string;
    inviter_name?: string;
    mobile_phone?: string;
    remarks?: string;
    email?: string;
    visitor_company?: string;
    visit_reason?: VisitorReason;
    start_time?: number;
    end_time?: number;
    nfc_cards?: VisitorNfcCard[];
    pin_code?: PinCode | null;
    schedule_id?: string;
    schedule?: VisitorScheduleAssignment | null;
    resources?: VisitorResource[];
    license_plates?: LicensePlateCredential[];
}
export interface CreateVisitorRequest {
    first_name: string;
    last_name: string;
    start_time: number;
    end_time: number;
    visit_reason: VisitorReason;
    remarks?: string;
    mobile_phone?: string;
    email?: string;
    visitor_company?: string;
    resources?: VisitorResource[];
    schedule?: VisitorScheduleAssignment;
}
export interface UpdateVisitorRequest extends Partial<CreateVisitorRequest> {
    status?: VisitorStatus;
    schedule_id?: string | null;
}
export interface AssignVisitorNfcCardRequest {
    token: string;
    force_add?: boolean;
}
export interface UnassignVisitorNfcCardRequest {
    token: string;
}
export interface AssignVisitorPinCodeRequest {
    pin_code: string;
}
export interface AssignVisitorQrCodeRequest {
    qr_code_id: string;
}
export interface AssignVisitorLicensePlatesRequest {
    license_plate_numbers: string[];
}
export type CreateVisitorResponse = ApiResponse<UnifiAccessVisitor>;
export type FetchVisitorResponse = ApiResponse<UnifiAccessVisitor>;
export type FetchVisitorsResponse = PaginatedResponse<UnifiAccessVisitor>;
//# sourceMappingURL=visitors.d.ts.map