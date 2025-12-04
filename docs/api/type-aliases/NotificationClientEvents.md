[**unifi-access-api v1.0.2**](../README.md)

***

> **NotificationClientEvents** = `object`

Defined in: [src/events/notification-client.ts:55](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L55)

Event names and handler signatures emitted by
[UnifiAccessNotificationClient](../classes/UnifiAccessNotificationClient.md).

## Properties

### close()

> **close**: (`code`, `reason`) => `void`

Defined in: [src/events/notification-client.ts:57](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L57)

#### Parameters

##### code

`number`

##### reason

`Buffer`

#### Returns

`void`

***

### error()

> **error**: (`error`) => `void`

Defined in: [src/events/notification-client.ts:58](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L58)

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### message()

> **message**: (`payload`) => `void`

Defined in: [src/events/notification-client.ts:59](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L59)

#### Parameters

##### payload

[`UnifiAccessNotification`](../interfaces/UnifiAccessNotification.md)

#### Returns

`void`

***

### open()

> **open**: () => `void`

Defined in: [src/events/notification-client.ts:56](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L56)

#### Returns

`void`

***

### raw()

> **raw**: (`data`) => `void`

Defined in: [src/events/notification-client.ts:63](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L63)

Emits the raw message payload before JSON parsing; useful for debugging.

#### Parameters

##### data

`RawData`

#### Returns

`void`

***

### reconnect()

> **reconnect**: (`attempt`) => `void`

Defined in: [src/events/notification-client.ts:64](https://github.com/Dastari/unifi-access-api/blob/32def7a1c1b78a255c7d1a030ef6508415d069d4/src/events/notification-client.ts#L64)

#### Parameters

##### attempt

`number`

#### Returns

`void`
