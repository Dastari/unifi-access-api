import { endpointDefinitions } from './endpoints/index.js';
import { createNotificationClientFromApiOptions, } from './events/notification-client.js';
import { JSON_CONTENT_TYPE, } from './internal/endpoint.js';
export class UnifiAccessApiError extends Error {
    status;
    code;
    response;
    constructor(message, status, code, response) {
        super(message);
        this.status = status;
        this.code = code;
        this.response = response;
        this.name = 'UnifiAccessApiError';
    }
}
export class UnifiAccessHttpError extends Error {
    status;
    body;
    constructor(message, status, body) {
        super(message);
        this.status = status;
        this.body = body;
        this.name = 'UnifiAccessHttpError';
    }
}
const isReadableStream = (value) => {
    return typeof value === 'object' && value !== null && 'getReader' in value && typeof value.getReader === 'function';
};
const isFormData = (value) => typeof FormData !== 'undefined' && value instanceof FormData;
const isArrayBuffer = (value) => typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
const isArrayBufferView = (value) => typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value);
const isBlob = (value) => typeof Blob !== 'undefined' && value instanceof Blob;
const isURLSearchParams = (value) => typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
const isBodyInit = (value) => {
    return (typeof value === 'string' ||
        isBlob(value) ||
        isFormData(value) ||
        isArrayBuffer(value) ||
        isArrayBufferView(value) ||
        isReadableStream(value) ||
        isURLSearchParams(value) ||
        value === null);
};
export class UnifiAccessApi {
    options;
    baseUrl;
    fetchImpl;
    defaultHeaders;
    agent;
    timeoutMs;
    constructor(options) {
        this.options = options;
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
    attachEndpoints() {
        for (const key of Object.keys(endpointDefinitions)) {
            const definition = endpointDefinitions[key];
            Object.defineProperty(this, key, {
                value: (options) => this.invoke(definition, options ?? {}),
                enumerable: false,
                configurable: false,
                writable: false,
            });
        }
    }
    async invoke(definition, options) {
        const normalizedOptions = options;
        const pathParams = normalizedOptions.path;
        const queryParams = normalizedOptions.query;
        const url = this.buildUrl(definition.path, pathParams, queryParams);
        const headers = this.buildHeaders(definition, normalizedOptions);
        const body = this.prepareBody(definition, normalizedOptions, headers);
        const responseType = normalizedOptions.responseType ?? definition.responseType ?? 'json';
        const { signal, cleanup } = this.buildSignal(normalizedOptions.signal, normalizedOptions.timeoutMs);
        const requestInit = {
            method: definition.method,
            headers,
            body: body,
            signal,
        };
        if (this.agent) {
            requestInit.agent = this.agent;
        }
        try {
            if (isUnifiAccessDebugEnabled()) {
                logUnifiAccessRequest(url, requestInit);
            }
            const response = await this.fetchImpl(url, requestInit);
            if (!response.ok) {
                const text = await safeReadText(response);
                throw new UnifiAccessHttpError(`Request failed with status ${response.status}`, response.status, text);
            }
            return await this.parseResponse(response, responseType);
        }
        finally {
            cleanup();
        }
    }
    buildUrl(pathTemplate, pathParams, query) {
        const resolvedPath = this.interpolatePath(pathTemplate, pathParams);
        const url = new URL(resolvedPath, this.baseUrl);
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value === undefined || value === null)
                    continue;
                if (Array.isArray(value)) {
                    for (const item of value) {
                        if (item === undefined || item === null)
                            continue;
                        url.searchParams.append(key, stringifyQueryValue(item));
                    }
                }
                else {
                    url.searchParams.set(key, stringifyQueryValue(value));
                }
            }
        }
        return url.toString();
    }
    buildHeaders(definition, options) {
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${this.options.apiKey}`,
            ...this.defaultHeaders,
            ...(definition.headers ?? {}),
            ...(options.headers ?? {}),
        };
        return headers;
    }
    prepareBody(definition, options, headers) {
        const body = options.body;
        if (body === undefined) {
            return undefined;
        }
        const raw = options.rawBody ?? definition.rawBody ?? false;
        if (raw) {
            return body;
        }
        if (isBodyInit(body)) {
            return body;
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
        return body;
    }
    /**
     * Creates a {@link UnifiAccessNotificationClient} configured with the same
     * credentials as this REST client. Useful for consuming real-time device
     * notifications over WebSocket without manually supplying connection
     * parameters.
     */
    createNotificationClient(overrides = {}) {
        return createNotificationClientFromApiOptions(this.options, overrides);
    }
    async parseResponse(response, responseType) {
        switch (responseType) {
            case 'arrayBuffer': {
                const data = await response.arrayBuffer();
                const disposition = response.headers.get('content-disposition') ?? '';
                const mimeType = response.headers.get('content-type') ?? undefined;
                return {
                    data,
                    filename: extractFilename(disposition),
                    mimeType,
                };
            }
            case 'text':
                return response.text();
            case 'json':
            default: {
                const json = await response.json();
                if (json && typeof json === 'object' && 'code' in json && json.code !== 'SUCCESS') {
                    throw new UnifiAccessApiError(json.msg ?? 'UniFi Access API error', response.status, json.code, json);
                }
                return json;
            }
        }
    }
    interpolatePath(path, params) {
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
    buildSignal(userSignal, overrideTimeout) {
        const timeout = overrideTimeout ?? this.timeoutMs;
        if (!timeout && !userSignal) {
            return { signal: undefined, cleanup: () => { } };
        }
        if (typeof AbortController === 'undefined') {
            return {
                signal: userSignal,
                cleanup: () => { },
            };
        }
        if (!timeout) {
            return {
                signal: userSignal,
                cleanup: () => { },
            };
        }
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);
        if (userSignal) {
            if (userSignal.aborted) {
                clearTimeout(timer);
                controller.abort(userSignal.reason);
            }
            else {
                userSignal.addEventListener('abort', () => {
                    clearTimeout(timer);
                    controller.abort(userSignal.reason);
                }, { once: true });
            }
        }
        return {
            signal: controller.signal,
            cleanup: () => clearTimeout(timer),
        };
    }
}
function stringifyQueryValue(value) {
    if (typeof value === 'boolean')
        return value ? 'true' : 'false';
    if (typeof value === 'number')
        return Number.isFinite(value) ? String(value) : '';
    return String(value);
}
function ensureTrailingSlash(input) {
    const url = new URL(input.toString());
    if (!url.pathname.endsWith('/')) {
        url.pathname += '/';
    }
    return url;
}
async function safeReadText(response) {
    try {
        return await response.text();
    }
    catch (error) {
        return undefined;
    }
}
function extractFilename(disposition) {
    const match = /filename\*=UTF-8''([^;]+)|filename=\"?([^\";]+)\"?/i.exec(disposition);
    if (!match)
        return undefined;
    return decodeURIComponent(match[1] ?? match[2] ?? '');
}
function isUnifiAccessDebugEnabled() {
    // Support Node (process.env) while remaining safe in browser/bundler contexts.
    const envValue = typeof process !== 'undefined' &&
        typeof process.env !== 'undefined' &&
        process.env &&
        process.env.UNIFI_ACCESS_DEBUG;
    if (envValue === undefined || envValue === null)
        return false;
    if (typeof envValue === 'string') {
        return envValue === '1' || envValue.toLowerCase() === 'true' || envValue.toLowerCase() === 'yes';
    }
    return Boolean(envValue);
}
function logUnifiAccessRequest(url, requestInit) {
    const method = requestInit.method ?? 'GET';
    const headers = redactAuthorizationHeader(requestInit.headers);
    const bodyPreview = previewBody(requestInit.body);
    // Intentionally using console.log (not debug) so the output is visible in most runtimes.
    console.log('[unifi-access-api] HTTP request', {
        method,
        url,
        headers,
        body: bodyPreview,
    });
}
function redactAuthorizationHeader(headers) {
    const obj = headersToObject(headers);
    for (const key of Object.keys(obj)) {
        if (key.toLowerCase() === 'authorization') {
            obj[key] = 'Bearer [REDACTED]';
        }
    }
    return obj;
}
function headersToObject(headers) {
    if (!headers)
        return {};
    if (Array.isArray(headers)) {
        return Object.fromEntries(headers.map(([k, v]) => [String(k), String(v)]));
    }
    // Headers instance
    if (typeof Headers !== 'undefined' && headers instanceof Headers) {
        const out = {};
        headers.forEach((value, key) => {
            out[key] = value;
        });
        return out;
    }
    // Plain object record
    return Object.fromEntries(Object.entries(headers).map(([k, v]) => [k, String(v)]));
}
function previewBody(body) {
    if (body === undefined)
        return undefined;
    if (body === null)
        return null;
    if (typeof body === 'string')
        return body;
    // Try to keep logs readable; show type hints for non-strings.
    if (typeof ArrayBuffer !== 'undefined' && body instanceof ArrayBuffer)
        return `[ArrayBuffer byteLength=${body.byteLength}]`;
    if (typeof Blob !== 'undefined' && body instanceof Blob)
        return `[Blob size=${body.size} type=${body.type}]`;
    if (typeof FormData !== 'undefined' && body instanceof FormData)
        return '[FormData]';
    if (typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams)
        return body.toString();
    return `[Body type=${typeof body}]`;
}
//# sourceMappingURL=client.js.map