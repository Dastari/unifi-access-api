import { defineEndpoint } from '../internal/endpoint.js';
export const visitorEndpoints = {
    createVisitor: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/visitors',
    }),
    fetchVisitor: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/visitors/:id',
    }),
    fetchAllVisitors: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/visitors',
    }),
    updateVisitor: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id',
    }),
    deleteVisitor: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id',
    }),
    assignVisitorNfcCard: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards',
    }),
    unassignVisitorNfcCard: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards/delete',
    }),
    assignVisitorPinCode: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    }),
    unassignVisitorPinCode: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    }),
    assignVisitorQrCode: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    }),
    unassignVisitorQrCode: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    }),
    assignVisitorLicensePlates: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/license_plates',
    }),
    unassignVisitorLicensePlate: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id',
    }),
};
//# sourceMappingURL=visitors.js.map