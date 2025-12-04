[**unifi-access-api v1.0.1**](../README.md)

***

> **createNotificationClientFromApiOptions**(`options`, `overrides`): [`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)

Defined in: src/events/notification-client.ts:262

Convenience wrapper that copies base URL and API key from an existing REST
client configuration.

## Parameters

### options

`UnifiAccessApiOptions`

### overrides

`Partial`\<`Omit`\<[`UnifiAccessNotificationClientOptions`](../interfaces/UnifiAccessNotificationClientOptions.md), `"baseUrl"` \| `"apiKey"`\>\> = `{}`

## Returns

[`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)
