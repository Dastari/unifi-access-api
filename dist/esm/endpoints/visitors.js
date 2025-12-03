export const visitorEndpoints = {
    createVisitor: {
        method: 'POST',
        path: '/api/v1/developer/visitors',
    },
    fetchVisitor: {
        method: 'GET',
        path: '/api/v1/developer/visitors/:id',
    },
    fetchAllVisitors: {
        method: 'GET',
        path: '/api/v1/developer/visitors',
    },
    updateVisitor: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id',
    },
    deleteVisitor: {
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id',
    },
    assignVisitorNfcCard: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards',
    },
    unassignVisitorNfcCard: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/nfc_cards/delete',
    },
    assignVisitorPinCode: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    },
    unassignVisitorPinCode: {
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/pin_codes',
    },
    assignVisitorQrCode: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    },
    unassignVisitorQrCode: {
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:id/qr_codes',
    },
    assignVisitorLicensePlates: {
        method: 'PUT',
        path: '/api/v1/developer/visitors/:id/license_plates',
    },
    unassignVisitorLicensePlate: {
        method: 'DELETE',
        path: '/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id',
    },
};
//# sourceMappingURL=visitors.js.map