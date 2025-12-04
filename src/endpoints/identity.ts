import type {
  IdentityAssignmentRequest,
  IdentityAvailableResourcesResponse,
  IdentityInvitationRequestItem,
  IdentityInvitationResponse,
} from '../types/identity.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const identityEndpoints = {
  sendIdentityInvitations: defineEndpoint<undefined, NoQuery, IdentityInvitationRequestItem[], IdentityInvitationResponse>({
    method: 'POST',
    path: '/api/v1/developer/users/identity/invitations',
  }),

  fetchAvailableIdentityResources: defineEndpoint<undefined, { resource_type?: string }, undefined, IdentityAvailableResourcesResponse>({
    method: 'GET',
    path: '/api/v1/developer/users/identity/assignments',
  }),

  assignIdentityResourcesToUser: defineEndpoint<{ id: string }, NoQuery, IdentityAssignmentRequest, SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/users/:id/identity/assignments',
  }),

  fetchIdentityResourcesForUser: defineEndpoint<{ id: string }, NoQuery, undefined, IdentityAvailableResourcesResponse>({
    method: 'GET',
    path: '/api/v1/developer/users/:id/identity/assignments',
  }),

  assignIdentityResourcesToUserGroup: defineEndpoint<{ id: string }, NoQuery, IdentityAssignmentRequest, SuccessOnlyResponse>({
    method: 'POST',
    path: '/api/v1/developer/user_groups/:id/identity/assignments',
  }),

  fetchIdentityResourcesForUserGroup: defineEndpoint<{ id: string }, NoQuery, undefined, IdentityAvailableResourcesResponse>({
    method: 'GET',
    path: '/api/v1/developer/user_groups/:id/identity/assignments',
  }),
} as const;

export type IdentityEndpoints = typeof identityEndpoints;
