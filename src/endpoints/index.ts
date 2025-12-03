import { userEndpoints } from './users.js';
import { visitorEndpoints } from './visitors.js';
import { accessPolicyEndpoints } from './access-policies.js';
import { credentialEndpoints } from './credentials.js';
import { spaceEndpoints } from './spaces.js';
import { deviceEndpoints } from './devices.js';
import { systemEndpoints } from './system.js';
import { identityEndpoints } from './identity.js';
import { webhookEndpoints } from './webhooks.js';
import { apiServerEndpoints } from './api-server.js';

export const endpointDefinitions = {
  ...userEndpoints,
  ...visitorEndpoints,
  ...accessPolicyEndpoints,
  ...credentialEndpoints,
  ...spaceEndpoints,
  ...deviceEndpoints,
  ...systemEndpoints,
  ...identityEndpoints,
  ...webhookEndpoints,
  ...apiServerEndpoints,
} as const;

export type EndpointDefinitions = typeof endpointDefinitions;
