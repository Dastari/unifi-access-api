"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.credentialEndpoints = {
    generatePinCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/credentials/pin_codes',
    }),
    createNfcEnrollmentSession: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/sessions',
    }),
    fetchNfcEnrollmentStatus: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    }),
    deleteNfcEnrollmentSession: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    }),
    fetchNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    fetchAllNfcCards: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens',
    }),
    deleteNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    updateNfcCard: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    fetchTouchPassList: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes',
    }),
    searchTouchPasses: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/search',
    }),
    fetchAssignableTouchPasses: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/assignable',
    }),
    updateTouchPass: (0, endpoint_js_1.defineEndpoint)({
        method: 'PUT',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    }),
    fetchTouchPassDetails: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    }),
    purchaseTouchPasses: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/credentials/touch_passes',
    }),
    downloadTouchPassQrCode: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/credentials/qr_codes/download/:id',
        responseType: 'arrayBuffer',
    }),
    importThirdPartyNfcCards: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/import',
        rawBody: true,
    }),
};
//# sourceMappingURL=credentials.js.map