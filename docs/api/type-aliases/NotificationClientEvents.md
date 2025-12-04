[**unifi-access-api v1.0.1**](../README.md)

***

> **NotificationClientEvents** = `object`

Defined in: src/events/notification-client.ts:55

Event names and handler signatures emitted by
[UnifiAccessNotificationClient](../classes/UnifiAccessNotificationClient.md).

## Properties

### close()

> **close**: (`code`, `reason`) => `void`

Defined in: src/events/notification-client.ts:57

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

Defined in: src/events/notification-client.ts:58

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### message()

> **message**: (`payload`) => `void`

Defined in: src/events/notification-client.ts:59

#### Parameters

##### payload

[`UnifiAccessNotification`](../interfaces/UnifiAccessNotification.md)

#### Returns

`void`

***

### open()

> **open**: () => `void`

Defined in: src/events/notification-client.ts:56

#### Returns

`void`

***

### raw()

> **raw**: (`data`) => `void`

Defined in: src/events/notification-client.ts:63

Emits the raw message payload before JSON parsing; useful for debugging.

#### Parameters

##### data

`RawData`

#### Returns

`void`

***

### reconnect()

> **reconnect**: (`attempt`) => `void`

Defined in: src/events/notification-client.ts:64

#### Parameters

##### attempt

`number`

#### Returns

`void`
