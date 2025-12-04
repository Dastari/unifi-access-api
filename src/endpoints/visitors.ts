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
import { defineEndpoint } from '../internal/endpoint.js';
import type { SuccessOnlyResponse } from '../types/common.js';

type NoQuery = undefined;

export const visitorEndpoints = {
  createVisitor: defineEndpoint<undefined, NoQuery, CreateVisitorRequest, CreateVisitorResponse>({
    method: 'POST',
    path: '/api/v1/developer/visitors',
  }),

  fetchVisitor: defineEndpoint<{ id: string }, NoQuery, undefined, FetchVisitorResponse>({
    method: 'GET',
    path: '/api/v1/developer/visitors/:id',
  }),

  fetchAllVisitors: defineEndpoint<undefined, {
    status?: number;
    keyword?: string;
    page_num?: number;
    page_size?: number;
    'expand[]'?: string | string[];
  }, undefined, FetchVisitorsResponse>({
    method: 'GET',
    path: '/api/v1/developer/visitors',
  }),

  updateVisitor: defineEndpoint<{ id: string }, NoQuery, UpdateVisitorRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id',
  }),

  deleteVisitor: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id',
  }),

  assignVisitorNfcCard: defineEndpoint<{ id: string }, NoQuery, AssignVisitorNfcCardRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/nfc_cards',
  }),

  unassignVisitorNfcCard: defineEndpoint<{ id: string }, NoQuery, UnassignVisitorNfcCardRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/nfc_cards/delete',
  }),

  assignVisitorPinCode: defineEndpoint<{ id: string }, NoQuery, AssignVisitorPinCodeRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/pin_codes',
  }),

  unassignVisitorPinCode: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id/pin_codes',
  }),

  assignVisitorQrCode: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/qr_codes',
  }),

  unassignVisitorQrCode: defineEndpoint<{ id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:id/qr_codes',
  }),

  assignVisitorLicensePlates: defineEndpoint<{ id: string }, NoQuery, AssignVisitorLicensePlatesRequest, SuccessOnlyResponse>({
    method: 'PUT',
    path: '/api/v1/developer/visitors/:id/license_plates',
  }),

  unassignVisitorLicensePlate: defineEndpoint<{ visitor_id: string; license_plate_id: string }, NoQuery, undefined, SuccessOnlyResponse>({
    method: 'DELETE',
    path: '/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id',
  }),
} as const;

export type VisitorEndpoints = typeof visitorEndpoints;
