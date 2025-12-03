import type {
  WebhookEndpointRequest,
  WebhookEndpointResponse,
  WebhookEndpointsResponse,
} from '../types/webhooks.js';
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const webhookEndpoints = {
  fetchWebhookEndpoints: {
    method: 'GET',
    path: '/api/v1/developer/webhooks/endpoints',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, WebhookEndpointsResponse>,

  createWebhookEndpoint: {
    method: 'POST',
    path: '/api/v1/developer/webhooks/endpoints',
  } satisfies EndpointDefinition<undefined, NoQuery, WebhookEndpointRequest, WebhookEndpointResponse>,

  updateWebhookEndpoint: {
    method: 'PUT',
    path: '/api/v1/developer/webhooks/endpoints/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, WebhookEndpointRequest, WebhookEndpointResponse>,

  deleteWebhookEndpoint: {
    method: 'DELETE',
    path: '/api/v1/developer/webhooks/endpoints/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,
} as const;

export type WebhookEndpoints = typeof webhookEndpoints;
