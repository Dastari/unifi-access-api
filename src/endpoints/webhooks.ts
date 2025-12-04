import type {
  WebhookEndpointRequest,
  WebhookEndpointResponse,
  WebhookEndpointsResponse,
} from '../types/webhooks.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const webhookEndpoints = {
  fetchWebhookEndpoints: defineEndpoint<undefined, NoQuery, undefined, WebhookEndpointsResponse>({
    method: 'GET',
    path: '/api/v1/developer/webhooks/endpoints',
  }),

  createWebhookEndpoint: defineEndpoint<undefined, NoQuery, WebhookEndpointRequest, WebhookEndpointResponse>({
    method: 'POST',
    path: '/api/v1/developer/webhooks/endpoints',
  }),

  updateWebhookEndpoint: defineEndpoint<{ id: string }, NoQuery, WebhookEndpointRequest, WebhookEndpointResponse>({
    method: 'PUT',
    path: '/api/v1/developer/webhooks/endpoints/:id',
  }),

  deleteWebhookEndpoint: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/webhooks/endpoints/:id',
  }),
} as const;

export type WebhookEndpoints = typeof webhookEndpoints;
