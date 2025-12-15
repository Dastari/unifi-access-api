[**unifi-access-api v1.1.0**](../README.md)

***

Defined in: [src/internal/endpoint.ts:6](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L6)

## Type Parameters

### PathParams

`PathParams`

### QueryParams

`QueryParams`

### RequestBody

`RequestBody`

### Response

`Response`

### Format

`Format` *extends* [`ResponseType`](../type-aliases/ResponseType.md) = `"json"`

## Properties

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/internal/endpoint.ts:24](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L24)

Optional default headers merged with client headers.

***

### method

> **method**: [`HttpMethod`](../type-aliases/HttpMethod.md)

Defined in: [src/internal/endpoint.ts:13](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L13)

***

### path

> **path**: `string`

Defined in: [src/internal/endpoint.ts:14](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L14)

***

### rawBody?

> `optional` **rawBody**: `boolean`

Defined in: [src/internal/endpoint.ts:20](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L20)

When true, the request body is passed through without automatic JSON
serialization. Defaults to false.

***

### responseType?

> `optional` **responseType**: `Format`

Defined in: [src/internal/endpoint.ts:15](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L15)
