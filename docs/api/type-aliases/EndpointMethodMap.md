[**unifi-access-api v1.1.0**](../README.md)

***

> **EndpointMethodMap**\<`M`\> = `{ [K in keyof M]: EndpointInvoker<RewrapEndpoint<M[K]>> }`

Defined in: [src/internal/endpoint.ts:87](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L87)

## Type Parameters

### M

`M` *extends* [`EndpointMap`](EndpointMap.md)
