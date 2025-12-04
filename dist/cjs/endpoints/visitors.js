"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.visitorEndpoints = {
    createVisitor: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/visitors',
    }),
    fetchVisitor: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/visitors/:id',
    }),
    fetchAllVisitors: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/visitors',
    }),
    updateVisitor: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id',
    }),
    deleteVisitor: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id',
    }),
    assignVisitorNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards',
    }),
    unassignVisitorNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards/delete',
    }),
    assignVisitorPinCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    }),
    unassignVisitorPinCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    }),
    assignVisitorQrCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    }),
    unassignVisitorQrCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    }),
    assignVisitorLicensePlates: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/license_plates',
    }),
    unassignVisitorLicensePlate: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id',
    }),
};
//# sourceMappingURL=visitors.js.map