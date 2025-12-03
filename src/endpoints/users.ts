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
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';
import type { UserAccessPoliciesResponse } from '../types/users.js';

type NoQuery = undefined;

export const userEndpoints = {
  createUser: {
    method: 'POST',
    path: '/api/v1/developer/users',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateUserRequest, CreateUserResponse>,

  updateUser: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateUserRequest, SuccessOnlyResponse>,

  fetchUser: {
    method: 'GET',
    path: '/api/v1/developer/users/:id',
  } satisfies EndpointDefinition<{ id: string }, FetchUserQuery, undefined, FetchUserResponse>,

  fetchAllUsers: {
    method: 'GET',
    path: '/api/v1/developer/users',
  } satisfies EndpointDefinition<undefined, FetchUsersQuery, undefined, FetchAllUsersResponse>,

  updateUserAccessPolicies: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id/access_policies',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateUserAccessPoliciesRequest, SuccessOnlyResponse>,

  assignUserNfcCard: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id/nfc_cards',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignNfcCardRequest, SuccessOnlyResponse>,

  unassignUserNfcCard: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id/nfc_cards/delete',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UnassignNfcCardRequest, SuccessOnlyResponse>,

  assignUserPinCode: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id/pin_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignPinCodeRequest, SuccessOnlyResponse>,

  unassignUserPinCode: {
    method: 'DELETE',
    path: '/api/v1/developer/users/:id/pin_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  createUserGroup: {
    method: 'POST',
    path: '/api/v1/developer/user_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateUserGroupRequest, SuccessOnlyResponse>,

  fetchAllUserGroups: {
    method: 'GET',
    path: '/api/v1/developer/user_groups',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, FetchAllUserGroupsResponse>,

  fetchUserGroup: {
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, FetchUserGroupResponse>,

  updateUserGroup: {
    method: 'PUT',
    path: '/api/v1/developer/user_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateUserGroupRequest, SuccessOnlyResponse>,

  deleteUserGroup: {
    method: 'DELETE',
    path: '/api/v1/developer/user_groups/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  assignUsersToGroup: {
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/users',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, string[], SuccessOnlyResponse>,

  unassignUsersFromGroup: {
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/users/delete',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, string[], SuccessOnlyResponse>,

  fetchUsersInGroup: {
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/users',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, FetchGroupUsersResponse>,

  fetchAllUsersInGroup: {
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/users/all',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, FetchGroupUsersResponse>,

  fetchUserAccessPolicies: {
    method: 'GET',
    path: '/api/v1/developer/users/:id/access_policies',
  } satisfies EndpointDefinition<{ id: string }, FetchUserAccessPoliciesQuery, undefined, UserAccessPoliciesResponse>,

  updateUserGroupAccessPolicies: {
    method: 'PUT',
    path: '/api/v1/developer/user_groups/:id/access_policies',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateGroupAccessPoliciesRequest, SuccessOnlyResponse>,

  fetchUserGroupAccessPolicies: {
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/access_policies',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, UserAccessPoliciesResponse>,

  deleteUser: {
    method: 'DELETE',
    path: '/api/v1/developer/users/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  searchUsers: {
    method: 'GET',
    path: '/api/v1/developer/users/search',
  } satisfies EndpointDefinition<undefined, SearchUsersQuery, undefined, SearchUsersResponse>,

  assignTouchPassToUser: {
    method: 'PUT',
    path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
  } satisfies EndpointDefinition<{ user_id: string; touch_pass_id: string }, NoQuery, undefined, TouchPassAssignmentResponse>,

  unassignTouchPassFromUser: {
    method: 'DELETE',
    path: '/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id',
  } satisfies EndpointDefinition<{ user_id: string; touch_pass_id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  batchAssignTouchPasses: {
    method: 'PUT',
    path: '/api/v1/developer/users/touch_passes/assign',
  } satisfies EndpointDefinition<undefined, NoQuery, BatchAssignTouchPassRequest, BatchAssignTouchPassResponse>,

  assignLicensePlatesToUser: {
    method: 'PUT',
    path: '/api/v1/developer/users/:id/license_plates',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignLicensePlatesRequest, SuccessOnlyResponse>,

  unassignLicensePlateFromUser: {
    method: 'DELETE',
    path: '/api/v1/developer/users/:user_id/license_plates/:license_plate_id',
  } satisfies EndpointDefinition<{ user_id: string; license_plate_id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  uploadUserAvatar: {
    method: 'POST',
    path: '/api/v1/developer/users/:id/avatar',
    rawBody: true,
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UploadUserAvatarRequest['body'], SuccessOnlyResponse>,
} as const;

export type UserEndpoints = typeof userEndpoints;
