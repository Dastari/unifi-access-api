export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface ApiResponse<TData> {
    code: string;
    msg: string;
    data: TData;
    [key: string]: unknown;
}
export interface PaginatedResponse<TItem> extends ApiResponse<TItem[]> {
    pagination: PaginationMeta;
}
export interface PaginationMeta {
    page_num: number;
    page_size: number;
    total: number;
}
export interface PaginationQuery {
    page_num?: number;
    page_size?: number;
}
export type ExpandQuery = {
    'expand[]'?: string | string[];
};
export interface DateRange {
    start_time?: string;
    end_time?: string;
}
export type EmptyObject = Record<string, never>;
export interface FileResponse {
    filename?: string;
    mimeType?: string;
    data: ArrayBuffer;
}
export type BodyLike = string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | null;
export type SuccessOnlyResponse = ApiResponse<null | EmptyObject | undefined>;
//# sourceMappingURL=common.d.ts.map