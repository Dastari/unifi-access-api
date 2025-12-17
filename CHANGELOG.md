# Changelog

All notable changes to this project will be documented in this file.

## [1.2.1] - 2025-12-18
### Fixed
- `deleteVisitor` now accepts the documented `query.is_force` option in TypeScript typings.

## [1.2.0] - 2025-12-16
### Added
- `UNIFI_ACCESS_DEBUG=1` request logging to print every outgoing REST call (method, URL, headers, body) to the console with the Authorization token redacted.

## [1.1.0] - 2025-12-15
### Added
- Exported endpoint definition map (`endpointDefinitions`) plus helper types (`EndpointCallOptions`, `EndpointPathParams`, `EndpointQueryParams`, `EndpointRequestBody`, `EndpointResponse`) so consumers can derive request/response types per endpoint.

### Changed
- Method hover docs now reference the concrete endpoint definition type, so IDE tooltips show the real options shape (`path`/`query`/`body`) and the resolved response type instead of `EndpointFor<'...'>`.

### Docs
- Regenerated TypeDoc markdown output under `docs/api` for the updated exports and endpoint typing helpers.

## [1.0.6] - 2025-12-05
### Fixed
- Static resource endpoints now surface the documented `StaticResourceResponse` type in emitted declaration files, ensuring downstream projects see the semantic alias instead of the generic `FileResponse`.

## [1.0.5] - 2025-12-05
### Added
- Binary helper endpoints `getAvatarResource`, `getPreviewResource`, `getVideoResource`, and `getThumbnailResource` for static UniFi Access resources, all returning the typed `StaticResourceResponse`.
- `StaticResourceResponse` alias covering file downloads exposed through the new helpers and other static endpoints.

### Changed
- README real-time notification section expanded with guidance for wiring the event client via `UnifiAccessApi`.
- Documentation generator script now mirrors the current endpoint typing model to keep IDE hovers and TypeDoc output accurate.
- Regenerated build artifacts and API docs so the new endpoints and types are available to consumers.

## [1.0.4] - 2025-12-04
### Fixed
- Preserve endpoint generic parameters when deriving client method signatures so top-level consumers no longer need `path` placeholders for endpoints without path params.

## [1.0.3] - 2025-12-04
### Fixed
- Ensure module augmentations are loaded from the package entrypoint so method documentation and editor hovers remain accurate.

## [1.0.2] - 2025-12-04
### Added
- WebSocket-based `UnifiAccessNotificationClient` with auto-reconnect and typed events.
- `UnifiAccessApi.createNotificationClient()` helper for real-time notifications.

### Changed
- Replaced all endpoint definitions with a strongly typed `defineEndpoint` helper, fixing optional `path` typings (no more `as any` casts required by consumers).
- Expanded JSDoc/TypeDoc coverage and regenerated Markdown docs.
- README updates noting UniFi Access API v3.3.21 support and documenting notification usage.

### Tooling
- Added generation script for method documentation (`src/unifi-access-api.docs.ts`) to keep hover text in sync.

## [1.0.1] - 2025-11-15
- Initial public release of the TypeScript UniFi Access API client.
