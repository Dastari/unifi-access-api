import type { UploadCertificateRequest, UploadCertificateResponse } from '../types/api-server.js';
import { defineEndpoint } from '../internal/endpoint.js';

type NoQuery = undefined;

export const apiServerEndpoints = {
  uploadApiServerCertificate: defineEndpoint<undefined, NoQuery, UploadCertificateRequest, UploadCertificateResponse>({
    method: 'POST',
    path: '/api/v1/developer/api_server/certificates',
    rawBody: true,
  }),

  deleteApiServerCertificate: defineEndpoint<undefined, NoQuery, undefined, UploadCertificateResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/api_server/certificates',
  }),
} as const;

export type ApiServerEndpoints = typeof apiServerEndpoints;
