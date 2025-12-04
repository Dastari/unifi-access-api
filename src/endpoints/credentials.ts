import type {
  AssignableTouchPassesResponse,
  CreateNfcEnrollmentSessionRequest,
  CreateNfcEnrollmentSessionResponse,
  DownloadQRCodeImageResponse,
  GeneratePinCodeResponse,
  ImportThirdPartyNfcCardsRequest,
  ImportThirdPartyNfcCardsResponse,
  NfcCardResponse,
  NfcCardsResponse,
  NfcEnrollmentStatusResponse,
  PurchaseTouchPassesRequest,
  PurchaseTouchPassResponse,
  SearchTouchPassResponse,
  TouchPassDetailsResponse,
  TouchPassListResponse,
  UpdateNfcCardRequest,
  UpdateTouchPassRequest,
} from '../types/credentials.js';
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const credentialEndpoints = {
  generatePinCode: defineEndpoint<undefined, NoQuery, undefined, GeneratePinCodeResponse>({
    method: 'POST',
    path: '/api/v1/developer/credentials/pin_codes',
  }),

  createNfcEnrollmentSession: defineEndpoint<undefined, NoQuery, CreateNfcEnrollmentSessionRequest, CreateNfcEnrollmentSessionResponse>({
    method: 'POST',
    path: '/api/v1/developer/credentials/nfc_cards/sessions',
  }),

  fetchNfcEnrollmentStatus: defineEndpoint<{ id: string }, NoQuery, undefined, NfcEnrollmentStatusResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
  }),

  deleteNfcEnrollmentSession: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
  }),

  fetchNfcCard: defineEndpoint<{ token: string }, NoQuery, undefined, NfcCardResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  }),

  fetchAllNfcCards: defineEndpoint<undefined, { page_num?: number; page_size?: number }, undefined, NfcCardsResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/tokens',
  }),

  deleteNfcCard: defineEndpoint<{ token: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  }),

  updateNfcCard: defineEndpoint<{ token: string }, NoQuery, UpdateNfcCardRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  }),

  fetchTouchPassList: defineEndpoint<
    undefined,
    { page_num?: number; page_size?: number; status?: string },
    undefined,
    TouchPassListResponse
  >({
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes',
  }),

  searchTouchPasses: defineEndpoint<undefined, { condition: string }, undefined, SearchTouchPassResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/search',
  }),

  fetchAssignableTouchPasses: defineEndpoint<undefined, NoQuery, undefined, AssignableTouchPassesResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/assignable',
  }),

  updateTouchPass: defineEndpoint<{ id: string }, NoQuery, UpdateTouchPassRequest, TouchPassDetailsResponse>({
    method: 'PUT',
    path: '/api/v1/developer/credentials/touch_passes/:id',
  }),

  fetchTouchPassDetails: defineEndpoint<{ id: string }, NoQuery, undefined, TouchPassDetailsResponse>({
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/:id',
  }),

  purchaseTouchPasses: defineEndpoint<undefined, NoQuery, PurchaseTouchPassesRequest, PurchaseTouchPassResponse>({
    method: 'POST',
    path: '/api/v1/developer/credentials/touch_passes',
  }),

  downloadTouchPassQrCode: defineEndpoint<{ id: string }, NoQuery, undefined, DownloadQRCodeImageResponse, 'arrayBuffer'>({
    method: 'GET',
    path: '/api/v1/developer/credentials/qr_codes/download/:id',
    responseType: 'arrayBuffer',
  }),

  importThirdPartyNfcCards: defineEndpoint<undefined, NoQuery, ImportThirdPartyNfcCardsRequest, ImportThirdPartyNfcCardsResponse>({
    method: 'POST',
    path: '/api/v1/developer/credentials/nfc_cards/import',
    rawBody: true,
  }),
} as const;

export type CredentialEndpoints = typeof credentialEndpoints;
