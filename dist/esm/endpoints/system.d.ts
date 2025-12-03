export declare const systemEndpoints: {
    readonly fetchSystemLogs: {
        method: "POST";
        path: string;
    };
    readonly exportSystemLogs: {
        method: "POST";
        path: string;
        responseType: "arrayBuffer";
    };
    readonly fetchSystemLogResource: {
        method: "GET";
        path: string;
    };
    readonly fetchSystemStaticResource: {
        method: "GET";
        path: string;
        responseType: "arrayBuffer";
    };
};
export type SystemEndpoints = typeof systemEndpoints;
//# sourceMappingURL=system.d.ts.map