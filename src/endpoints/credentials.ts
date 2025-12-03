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
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const credentialEndpoints = {
  generatePinCode: {
    method: 'POST',
    path: '/api/v1/developer/credentials/pin_codes',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, GeneratePinCodeResponse>,

  createNfcEnrollmentSession: {
    method: 'POST',
    path: '/api/v1/developer/credentials/nfc_cards/sessions',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateNfcEnrollmentSessionRequest, CreateNfcEnrollmentSessionResponse>,

  fetchNfcEnrollmentStatus: {
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, NfcEnrollmentStatusResponse>,

  deleteNfcEnrollmentSession: {
    method: 'DELETE',
    path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  fetchNfcCard: {
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  } satisfies EndpointDefinition<{ token: string }, NoQuery, undefined, NfcCardResponse>,

  fetchAllNfcCards: {
    method: 'GET',
    path: '/api/v1/developer/credentials/nfc_cards/tokens',
  } satisfies EndpointDefinition<undefined, { page_num?: number; page_size?: number }, undefined, NfcCardsResponse>,

  deleteNfcCard: {
    method: 'DELETE',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  } satisfies EndpointDefinition<{ token: string }, NoQuery, undefined, SuccessOnlyResponse>,

  updateNfcCard: {
    method: 'PUT',
    path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
  } satisfies EndpointDefinition<{ token: string }, NoQuery, UpdateNfcCardRequest, SuccessOnlyResponse>,

  fetchTouchPassList: {
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes',
  } satisfies EndpointDefinition<
    undefined,
    { page_num?: number; page_size?: number; status?: string },
    undefined,
    TouchPassListResponse
  >,

  searchTouchPasses: {
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/search',
  } satisfies EndpointDefinition<undefined, { condition: string }, undefined, SearchTouchPassResponse>,

  fetchAssignableTouchPasses: {
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/assignable',
  } satisfies EndpointDefinition<undefined, NoQuery, undefined, AssignableTouchPassesResponse>,

  updateTouchPass: {
    method: 'PUT',
    path: '/api/v1/developer/credentials/touch_passes/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateTouchPassRequest, TouchPassDetailsResponse>,

  fetchTouchPassDetails: {
    method: 'GET',
    path: '/api/v1/developer/credentials/touch_passes/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, TouchPassDetailsResponse>,

  purchaseTouchPasses: {
    method: 'POST',
    path: '/api/v1/developer/credentials/touch_passes',
  } satisfies EndpointDefinition<undefined, NoQuery, PurchaseTouchPassesRequest, PurchaseTouchPassResponse>,

  downloadTouchPassQrCode: {
    method: 'GET',
    path: '/api/v1/developer/credentials/qr_codes/download/:id',
    responseType: 'arrayBuffer',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, DownloadQRCodeImageResponse, 'arrayBuffer'>,

  importThirdPartyNfcCards: {
    method: 'POST',
    path: '/api/v1/developer/credentials/nfc_cards/import',
    rawBody: true,
  } satisfies EndpointDefinition<undefined, NoQuery, ImportThirdPartyNfcCardsRequest, ImportThirdPartyNfcCardsResponse>,
} as const;

export type CredentialEndpoints = typeof credentialEndpoints;
