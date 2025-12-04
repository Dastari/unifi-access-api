import { defineEndpoint } from '../internal/endpoint.js';
export const credentialEndpoints = {
    generatePinCode: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/credentials/pin_codes',
    }),
    createNfcEnrollmentSession: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/sessions',
    }),
    fetchNfcEnrollmentStatus: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    }),
    deleteNfcEnrollmentSession: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    }),
    fetchNfcCard: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    fetchAllNfcCards: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens',
    }),
    deleteNfcCard: defineEndpoint({
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    updateNfcCard: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    }),
    fetchTouchPassList: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes',
    }),
    searchTouchPasses: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/search',
    }),
    fetchAssignableTouchPasses: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/assignable',
    }),
    updateTouchPass: defineEndpoint({
        method: 'PUT',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    }),
    fetchTouchPassDetails: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    }),
    purchaseTouchPasses: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/credentials/touch_passes',
    }),
    downloadTouchPassQrCode: defineEndpoint({
        method: 'GET',
        path: '/api/v1/developer/credentials/qr_codes/download/:id',
        responseType: 'arrayBuffer',
    }),
    importThirdPartyNfcCards: defineEndpoint({
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/import',
        rawBody: true,
    }),
};
//# sourceMappingURL=credentials.js.map