import { endpointDefinitions } from './endpoints/index.js';
import {
  EndpointCallOptions,
  EndpointDefinition,
  EndpointInvoker,
  EndpointMethodMap,
  JSON_CONTENT_TYPE,
  RequestBodyValue,
  ResponseType,
} from './internal/endpoint.js';
import type { FileResponse } from './types/common.js';

export interface UnifiAccessApiOptions {
  /**
    * Base URL of the UniFi Access API, e.g. https://console-ip:12445/.
    */
  baseUrl: string;
  /**
    * API token used for bearer authentication.
    */
  apiKey: string;
  /**
    * Custom fetch implementation. Defaults to global fetch.
    */
  fetch?: typeof fetch;
  /**
    * Default headers merged into every request.
    */
  defaultHeaders?: Record<string, string>;
  /**
    * Optional HTTP(S) agent passed to the underlying fetch implementation. Useful
    * for accepting self-signed certificates in Node environments.
    */
  agent?: unknown;
  /**
    * Default request timeout in milliseconds. Disabled when undefined.
    */
  timeoutMs?: number;
}

export class UnifiAccessApiError<T = unknown> extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string,
    public readonly response: T,
  ) {
    super(message);
    this.name = 'UnifiAccessApiError';
  }
}

export class UnifiAccessHttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body?: string,
  ) {
    super(message);
    this.name = 'UnifiAccessHttpError';
  }
}

type EndpointKey = keyof typeof endpointDefinitions;

type ApiMethods = EndpointMethodMap<typeof endpointDefinitions>;

const isReadableStream = (value: unknown): value is ReadableStream => {
  return typeof value === 'object' && value !== null && 'getReader' in value && typeof (value as any).getReader === 'function';
};

const isFormData = (value: unknown): value is FormData => typeof FormData !== 'undefined' && value instanceof FormData;

const isArrayBuffer = (value: unknown): value is ArrayBuffer => typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;

const isArrayBufferView = (value: unknown): value is ArrayBufferView =>
  typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value as any);

const isBlob = (value: unknown): value is Blob => typeof Blob !== 'undefined' && value instanceof Blob;

const isURLSearchParams = (value: unknown): value is URLSearchParams =>
  typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;

const isBodyInit = (value: unknown): value is BodyInit | null => {
  return (
    typeof value === 'string' ||
    isBlob(value) ||
    isFormData(value) ||
    isArrayBuffer(value) ||
    isArrayBufferView(value) ||
    isReadableStream(value) ||
    isURLSearchParams(value) ||
    value === null
  );
};

export class UnifiAccessApi implements ApiMethods {
  private readonly baseUrl: URL;
  private readonly fetchImpl: typeof fetch;
  private readonly defaultHeaders: Record<string, string>;
  private readonly agent: unknown;
  private readonly timeoutMs?: number;

  constructor(private readonly options: UnifiAccessApiOptions) {
    if (!options.baseUrl) {
      throw new Error('baseUrl is required');
    }
    if (!options.apiKey) {
      throw new Error('apiKey is required');
    }

    this.baseUrl = ensureTrailingSlash(options.baseUrl);
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    if (!this.fetchImpl) {
      throw new Error('fetch implementation is required');
    }
    this.defaultHeaders = options.defaultHeaders ? { ...options.defaultHeaders } : {};
    this.agent = options.agent;
    this.timeoutMs = options.timeoutMs;

    this.attachEndpoints();
  }

  private attachEndpoints() {
    for (const [key, definition] of Object.entries(endpointDefinitions)) {
      Object.defineProperty(this, key, {
        value: (options?: EndpointCallOptions<typeof definition>) =>
          this.invoke(definition, options ?? ({} as EndpointCallOptions<typeof definition>)),
        enumerable: false,
        configurable: false,
        writable: false,
      });
    }
  }

  private async invoke<Def extends EndpointDefinition<any, any, any, any, any>>(
    definition: Def,
    options: EndpointCallOptions<Def>,
  ) {
    const normalizedOptions = options as EndpointCallOptions<EndpointDefinition<any, any, any, any, any>>;
    const pathParams = (normalizedOptions as { path?: Record<string, unknown> }).path;
    const queryParams = (normalizedOptions as { query?: Record<string, unknown> }).query;

    const url = this.buildUrl(definition.path, pathParams, queryParams);
    const headers = this.buildHeaders(definition, normalizedOptions);
    const body = this.prepareBody(definition, normalizedOptions, headers);
    const responseType = normalizedOptions.responseType ?? definition.responseType ?? 'json';
    const { signal, cleanup } = this.buildSignal(normalizedOptions.signal, normalizedOptions.timeoutMs);

    const requestInit: RequestInit = {
      method: definition.method,
      headers,
      body: body as BodyInit | undefined,
      signal,
    };

    if (this.agent) {
      (requestInit as any).agent = this.agent;
    }

    try {
      const response = await this.fetchImpl(url, requestInit);

      if (!response.ok) {
        const text = await safeReadText(response);
        throw new UnifiAccessHttpError(`Request failed with status ${response.status}`, response.status, text);
      }

      return await this.parseResponse(response, responseType);
    } finally {
      cleanup();
    }
  }

  private buildUrl(pathTemplate: string, pathParams: Record<string, unknown> | undefined, query: Record<string, unknown> | undefined) {
    const resolvedPath = this.interpolatePath(pathTemplate, pathParams);
    const url = new URL(resolvedPath, this.baseUrl);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            if (item === undefined || item === null) continue;
            url.searchParams.append(key, stringifyQueryValue(item));
          }
        } else {
          url.searchParams.set(key, stringifyQueryValue(value));
        }
      }
    }

    return url.toString();
  }

  private buildHeaders(
    definition: EndpointDefinition<any, any, any, any, any>,
    options: Partial<EndpointCallOptions<any>>,
  ) {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.options.apiKey}`,
      ...this.defaultHeaders,
      ...(definition.headers ?? {}),
      ...(options.headers ?? {}),
    };

    return headers;
  }

  private prepareBody(
    definition: EndpointDefinition<any, any, any, any, any>,
    options: Partial<EndpointCallOptions<any>>,
    headers: Record<string, string>,
  ) {
    const body = (options as any).body as RequestBodyValue | undefined;
    if (body === undefined) {
      return undefined;
    }

    const raw = options.rawBody ?? definition.rawBody ?? false;
    if (raw) {
      return body as BodyInit;
    }

    if (isBodyInit(body)) {
      return body as BodyInit;
    }

    if (typeof body === 'object') {
      if (!headers['Content-Type']) {
        headers['Content-Type'] = JSON_CONTENT_TYPE;
      }
      return JSON.stringify(body);
    }

    if (typeof body === 'number' || typeof body === 'boolean') {
      if (!headers['Content-Type']) {
        headers['Content-Type'] = JSON_CONTENT_TYPE;
      }
      return JSON.stringify(body);
    }

    return body as BodyInit;
  }

  private async parseResponse(response: Response, responseType: ResponseType) {
    switch (responseType) {
      case 'arrayBuffer': {
        const data = await response.arrayBuffer();
        const disposition = response.headers.get('content-disposition') ?? '';
        const mimeType = response.headers.get('content-type') ?? undefined;
        return {
          data,
          filename: extractFilename(disposition),
          mimeType,
        } satisfies FileResponse as FileResponse;
      }
      case 'text':
        return response.text();
      case 'json':
      default: {
        const json = await response.json();
        if (json && typeof json === 'object' && 'code' in json && json.code !== 'SUCCESS') {
          throw new UnifiAccessApiError(
            json.msg ?? 'UniFi Access API error',
            response.status,
            json.code,
            json,
          );
        }
        return json;
      }
    }
  }

  private interpolatePath(path: string, params?: Record<string, unknown>) {
    if (!params) {
      return path;
    }
    return path.replace(/:([A-Za-z0-9_]+)/g, (segment, key) => {
      if (!(key in params)) {
        throw new Error(`Missing path parameter '${key}' for path '${path}'`);
      }
      const value = params[key];
      if (value === undefined || value === null) {
        throw new Error(`Path parameter '${key}' is undefined`);
      }
      return encodeURIComponent(String(value));
    });
  }

  private buildSignal(userSignal?: AbortSignal, overrideTimeout?: number) {
    const timeout = overrideTimeout ?? this.timeoutMs;
    if (!timeout && !userSignal) {
      return { signal: undefined, cleanup: () => {} };
    }

    if (typeof AbortController === 'undefined') {
      return {
        signal: userSignal,
        cleanup: () => {},
      };
    }

    if (!timeout) {
      return {
        signal: userSignal,
        cleanup: () => {},
      };
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    if (userSignal) {
      if (userSignal.aborted) {
        clearTimeout(timer);
        controller.abort(userSignal.reason);
      } else {
        userSignal.addEventListener(
          'abort',
          () => {
            clearTimeout(timer);
            controller.abort(userSignal.reason);
          },
          { once: true },
        );
      }
    }

    return {
      signal: controller.signal,
      cleanup: () => clearTimeout(timer),
    };
  }
}

function stringifyQueryValue(value: unknown): string {
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : '';
  return String(value);
}

function ensureTrailingSlash(input: string | URL) {
  const url = new URL(input.toString());
  if (!url.pathname.endsWith('/')) {
    url.pathname += '/';
  }
  return url;
}

async function safeReadText(response: Response) {
  try {
    return await response.text();
  } catch (error) {
    return undefined;
  }
}

function extractFilename(disposition: string) {
  const match = /filename\*=UTF-8''([^;]+)|filename=\"?([^\";]+)\"?/i.exec(disposition);
  if (!match) return undefined;
  return decodeURIComponent(match[1] ?? match[2] ?? '');
}

export interface UnifiAccessApi extends ApiMethods {}
