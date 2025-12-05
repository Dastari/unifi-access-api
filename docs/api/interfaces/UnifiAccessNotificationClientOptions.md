[**unifi-access-api v1.0.6**](../README.md)

***

Defined in: [src/events/notification-client.ts:23](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L23)

Options for [UnifiAccessNotificationClient](../classes/UnifiAccessNotificationClient.md).

## Properties

### agent?

> `optional` **agent**: `Agent`

Defined in: [src/events/notification-client.ts:35](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L35)

Optional HTTPS agent passed to the underlying WebSocket client.

***

### apiKey

> **apiKey**: `string`

Defined in: [src/events/notification-client.ts:31](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L31)

API token with `view:device` permission.

***

### autoReconnect?

> `optional` **autoReconnect**: `boolean`

Defined in: [src/events/notification-client.ts:44](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L44)

Automatically attempt to reconnect when the socket closes unexpectedly.
Defaults to `true`.

***

### baseUrl

> **baseUrl**: `string`

Defined in: [src/events/notification-client.ts:27](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L27)

Base URL of the UniFi Access API (e.g. `https://console-ip:12445/`).

***

### reconnectIntervalMs?

> `optional` **reconnectIntervalMs**: `number`

Defined in: [src/events/notification-client.ts:48](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L48)

Delay before attempting to reconnect (milliseconds). Defaults to 5000 ms.

***

### WebSocketImpl?

> `optional` **WebSocketImpl**: *typeof* `WebSocket`

Defined in: [src/events/notification-client.ts:39](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L39)

Custom WebSocket implementation. Defaults to the `ws` package.
