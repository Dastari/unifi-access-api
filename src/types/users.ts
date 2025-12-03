import type { AccessPolicyResource } from './access-control.js';
import type { ApiResponse, BodyLike, PaginatedResponse } from './common.js';
import type { LicensePlateCredential, NfcCard, PinCode, TouchPass } from './credentials.js';

export type UnifiAccessUserStatus = 'ACTIVE' | 'PENDING' | 'DEACTIVATED';

export interface UserNfcCard extends Pick<NfcCard, 'token'> {
  id: string;
  type?: string;
}

export type UserLicensePlate = LicensePlateCredential;

export interface UserPinCode extends PinCode {}

export interface UnifiAccessUser {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  alias?: string;
  user_email?: string;
  email_status?: string;
  phone?: string;
  employee_number?: string;
  onboard_time?: number;
  nfc_cards?: UserNfcCard[];
  license_plates?: UserLicensePlate[];
  pin_code?: UserPinCode | null;
  access_policy_ids?: string[];
  access_policies?: UserAccessPolicyAssignment[];
  status: UnifiAccessUserStatus;
  touch_pass?: TouchPass | null;
}

export interface UserAccessPolicyAssignment {
  id: string;
  name: string;
  resources: AccessPolicyResource[];
  schedule_id?: string | null;
}

export interface CreateUserRequest {
  first_name: string;
  last_name: string;
  user_email?: string;
  employee_number?: string;
  onboard_time?: number;
}

export interface UpdateUserRequest extends Partial<CreateUserRequest> {
  status?: UnifiAccessUserStatus;
}

export interface UpdateUserAccessPoliciesRequest {
  access_policy_ids?: string[];
}

export interface AssignNfcCardRequest {
  token: string;
  force_add?: boolean;
}

export interface UnassignNfcCardRequest {
  token: string;
}

export interface AssignPinCodeRequest {
  pin_code: string;
}

export interface BatchAssignTouchPassRequest {
  ids: string[];
  emails?: Record<string, string>;
}

export type AssignLicensePlatesRequest = string[];

export interface UnassignLicensePlateRequest {
  license_plate_id: string;
}

export interface UploadUserAvatarRequest {
  /** Raw body payload prepared by the caller (typically multipart/form-data). */
  body: BodyLike;
  /** Optional override headers; Content-Type must match the provided body. */
  headers?: Record<string, string>;
}

export interface SearchUsersQuery {
  keyword?: string;
  page_num?: number;
  page_size?: number;
  user_id?: string | string[];
  status?: UnifiAccessUserStatus | UnifiAccessUserStatus[];
  only_admin?: boolean;
}

export interface FetchUsersQuery {
  page_num?: number;
  page_size?: number;
  'expand[]'?: 'access_policy' | 'touch_pass' | Array<'access_policy' | 'touch_pass'>;
}

export interface FetchUserQuery {
  'expand[]'?: 'access_policy' | Array<'access_policy'>;
}

export interface UnifiAccessUserGroup {
  id: string;
  name: string;
  full_name?: string;
  up_id?: string | null;
  up_ids?: string[];
  description?: string;
}

export interface CreateUserGroupRequest {
  name: string;
  up_id?: string;
}

export interface UpdateUserGroupRequest {
  name?: string;
  up_id?: string | null;
  description?: string | null;
}

export type ModifyGroupUsersRequest = string[];

export interface UpdateGroupAccessPoliciesRequest {
  access_policy_ids?: string[];
}

export interface FetchUserAccessPoliciesQuery {
  only_user_policies?: boolean;
}

export type CreateUserResponse = ApiResponse<Pick<UnifiAccessUser, 'id' | 'first_name' | 'last_name' | 'user_email'>>;
export type FetchUserResponse = ApiResponse<UnifiAccessUser>;
export type FetchAllUsersResponse = PaginatedResponse<UnifiAccessUser>;
export type FetchUserGroupResponse = ApiResponse<UnifiAccessUserGroup>;
export type FetchAllUserGroupsResponse = ApiResponse<UnifiAccessUserGroup[]>;

export interface GroupUserSummary {
  id: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  alias?: string;
  email?: string;
  email_status?: string;
  employee_number?: string;
  onboard_time?: number;
  phone?: string;
  status?: UnifiAccessUserStatus;
  user_email?: string;
  username?: string;
  avatar_relative_path?: string;
}

export type FetchGroupUsersResponse = ApiResponse<GroupUserSummary[]>;
export type UserAccessPoliciesResponse = ApiResponse<UserAccessPolicyAssignment[]>;
export type TouchPassAssignmentResponse = ApiResponse<TouchPass>;
export type BatchAssignTouchPassResponse = ApiResponse<TouchPass[]>;
export type SearchUsersResponse = ApiResponse<GroupUserSummary[]>;
