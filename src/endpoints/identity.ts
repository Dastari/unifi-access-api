import type {
  IdentityAssignmentRequest,
  IdentityAvailableResourcesResponse,
  IdentityInvitationRequestItem,
  IdentityInvitationResponse,
} from '../types/identity.js';
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const identityEndpoints = {
  sendIdentityInvitations: {
    method: 'POST',
    path: '/api/v1/developer/users/identity/invitations',
  } satisfies EndpointDefinition<undefined, NoQuery, IdentityInvitationRequestItem[], IdentityInvitationResponse>,

  fetchAvailableIdentityResources: {
    method: 'GET',
    path: '/api/v1/developer/users/identity/assignments',
  } satisfies EndpointDefinition<undefined, { resource_type?: string }, undefined, IdentityAvailableResourcesResponse>,

  assignIdentityResourcesToUser: {
    method: 'POST',
    path: '/api/v1/developer/users/:id/identity/assignments',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, IdentityAssignmentRequest, SuccessOnlyResponse>,

  fetchIdentityResourcesForUser: {
    method: 'GET',
    path: '/api/v1/developer/users/:id/identity/assignments',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, IdentityAvailableResourcesResponse>,

  assignIdentityResourcesToUserGroup: {
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/identity/assignments',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, IdentityAssignmentRequest, SuccessOnlyResponse>,

  fetchIdentityResourcesForUserGroup: {
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/identity/assignments',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, IdentityAvailableResourcesResponse>,
} as const;

export type IdentityEndpoints = typeof identityEndpoints;
