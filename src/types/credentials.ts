import type { ApiResponse, BodyLike, FileResponse } from './common.js';

export type CredentialStatus = 'active' | 'deactivate';

export type NfcCardStatus = 'assigned' | 'pending' | 'disable' | 'deleted' | 'loss';
export type NfcCardOwnerType = 'USER' | 'VISITOR';

export interface NfcCardOwner {
  id: string;
  first_name?: string;
  last_name?: string;
  name?: string;
}

export interface NfcCard {
  token: string;
  display_id: string;
  status: NfcCardStatus;
  alias?: string;
  card_type?: string;
  user_id?: string;
  user_type?: NfcCardOwnerType;
  user?: NfcCardOwner;
}

export interface PinCode {
  token: string;
}

export interface LicensePlateCredential {
  id: string;
  credential: string;
  credential_type: 'license';
  credential_status: CredentialStatus;
}

export type TouchPassStatus = 'ACTIVE' | 'PENDING' | 'SUSPENDED' | 'INACTIVE' | 'EXPIRED';
export type TouchPassUserStatus = 'ACTIVE' | 'PENDING' | 'UNLINK';
export type TouchPassBundleStatus = 'ACTIVE' | 'SUSPENDED';
export type TouchPassBundleSource = 'google' | 'apple';

export interface TouchPassBundle {
  bundle_id: string;
  bundle_status: TouchPassBundleStatus;
  device_id?: string;
  device_name?: string;
  device_type?: number;
  source?: TouchPassBundleSource;
}

export interface TouchPass {
  id: string;
  card_id: string;
  card_name: string;
  status: TouchPassStatus;
  activated_at?: Record<string, unknown> | string | null;
  expired_at?: Record<string, unknown> | string | null;
  last_activity?: string | null;
  user_avatar?: string | null;
  user_email?: string | null;
  user_id?: string | null;
  user_name?: string | null;
  user_status?: TouchPassUserStatus | null;
  bundles?: TouchPassBundle[];
}

export interface TouchPassAssignmentRequest {
  touch_pass_id: string;
}

export type GeneratePinCodeResponse = ApiResponse<string>;

export interface CreateNfcEnrollmentSessionRequest {
  device_id: string;
  reset_ua_card?: boolean;
}

export type CreateNfcEnrollmentSessionResponse = ApiResponse<{ session_id: string }>;

export type NfcEnrollmentStatusResponse = ApiResponse<{ token: string; card_id: string }>;

export type NfcCardResponse = ApiResponse<NfcCard>;

export interface NfcCardsResponse extends ApiResponse<NfcCard[]> {
  pagination?: {
    page_num: number;
    page_size: number;
    total: number;
  };
}

export interface UpdateNfcCardRequest {
  alias?: string;
}

export interface TouchPassListResponse extends ApiResponse<TouchPass[]> {
  pagination?: {
    page_num: number;
    page_size: number;
    total: number;
  };
}

export type TouchPassDetailsResponse = ApiResponse<TouchPass>;
export type SearchTouchPassResponse = TouchPassListResponse;
export type AssignableTouchPassesResponse = ApiResponse<TouchPass[]>;

export interface PurchaseTouchPassesRequest {
  count: number;
}

export type PurchaseTouchPassResponse = ApiResponse<TouchPass>;

export interface UpdateTouchPassRequest {
  card_name?: string;
  status?: TouchPassStatus;
}

export type ImportThirdPartyNfcCardsRequest = BodyLike;
export type DownloadQRCodeImageResponse = FileResponse;

export interface ImportedThirdPartyNfcCard {
  alias: string;
  nfc_id: string;
  token: string;
}

export type ImportThirdPartyNfcCardsResponse = ApiResponse<ImportedThirdPartyNfcCard[]>;
