import type { BodyLike, FileResponse } from '../types/common.js';
import type { HttpMethod } from '../types/common.js';
export type ResponseType = 'json' | 'arrayBuffer' | 'text';
export interface EndpointDefinition<PathParams, QueryParams, RequestBody, Response, Format extends ResponseType = 'json'> {
    method: HttpMethod;
    path: string;
    responseType?: Format;
    /**
     * When true, the request body is passed through without automatic JSON
     * serialization. Defaults to false.
     */
    rawBody?: boolean;
    /**
     * Optional default headers merged with client headers.
     */
    headers?: Record<string, string>;
}
type PathOption<PathParams> = [PathParams] extends [undefined] ? {} : {
    path: PathParams;
};
type QueryOption<QueryParams> = [QueryParams] extends [undefined] ? {} : {
    query?: QueryParams;
};
type BodyOption<RequestBody> = [RequestBody] extends [undefined] ? {} : {
    body: RequestBody;
};
export type EndpointCallOptions<Def extends EndpointDefinition<any, any, any, any, any>> = PathOption<Def extends EndpointDefinition<infer P, any, any, any, any> ? P : never> & QueryOption<Def extends EndpointDefinition<any, infer Q, any, any, any> ? Q : never> & BodyOption<Def extends EndpointDefinition<any, any, infer B, any, any> ? B : never> & {
    signal?: AbortSignal;
    headers?: Record<string, string>;
    responseType?: ResponseType;
    rawBody?: boolean;
    timeoutMs?: number;
};
type InferResponse<Def extends EndpointDefinition<any, any, any, any, any>> = Def extends EndpointDefinition<any, any, any, infer R, infer Format> ? Format extends 'arrayBuffer' ? FileResponse : Format extends 'text' ? string : R : never;
type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
export type EndpointResponse<Def extends EndpointDefinition<any, any, any, any, any>> = InferResponse<Def>;
export type EndpointPathParams<Def extends EndpointDefinition<any, any, any, any, any>> = Def extends EndpointDefinition<infer P, any, any, any, any> ? P : never;
export type EndpointQueryParams<Def extends EndpointDefinition<any, any, any, any, any>> = Def extends EndpointDefinition<any, infer Q, any, any, any> ? Q : never;
export type EndpointRequestBody<Def extends EndpointDefinition<any, any, any, any, any>> = Def extends EndpointDefinition<any, any, infer B, any, any> ? B : never;
export type EndpointInvoker<Def extends EndpointDefinition<any, any, any, any, any>> = RequiredKeys<EndpointCallOptions<Def>> extends never ? (options?: EndpointCallOptions<Def>) => Promise<InferResponse<Def>> : (options: EndpointCallOptions<Def>) => Promise<InferResponse<Def>>;
export type EndpointMap = Record<string, EndpointDefinition<any, any, any, any, any>>;
type RewrapEndpoint<Def extends EndpointDefinition<any, any, any, any, any>> = Def extends EndpointDefinition<infer P, infer Q, infer B, infer R, infer F> ? EndpointDefinition<P, Q, B, R, F> : never;
export type EndpointMethodMap<M extends EndpointMap> = {
    [K in keyof M]: EndpointInvoker<RewrapEndpoint<M[K]>>;
};
export declare const JSON_CONTENT_TYPE = "application/json";
export type RequestBodyValue = BodyLike | Record<string, unknown> | Array<unknown> | string | number | boolean | null;
export declare const defineEndpoint: <PathParams, QueryParams, RequestBody, Response, Format extends ResponseType = "json">(definition: EndpointDefinition<PathParams, QueryParams, RequestBody, Response, Format>) => EndpointDefinition<PathParams, QueryParams, RequestBody, Response, Format>;
export {};
//# sourceMappingURL=endpoint.d.ts.map