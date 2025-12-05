"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemEndpoints = void 0;
const endpoint_js_1 = require("../internal/endpoint.js");
exports.systemEndpoints = {
    fetchSystemLogs: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/system/logs',
    }),
    exportSystemLogs: (0, endpoint_js_1.defineEndpoint)({
        method: 'POST',
        path: '/api/v1/developer/system/logs/export',
        responseType: 'arrayBuffer',
    }),
    fetchSystemLogResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/logs/resource/:id',
    }),
    fetchSystemStaticResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/static/:path',
        responseType: 'arrayBuffer',
    }),
    getAvatarResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/static/avatar/:resourceId',
        responseType: 'arrayBuffer',
    }),
    getPreviewResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/static/preview/:resourceName',
        responseType: 'arrayBuffer',
    }),
    getVideoResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/static/activities_resource/video/:resourceName',
        responseType: 'arrayBuffer',
    }),
    getThumbnailResource: (0, endpoint_js_1.defineEndpoint)({
        method: 'GET',
        path: '/api/v1/developer/system/static/activities_resource/thumbnail/:resourceName',
        responseType: 'arrayBuffer',
    }),
};
//# sourceMappingURL=system.js.map