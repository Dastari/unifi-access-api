[**unifi-access-api v1.1.0**](../README.md)

***

> **EndpointCallOptions**\<`Def`\> = `PathOption`\<`Def` *extends* [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<infer P, `any`, `any`, `any`, `any`\> ? `P` : `never`\> & `QueryOption`\<`Def` *extends* [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`any`, infer Q, `any`, `any`, `any`\> ? `Q` : `never`\> & `BodyOption`\<`Def` *extends* [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`any`, `any`, infer B, `any`, `any`\> ? `B` : `never`\> & `object`

Defined in: [src/internal/endpoint.ts:39](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/internal/endpoint.ts#L39)

## Type Declaration

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

### rawBody?

> `optional` **rawBody**: `boolean`

### responseType?

> `optional` **responseType**: [`ResponseType`](ResponseType.md)

### signal?

> `optional` **signal**: `AbortSignal`

### timeoutMs?

> `optional` **timeoutMs**: `number`

## Type Parameters

### Def

`Def` *extends* [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`any`, `any`, `any`, `any`, `any`\>
