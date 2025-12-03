export declare const webhookEndpoints: {
    readonly fetchWebhookEndpoints: {
        method: "GET";
        path: string;
    };
    readonly createWebhookEndpoint: {
        method: "POST";
        path: string;
    };
    readonly updateWebhookEndpoint: {
        method: "PUT";
        path: string;
    };
    readonly deleteWebhookEndpoint: {
        method: "DELETE";
        path: string;
    };
};
export type WebhookEndpoints = typeof webhookEndpoints;
//# sourceMappingURL=webhooks.d.ts.map