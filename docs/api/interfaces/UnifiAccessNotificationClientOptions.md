[**unifi-access-api v1.0.1**](../README.md)

***

Defined in: src/events/notification-client.ts:23

Options for [UnifiAccessNotificationClient](../classes/UnifiAccessNotificationClient.md).

## Properties

### agent?

> `optional` **agent**: `Agent`

Defined in: src/events/notification-client.ts:35

Optional HTTPS agent passed to the underlying WebSocket client.

***

### apiKey

> **apiKey**: `string`

Defined in: src/events/notification-client.ts:31

API token with `view:device` permission.

***

### autoReconnect?

> `optional` **autoReconnect**: `boolean`

Defined in: src/events/notification-client.ts:44

Automatically attempt to reconnect when the socket closes unexpectedly.
Defaults to `true`.

***

### baseUrl

> **baseUrl**: `string`

Defined in: src/events/notification-client.ts:27

Base URL of the UniFi Access API (e.g. `https://console-ip:12445/`).

***

### reconnectIntervalMs?

> `optional` **reconnectIntervalMs**: `number`

Defined in: src/events/notification-client.ts:48

Delay before attempting to reconnect (milliseconds). Defaults to 5000 ms.

***

### WebSocketImpl?

> `optional` **WebSocketImpl**: *typeof* `WebSocket`

Defined in: src/events/notification-client.ts:39

Custom WebSocket implementation. Defaults to the `ws` package.
