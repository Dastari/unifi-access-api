export declare const visitorEndpoints: {
    readonly createVisitor: {
        method: "POST";
        path: string;
    };
    readonly fetchVisitor: {
        method: "GET";
        path: string;
    };
    readonly fetchAllVisitors: {
        method: "GET";
        path: string;
    };
    readonly updateVisitor: {
        method: "PUT";
        path: string;
    };
    readonly deleteVisitor: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly assignVisitorPinCode: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorPinCode: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorQrCode: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorQrCode: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorLicensePlates: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorLicensePlate: {
        method: "DELETE";
        path: string;
    };
};
export type VisitorEndpoints = typeof visitorEndpoints;
//# sourceMappingURL=visitors.d.ts.map