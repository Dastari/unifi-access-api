export const credentialEndpoints = {
    generatePinCode: {
        method: 'POST',
        path: '/api/v1/developer/credentials/pin_codes',
    },
    createNfcEnrollmentSession: {
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/sessions',
    },
    fetchNfcEnrollmentStatus: {
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    },
    deleteNfcEnrollmentSession: {
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/sessions/:id',
    },
    fetchNfcCard: {
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    },
    fetchAllNfcCards: {
        method: 'GET',
        path: '/api/v1/developer/credentials/nfc_cards/tokens',
    },
    deleteNfcCard: {
        method: 'DELETE',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    },
    updateNfcCard: {
        method: 'PUT',
        path: '/api/v1/developer/credentials/nfc_cards/tokens/:token',
    },
    fetchTouchPassList: {
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes',
    },
    searchTouchPasses: {
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/search',
    },
    fetchAssignableTouchPasses: {
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/assignable',
    },
    updateTouchPass: {
        method: 'PUT',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    },
    fetchTouchPassDetails: {
        method: 'GET',
        path: '/api/v1/developer/credentials/touch_passes/:id',
    },
    purchaseTouchPasses: {
        method: 'POST',
        path: '/api/v1/developer/credentials/touch_passes',
    },
    downloadTouchPassQrCode: {
        method: 'GET',
        path: '/api/v1/developer/credentials/qr_codes/download/:id',
        responseType: 'arrayBuffer',
    },
    importThirdPartyNfcCards: {
        method: 'POST',
        path: '/api/v1/developer/credentials/nfc_cards/import',
        rawBody: true,
    },
};
//# sourceMappingURL=credentials.js.map