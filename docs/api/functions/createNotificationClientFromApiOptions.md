[**unifi-access-api v1.0.2**](../README.md)

***

> **createNotificationClientFromApiOptions**(`options`, `overrides`): [`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)

Defined in: [src/events/notification-client.ts:262](https://github.com/Dastari/unifi-access-api/blob/99edd4ba353edf745a2261a69073c72c1aa7664e/src/events/notification-client.ts#L262)

Convenience wrapper that copies base URL and API key from an existing REST
client configuration.

## Parameters

### options

`UnifiAccessApiOptions`

### overrides

`Partial`\<`Omit`\<[`UnifiAccessNotificationClientOptions`](../interfaces/UnifiAccessNotificationClientOptions.md), `"baseUrl"` \| `"apiKey"`\>\> = `{}`

## Returns

[`UnifiAccessNotificationClient`](../classes/UnifiAccessNotificationClient.md)
