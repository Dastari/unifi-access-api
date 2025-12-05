[**unifi-access-api v1.0.4**](../README.md)

***

Defined in: [src/client.ts:102](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/client.ts#L102)

## Extends

- `ApiMethods`

## Implements

- `ApiMethods`

## Constructors

### Constructor

> **new UnifiAccessApi**(`options`): `UnifiAccessApi`

Defined in: [src/client.ts:109](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/client.ts#L109)

#### Parameters

##### options

`UnifiAccessApiOptions`

#### Returns

`UnifiAccessApi`

## Properties

### assignIdentityResourcesToUser

> `readonly` **assignIdentityResourcesToUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:913](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L913)

Assign Identity Resources To User.

Performs a POST request to `/api/v1/developer/users/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUser`

***

### assignIdentityResourcesToUserGroup

> `readonly` **assignIdentityResourcesToUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:931](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L931)

Assign Identity Resources To User Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUserGroup`

***

### assignLicensePlatesToUser

> `readonly` **assignLicensePlatesToUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignLicensePlatesRequest`](../type-aliases/AssignLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:256](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L256)

Assign License Plates To User.

Performs a PUT request to `/api/v1/developer/users/:id/license_plates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignLicensePlatesToUser`

***

### assignTouchPassToUser

> `readonly` **assignTouchPassToUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`TouchPassAssignmentResponse`](../type-aliases/TouchPassAssignmentResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:229](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L229)

Assign Touch Pass To User.

Performs a PUT request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignTouchPassToUser`

***

### assignUserNfcCard

> `readonly` **assignUserNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignNfcCardRequest`](../interfaces/AssignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:67](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L67)

Assign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserNfcCard`

***

### assignUserPinCode

> `readonly` **assignUserPinCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignPinCodeRequest`](../interfaces/AssignPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:85](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L85)

Assign User Pin Code.

Performs a PUT request to `/api/v1/developer/users/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserPinCode`

***

### assignUsersToGroup

> `readonly` **assignUsersToGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:148](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L148)

Assign Users To Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUsersToGroup`

***

### assignVisitorLicensePlates

> `readonly` **assignVisitorLicensePlates**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorLicensePlatesRequest`](../interfaces/AssignVisitorLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:382](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L382)

Assign Visitor License Plates.

Performs a PUT request to `/api/v1/developer/visitors/:id/license_plates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorLicensePlates`

***

### assignVisitorNfcCard

> `readonly` **assignVisitorNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorNfcCardRequest`](../interfaces/AssignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:328](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L328)

Assign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorNfcCard`

***

### assignVisitorPinCode

> `readonly` **assignVisitorPinCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorPinCodeRequest`](../interfaces/AssignVisitorPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:346](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L346)

Assign Visitor Pin Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorPinCode`

***

### assignVisitorQrCode

> `readonly` **assignVisitorQrCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:364](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L364)

Assign Visitor Qr Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorQrCode`

***

### batchAssignTouchPasses

> `readonly` **batchAssignTouchPasses**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`BatchAssignTouchPassRequest`](../interfaces/BatchAssignTouchPassRequest.md), [`BatchAssignTouchPassResponse`](../type-aliases/BatchAssignTouchPassResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:247](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L247)

Batch Assign Touch Passes.

Performs a PUT request to `/api/v1/developer/users/touch_passes/assign`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.batchAssignTouchPasses`

***

### createAccessPolicy

> `readonly` **createAccessPolicy**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateAccessPolicyRequest`](../interfaces/CreateAccessPolicyRequest.md), [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:400](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L400)

Create Access Policy.

Performs a POST request to `/api/v1/developer/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createAccessPolicy`

***

### createDoorGroup

> `readonly` **createDoorGroup**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateDoorGroupRequest`](../interfaces/CreateDoorGroupRequest.md), [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:688](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L688)

Create Door Group.

Performs a POST request to `/api/v1/developer/door_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createDoorGroup`

***

### createHolidayGroup

> `readonly` **createHolidayGroup**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateHolidayGroupRequest`](../interfaces/CreateHolidayGroupRequest.md), [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:445](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L445)

Create Holiday Group.

Performs a POST request to `/api/v1/developer/access_policies/holiday_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createHolidayGroup`

***

### createNfcEnrollmentSession

> `readonly` **createNfcEnrollmentSession**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateNfcEnrollmentSessionRequest`](../interfaces/CreateNfcEnrollmentSessionRequest.md), [`CreateNfcEnrollmentSessionResponse`](../type-aliases/CreateNfcEnrollmentSessionResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:544](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L544)

Create Nfc Enrollment Session.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/sessions`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createNfcEnrollmentSession`

***

### createSchedule

> `readonly` **createSchedule**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateScheduleRequest`](../interfaces/CreateScheduleRequest.md), [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:490](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L490)

Create Schedule.

Performs a POST request to `/api/v1/developer/access_policies/schedules`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createSchedule`

***

### createUser

> `readonly` **createUser**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateUserRequest`](../interfaces/CreateUserRequest.md), [`CreateUserResponse`](../type-aliases/CreateUserResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:22](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L22)

Create User.

Performs a POST request to `/api/v1/developer/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUser`

***

### createUserGroup

> `readonly` **createUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateUserGroupRequest`](../interfaces/CreateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:103](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L103)

Create User Group.

Performs a POST request to `/api/v1/developer/user_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUserGroup`

***

### createVisitor

> `readonly` **createVisitor**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`CreateVisitorRequest`](../interfaces/CreateVisitorRequest.md), [`CreateVisitorResponse`](../type-aliases/CreateVisitorResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:283](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L283)

Create Visitor.

Performs a POST request to `/api/v1/developer/visitors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createVisitor`

***

### createWebhookEndpoint

> `readonly` **createWebhookEndpoint**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:958](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L958)

Create Webhook Endpoint.

Performs a POST request to `/api/v1/developer/webhooks/endpoints`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createWebhookEndpoint`

***

### deleteAccessPolicy

> `readonly` **deleteAccessPolicy**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:418](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L418)

Delete Access Policy.

Performs a DELETE request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteAccessPolicy`

***

### deleteApiServerCertificate

> `readonly` **deleteApiServerCertificate**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:994](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L994)

Delete Api Server Certificate.

Performs a DELETE request to `/api/v1/developer/api_server/certificates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteApiServerCertificate`

***

### deleteDoorGroupById

> `readonly` **deleteDoorGroupById**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:724](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L724)

Delete Door Group By Id.

Performs a DELETE request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteDoorGroupById`

***

### deleteHolidayGroup

> `readonly` **deleteHolidayGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:463](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L463)

Delete Holiday Group.

Performs a DELETE request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteHolidayGroup`

***

### deleteNfcCard

> `readonly` **deleteNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:589](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L589)

Delete Nfc Card.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcCard`

***

### deleteNfcEnrollmentSession

> `readonly` **deleteNfcEnrollmentSession**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:562](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L562)

Delete Nfc Enrollment Session.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcEnrollmentSession`

***

### deleteSchedule

> `readonly` **deleteSchedule**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:526](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L526)

Delete Schedule.

Performs a DELETE request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteSchedule`

***

### deleteUser

> `readonly` **deleteUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:211](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L211)

Delete User.

Performs a DELETE request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUser`

***

### deleteUserGroup

> `readonly` **deleteUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:139](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L139)

Delete User Group.

Performs a DELETE request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUserGroup`

***

### deleteVisitor

> `readonly` **deleteVisitor**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:319](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L319)

Delete Visitor.

Performs a DELETE request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteVisitor`

***

### deleteWebhookEndpoint

> `readonly` **deleteWebhookEndpoint**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:976](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L976)

Delete Webhook Endpoint.

Performs a DELETE request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteWebhookEndpoint`

***

### downloadTouchPassQrCode

> `readonly` **downloadTouchPassQrCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:661](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L661)

Download Touch Pass Qr Code.

Performs a GET request to `/api/v1/developer/credentials/qr_codes/download/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.downloadTouchPassQrCode`

***

### exportSystemLogs

> `readonly` **exportSystemLogs**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:832](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L832)

Export System Logs.

Performs a POST request to `/api/v1/developer/system/logs/export`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.exportSystemLogs`

***

### fetchAccessPolicy

> `readonly` **fetchAccessPolicy**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:427](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L427)

Fetch Access Policy.

Performs a GET request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAccessPolicy`

***

### fetchAllAccessPolicies

> `readonly` **fetchAllAccessPolicies**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`AccessPoliciesResponse`](../interfaces/AccessPoliciesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:436](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L436)

Fetch All Access Policies.

Performs a GET request to `/api/v1/developer/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllAccessPolicies`

***

### fetchAllDoorGroups

> `readonly` **fetchAllDoorGroups**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`DoorGroupsResponse`](../type-aliases/DoorGroupsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:715](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L715)

Fetch All Door Groups.

Performs a GET request to `/api/v1/developer/door_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoorGroups`

***

### fetchAllDoors

> `readonly` **fetchAllDoors**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`DoorsResponse`](../type-aliases/DoorsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:742](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L742)

Fetch All Doors.

Performs a GET request to `/api/v1/developer/doors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoors`

***

### fetchAllHolidayGroups

> `readonly` **fetchAllHolidayGroups**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`HolidayGroupsResponse`](../type-aliases/HolidayGroupsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:481](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L481)

Fetch All Holiday Groups.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllHolidayGroups`

***

### fetchAllNfcCards

> `readonly` **fetchAllNfcCards**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`NfcCardsResponse`](../interfaces/NfcCardsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:580](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L580)

Fetch All Nfc Cards.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllNfcCards`

***

### fetchAllSchedules

> `readonly` **fetchAllSchedules**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`SchedulesResponse`](../type-aliases/SchedulesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:517](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L517)

Fetch All Schedules.

Performs a GET request to `/api/v1/developer/access_policies/schedules`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllSchedules`

***

### fetchAllUserGroups

> `readonly` **fetchAllUserGroups**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`FetchAllUserGroupsResponse`](../type-aliases/FetchAllUserGroupsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:112](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L112)

Fetch All User Groups.

Performs a GET request to `/api/v1/developer/user_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUserGroups`

***

### fetchAllUsers

> `readonly` **fetchAllUsers**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, [`FetchUsersQuery`](../interfaces/FetchUsersQuery.md), `undefined`, [`FetchAllUsersResponse`](../type-aliases/FetchAllUsersResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:49](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L49)

Fetch All Users.

Performs a GET request to `/api/v1/developer/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsers`

***

### fetchAllUsersInGroup

> `readonly` **fetchAllUsersInGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:175](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L175)

Fetch All Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users/all`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsersInGroup`

***

### fetchAllVisitors

> `readonly` **fetchAllVisitors**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `expand[]?`: `string` \| `string`[]; `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; `status?`: `number`; \}, `undefined`, [`FetchVisitorsResponse`](../type-aliases/FetchVisitorsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:301](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L301)

Fetch All Visitors.

Performs a GET request to `/api/v1/developer/visitors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllVisitors`

***

### fetchAssignableTouchPasses

> `readonly` **fetchAssignableTouchPasses**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`AssignableTouchPassesResponse`](../type-aliases/AssignableTouchPassesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:625](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L625)

Fetch Assignable Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/assignable`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAssignableTouchPasses`

***

### fetchAvailableIdentityResources

> `readonly` **fetchAvailableIdentityResources**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `resource_type?`: `string`; \}, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:904](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L904)

Fetch Available Identity Resources.

Performs a GET request to `/api/v1/developer/users/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAvailableIdentityResources`

***

### fetchDeviceAccessSettings

> `readonly` **fetchDeviceAccessSettings**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `device_id`: `string`; \}, `undefined`, `undefined`, [`DeviceAccessMethodSettingsResponse`](../type-aliases/DeviceAccessMethodSettingsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:805](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L805)

Fetch Device Access Settings.

Performs a GET request to `/api/v1/developer/devices/:device_id/settings`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDeviceAccessSettings`

***

### fetchDevices

> `readonly` **fetchDevices**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`DevicesResponse`](../type-aliases/DevicesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:796](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L796)

Fetch Devices.

Performs a GET request to `/api/v1/developer/devices`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDevices`

***

### fetchDoorById

> `readonly` **fetchDoorById**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorResponse`](../type-aliases/DoorResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:733](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L733)

Fetch Door By Id.

Performs a GET request to `/api/v1/developer/doors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorById`

***

### fetchDoorEmergencyStatus

> `readonly` **fetchDoorEmergencyStatus**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`DoorEmergencyStatusResponse`](../type-aliases/DoorEmergencyStatusResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:787](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L787)

Fetch Door Emergency Status.

Performs a GET request to `/api/v1/developer/doors/settings/emergency`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorEmergencyStatus`

***

### fetchDoorGroupById

> `readonly` **fetchDoorGroupById**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:697](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L697)

Fetch Door Group By Id.

Performs a GET request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupById`

***

### fetchDoorGroupTopology

> `readonly` **fetchDoorGroupTopology**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`DoorTopologyResponse`](../type-aliases/DoorTopologyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:679](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L679)

Fetch Door Group Topology.

Performs a GET request to `/api/v1/developer/door_groups/topology`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupTopology`

***

### fetchDoorLockRule

> `readonly` **fetchDoorLockRule**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorLockRuleResponse`](../type-aliases/DoorLockRuleResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:769](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L769)

Fetch Door Lock Rule.

Performs a GET request to `/api/v1/developer/doors/:id/lock_rule`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorLockRule`

***

### fetchHolidayGroup

> `readonly` **fetchHolidayGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:472](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L472)

Fetch Holiday Group.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchHolidayGroup`

***

### fetchIdentityResourcesForUser

> `readonly` **fetchIdentityResourcesForUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:922](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L922)

Fetch Identity Resources For User.

Performs a GET request to `/api/v1/developer/users/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUser`

***

### fetchIdentityResourcesForUserGroup

> `readonly` **fetchIdentityResourcesForUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:940](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L940)

Fetch Identity Resources For User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUserGroup`

***

### fetchNfcCard

> `readonly` **fetchNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`NfcCardResponse`](../type-aliases/NfcCardResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:571](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L571)

Fetch Nfc Card.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcCard`

***

### fetchNfcEnrollmentStatus

> `readonly` **fetchNfcEnrollmentStatus**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`NfcEnrollmentStatusResponse`](../type-aliases/NfcEnrollmentStatusResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:553](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L553)

Fetch Nfc Enrollment Status.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcEnrollmentStatus`

***

### fetchSchedule

> `readonly` **fetchSchedule**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:508](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L508)

Fetch Schedule.

Performs a GET request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSchedule`

***

### fetchSystemLogResource

> `readonly` **fetchSystemLogResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SystemLogResourceResponse`](../interfaces/SystemLogResourceResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:841](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L841)

Fetch System Log Resource.

Performs a GET request to `/api/v1/developer/system/logs/resource/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogResource`

***

### fetchSystemLogs

> `readonly` **fetchSystemLogs**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, [`SystemLogQuery`](../interfaces/SystemLogQuery.md), [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`SystemLogsResponse`](../interfaces/SystemLogsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:823](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L823)

Fetch System Logs.

Performs a POST request to `/api/v1/developer/system/logs`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogs`

***

### fetchSystemStaticResource

> `readonly` **fetchSystemStaticResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `path`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:850](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L850)

Fetch System Static Resource.

Performs a GET request to `/api/v1/developer/system/static/:path`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemStaticResource`

***

### fetchTouchPassDetails

> `readonly` **fetchTouchPassDetails**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:643](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L643)

Fetch Touch Pass Details.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassDetails`

***

### fetchTouchPassList

> `readonly` **fetchTouchPassList**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; `status?`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:607](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L607)

Fetch Touch Pass List.

Performs a GET request to `/api/v1/developer/credentials/touch_passes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassList`

***

### fetchUser

> `readonly` **fetchUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, [`FetchUserQuery`](../interfaces/FetchUserQuery.md), `undefined`, [`FetchUserResponse`](../type-aliases/FetchUserResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:40](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L40)

Fetch User.

Performs a GET request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUser`

***

### fetchUserAccessPolicies

> `readonly` **fetchUserAccessPolicies**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, [`FetchUserAccessPoliciesQuery`](../interfaces/FetchUserAccessPoliciesQuery.md), `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:184](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L184)

Fetch User Access Policies.

Performs a GET request to `/api/v1/developer/users/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserAccessPolicies`

***

### fetchUserGroup

> `readonly` **fetchUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchUserGroupResponse`](../type-aliases/FetchUserGroupResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:121](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L121)

Fetch User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroup`

***

### fetchUserGroupAccessPolicies

> `readonly` **fetchUserGroupAccessPolicies**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:202](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L202)

Fetch User Group Access Policies.

Performs a GET request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroupAccessPolicies`

***

### fetchUsersInGroup

> `readonly` **fetchUsersInGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:166](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L166)

Fetch Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUsersInGroup`

***

### fetchVisitor

> `readonly` **fetchVisitor**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchVisitorResponse`](../type-aliases/FetchVisitorResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:292](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L292)

Fetch Visitor.

Performs a GET request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchVisitor`

***

### fetchWebhookEndpoints

> `readonly` **fetchWebhookEndpoints**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`WebhookEndpointsResponse`](../type-aliases/WebhookEndpointsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:949](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L949)

Fetch Webhook Endpoints.

Performs a GET request to `/api/v1/developer/webhooks/endpoints`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchWebhookEndpoints`

***

### generatePinCode

> `readonly` **generatePinCode**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, `undefined`, [`GeneratePinCodeResponse`](../type-aliases/GeneratePinCodeResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:535](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L535)

Generate Pin Code.

Performs a POST request to `/api/v1/developer/credentials/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.generatePinCode`

***

### getAvatarResource

> `readonly` **getAvatarResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `resourceId`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:859](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L859)

Get Avatar Resource.

Performs a GET request to `/api/v1/developer/system/static/avatar/:resourceId`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getAvatarResource`

***

### getPreviewResource

> `readonly` **getPreviewResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:868](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L868)

Get Preview Resource.

Performs a GET request to `/api/v1/developer/system/static/preview/:resourceName`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getPreviewResource`

***

### getThumbnailResource

> `readonly` **getThumbnailResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:886](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L886)

Get Thumbnail Resource.

Performs a GET request to `/api/v1/developer/system/static/activities_resource/thumbnail/:resourceName`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getThumbnailResource`

***

### getVideoResource

> `readonly` **getVideoResource**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

Defined in: [src/unifi-access-api.docs.ts:877](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L877)

Get Video Resource.

Performs a GET request to `/api/v1/developer/system/static/activities_resource/video/:resourceName`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getVideoResource`

***

### importThirdPartyNfcCards

> `readonly` **importThirdPartyNfcCards**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`ImportThirdPartyNfcCardsResponse`](../type-aliases/ImportThirdPartyNfcCardsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:670](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L670)

Import Third Party Nfc Cards.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/import`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.importThirdPartyNfcCards`

***

### purchaseTouchPasses

> `readonly` **purchaseTouchPasses**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`PurchaseTouchPassesRequest`](../interfaces/PurchaseTouchPassesRequest.md), [`PurchaseTouchPassResponse`](../type-aliases/PurchaseTouchPassResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:652](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L652)

Purchase Touch Passes.

Performs a POST request to `/api/v1/developer/credentials/touch_passes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.purchaseTouchPasses`

***

### searchTouchPasses

> `readonly` **searchTouchPasses**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, \{ `condition`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:616](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L616)

Search Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/search`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchTouchPasses`

***

### searchUsers

> `readonly` **searchUsers**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, [`SearchUsersQuery`](../interfaces/SearchUsersQuery.md), `undefined`, [`SearchUsersResponse`](../type-aliases/SearchUsersResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:220](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L220)

Search Users.

Performs a GET request to `/api/v1/developer/users/search`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchUsers`

***

### sendIdentityInvitations

> `readonly` **sendIdentityInvitations**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`IdentityInvitationRequestItem`](../interfaces/IdentityInvitationRequestItem.md)[], [`IdentityInvitationResponse`](../type-aliases/IdentityInvitationResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:895](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L895)

Send Identity Invitations.

Performs a POST request to `/api/v1/developer/users/identity/invitations`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.sendIdentityInvitations`

***

### setDoorEmergencyStatus

> `readonly` **setDoorEmergencyStatus**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`DoorEmergencyStatusRequest`](../interfaces/DoorEmergencyStatusRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:778](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L778)

Set Door Emergency Status.

Performs a PUT request to `/api/v1/developer/doors/settings/emergency`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorEmergencyStatus`

***

### setDoorLockRule

> `readonly` **setDoorLockRule**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`DoorLockRuleRequest`](../interfaces/DoorLockRuleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:760](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L760)

Set Door Lock Rule.

Performs a PUT request to `/api/v1/developer/doors/:id/lock_rule`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorLockRule`

***

### unassignLicensePlateFromUser

> `readonly` **unassignLicensePlateFromUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `license_plate_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:265](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L265)

Unassign License Plate From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/license_plates/:license_plate_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignLicensePlateFromUser`

***

### unassignTouchPassFromUser

> `readonly` **unassignTouchPassFromUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:238](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L238)

Unassign Touch Pass From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignTouchPassFromUser`

***

### unassignUserNfcCard

> `readonly` **unassignUserNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UnassignNfcCardRequest`](../interfaces/UnassignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:76](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L76)

Unassign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserNfcCard`

***

### unassignUserPinCode

> `readonly` **unassignUserPinCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:94](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L94)

Unassign User Pin Code.

Performs a DELETE request to `/api/v1/developer/users/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserPinCode`

***

### unassignUsersFromGroup

> `readonly` **unassignUsersFromGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:157](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L157)

Unassign Users From Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUsersFromGroup`

***

### unassignVisitorLicensePlate

> `readonly` **unassignVisitorLicensePlate**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `license_plate_id`: `string`; `visitor_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:391](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L391)

Unassign Visitor License Plate.

Performs a DELETE request to `/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorLicensePlate`

***

### unassignVisitorNfcCard

> `readonly` **unassignVisitorNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UnassignVisitorNfcCardRequest`](../interfaces/UnassignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:337](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L337)

Unassign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorNfcCard`

***

### unassignVisitorPinCode

> `readonly` **unassignVisitorPinCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:355](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L355)

Unassign Visitor Pin Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorPinCode`

***

### unassignVisitorQrCode

> `readonly` **unassignVisitorQrCode**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:373](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L373)

Unassign Visitor Qr Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorQrCode`

***

### unlockDoor

> `readonly` **unlockDoor**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UnlockDoorRequest`](../interfaces/UnlockDoorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:751](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L751)

Unlock Door.

Performs a PUT request to `/api/v1/developer/doors/:id/unlock`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unlockDoor`

***

### updateAccessPolicy

> `readonly` **updateAccessPolicy**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateAccessPolicyRequest`](../interfaces/UpdateAccessPolicyRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:409](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L409)

Update Access Policy.

Performs a PUT request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateAccessPolicy`

***

### updateDeviceAccessSettings

> `readonly` **updateDeviceAccessSettings**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `device_id`: `string`; \}, `undefined`, [`AccessMethodSettings`](../interfaces/AccessMethodSettings.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:814](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L814)

Update Device Access Settings.

Performs a PUT request to `/api/v1/developer/devices/:device_id/settings`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDeviceAccessSettings`

***

### updateDoorGroupById

> `readonly` **updateDoorGroupById**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateDoorGroupRequest`](../interfaces/UpdateDoorGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:706](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L706)

Update Door Group By Id.

Performs a PUT request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDoorGroupById`

***

### updateHolidayGroup

> `readonly` **updateHolidayGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateHolidayGroupRequest`](../interfaces/UpdateHolidayGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:454](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L454)

Update Holiday Group.

Performs a PUT request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateHolidayGroup`

***

### updateNfcCard

> `readonly` **updateNfcCard**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `token`: `string`; \}, `undefined`, [`UpdateNfcCardRequest`](../interfaces/UpdateNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:598](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L598)

Update Nfc Card.

Performs a PUT request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateNfcCard`

***

### updateSchedule

> `readonly` **updateSchedule**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateScheduleRequest`](../interfaces/UpdateScheduleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:499](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L499)

Update Schedule.

Performs a PUT request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateSchedule`

***

### updateTouchPass

> `readonly` **updateTouchPass**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateTouchPassRequest`](../interfaces/UpdateTouchPassRequest.md), [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:634](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L634)

Update Touch Pass.

Performs a PUT request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateTouchPass`

***

### updateUser

> `readonly` **updateUser**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserRequest`](../interfaces/UpdateUserRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:31](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L31)

Update User.

Performs a PUT request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUser`

***

### updateUserAccessPolicies

> `readonly` **updateUserAccessPolicies**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserAccessPoliciesRequest`](../interfaces/UpdateUserAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:58](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L58)

Update User Access Policies.

Performs a PUT request to `/api/v1/developer/users/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserAccessPolicies`

***

### updateUserGroup

> `readonly` **updateUserGroup**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserGroupRequest`](../interfaces/UpdateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:130](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L130)

Update User Group.

Performs a PUT request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroup`

***

### updateUserGroupAccessPolicies

> `readonly` **updateUserGroupAccessPolicies**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateGroupAccessPoliciesRequest`](../interfaces/UpdateGroupAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:193](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L193)

Update User Group Access Policies.

Performs a PUT request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroupAccessPolicies`

***

### updateVisitor

> `readonly` **updateVisitor**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`UpdateVisitorRequest`](../interfaces/UpdateVisitorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:310](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L310)

Update Visitor.

Performs a PUT request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateVisitor`

***

### updateWebhookEndpoint

> `readonly` **updateWebhookEndpoint**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:967](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L967)

Update Webhook Endpoint.

Performs a PUT request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateWebhookEndpoint`

***

### uploadApiServerCertificate

> `readonly` **uploadApiServerCertificate**: `EndpointInvoker`\<`EndpointDefinition`\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:985](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L985)

Upload Api Server Certificate.

Performs a POST request to `/api/v1/developer/api_server/certificates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadApiServerCertificate`

***

### uploadUserAvatar

> `readonly` **uploadUserAvatar**: `EndpointInvoker`\<`EndpointDefinition`\<\{ `id`: `string`; \}, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

Defined in: [src/unifi-access-api.docs.ts:274](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/unifi-access-api.docs.ts#L274)

Upload User Avatar.

Performs a POST request to `/api/v1/developer/users/:id/avatar`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadUserAvatar`

## Methods

### createNotificationClient()

> **createNotificationClient**(`overrides`): [`UnifiAccessNotificationClient`](UnifiAccessNotificationClient.md)

Defined in: [src/client.ts:259](https://github.com/Dastari/unifi-access-api/blob/fec89a512171dd436c68a0ea2a4f6eb66d711eef/src/client.ts#L259)

Creates a [UnifiAccessNotificationClient](UnifiAccessNotificationClient.md) configured with the same
credentials as this REST client. Useful for consuming real-time device
notifications over WebSocket without manually supplying connection
parameters.

#### Parameters

##### overrides

`Partial`\<`Omit`\<[`UnifiAccessNotificationClientOptions`](../interfaces/UnifiAccessNotificationClientOptions.md), `"baseUrl"` \| `"apiKey"`\>\> = `{}`

#### Returns

[`UnifiAccessNotificationClient`](UnifiAccessNotificationClient.md)
