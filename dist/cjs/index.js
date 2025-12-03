"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiAccessHttpError = exports.UnifiAccessApiError = exports.UnifiAccessApi = void 0;
var client_js_1 = require("./client.js");
Object.defineProperty(exports, "UnifiAccessApi", { enumerable: true, get: function () { return client_js_1.UnifiAccessApi; } });
Object.defineProperty(exports, "UnifiAccessApiError", { enumerable: true, get: function () { return client_js_1.UnifiAccessApiError; } });
Object.defineProperty(exports, "UnifiAccessHttpError", { enumerable: true, get: function () { return client_js_1.UnifiAccessHttpError; } });
__exportStar(require("./types/common.js"), exports);
__exportStar(require("./types/users.js"), exports);
__exportStar(require("./types/visitors.js"), exports);
__exportStar(require("./types/credentials.js"), exports);
__exportStar(require("./types/access-control.js"), exports);
__exportStar(require("./types/spaces.js"), exports);
__exportStar(require("./types/devices.js"), exports);
__exportStar(require("./types/system.js"), exports);
__exportStar(require("./types/identity.js"), exports);
__exportStar(require("./types/webhooks.js"), exports);
__exportStar(require("./types/api-server.js"), exports);
//# sourceMappingURL=index.js.map