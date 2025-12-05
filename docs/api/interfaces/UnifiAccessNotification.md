[**unifi-access-api v1.0.6**](../README.md)

***

Defined in: [src/events/notification-client.ts:12](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L12)

Notification payload shape emitted by the UniFi Access WebSocket endpoint.
The payload varies by event type, therefore the interface keeps most fields
optional while preserving the common properties described in the API
reference.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### event

> **event**: `string`

Defined in: [src/events/notification-client.ts:13](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L13)

***

### event\_object\_id?

> `optional` **event\_object\_id**: `string`

Defined in: [src/events/notification-client.ts:15](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L15)

***

### receiver\_id?

> `optional` **receiver\_id**: `string`

Defined in: [src/events/notification-client.ts:14](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L14)

***

### save\_to\_history?

> `optional` **save\_to\_history**: `boolean`

Defined in: [src/events/notification-client.ts:16](https://github.com/Dastari/unifi-access-api/blob/ebc68332f7cf5ab24ce978ac63770c578a9abdcb/src/events/notification-client.ts#L16)
