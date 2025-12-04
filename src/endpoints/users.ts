import type {
  AssignLicensePlatesRequest,
  AssignNfcCardRequest,
  AssignPinCodeRequest,
  BatchAssignTouchPassRequest,
  BatchAssignTouchPassResponse,
  CreateUserGroupRequest,
  CreateUserRequest,
  CreateUserResponse,
  FetchAllUserGroupsResponse,
  FetchAllUsersResponse,
  FetchGroupUsersResponse,
  FetchUserAccessPoliciesQuery,
  FetchUserGroupResponse,
  FetchUserQuery,
  FetchUserResponse,
  FetchUsersQuery,
  SearchUsersQuery,
  SearchUsersResponse,
  TouchPassAssignmentResponse,
  UnassignNfcCardRequest,
  UpdateGroupAccessPoliciesRequest,
  UpdateUserAccessPoliciesRequest,
  UpdateUserGroupRequest,
  UpdateUserRequest,
  UploadUserAvatarRequest,
} from '../types/users.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';
import type { UserAccessPoliciesResponse } from '../types/users.js';

type NoQuery = undefined;

export const userEndpoints = {
  createUser: defineEndpoint<undefined, NoQuery, CreateUserRequest, CreateUserResponse>({
    method: 'POST',
    path: '/api/v1/developer/users',
  }),

  updateUser: defineEndpoint<{ id: string }, NoQuery, UpdateUserRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id',
  }),

  fetchUser: defineEndpoint<{ id: string }, FetchUserQuery, undefined, FetchUserResponse>({
    method: 'GET',
    path: '/api/v1/developer/users/:id',
  }),

  fetchAllUsers: defineEndpoint<undefined, FetchUsersQuery, undefined, FetchAllUsersResponse>({
    method: 'GET',
    path: '/api/v1/developer/users',
  }),

  updateUserAccessPolicies: defineEndpoint<{ id: string }, NoQuery, UpdateUserAccessPoliciesRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id/access_policies',
  }),

  assignUserNfcCard: defineEndpoint<{ id: string }, NoQuery, AssignNfcCardRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id/nfc_cards',
  }),

  unassignUserNfcCard: defineEndpoint<{ id: string }, NoQuery, UnassignNfcCardRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id/nfc_cards/delete',
  }),

  assignUserPinCode: defineEndpoint<{ id: string }, NoQuery, AssignPinCodeRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id/pin_codes',
  }),

  unassignUserPinCode: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/users/:id/pin_codes',
  }),

  createUserGroup: defineEndpoint<undefined, NoQuery, CreateUserGroupRequest, SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/user_groups',
  }),

  fetchAllUserGroups: defineEndpoint<undefined, NoQuery, undefined, FetchAllUserGroupsResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups',
  }),

  fetchUserGroup: defineEndpoint<{ id: string }, NoQuery, undefined, FetchUserGroupResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id',
  }),

  updateUserGroup: defineEndpoint<{ id: string }, NoQuery, UpdateUserGroupRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/user_groups/:id',
  }),

  deleteUserGroup: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/user_groups/:id',
  }),

  assignUsersToGroup: defineEndpoint<{ id: string }, NoQuery, string[], SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/users',
  }),

  unassignUsersFromGroup: defineEndpoint<{ id: string }, NoQuery, string[], SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/users/delete',
  }),

  fetchUsersInGroup: defineEndpoint<{ id: string }, NoQuery, undefined, FetchGroupUsersResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/users',
  }),

  fetchAllUsersInGroup: defineEndpoint<{ id: string }, NoQuery, undefined, FetchGroupUsersResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/users/all',
  }),

  fetchUserAccessPolicies: defineEndpoint<{ id: string }, FetchUserAccessPoliciesQuery, undefined, UserAccessPoliciesResponse>({
    method: 'GET',
    path: '/api/v1/developer/users/:id/access_policies',
  }),

  updateUserGroupAccessPolicies: defineEndpoint<{ id: string }, NoQuery, UpdateGroupAccessPoliciesRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/user_groups/:id/access_policies',
  }),

  fetchUserGroupAccessPolicies: defineEndpoint<{ id: string }, NoQuery, undefined, UserAccessPoliciesResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/access_policies',
  }),

  deleteUser: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/users/:id',
  }),

  searchUsers: defineEndpoint<undefined, SearchUsersQuery, undefined, SearchUsersResponse>({
    method: 'GET',
    path: '/api/v1/developer/users/search',
  }),

  assignTouchPassToUser: defineEndpoint<{ user_id: string; touch_pass_id: string }, NoQuery, undefined, TouchPassAssignmentResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
  }),

  unassignTouchPassFromUser: defineEndpoint<{ user_id: string; touch_pass_id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
  }),

  batchAssignTouchPasses: defineEndpoint<undefined, NoQuery, BatchAssignTouchPassRequest, BatchAssignTouchPassResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/touch_passes/assign',
  }),

  assignLicensePlatesToUser: defineEndpoint<{ id: string }, NoQuery, AssignLicensePlatesRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/users/:id/license_plates',
  }),

  unassignLicensePlateFromUser: defineEndpoint<{ user_id: string; license_plate_id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/users/:user_id/license_plates/:license_plate_id',
  }),

  uploadUserAvatar: defineEndpoint<{ id: string }, NoQuery, UploadUserAvatarRequest['body'], SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/users/:id/avatar',
    rawBody: true,
  }),
} as const;

export type UserEndpoints = typeof userEndpoints;
