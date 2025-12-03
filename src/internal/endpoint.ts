import type { BodyLike, FileResponse } from '../types/common.js';
import type { HttpMethod } from '../types/common.js';

export type ResponseType = 'json' | 'arrayBuffer' | 'text';

export interface EndpointDefinition<
  PathParams,
  QueryParams,
  RequestBody,
  Response,
  Format extends ResponseType = 'json'
> {
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

type PathOption<PathParams> = [PathParams] extends [undefined]
  ? {}
  : { path: PathParams };

type QueryOption<QueryParams> = [QueryParams] extends [undefined]
  ? {}
  : { query?: QueryParams };

type BodyOption<RequestBody> = [RequestBody] extends [undefined]
  ? {}
  : { body: RequestBody };

export type EndpointCallOptions<Def extends EndpointDefinition<any, any, any, any, any>> =
  PathOption<Def extends EndpointDefinition<infer P, any, any, any, any> ? P : never> &
  QueryOption<Def extends EndpointDefinition<any, infer Q, any, any, any> ? Q : never> &
  BodyOption<Def extends EndpointDefinition<any, any, infer B, any, any> ? B : never> & {
    signal?: AbortSignal;
    headers?: Record<string, string>;
    responseType?: ResponseType;
    rawBody?: boolean;
    timeoutMs?: number;
  };

type InferResponse<Def extends EndpointDefinition<any, any, any, any, any>> =
  Def extends EndpointDefinition<any, any, any, infer R, infer Format>
    ? Format extends 'arrayBuffer'
      ? FileResponse
      : Format extends 'text'
        ? string
        : R
    : never;

export type EndpointInvoker<Def extends EndpointDefinition<any, any, any, any, any>> = (
  options: EndpointCallOptions<Def>
) => Promise<InferResponse<Def>>;

export type EndpointMap = Record<string, EndpointDefinition<any, any, any, any, any>>;

export type EndpointMethodMap<M extends EndpointMap> = {
  [K in keyof M]: EndpointInvoker<M[K]>;
};

export const JSON_CONTENT_TYPE = 'application/json';

export type RequestBodyValue = BodyLike | Record<string, unknown> | Array<unknown> | string | number | boolean | null;
