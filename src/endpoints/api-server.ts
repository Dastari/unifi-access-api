import type { UploadCertificateRequest, UploadCertificateResponse } from '../types/api-server.js';
import type { EndpointDefinition } from '../internal/endpoint.js';

type NoQuery = undefined;

export const apiServerEndpoints = {
  uploadApiServerCertificate: {
    method: 'POST',
    path: '/api/v1/developer/api_server/certificates',
    rawBody: true,
  } satisfies EndpointDefinition<undefined, NoQuery, UploadCertificateRequest, UploadCertificateResponse>,

  deleteApiServerCertificate: {
    method: 'DELETE',
    path: '/api/v1/developer/api_server/certificates',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, UploadCertificateResponse>,
} as const;

export type ApiServerEndpoints = typeof apiServerEndpoints;
