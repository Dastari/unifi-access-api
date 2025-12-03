import type {
  AssignVisitorLicensePlatesRequest,
  AssignVisitorNfcCardRequest,
  AssignVisitorPinCodeRequest,
  AssignVisitorQrCodeRequest,
  CreateVisitorRequest,
  CreateVisitorResponse,
  FetchVisitorResponse,
  FetchVisitorsResponse,
  UnassignVisitorNfcCardRequest,
  UpdateVisitorRequest,
} from '../types/visitors.js';
import type { EndpointDefinition } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const visitorEndpoints = {
  createVisitor: {
    method: 'POST',
    path: '/api/v1/developer/visitors',
  } satisfies EndpointDefinition<undefined, NoQuery, CreateVisitorRequest, CreateVisitorResponse>,

  fetchVisitor: {
    method: 'GET',
    path: '/api/v1/developer/visitors/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, FetchVisitorResponse>,

  fetchAllVisitors: {
    method: 'GET',
    path: '/api/v1/developer/visitors',
  } satisfies EndpointDefinition<undefined, {
    status?: number;
    keyword?: string;
    page_num?: number;
    page_size?: number;
    'expand[]'?: string | string[];
  }, undefined, FetchVisitorsResponse>,

  updateVisitor: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UpdateVisitorRequest, SuccessOnlyResponse>,

  deleteVisitor: {
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  assignVisitorNfcCard: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/nfc_cards',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignVisitorNfcCardRequest, SuccessOnlyResponse>,

  unassignVisitorNfcCard: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/nfc_cards/delete',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, UnassignVisitorNfcCardRequest, SuccessOnlyResponse>,

  assignVisitorPinCode: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/pin_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignVisitorPinCodeRequest, SuccessOnlyResponse>,

  unassignVisitorPinCode: {
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id/pin_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  assignVisitorQrCode: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/qr_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  unassignVisitorQrCode: {
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id/qr_codes',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>,

  assignVisitorLicensePlates: {
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/license_plates',
  } satisfies EndpointDefinition<{ id: string }, NoQuery, AssignVisitorLicensePlatesRequest, SuccessOnlyResponse>,

  unassignVisitorLicensePlate: {
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id',
  } satisfies EndpointDefinition<{ visitor_id: string; license_plate_id: string }, NoQuery, undefined, SuccessOnlyResponse>,
} as const;

export type VisitorEndpoints = typeof visitorEndpoints;
