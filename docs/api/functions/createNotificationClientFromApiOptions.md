[**unifi-access-api v1.0.4**](../README.md)

***

> **createNotificationClientFromApiOptions**(`options`, `overrides`): [`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)

Defined in: [src/events/notification-client.ts:262](https://github.com/Dastari/unifi-access-api/blob/4147818a266ec0504f2066897ec0dcee0bff30e8/src/events/notification-client.ts#L262)

Convenience wrapper that copies base URL and API key from an existing REST
client configuration.

## Parameters

### options

`UnifiAccessApiOptions`

### overrides

`Partial`\<`Omit`\<[`UnifiAccessNotificationClientOptions`](../interfaces/UnifiAccessNotificationClientOptions.md), `"baseUrl"` \| `"apiKey"`\>\> = `{}`

## Returns

[`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)
