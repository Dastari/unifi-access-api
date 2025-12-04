# UniFi Access API (TypeScript)

Typed Node.js/TypeScript client for the UniFi Access REST API (tested against UniFi Access API v3.3.21). The library wraps every documented endpoint from the UniFi Access API reference and exposes typed request/response contracts for convenient use in other projects.

## Installation

```bash
npm install unifi-access-api
# or
yarn add unifi-access-api
```

## Quick Start

```ts
import {
  UnifiAccessApi,
  type FetchAllUsersResponse,
  type UnifiAccessUser,
} from 'unifi-access-api';

const api = new UnifiAccessApi({
  baseUrl: 'https://10.0.1.1:12445/',
  apiKey: '298uyvd98sudf98us',
});

const response: FetchAllUsersResponse = await api.fetchAllUsers({
  query: { page_num: 1, page_size: 50 },
});

const users: UnifiAccessUser[] = response.data;
```

All client methods return the documented API payloads. For convenience the `data` payload is left intact, and any `pagination` or additional metadata from the API remains accessible.

## API Surface

A complete, type-safe API reference (classes, functions, interfaces, and type aliases) is generated with [TypeDoc](docs/api/README.md). Within the main `UnifiAccessApi` class documentation you'll find endpoint invokers organised by domain—for example:

- **Users** – [createUser](docs/api/classes/UnifiAccessApi.md#createuser), [updateUser](docs/api/classes/UnifiAccessApi.md#updateuser), [fetchAllUsers](docs/api/classes/UnifiAccessApi.md#fetchallusers), credential assignment helpers, group operations, and more.
- **Visitors** – [createVisitor](docs/api/classes/UnifiAccessApi.md#createvisitor), [assignVisitorNfcCard](docs/api/classes/UnifiAccessApi.md#assignvisitornfccard), [fetchAllVisitors](docs/api/classes/UnifiAccessApi.md#fetchallvisitors), etc.
- **Access Policies** – [createAccessPolicy](docs/api/classes/UnifiAccessApi.md#createaccesspolicy), [fetchAllAccessPolicies](docs/api/classes/UnifiAccessApi.md#fetchallaccesspolicies), [updateSchedule](docs/api/classes/UnifiAccessApi.md#updateschedule), and related helpers.
- **Credentials** – [generatePinCode](docs/api/classes/UnifiAccessApi.md#generatepincode), [createNfcEnrollmentSession](docs/api/classes/UnifiAccessApi.md#createnfcenrollmentsession), [purchaseTouchPasses](docs/api/classes/UnifiAccessApi.md#purchasetouchpasses), plus NFC/touch-pass management.
- **Spaces** – [fetchDoorGroupTopology](docs/api/classes/UnifiAccessApi.md#fetchdoorgrouptopology), [unlockDoor](docs/api/classes/UnifiAccessApi.md#unlockdoor), [setDoorLockRule](docs/api/classes/UnifiAccessApi.md#setdoorlockrule), etc.
- **Devices** – [fetchDevices](docs/api/classes/UnifiAccessApi.md#fetchdevices), [updateDeviceAccessSettings](docs/api/classes/UnifiAccessApi.md#updatedeviceaccesssettings).
- **System Logs** – [fetchSystemLogs](docs/api/classes/UnifiAccessApi.md#fetchsystemlogs), [exportSystemLogs](docs/api/classes/UnifiAccessApi.md#exportsystemlogs).
- **UniFi Identity** – [sendIdentityInvitations](docs/api/classes/UnifiAccessApi.md#sendidentityinvitations), [assignIdentityResourcesToUser](docs/api/classes/UnifiAccessApi.md#assignidentityresourcestouser).
- **Webhooks** – [fetchWebhookEndpoints](docs/api/classes/UnifiAccessApi.md#fetchwebhookendpoints), [createWebhookEndpoint](docs/api/classes/UnifiAccessApi.md#createwebhookendpoint), [deleteWebhookEndpoint](docs/api/classes/UnifiAccessApi.md#deletewebhookendpoint).
- **API Server** – [uploadApiServerCertificate](docs/api/classes/UnifiAccessApi.md#uploadapiservercertificate), [deleteApiServerCertificate](docs/api/classes/UnifiAccessApi.md#deleteapiservercertificate).
- **Notifications** – [UnifiAccessNotificationClient](docs/api/classes/UnifiAccessNotificationClient.md) and [createNotificationClientFromApiOptions](docs/api/functions/createNotificationClientFromApiOptions.md) for WebSocket-based events.

Every exported interface or type (e.g. `CreateUserRequest`, `TouchPass`, `PaginatedResponse`) is documented under [docs/api/interfaces](docs/api/interfaces) and [docs/api/type-aliases](docs/api/type-aliases).

### Real-time Notifications

```ts
import { UnifiAccessNotificationClient } from 'unifi-access-api';

const notifications = new UnifiAccessNotificationClient({
  baseUrl: 'https://10.0.1.1:12445/',
  apiKey: process.env.ACCESS_API_TOKEN!,
  autoReconnect: true,
});

notifications.on('message', (payload) => {
  console.log('Notification:', payload.event, payload);
});

await notifications.connect();
```

Handlers exist for `open`, `close`, `error`, `message`, `raw`, and `reconnect`. The client automatically retries connections unless `autoReconnect` is disabled.

#### Using the API client to attach events

If you already instantiated `UnifiAccessApi`, reuse the same configuration without re-entering credentials:

```ts
import { UnifiAccessApi } from 'unifi-access-api';

const api = new UnifiAccessApi({ baseUrl, apiKey });
const notifications = api.createNotificationClient({ autoReconnect: true });

notifications.on('message', ({ event, payload }) => {
  // `event` enumerates UniFi Access event names, payload is strongly typed.
  console.log(`[${event}]`, payload);
});

notifications.on('error', (err) => {
  console.error('WebSocket error', err);
});

await notifications.connect();
```

The event signatures are typed via [`NotificationClientEvents`](docs/api/type-aliases/NotificationClientEvents.md), so `notifications.on('message', handler)` automatically infers the `{ event, payload }` structure. For lower-level access (or to hydrate from saved options) you can also call [`createNotificationClientFromApiOptions`](docs/api/functions/createNotificationClientFromApiOptions.md) with an `UnifiAccessApi` configuration object.

Every endpoint defined in the official *unifi_access_api_reference.pdf* is mapped to a method on `UnifiAccessApi`. Refer to the exported TypeScript types (e.g. `src/types/**/*.ts`) for request/response shapes. All response types extend the base `ApiResponse<T>` type, and list endpoints include pagination metadata when present in the API.

## TLS and Fetch Configuration

The constructor accepts optional parameters:

```ts
const api = new UnifiAccessApi({
  baseUrl: 'https://10.0.1.1:12445/',
  apiKey: process.env.ACCESS_API_TOKEN!,
  fetch: customFetchImplementation, // defaults to global fetch (Node 18+)
  defaultHeaders: { 'User-Agent': 'my-app/1.0.0' },
  agent: httpsAgent, // e.g. new https.Agent({ rejectUnauthorized: false })
  timeoutMs: 10_000,
});
```

When working with the self-signed UniFi Access controller certificate, provide an HTTPS agent configured with `rejectUnauthorized: false`, or install the controller certificate locally.

## Development

```bash
npm install
npm run build
# regenerate API docs
npm run docs
```

Build output is written to `dist/esm` (ESM) and `dist/cjs` (CommonJS) with bundled type declarations.

## License

[MIT](./LICENSE)
# unifi-access-api
