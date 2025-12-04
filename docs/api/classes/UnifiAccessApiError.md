[**unifi-access-api v1.0.1**](../README.md)

***

Defined in: [src/client.ts:41](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L41)

## Extends

- `Error`

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new UnifiAccessApiError**\<`T`\>(`message`, `status`, `code`, `response`): `UnifiAccessApiError`\<`T`\>

Defined in: [src/client.ts:42](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L42)

#### Parameters

##### message

`string`

##### status

`number`

##### code

`string`

##### response

`T`

#### Returns

`UnifiAccessApiError`\<`T`\>

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> `readonly` **code**: `string`

Defined in: [src/client.ts:45](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L45)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### response

> `readonly` **response**: `T`

Defined in: [src/client.ts:46](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L46)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status

> `readonly` **status**: `number`

Defined in: [src/client.ts:44](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L44)
