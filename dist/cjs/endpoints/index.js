"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointDefinitions = void 0;
const users_js_1 = require("./users.js");
const visitors_js_1 = require("./visitors.js");
const access_policies_js_1 = require("./access-policies.js");
const credentials_js_1 = require("./credentials.js");
const spaces_js_1 = require("./spaces.js");
const devices_js_1 = require("./devices.js");
const system_js_1 = require("./system.js");
const identity_js_1 = require("./identity.js");
const webhooks_js_1 = require("./webhooks.js");
const api_server_js_1 = require("./api-server.js");
exports.endpointDefinitions = {
    ...users_js_1.userEndpoints,
    ...visitors_js_1.visitorEndpoints,
    ...access_policies_js_1.accessPolicyEndpoints,
    ...credentials_js_1.credentialEndpoints,
    ...spaces_js_1.spaceEndpoints,
    ...devices_js_1.deviceEndpoints,
    ...system_js_1.systemEndpoints,
    ...identity_js_1.identityEndpoints,
    ...webhooks_js_1.webhookEndpoints,
    ...api_server_js_1.apiServerEndpoints,
};
//# sourceMappingURL=index.js.map