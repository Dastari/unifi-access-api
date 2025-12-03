export declare const credentialEndpoints: {
    readonly generatePinCode: {
        method: "POST";
        path: string;
    };
    readonly createNfcEnrollmentSession: {
        method: "POST";
        path: string;
    };
    readonly fetchNfcEnrollmentStatus: {
        method: "GET";
        path: string;
    };
    readonly deleteNfcEnrollmentSession: {
        method: "DELETE";
        path: string;
    };
    readonly fetchNfcCard: {
        method: "GET";
        path: string;
    };
    readonly fetchAllNfcCards: {
        method: "GET";
        path: string;
    };
    readonly deleteNfcCard: {
        method: "DELETE";
        path: string;
    };
    readonly updateNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly fetchTouchPassList: {
        method: "GET";
        path: string;
    };
    readonly searchTouchPasses: {
        method: "GET";
        path: string;
    };
    readonly fetchAssignableTouchPasses: {
        method: "GET";
        path: string;
    };
    readonly updateTouchPass: {
        method: "PUT";
        path: string;
    };
    readonly fetchTouchPassDetails: {
        method: "GET";
        path: string;
    };
    readonly purchaseTouchPasses: {
        method: "POST";
        path: string;
    };
    readonly downloadTouchPassQrCode: {
        method: "GET";
        path: string;
        responseType: "arrayBuffer";
    };
    readonly importThirdPartyNfcCards: {
        method: "POST";
        path: string;
        rawBody: true;
    };
};
export type CredentialEndpoints = typeof credentialEndpoints;
//# sourceMappingURL=credentials.d.ts.map