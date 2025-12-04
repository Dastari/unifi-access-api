# Changelog

All notable changes to this project will be documented in this file.

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
