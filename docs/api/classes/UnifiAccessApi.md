[**unifi-access-api v1.1.0**](../README.md)

***

Defined in: [src/client.ts:102](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/client.ts#L102)

## Extends

- `ApiMethods`

## Implements

- `ApiMethods`

## Constructors

### Constructor

> **new UnifiAccessApi**(`options`): `UnifiAccessApi`

Defined in: [src/client.ts:109](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/client.ts#L109)

#### Parameters

##### options

`UnifiAccessApiOptions`

#### Returns

`UnifiAccessApi`

## Properties

### assignIdentityResourcesToUser()

> `readonly` **assignIdentityResourcesToUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:908](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L908)

Assign Identity Resources To User.

Performs a POST request to `/api/v1/developer/users/:id/identity/assignments`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUser`

***

### assignIdentityResourcesToUserGroup()

> `readonly` **assignIdentityResourcesToUserGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:926](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L926)

Assign Identity Resources To User Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUserGroup`

***

### assignLicensePlatesToUser()

> `readonly` **assignLicensePlatesToUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:251](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L251)

Assign License Plates To User.

Performs a PUT request to `/api/v1/developer/users/:id/license_plates`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignLicensePlatesRequest`](../type-aliases/AssignLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignLicensePlatesToUser`

***

### assignTouchPassToUser()

> `readonly` **assignTouchPassToUser**: (`options`) => `Promise`\<[`TouchPassAssignmentResponse`](../type-aliases/TouchPassAssignmentResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:224](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L224)

Assign Touch Pass To User.

Performs a PUT request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`TouchPassAssignmentResponse`](../type-aliases/TouchPassAssignmentResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`TouchPassAssignmentResponse`](../type-aliases/TouchPassAssignmentResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignTouchPassToUser`

***

### assignUserNfcCard()

> `readonly` **assignUserNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:62](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L62)

Assign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignNfcCardRequest`](../interfaces/AssignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserNfcCard`

***

### assignUserPinCode()

> `readonly` **assignUserPinCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:80](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L80)

Assign User Pin Code.

Performs a PUT request to `/api/v1/developer/users/:id/pin_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignPinCodeRequest`](../interfaces/AssignPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserPinCode`

***

### assignUsersToGroup()

> `readonly` **assignUsersToGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:143](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L143)

Assign Users To Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUsersToGroup`

***

### assignVisitorLicensePlates()

> `readonly` **assignVisitorLicensePlates**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:377](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L377)

Assign Visitor License Plates.

Performs a PUT request to `/api/v1/developer/visitors/:id/license_plates`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorLicensePlatesRequest`](../interfaces/AssignVisitorLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorLicensePlates`

***

### assignVisitorNfcCard()

> `readonly` **assignVisitorNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:323](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L323)

Assign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorNfcCardRequest`](../interfaces/AssignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorNfcCard`

***

### assignVisitorPinCode()

> `readonly` **assignVisitorPinCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:341](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L341)

Assign Visitor Pin Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorPinCodeRequest`](../interfaces/AssignVisitorPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorPinCode`

***

### assignVisitorQrCode()

> `readonly` **assignVisitorQrCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:359](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L359)

Assign Visitor Qr Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorQrCode`

***

### batchAssignTouchPasses()

> `readonly` **batchAssignTouchPasses**: (`options`) => `Promise`\<[`BatchAssignTouchPassResponse`](../type-aliases/BatchAssignTouchPassResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:242](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L242)

Batch Assign Touch Passes.

Performs a PUT request to `/api/v1/developer/users/touch_passes/assign`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BatchAssignTouchPassRequest`](../interfaces/BatchAssignTouchPassRequest.md), [`BatchAssignTouchPassResponse`](../type-aliases/BatchAssignTouchPassResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`BatchAssignTouchPassResponse`](../type-aliases/BatchAssignTouchPassResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.batchAssignTouchPasses`

***

### createAccessPolicy()

> `readonly` **createAccessPolicy**: (`options`) => `Promise`\<[`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:395](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L395)

Create Access Policy.

Performs a POST request to `/api/v1/developer/access_policies`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateAccessPolicyRequest`](../interfaces/CreateAccessPolicyRequest.md), [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createAccessPolicy`

***

### createDoorGroup()

> `readonly` **createDoorGroup**: (`options`) => `Promise`\<[`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:683](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L683)

Create Door Group.

Performs a POST request to `/api/v1/developer/door_groups`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateDoorGroupRequest`](../interfaces/CreateDoorGroupRequest.md), [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createDoorGroup`

***

### createHolidayGroup()

> `readonly` **createHolidayGroup**: (`options`) => `Promise`\<[`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:440](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L440)

Create Holiday Group.

Performs a POST request to `/api/v1/developer/access_policies/holiday_groups`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateHolidayGroupRequest`](../interfaces/CreateHolidayGroupRequest.md), [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createHolidayGroup`

***

### createNfcEnrollmentSession()

> `readonly` **createNfcEnrollmentSession**: (`options`) => `Promise`\<[`CreateNfcEnrollmentSessionResponse`](../type-aliases/CreateNfcEnrollmentSessionResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:539](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L539)

Create Nfc Enrollment Session.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/sessions`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateNfcEnrollmentSessionRequest`](../interfaces/CreateNfcEnrollmentSessionRequest.md), [`CreateNfcEnrollmentSessionResponse`](../type-aliases/CreateNfcEnrollmentSessionResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`CreateNfcEnrollmentSessionResponse`](../type-aliases/CreateNfcEnrollmentSessionResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createNfcEnrollmentSession`

***

### createSchedule()

> `readonly` **createSchedule**: (`options`) => `Promise`\<[`ScheduleResponse`](../type-aliases/ScheduleResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:485](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L485)

Create Schedule.

Performs a POST request to `/api/v1/developer/access_policies/schedules`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateScheduleRequest`](../interfaces/CreateScheduleRequest.md), [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`ScheduleResponse`](../type-aliases/ScheduleResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createSchedule`

***

### createUser()

> `readonly` **createUser**: (`options`) => `Promise`\<[`CreateUserResponse`](../type-aliases/CreateUserResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:17](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L17)

Create User.

Performs a POST request to `/api/v1/developer/users`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateUserRequest`](../interfaces/CreateUserRequest.md), [`CreateUserResponse`](../type-aliases/CreateUserResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`CreateUserResponse`](../type-aliases/CreateUserResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUser`

***

### createUserGroup()

> `readonly` **createUserGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:98](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L98)

Create User Group.

Performs a POST request to `/api/v1/developer/user_groups`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateUserGroupRequest`](../interfaces/CreateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUserGroup`

***

### createVisitor()

> `readonly` **createVisitor**: (`options`) => `Promise`\<[`CreateVisitorResponse`](../type-aliases/CreateVisitorResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:278](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L278)

Create Visitor.

Performs a POST request to `/api/v1/developer/visitors`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateVisitorRequest`](../interfaces/CreateVisitorRequest.md), [`CreateVisitorResponse`](../type-aliases/CreateVisitorResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`CreateVisitorResponse`](../type-aliases/CreateVisitorResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createVisitor`

***

### createWebhookEndpoint()

> `readonly` **createWebhookEndpoint**: (`options`) => `Promise`\<[`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:953](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L953)

Create Webhook Endpoint.

Performs a POST request to `/api/v1/developer/webhooks/endpoints`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createWebhookEndpoint`

***

### deleteAccessPolicy()

> `readonly` **deleteAccessPolicy**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:413](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L413)

Delete Access Policy.

Performs a DELETE request to `/api/v1/developer/access_policies/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteAccessPolicy`

***

### deleteApiServerCertificate()

> `readonly` **deleteApiServerCertificate**: (`options?`) => `Promise`\<[`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:989](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L989)

Delete Api Server Certificate.

Performs a DELETE request to `/api/v1/developer/api_server/certificates`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteApiServerCertificate`

***

### deleteDoorGroupById()

> `readonly` **deleteDoorGroupById**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:719](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L719)

Delete Door Group By Id.

Performs a DELETE request to `/api/v1/developer/door_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteDoorGroupById`

***

### deleteHolidayGroup()

> `readonly` **deleteHolidayGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:458](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L458)

Delete Holiday Group.

Performs a DELETE request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteHolidayGroup`

***

### deleteNfcCard()

> `readonly` **deleteNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:584](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L584)

Delete Nfc Card.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcCard`

***

### deleteNfcEnrollmentSession()

> `readonly` **deleteNfcEnrollmentSession**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:557](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L557)

Delete Nfc Enrollment Session.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcEnrollmentSession`

***

### deleteSchedule()

> `readonly` **deleteSchedule**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:521](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L521)

Delete Schedule.

Performs a DELETE request to `/api/v1/developer/access_policies/schedules/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteSchedule`

***

### deleteUser()

> `readonly` **deleteUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:206](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L206)

Delete User.

Performs a DELETE request to `/api/v1/developer/users/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUser`

***

### deleteUserGroup()

> `readonly` **deleteUserGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:134](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L134)

Delete User Group.

Performs a DELETE request to `/api/v1/developer/user_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUserGroup`

***

### deleteVisitor()

> `readonly` **deleteVisitor**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:314](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L314)

Delete Visitor.

Performs a DELETE request to `/api/v1/developer/visitors/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteVisitor`

***

### deleteWebhookEndpoint()

> `readonly` **deleteWebhookEndpoint**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:971](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L971)

Delete Webhook Endpoint.

Performs a DELETE request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteWebhookEndpoint`

***

### downloadTouchPassQrCode()

> `readonly` **downloadTouchPassQrCode**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:656](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L656)

Download Touch Pass Qr Code.

Performs a GET request to `/api/v1/developer/credentials/qr_codes/download/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.downloadTouchPassQrCode`

***

### exportSystemLogs()

> `readonly` **exportSystemLogs**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:827](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L827)

Export System Logs.

Performs a POST request to `/api/v1/developer/system/logs/export`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.exportSystemLogs`

***

### fetchAccessPolicy()

> `readonly` **fetchAccessPolicy**: (`options`) => `Promise`\<[`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:422](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L422)

Fetch Access Policy.

Performs a GET request to `/api/v1/developer/access_policies/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAccessPolicy`

***

### fetchAllAccessPolicies()

> `readonly` **fetchAllAccessPolicies**: (`options?`) => `Promise`\<[`AccessPoliciesResponse`](../interfaces/AccessPoliciesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:431](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L431)

Fetch All Access Policies.

Performs a GET request to `/api/v1/developer/access_policies`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`AccessPoliciesResponse`](../interfaces/AccessPoliciesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`AccessPoliciesResponse`](../interfaces/AccessPoliciesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllAccessPolicies`

***

### fetchAllDoorGroups()

> `readonly` **fetchAllDoorGroups**: (`options?`) => `Promise`\<[`DoorGroupsResponse`](../type-aliases/DoorGroupsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:710](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L710)

Fetch All Door Groups.

Performs a GET request to `/api/v1/developer/door_groups`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`DoorGroupsResponse`](../type-aliases/DoorGroupsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoorGroups`

***

### fetchAllDoors()

> `readonly` **fetchAllDoors**: (`options?`) => `Promise`\<[`DoorsResponse`](../type-aliases/DoorsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:737](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L737)

Fetch All Doors.

Performs a GET request to `/api/v1/developer/doors`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`DoorsResponse`](../type-aliases/DoorsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoors`

***

### fetchAllHolidayGroups()

> `readonly` **fetchAllHolidayGroups**: (`options?`) => `Promise`\<[`HolidayGroupsResponse`](../type-aliases/HolidayGroupsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:476](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L476)

Fetch All Holiday Groups.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`HolidayGroupsResponse`](../type-aliases/HolidayGroupsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllHolidayGroups`

***

### fetchAllNfcCards()

> `readonly` **fetchAllNfcCards**: (`options?`) => `Promise`\<[`NfcCardsResponse`](../interfaces/NfcCardsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:575](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L575)

Fetch All Nfc Cards.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`NfcCardsResponse`](../interfaces/NfcCardsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`NfcCardsResponse`](../interfaces/NfcCardsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllNfcCards`

***

### fetchAllSchedules()

> `readonly` **fetchAllSchedules**: (`options?`) => `Promise`\<[`SchedulesResponse`](../type-aliases/SchedulesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:512](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L512)

Fetch All Schedules.

Performs a GET request to `/api/v1/developer/access_policies/schedules`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`SchedulesResponse`](../type-aliases/SchedulesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllSchedules`

***

### fetchAllUserGroups()

> `readonly` **fetchAllUserGroups**: (`options?`) => `Promise`\<[`FetchAllUserGroupsResponse`](../type-aliases/FetchAllUserGroupsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:107](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L107)

Fetch All User Groups.

Performs a GET request to `/api/v1/developer/user_groups`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`FetchAllUserGroupsResponse`](../type-aliases/FetchAllUserGroupsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUserGroups`

***

### fetchAllUsers()

> `readonly` **fetchAllUsers**: (`options?`) => `Promise`\<[`FetchAllUsersResponse`](../type-aliases/FetchAllUsersResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:44](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L44)

Fetch All Users.

Performs a GET request to `/api/v1/developer/users`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`FetchUsersQuery`](../interfaces/FetchUsersQuery.md), `undefined`, [`FetchAllUsersResponse`](../type-aliases/FetchAllUsersResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchAllUsersResponse`](../type-aliases/FetchAllUsersResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsers`

***

### fetchAllUsersInGroup()

> `readonly` **fetchAllUsersInGroup**: (`options`) => `Promise`\<[`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:170](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L170)

Fetch All Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users/all`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsersInGroup`

***

### fetchAllVisitors()

> `readonly` **fetchAllVisitors**: (`options?`) => `Promise`\<[`FetchVisitorsResponse`](../type-aliases/FetchVisitorsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:296](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L296)

Fetch All Visitors.

Performs a GET request to `/api/v1/developer/visitors`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `expand[]?`: `string` \| `string`[]; `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; `status?`: `number`; \}, `undefined`, [`FetchVisitorsResponse`](../type-aliases/FetchVisitorsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchVisitorsResponse`](../type-aliases/FetchVisitorsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllVisitors`

***

### fetchAssignableTouchPasses()

> `readonly` **fetchAssignableTouchPasses**: (`options?`) => `Promise`\<[`AssignableTouchPassesResponse`](../type-aliases/AssignableTouchPassesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:620](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L620)

Fetch Assignable Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/assignable`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`AssignableTouchPassesResponse`](../type-aliases/AssignableTouchPassesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAssignableTouchPasses`

***

### fetchAvailableIdentityResources()

> `readonly` **fetchAvailableIdentityResources**: (`options?`) => `Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:899](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L899)

Fetch Available Identity Resources.

Performs a GET request to `/api/v1/developer/users/identity/assignments`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `resource_type?`: `string`; \}, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAvailableIdentityResources`

***

### fetchDeviceAccessSettings()

> `readonly` **fetchDeviceAccessSettings**: (`options`) => `Promise`\<[`DeviceAccessMethodSettingsResponse`](../type-aliases/DeviceAccessMethodSettingsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:800](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L800)

Fetch Device Access Settings.

Performs a GET request to `/api/v1/developer/devices/:device_id/settings`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `device_id`: `string`; \}, `undefined`, `undefined`, [`DeviceAccessMethodSettingsResponse`](../type-aliases/DeviceAccessMethodSettingsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`DeviceAccessMethodSettingsResponse`](../type-aliases/DeviceAccessMethodSettingsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDeviceAccessSettings`

***

### fetchDevices()

> `readonly` **fetchDevices**: (`options?`) => `Promise`\<[`DevicesResponse`](../type-aliases/DevicesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:791](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L791)

Fetch Devices.

Performs a GET request to `/api/v1/developer/devices`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`DevicesResponse`](../type-aliases/DevicesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDevices`

***

### fetchDoorById()

> `readonly` **fetchDoorById**: (`options`) => `Promise`\<[`DoorResponse`](../type-aliases/DoorResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:728](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L728)

Fetch Door By Id.

Performs a GET request to `/api/v1/developer/doors/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorResponse`](../type-aliases/DoorResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`DoorResponse`](../type-aliases/DoorResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorById`

***

### fetchDoorEmergencyStatus()

> `readonly` **fetchDoorEmergencyStatus**: (`options?`) => `Promise`\<[`DoorEmergencyStatusResponse`](../type-aliases/DoorEmergencyStatusResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:782](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L782)

Fetch Door Emergency Status.

Performs a GET request to `/api/v1/developer/doors/settings/emergency`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`DoorEmergencyStatusResponse`](../type-aliases/DoorEmergencyStatusResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorEmergencyStatus`

***

### fetchDoorGroupById()

> `readonly` **fetchDoorGroupById**: (`options`) => `Promise`\<[`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:692](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L692)

Fetch Door Group By Id.

Performs a GET request to `/api/v1/developer/door_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupById`

***

### fetchDoorGroupTopology()

> `readonly` **fetchDoorGroupTopology**: (`options?`) => `Promise`\<[`DoorTopologyResponse`](../type-aliases/DoorTopologyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:674](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L674)

Fetch Door Group Topology.

Performs a GET request to `/api/v1/developer/door_groups/topology`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`DoorTopologyResponse`](../type-aliases/DoorTopologyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupTopology`

***

### fetchDoorLockRule()

> `readonly` **fetchDoorLockRule**: (`options`) => `Promise`\<[`DoorLockRuleResponse`](../type-aliases/DoorLockRuleResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:764](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L764)

Fetch Door Lock Rule.

Performs a GET request to `/api/v1/developer/doors/:id/lock_rule`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorLockRuleResponse`](../type-aliases/DoorLockRuleResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`DoorLockRuleResponse`](../type-aliases/DoorLockRuleResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorLockRule`

***

### fetchHolidayGroup()

> `readonly` **fetchHolidayGroup**: (`options`) => `Promise`\<[`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:467](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L467)

Fetch Holiday Group.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchHolidayGroup`

***

### fetchIdentityResourcesForUser()

> `readonly` **fetchIdentityResourcesForUser**: (`options`) => `Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:917](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L917)

Fetch Identity Resources For User.

Performs a GET request to `/api/v1/developer/users/:id/identity/assignments`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUser`

***

### fetchIdentityResourcesForUserGroup()

> `readonly` **fetchIdentityResourcesForUserGroup**: (`options`) => `Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:935](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L935)

Fetch Identity Resources For User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUserGroup`

***

### fetchNfcCard()

> `readonly` **fetchNfcCard**: (`options`) => `Promise`\<[`NfcCardResponse`](../type-aliases/NfcCardResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:566](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L566)

Fetch Nfc Card.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`NfcCardResponse`](../type-aliases/NfcCardResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`NfcCardResponse`](../type-aliases/NfcCardResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcCard`

***

### fetchNfcEnrollmentStatus()

> `readonly` **fetchNfcEnrollmentStatus**: (`options`) => `Promise`\<[`NfcEnrollmentStatusResponse`](../type-aliases/NfcEnrollmentStatusResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:548](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L548)

Fetch Nfc Enrollment Status.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`NfcEnrollmentStatusResponse`](../type-aliases/NfcEnrollmentStatusResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`NfcEnrollmentStatusResponse`](../type-aliases/NfcEnrollmentStatusResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcEnrollmentStatus`

***

### fetchSchedule()

> `readonly` **fetchSchedule**: (`options`) => `Promise`\<[`ScheduleResponse`](../type-aliases/ScheduleResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:503](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L503)

Fetch Schedule.

Performs a GET request to `/api/v1/developer/access_policies/schedules/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`ScheduleResponse`](../type-aliases/ScheduleResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSchedule`

***

### fetchSystemLogResource()

> `readonly` **fetchSystemLogResource**: (`options`) => `Promise`\<[`SystemLogResourceResponse`](../interfaces/SystemLogResourceResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:836](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L836)

Fetch System Log Resource.

Performs a GET request to `/api/v1/developer/system/logs/resource/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SystemLogResourceResponse`](../interfaces/SystemLogResourceResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SystemLogResourceResponse`](../interfaces/SystemLogResourceResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogResource`

***

### fetchSystemLogs()

> `readonly` **fetchSystemLogs**: (`options`) => `Promise`\<[`SystemLogsResponse`](../interfaces/SystemLogsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:818](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L818)

Fetch System Logs.

Performs a POST request to `/api/v1/developer/system/logs`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`SystemLogQuery`](../interfaces/SystemLogQuery.md), [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`SystemLogsResponse`](../interfaces/SystemLogsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SystemLogsResponse`](../interfaces/SystemLogsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogs`

***

### fetchSystemStaticResource()

> `readonly` **fetchSystemStaticResource**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:845](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L845)

Fetch System Static Resource.

Performs a GET request to `/api/v1/developer/system/static/:path`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `path`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemStaticResource`

***

### fetchTouchPassDetails()

> `readonly` **fetchTouchPassDetails**: (`options`) => `Promise`\<[`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:638](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L638)

Fetch Touch Pass Details.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassDetails`

***

### fetchTouchPassList()

> `readonly` **fetchTouchPassList**: (`options?`) => `Promise`\<[`TouchPassListResponse`](../interfaces/TouchPassListResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:602](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L602)

Fetch Touch Pass List.

Performs a GET request to `/api/v1/developer/credentials/touch_passes`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; `status?`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`TouchPassListResponse`](../interfaces/TouchPassListResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassList`

***

### fetchUser()

> `readonly` **fetchUser**: (`options`) => `Promise`\<[`FetchUserResponse`](../type-aliases/FetchUserResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:35](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L35)

Fetch User.

Performs a GET request to `/api/v1/developer/users/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, [`FetchUserQuery`](../interfaces/FetchUserQuery.md), `undefined`, [`FetchUserResponse`](../type-aliases/FetchUserResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchUserResponse`](../type-aliases/FetchUserResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUser`

***

### fetchUserAccessPolicies()

> `readonly` **fetchUserAccessPolicies**: (`options`) => `Promise`\<[`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:179](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L179)

Fetch User Access Policies.

Performs a GET request to `/api/v1/developer/users/:id/access_policies`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, [`FetchUserAccessPoliciesQuery`](../interfaces/FetchUserAccessPoliciesQuery.md), `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserAccessPolicies`

***

### fetchUserGroup()

> `readonly` **fetchUserGroup**: (`options`) => `Promise`\<[`FetchUserGroupResponse`](../type-aliases/FetchUserGroupResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:116](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L116)

Fetch User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchUserGroupResponse`](../type-aliases/FetchUserGroupResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchUserGroupResponse`](../type-aliases/FetchUserGroupResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroup`

***

### fetchUserGroupAccessPolicies()

> `readonly` **fetchUserGroupAccessPolicies**: (`options`) => `Promise`\<[`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:197](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L197)

Fetch User Group Access Policies.

Performs a GET request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroupAccessPolicies`

***

### fetchUsersInGroup()

> `readonly` **fetchUsersInGroup**: (`options`) => `Promise`\<[`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:161](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L161)

Fetch Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUsersInGroup`

***

### fetchVisitor()

> `readonly` **fetchVisitor**: (`options`) => `Promise`\<[`FetchVisitorResponse`](../type-aliases/FetchVisitorResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:287](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L287)

Fetch Visitor.

Performs a GET request to `/api/v1/developer/visitors/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchVisitorResponse`](../type-aliases/FetchVisitorResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`FetchVisitorResponse`](../type-aliases/FetchVisitorResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchVisitor`

***

### fetchWebhookEndpoints()

> `readonly` **fetchWebhookEndpoints**: (`options?`) => `Promise`\<[`WebhookEndpointsResponse`](../type-aliases/WebhookEndpointsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:944](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L944)

Fetch Webhook Endpoints.

Performs a GET request to `/api/v1/developer/webhooks/endpoints`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`WebhookEndpointsResponse`](../type-aliases/WebhookEndpointsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchWebhookEndpoints`

***

### generatePinCode()

> `readonly` **generatePinCode**: (`options?`) => `Promise`\<[`GeneratePinCodeResponse`](../type-aliases/GeneratePinCodeResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:530](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L530)

Generate Pin Code.

Performs a POST request to `/api/v1/developer/credentials/pin_codes`.

#### Parameters

##### options?

###### headers?

`Record`\<`string`, `string`\>

###### rawBody?

`boolean`

###### responseType?

[`ResponseType`](../type-aliases/ResponseType.md)

###### signal?

`AbortSignal`

###### timeoutMs?

`number`

#### Returns

`Promise`\<[`GeneratePinCodeResponse`](../type-aliases/GeneratePinCodeResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.generatePinCode`

***

### getAvatarResource()

> `readonly` **getAvatarResource**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:854](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L854)

Get Avatar Resource.

Performs a GET request to `/api/v1/developer/system/static/avatar/:resourceId`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceId`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getAvatarResource`

***

### getPreviewResource()

> `readonly` **getPreviewResource**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:863](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L863)

Get Preview Resource.

Performs a GET request to `/api/v1/developer/system/static/preview/:resourceName`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getPreviewResource`

***

### getThumbnailResource()

> `readonly` **getThumbnailResource**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:881](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L881)

Get Thumbnail Resource.

Performs a GET request to `/api/v1/developer/system/static/activities_resource/thumbnail/:resourceName`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getThumbnailResource`

***

### getVideoResource()

> `readonly` **getVideoResource**: (`options`) => `Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:872](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L872)

Get Video Resource.

Performs a GET request to `/api/v1/developer/system/static/activities_resource/video/:resourceName`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>\>

#### Returns

`Promise`\<[`FileResponse`](../interfaces/FileResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.getVideoResource`

***

### importThirdPartyNfcCards()

> `readonly` **importThirdPartyNfcCards**: (`options`) => `Promise`\<[`ImportThirdPartyNfcCardsResponse`](../type-aliases/ImportThirdPartyNfcCardsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:665](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L665)

Import Third Party Nfc Cards.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/import`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`ImportThirdPartyNfcCardsResponse`](../type-aliases/ImportThirdPartyNfcCardsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`ImportThirdPartyNfcCardsResponse`](../type-aliases/ImportThirdPartyNfcCardsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.importThirdPartyNfcCards`

***

### purchaseTouchPasses()

> `readonly` **purchaseTouchPasses**: (`options`) => `Promise`\<[`PurchaseTouchPassResponse`](../type-aliases/PurchaseTouchPassResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:647](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L647)

Purchase Touch Passes.

Performs a POST request to `/api/v1/developer/credentials/touch_passes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`PurchaseTouchPassesRequest`](../interfaces/PurchaseTouchPassesRequest.md), [`PurchaseTouchPassResponse`](../type-aliases/PurchaseTouchPassResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`PurchaseTouchPassResponse`](../type-aliases/PurchaseTouchPassResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.purchaseTouchPasses`

***

### searchTouchPasses()

> `readonly` **searchTouchPasses**: (`options?`) => `Promise`\<[`TouchPassListResponse`](../interfaces/TouchPassListResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:611](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L611)

Search Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/search`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `condition`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`TouchPassListResponse`](../interfaces/TouchPassListResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchTouchPasses`

***

### searchUsers()

> `readonly` **searchUsers**: (`options?`) => `Promise`\<[`SearchUsersResponse`](../type-aliases/SearchUsersResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:215](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L215)

Search Users.

Performs a GET request to `/api/v1/developer/users/search`.

#### Parameters

##### options?

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`SearchUsersQuery`](../interfaces/SearchUsersQuery.md), `undefined`, [`SearchUsersResponse`](../type-aliases/SearchUsersResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SearchUsersResponse`](../type-aliases/SearchUsersResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchUsers`

***

### sendIdentityInvitations()

> `readonly` **sendIdentityInvitations**: (`options`) => `Promise`\<[`IdentityInvitationResponse`](../type-aliases/IdentityInvitationResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:890](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L890)

Send Identity Invitations.

Performs a POST request to `/api/v1/developer/users/identity/invitations`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`IdentityInvitationRequestItem`](../interfaces/IdentityInvitationRequestItem.md)[], [`IdentityInvitationResponse`](../type-aliases/IdentityInvitationResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`IdentityInvitationResponse`](../type-aliases/IdentityInvitationResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.sendIdentityInvitations`

***

### setDoorEmergencyStatus()

> `readonly` **setDoorEmergencyStatus**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:773](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L773)

Set Door Emergency Status.

Performs a PUT request to `/api/v1/developer/doors/settings/emergency`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`DoorEmergencyStatusRequest`](../interfaces/DoorEmergencyStatusRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorEmergencyStatus`

***

### setDoorLockRule()

> `readonly` **setDoorLockRule**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:755](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L755)

Set Door Lock Rule.

Performs a PUT request to `/api/v1/developer/doors/:id/lock_rule`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`DoorLockRuleRequest`](../interfaces/DoorLockRuleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorLockRule`

***

### unassignLicensePlateFromUser()

> `readonly` **unassignLicensePlateFromUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:260](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L260)

Unassign License Plate From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/license_plates/:license_plate_id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `license_plate_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignLicensePlateFromUser`

***

### unassignTouchPassFromUser()

> `readonly` **unassignTouchPassFromUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:233](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L233)

Unassign Touch Pass From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignTouchPassFromUser`

***

### unassignUserNfcCard()

> `readonly` **unassignUserNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:71](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L71)

Unassign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards/delete`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnassignNfcCardRequest`](../interfaces/UnassignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserNfcCard`

***

### unassignUserPinCode()

> `readonly` **unassignUserPinCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:89](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L89)

Unassign User Pin Code.

Performs a DELETE request to `/api/v1/developer/users/:id/pin_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserPinCode`

***

### unassignUsersFromGroup()

> `readonly` **unassignUsersFromGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:152](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L152)

Unassign Users From Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users/delete`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUsersFromGroup`

***

### unassignVisitorLicensePlate()

> `readonly` **unassignVisitorLicensePlate**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:386](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L386)

Unassign Visitor License Plate.

Performs a DELETE request to `/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `license_plate_id`: `string`; `visitor_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorLicensePlate`

***

### unassignVisitorNfcCard()

> `readonly` **unassignVisitorNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:332](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L332)

Unassign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards/delete`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnassignVisitorNfcCardRequest`](../interfaces/UnassignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorNfcCard`

***

### unassignVisitorPinCode()

> `readonly` **unassignVisitorPinCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:350](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L350)

Unassign Visitor Pin Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorPinCode`

***

### unassignVisitorQrCode()

> `readonly` **unassignVisitorQrCode**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:368](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L368)

Unassign Visitor Qr Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorQrCode`

***

### unlockDoor()

> `readonly` **unlockDoor**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:746](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L746)

Unlock Door.

Performs a PUT request to `/api/v1/developer/doors/:id/unlock`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnlockDoorRequest`](../interfaces/UnlockDoorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unlockDoor`

***

### updateAccessPolicy()

> `readonly` **updateAccessPolicy**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:404](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L404)

Update Access Policy.

Performs a PUT request to `/api/v1/developer/access_policies/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateAccessPolicyRequest`](../interfaces/UpdateAccessPolicyRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateAccessPolicy`

***

### updateDeviceAccessSettings()

> `readonly` **updateDeviceAccessSettings**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:809](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L809)

Update Device Access Settings.

Performs a PUT request to `/api/v1/developer/devices/:device_id/settings`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `device_id`: `string`; \}, `undefined`, [`AccessMethodSettings`](../interfaces/AccessMethodSettings.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDeviceAccessSettings`

***

### updateDoorGroupById()

> `readonly` **updateDoorGroupById**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:701](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L701)

Update Door Group By Id.

Performs a PUT request to `/api/v1/developer/door_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateDoorGroupRequest`](../interfaces/UpdateDoorGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDoorGroupById`

***

### updateHolidayGroup()

> `readonly` **updateHolidayGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:449](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L449)

Update Holiday Group.

Performs a PUT request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateHolidayGroupRequest`](../interfaces/UpdateHolidayGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateHolidayGroup`

***

### updateNfcCard()

> `readonly` **updateNfcCard**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:593](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L593)

Update Nfc Card.

Performs a PUT request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, [`UpdateNfcCardRequest`](../interfaces/UpdateNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateNfcCard`

***

### updateSchedule()

> `readonly` **updateSchedule**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:494](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L494)

Update Schedule.

Performs a PUT request to `/api/v1/developer/access_policies/schedules/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateScheduleRequest`](../interfaces/UpdateScheduleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateSchedule`

***

### updateTouchPass()

> `readonly` **updateTouchPass**: (`options`) => `Promise`\<[`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:629](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L629)

Update Touch Pass.

Performs a PUT request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateTouchPassRequest`](../interfaces/UpdateTouchPassRequest.md), [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateTouchPass`

***

### updateUser()

> `readonly` **updateUser**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:26](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L26)

Update User.

Performs a PUT request to `/api/v1/developer/users/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserRequest`](../interfaces/UpdateUserRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUser`

***

### updateUserAccessPolicies()

> `readonly` **updateUserAccessPolicies**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:53](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L53)

Update User Access Policies.

Performs a PUT request to `/api/v1/developer/users/:id/access_policies`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserAccessPoliciesRequest`](../interfaces/UpdateUserAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserAccessPolicies`

***

### updateUserGroup()

> `readonly` **updateUserGroup**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:125](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L125)

Update User Group.

Performs a PUT request to `/api/v1/developer/user_groups/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserGroupRequest`](../interfaces/UpdateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroup`

***

### updateUserGroupAccessPolicies()

> `readonly` **updateUserGroupAccessPolicies**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:188](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L188)

Update User Group Access Policies.

Performs a PUT request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateGroupAccessPoliciesRequest`](../interfaces/UpdateGroupAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroupAccessPolicies`

***

### updateVisitor()

> `readonly` **updateVisitor**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:305](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L305)

Update Visitor.

Performs a PUT request to `/api/v1/developer/visitors/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateVisitorRequest`](../interfaces/UpdateVisitorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateVisitor`

***

### updateWebhookEndpoint()

> `readonly` **updateWebhookEndpoint**: (`options`) => `Promise`\<[`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:962](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L962)

Update Webhook Endpoint.

Performs a PUT request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateWebhookEndpoint`

***

### uploadApiServerCertificate()

> `readonly` **uploadApiServerCertificate**: (`options`) => `Promise`\<[`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:980](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L980)

Upload Api Server Certificate.

Performs a POST request to `/api/v1/developer/api_server/certificates`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadApiServerCertificate`

***

### uploadUserAvatar()

> `readonly` **uploadUserAvatar**: (`options`) => `Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Defined in: [src/unifi-access-api.docs.ts:269](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/unifi-access-api.docs.ts#L269)

Upload User Avatar.

Performs a POST request to `/api/v1/developer/users/:id/avatar`.

#### Parameters

##### options

[`EndpointCallOptions`](../type-aliases/EndpointCallOptions.md)\<[`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>\>

#### Returns

`Promise`\<[`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md)\>

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadUserAvatar`

## Methods

### createNotificationClient()

> **createNotificationClient**(`overrides`): [`UnifiAccessNotificationClient`](UnifiAccessNotificationClient.md)

Defined in: [src/client.ts:259](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/client.ts#L259)

Creates a [UnifiAccessNotificationClient](UnifiAccessNotificationClient.md) configured with the same
credentials as this REST client. Useful for consuming real-time device
notifications over WebSocket without manually supplying connection
parameters.

#### Parameters

##### overrides

`Partial`\<`Omit`\<[`UnifiAccessNotificationClientOptions`](../interfaces/UnifiAccessNotificationClientOptions.md), `"baseUrl"` \| `"apiKey"`\>\> = `{}`

#### Returns

[`UnifiAccessNotificationClient`](UnifiAccessNotificationClient.md)
