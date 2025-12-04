[**unifi-access-api v1.0.1**](../README.md)

***

Defined in: [src/client.ts:97](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L97)

## Extends

- `ApiMethods`

## Implements

- `ApiMethods`

## Constructors

### Constructor

> **new UnifiAccessApi**(`options`): `UnifiAccessApi`

Defined in: [src/client.ts:104](https://github.com/Dastari/unifi-access-api/blob/03a586f2e4974a2b2af1c30c64b43392ec8fd167/src/client.ts#L104)

#### Parameters

##### options

`UnifiAccessApiOptions`

#### Returns

`UnifiAccessApi`

## Properties

### assignIdentityResourcesToUser

> `readonly` **assignIdentityResourcesToUser**: `EndpointFor`\<`"assignIdentityResourcesToUser"`\>

Defined in: src/unifi-access-api.docs.ts:874

Assign Identity Resources To User.

Performs a POST request to `/api/v1/developer/users/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUser`

***

### assignIdentityResourcesToUserGroup

> `readonly` **assignIdentityResourcesToUserGroup**: `EndpointFor`\<`"assignIdentityResourcesToUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:892

Assign Identity Resources To User Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignIdentityResourcesToUserGroup`

***

### assignLicensePlatesToUser

> `readonly` **assignLicensePlatesToUser**: `EndpointFor`\<`"assignLicensePlatesToUser"`\>

Defined in: src/unifi-access-api.docs.ts:253

Assign License Plates To User.

Performs a PUT request to `/api/v1/developer/users/:id/license_plates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignLicensePlatesToUser`

***

### assignTouchPassToUser

> `readonly` **assignTouchPassToUser**: `EndpointFor`\<`"assignTouchPassToUser"`\>

Defined in: src/unifi-access-api.docs.ts:226

Assign Touch Pass To User.

Performs a PUT request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignTouchPassToUser`

***

### assignUserNfcCard

> `readonly` **assignUserNfcCard**: `EndpointFor`\<`"assignUserNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:64

Assign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserNfcCard`

***

### assignUserPinCode

> `readonly` **assignUserPinCode**: `EndpointFor`\<`"assignUserPinCode"`\>

Defined in: src/unifi-access-api.docs.ts:82

Assign User Pin Code.

Performs a PUT request to `/api/v1/developer/users/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUserPinCode`

***

### assignUsersToGroup

> `readonly` **assignUsersToGroup**: `EndpointFor`\<`"assignUsersToGroup"`\>

Defined in: src/unifi-access-api.docs.ts:145

Assign Users To Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignUsersToGroup`

***

### assignVisitorLicensePlates

> `readonly` **assignVisitorLicensePlates**: `EndpointFor`\<`"assignVisitorLicensePlates"`\>

Defined in: src/unifi-access-api.docs.ts:379

Assign Visitor License Plates.

Performs a PUT request to `/api/v1/developer/visitors/:id/license_plates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorLicensePlates`

***

### assignVisitorNfcCard

> `readonly` **assignVisitorNfcCard**: `EndpointFor`\<`"assignVisitorNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:325

Assign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorNfcCard`

***

### assignVisitorPinCode

> `readonly` **assignVisitorPinCode**: `EndpointFor`\<`"assignVisitorPinCode"`\>

Defined in: src/unifi-access-api.docs.ts:343

Assign Visitor Pin Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorPinCode`

***

### assignVisitorQrCode

> `readonly` **assignVisitorQrCode**: `EndpointFor`\<`"assignVisitorQrCode"`\>

Defined in: src/unifi-access-api.docs.ts:361

Assign Visitor Qr Code.

Performs a PUT request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.assignVisitorQrCode`

***

### batchAssignTouchPasses

> `readonly` **batchAssignTouchPasses**: `EndpointFor`\<`"batchAssignTouchPasses"`\>

Defined in: src/unifi-access-api.docs.ts:244

Batch Assign Touch Passes.

Performs a PUT request to `/api/v1/developer/users/touch_passes/assign`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.batchAssignTouchPasses`

***

### createAccessPolicy

> `readonly` **createAccessPolicy**: `EndpointFor`\<`"createAccessPolicy"`\>

Defined in: src/unifi-access-api.docs.ts:397

Create Access Policy.

Performs a POST request to `/api/v1/developer/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createAccessPolicy`

***

### createDoorGroup

> `readonly` **createDoorGroup**: `EndpointFor`\<`"createDoorGroup"`\>

Defined in: src/unifi-access-api.docs.ts:685

Create Door Group.

Performs a POST request to `/api/v1/developer/door_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createDoorGroup`

***

### createHolidayGroup

> `readonly` **createHolidayGroup**: `EndpointFor`\<`"createHolidayGroup"`\>

Defined in: src/unifi-access-api.docs.ts:442

Create Holiday Group.

Performs a POST request to `/api/v1/developer/access_policies/holiday_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createHolidayGroup`

***

### createNfcEnrollmentSession

> `readonly` **createNfcEnrollmentSession**: `EndpointFor`\<`"createNfcEnrollmentSession"`\>

Defined in: src/unifi-access-api.docs.ts:541

Create Nfc Enrollment Session.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/sessions`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createNfcEnrollmentSession`

***

### createSchedule

> `readonly` **createSchedule**: `EndpointFor`\<`"createSchedule"`\>

Defined in: src/unifi-access-api.docs.ts:487

Create Schedule.

Performs a POST request to `/api/v1/developer/access_policies/schedules`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createSchedule`

***

### createUser

> `readonly` **createUser**: `EndpointFor`\<`"createUser"`\>

Defined in: src/unifi-access-api.docs.ts:19

Create User.

Performs a POST request to `/api/v1/developer/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUser`

***

### createUserGroup

> `readonly` **createUserGroup**: `EndpointFor`\<`"createUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:100

Create User Group.

Performs a POST request to `/api/v1/developer/user_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createUserGroup`

***

### createVisitor

> `readonly` **createVisitor**: `EndpointFor`\<`"createVisitor"`\>

Defined in: src/unifi-access-api.docs.ts:280

Create Visitor.

Performs a POST request to `/api/v1/developer/visitors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createVisitor`

***

### createWebhookEndpoint

> `readonly` **createWebhookEndpoint**: `EndpointFor`\<`"createWebhookEndpoint"`\>

Defined in: src/unifi-access-api.docs.ts:919

Create Webhook Endpoint.

Performs a POST request to `/api/v1/developer/webhooks/endpoints`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.createWebhookEndpoint`

***

### deleteAccessPolicy

> `readonly` **deleteAccessPolicy**: `EndpointFor`\<`"deleteAccessPolicy"`\>

Defined in: src/unifi-access-api.docs.ts:415

Delete Access Policy.

Performs a DELETE request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteAccessPolicy`

***

### deleteApiServerCertificate

> `readonly` **deleteApiServerCertificate**: `EndpointFor`\<`"deleteApiServerCertificate"`\>

Defined in: src/unifi-access-api.docs.ts:955

Delete Api Server Certificate.

Performs a DELETE request to `/api/v1/developer/api_server/certificates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteApiServerCertificate`

***

### deleteDoorGroupById

> `readonly` **deleteDoorGroupById**: `EndpointFor`\<`"deleteDoorGroupById"`\>

Defined in: src/unifi-access-api.docs.ts:721

Delete Door Group By Id.

Performs a DELETE request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteDoorGroupById`

***

### deleteHolidayGroup

> `readonly` **deleteHolidayGroup**: `EndpointFor`\<`"deleteHolidayGroup"`\>

Defined in: src/unifi-access-api.docs.ts:460

Delete Holiday Group.

Performs a DELETE request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteHolidayGroup`

***

### deleteNfcCard

> `readonly` **deleteNfcCard**: `EndpointFor`\<`"deleteNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:586

Delete Nfc Card.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcCard`

***

### deleteNfcEnrollmentSession

> `readonly` **deleteNfcEnrollmentSession**: `EndpointFor`\<`"deleteNfcEnrollmentSession"`\>

Defined in: src/unifi-access-api.docs.ts:559

Delete Nfc Enrollment Session.

Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteNfcEnrollmentSession`

***

### deleteSchedule

> `readonly` **deleteSchedule**: `EndpointFor`\<`"deleteSchedule"`\>

Defined in: src/unifi-access-api.docs.ts:523

Delete Schedule.

Performs a DELETE request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteSchedule`

***

### deleteUser

> `readonly` **deleteUser**: `EndpointFor`\<`"deleteUser"`\>

Defined in: src/unifi-access-api.docs.ts:208

Delete User.

Performs a DELETE request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUser`

***

### deleteUserGroup

> `readonly` **deleteUserGroup**: `EndpointFor`\<`"deleteUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:136

Delete User Group.

Performs a DELETE request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteUserGroup`

***

### deleteVisitor

> `readonly` **deleteVisitor**: `EndpointFor`\<`"deleteVisitor"`\>

Defined in: src/unifi-access-api.docs.ts:316

Delete Visitor.

Performs a DELETE request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteVisitor`

***

### deleteWebhookEndpoint

> `readonly` **deleteWebhookEndpoint**: `EndpointFor`\<`"deleteWebhookEndpoint"`\>

Defined in: src/unifi-access-api.docs.ts:937

Delete Webhook Endpoint.

Performs a DELETE request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.deleteWebhookEndpoint`

***

### downloadTouchPassQrCode

> `readonly` **downloadTouchPassQrCode**: `EndpointFor`\<`"downloadTouchPassQrCode"`\>

Defined in: src/unifi-access-api.docs.ts:658

Download Touch Pass Qr Code.

Performs a GET request to `/api/v1/developer/credentials/qr_codes/download/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.downloadTouchPassQrCode`

***

### exportSystemLogs

> `readonly` **exportSystemLogs**: `EndpointFor`\<`"exportSystemLogs"`\>

Defined in: src/unifi-access-api.docs.ts:829

Export System Logs.

Performs a POST request to `/api/v1/developer/system/logs/export`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.exportSystemLogs`

***

### fetchAccessPolicy

> `readonly` **fetchAccessPolicy**: `EndpointFor`\<`"fetchAccessPolicy"`\>

Defined in: src/unifi-access-api.docs.ts:424

Fetch Access Policy.

Performs a GET request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAccessPolicy`

***

### fetchAllAccessPolicies

> `readonly` **fetchAllAccessPolicies**: `EndpointFor`\<`"fetchAllAccessPolicies"`\>

Defined in: src/unifi-access-api.docs.ts:433

Fetch All Access Policies.

Performs a GET request to `/api/v1/developer/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllAccessPolicies`

***

### fetchAllDoorGroups

> `readonly` **fetchAllDoorGroups**: `EndpointFor`\<`"fetchAllDoorGroups"`\>

Defined in: src/unifi-access-api.docs.ts:712

Fetch All Door Groups.

Performs a GET request to `/api/v1/developer/door_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoorGroups`

***

### fetchAllDoors

> `readonly` **fetchAllDoors**: `EndpointFor`\<`"fetchAllDoors"`\>

Defined in: src/unifi-access-api.docs.ts:739

Fetch All Doors.

Performs a GET request to `/api/v1/developer/doors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllDoors`

***

### fetchAllHolidayGroups

> `readonly` **fetchAllHolidayGroups**: `EndpointFor`\<`"fetchAllHolidayGroups"`\>

Defined in: src/unifi-access-api.docs.ts:478

Fetch All Holiday Groups.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllHolidayGroups`

***

### fetchAllNfcCards

> `readonly` **fetchAllNfcCards**: `EndpointFor`\<`"fetchAllNfcCards"`\>

Defined in: src/unifi-access-api.docs.ts:577

Fetch All Nfc Cards.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllNfcCards`

***

### fetchAllSchedules

> `readonly` **fetchAllSchedules**: `EndpointFor`\<`"fetchAllSchedules"`\>

Defined in: src/unifi-access-api.docs.ts:514

Fetch All Schedules.

Performs a GET request to `/api/v1/developer/access_policies/schedules`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllSchedules`

***

### fetchAllUserGroups

> `readonly` **fetchAllUserGroups**: `EndpointFor`\<`"fetchAllUserGroups"`\>

Defined in: src/unifi-access-api.docs.ts:109

Fetch All User Groups.

Performs a GET request to `/api/v1/developer/user_groups`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUserGroups`

***

### fetchAllUsers

> `readonly` **fetchAllUsers**: `EndpointFor`\<`"fetchAllUsers"`\>

Defined in: src/unifi-access-api.docs.ts:46

Fetch All Users.

Performs a GET request to `/api/v1/developer/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsers`

***

### fetchAllUsersInGroup

> `readonly` **fetchAllUsersInGroup**: `EndpointFor`\<`"fetchAllUsersInGroup"`\>

Defined in: src/unifi-access-api.docs.ts:172

Fetch All Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users/all`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllUsersInGroup`

***

### fetchAllVisitors

> `readonly` **fetchAllVisitors**: `EndpointFor`\<`"fetchAllVisitors"`\>

Defined in: src/unifi-access-api.docs.ts:298

Fetch All Visitors.

Performs a GET request to `/api/v1/developer/visitors`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAllVisitors`

***

### fetchAssignableTouchPasses

> `readonly` **fetchAssignableTouchPasses**: `EndpointFor`\<`"fetchAssignableTouchPasses"`\>

Defined in: src/unifi-access-api.docs.ts:622

Fetch Assignable Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/assignable`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAssignableTouchPasses`

***

### fetchAvailableIdentityResources

> `readonly` **fetchAvailableIdentityResources**: `EndpointFor`\<`"fetchAvailableIdentityResources"`\>

Defined in: src/unifi-access-api.docs.ts:865

Fetch Available Identity Resources.

Performs a GET request to `/api/v1/developer/users/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchAvailableIdentityResources`

***

### fetchDeviceAccessSettings

> `readonly` **fetchDeviceAccessSettings**: `EndpointFor`\<`"fetchDeviceAccessSettings"`\>

Defined in: src/unifi-access-api.docs.ts:802

Fetch Device Access Settings.

Performs a GET request to `/api/v1/developer/devices/:device_id/settings`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDeviceAccessSettings`

***

### fetchDevices

> `readonly` **fetchDevices**: `EndpointFor`\<`"fetchDevices"`\>

Defined in: src/unifi-access-api.docs.ts:793

Fetch Devices.

Performs a GET request to `/api/v1/developer/devices`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDevices`

***

### fetchDoorById

> `readonly` **fetchDoorById**: `EndpointFor`\<`"fetchDoorById"`\>

Defined in: src/unifi-access-api.docs.ts:730

Fetch Door By Id.

Performs a GET request to `/api/v1/developer/doors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorById`

***

### fetchDoorEmergencyStatus

> `readonly` **fetchDoorEmergencyStatus**: `EndpointFor`\<`"fetchDoorEmergencyStatus"`\>

Defined in: src/unifi-access-api.docs.ts:784

Fetch Door Emergency Status.

Performs a GET request to `/api/v1/developer/doors/settings/emergency`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorEmergencyStatus`

***

### fetchDoorGroupById

> `readonly` **fetchDoorGroupById**: `EndpointFor`\<`"fetchDoorGroupById"`\>

Defined in: src/unifi-access-api.docs.ts:694

Fetch Door Group By Id.

Performs a GET request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupById`

***

### fetchDoorGroupTopology

> `readonly` **fetchDoorGroupTopology**: `EndpointFor`\<`"fetchDoorGroupTopology"`\>

Defined in: src/unifi-access-api.docs.ts:676

Fetch Door Group Topology.

Performs a GET request to `/api/v1/developer/door_groups/topology`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorGroupTopology`

***

### fetchDoorLockRule

> `readonly` **fetchDoorLockRule**: `EndpointFor`\<`"fetchDoorLockRule"`\>

Defined in: src/unifi-access-api.docs.ts:766

Fetch Door Lock Rule.

Performs a GET request to `/api/v1/developer/doors/:id/lock_rule`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchDoorLockRule`

***

### fetchHolidayGroup

> `readonly` **fetchHolidayGroup**: `EndpointFor`\<`"fetchHolidayGroup"`\>

Defined in: src/unifi-access-api.docs.ts:469

Fetch Holiday Group.

Performs a GET request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchHolidayGroup`

***

### fetchIdentityResourcesForUser

> `readonly` **fetchIdentityResourcesForUser**: `EndpointFor`\<`"fetchIdentityResourcesForUser"`\>

Defined in: src/unifi-access-api.docs.ts:883

Fetch Identity Resources For User.

Performs a GET request to `/api/v1/developer/users/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUser`

***

### fetchIdentityResourcesForUserGroup

> `readonly` **fetchIdentityResourcesForUserGroup**: `EndpointFor`\<`"fetchIdentityResourcesForUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:901

Fetch Identity Resources For User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/identity/assignments`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUserGroup`

***

### fetchNfcCard

> `readonly` **fetchNfcCard**: `EndpointFor`\<`"fetchNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:568

Fetch Nfc Card.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcCard`

***

### fetchNfcEnrollmentStatus

> `readonly` **fetchNfcEnrollmentStatus**: `EndpointFor`\<`"fetchNfcEnrollmentStatus"`\>

Defined in: src/unifi-access-api.docs.ts:550

Fetch Nfc Enrollment Status.

Performs a GET request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchNfcEnrollmentStatus`

***

### fetchSchedule

> `readonly` **fetchSchedule**: `EndpointFor`\<`"fetchSchedule"`\>

Defined in: src/unifi-access-api.docs.ts:505

Fetch Schedule.

Performs a GET request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSchedule`

***

### fetchSystemLogResource

> `readonly` **fetchSystemLogResource**: `EndpointFor`\<`"fetchSystemLogResource"`\>

Defined in: src/unifi-access-api.docs.ts:838

Fetch System Log Resource.

Performs a GET request to `/api/v1/developer/system/logs/resource/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogResource`

***

### fetchSystemLogs

> `readonly` **fetchSystemLogs**: `EndpointFor`\<`"fetchSystemLogs"`\>

Defined in: src/unifi-access-api.docs.ts:820

Fetch System Logs.

Performs a POST request to `/api/v1/developer/system/logs`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemLogs`

***

### fetchSystemStaticResource

> `readonly` **fetchSystemStaticResource**: `EndpointFor`\<`"fetchSystemStaticResource"`\>

Defined in: src/unifi-access-api.docs.ts:847

Fetch System Static Resource.

Performs a GET request to `/api/v1/developer/system/static/:path`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchSystemStaticResource`

***

### fetchTouchPassDetails

> `readonly` **fetchTouchPassDetails**: `EndpointFor`\<`"fetchTouchPassDetails"`\>

Defined in: src/unifi-access-api.docs.ts:640

Fetch Touch Pass Details.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassDetails`

***

### fetchTouchPassList

> `readonly` **fetchTouchPassList**: `EndpointFor`\<`"fetchTouchPassList"`\>

Defined in: src/unifi-access-api.docs.ts:604

Fetch Touch Pass List.

Performs a GET request to `/api/v1/developer/credentials/touch_passes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchTouchPassList`

***

### fetchUser

> `readonly` **fetchUser**: `EndpointFor`\<`"fetchUser"`\>

Defined in: src/unifi-access-api.docs.ts:37

Fetch User.

Performs a GET request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUser`

***

### fetchUserAccessPolicies

> `readonly` **fetchUserAccessPolicies**: `EndpointFor`\<`"fetchUserAccessPolicies"`\>

Defined in: src/unifi-access-api.docs.ts:181

Fetch User Access Policies.

Performs a GET request to `/api/v1/developer/users/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserAccessPolicies`

***

### fetchUserGroup

> `readonly` **fetchUserGroup**: `EndpointFor`\<`"fetchUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:118

Fetch User Group.

Performs a GET request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroup`

***

### fetchUserGroupAccessPolicies

> `readonly` **fetchUserGroupAccessPolicies**: `EndpointFor`\<`"fetchUserGroupAccessPolicies"`\>

Defined in: src/unifi-access-api.docs.ts:199

Fetch User Group Access Policies.

Performs a GET request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUserGroupAccessPolicies`

***

### fetchUsersInGroup

> `readonly` **fetchUsersInGroup**: `EndpointFor`\<`"fetchUsersInGroup"`\>

Defined in: src/unifi-access-api.docs.ts:163

Fetch Users In Group.

Performs a GET request to `/api/v1/developer/user_groups/:id/users`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchUsersInGroup`

***

### fetchVisitor

> `readonly` **fetchVisitor**: `EndpointFor`\<`"fetchVisitor"`\>

Defined in: src/unifi-access-api.docs.ts:289

Fetch Visitor.

Performs a GET request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchVisitor`

***

### fetchWebhookEndpoints

> `readonly` **fetchWebhookEndpoints**: `EndpointFor`\<`"fetchWebhookEndpoints"`\>

Defined in: src/unifi-access-api.docs.ts:910

Fetch Webhook Endpoints.

Performs a GET request to `/api/v1/developer/webhooks/endpoints`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.fetchWebhookEndpoints`

***

### generatePinCode

> `readonly` **generatePinCode**: `EndpointFor`\<`"generatePinCode"`\>

Defined in: src/unifi-access-api.docs.ts:532

Generate Pin Code.

Performs a POST request to `/api/v1/developer/credentials/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.generatePinCode`

***

### importThirdPartyNfcCards

> `readonly` **importThirdPartyNfcCards**: `EndpointFor`\<`"importThirdPartyNfcCards"`\>

Defined in: src/unifi-access-api.docs.ts:667

Import Third Party Nfc Cards.

Performs a POST request to `/api/v1/developer/credentials/nfc_cards/import`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.importThirdPartyNfcCards`

***

### purchaseTouchPasses

> `readonly` **purchaseTouchPasses**: `EndpointFor`\<`"purchaseTouchPasses"`\>

Defined in: src/unifi-access-api.docs.ts:649

Purchase Touch Passes.

Performs a POST request to `/api/v1/developer/credentials/touch_passes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.purchaseTouchPasses`

***

### searchTouchPasses

> `readonly` **searchTouchPasses**: `EndpointFor`\<`"searchTouchPasses"`\>

Defined in: src/unifi-access-api.docs.ts:613

Search Touch Passes.

Performs a GET request to `/api/v1/developer/credentials/touch_passes/search`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchTouchPasses`

***

### searchUsers

> `readonly` **searchUsers**: `EndpointFor`\<`"searchUsers"`\>

Defined in: src/unifi-access-api.docs.ts:217

Search Users.

Performs a GET request to `/api/v1/developer/users/search`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.searchUsers`

***

### sendIdentityInvitations

> `readonly` **sendIdentityInvitations**: `EndpointFor`\<`"sendIdentityInvitations"`\>

Defined in: src/unifi-access-api.docs.ts:856

Send Identity Invitations.

Performs a POST request to `/api/v1/developer/users/identity/invitations`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.sendIdentityInvitations`

***

### setDoorEmergencyStatus

> `readonly` **setDoorEmergencyStatus**: `EndpointFor`\<`"setDoorEmergencyStatus"`\>

Defined in: src/unifi-access-api.docs.ts:775

Set Door Emergency Status.

Performs a PUT request to `/api/v1/developer/doors/settings/emergency`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorEmergencyStatus`

***

### setDoorLockRule

> `readonly` **setDoorLockRule**: `EndpointFor`\<`"setDoorLockRule"`\>

Defined in: src/unifi-access-api.docs.ts:757

Set Door Lock Rule.

Performs a PUT request to `/api/v1/developer/doors/:id/lock_rule`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.setDoorLockRule`

***

### unassignLicensePlateFromUser

> `readonly` **unassignLicensePlateFromUser**: `EndpointFor`\<`"unassignLicensePlateFromUser"`\>

Defined in: src/unifi-access-api.docs.ts:262

Unassign License Plate From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/license_plates/:license_plate_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignLicensePlateFromUser`

***

### unassignTouchPassFromUser

> `readonly` **unassignTouchPassFromUser**: `EndpointFor`\<`"unassignTouchPassFromUser"`\>

Defined in: src/unifi-access-api.docs.ts:235

Unassign Touch Pass From User.

Performs a DELETE request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignTouchPassFromUser`

***

### unassignUserNfcCard

> `readonly` **unassignUserNfcCard**: `EndpointFor`\<`"unassignUserNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:73

Unassign User Nfc Card.

Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserNfcCard`

***

### unassignUserPinCode

> `readonly` **unassignUserPinCode**: `EndpointFor`\<`"unassignUserPinCode"`\>

Defined in: src/unifi-access-api.docs.ts:91

Unassign User Pin Code.

Performs a DELETE request to `/api/v1/developer/users/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUserPinCode`

***

### unassignUsersFromGroup

> `readonly` **unassignUsersFromGroup**: `EndpointFor`\<`"unassignUsersFromGroup"`\>

Defined in: src/unifi-access-api.docs.ts:154

Unassign Users From Group.

Performs a POST request to `/api/v1/developer/user_groups/:id/users/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignUsersFromGroup`

***

### unassignVisitorLicensePlate

> `readonly` **unassignVisitorLicensePlate**: `EndpointFor`\<`"unassignVisitorLicensePlate"`\>

Defined in: src/unifi-access-api.docs.ts:388

Unassign Visitor License Plate.

Performs a DELETE request to `/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorLicensePlate`

***

### unassignVisitorNfcCard

> `readonly` **unassignVisitorNfcCard**: `EndpointFor`\<`"unassignVisitorNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:334

Unassign Visitor Nfc Card.

Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards/delete`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorNfcCard`

***

### unassignVisitorPinCode

> `readonly` **unassignVisitorPinCode**: `EndpointFor`\<`"unassignVisitorPinCode"`\>

Defined in: src/unifi-access-api.docs.ts:352

Unassign Visitor Pin Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/pin_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorPinCode`

***

### unassignVisitorQrCode

> `readonly` **unassignVisitorQrCode**: `EndpointFor`\<`"unassignVisitorQrCode"`\>

Defined in: src/unifi-access-api.docs.ts:370

Unassign Visitor Qr Code.

Performs a DELETE request to `/api/v1/developer/visitors/:id/qr_codes`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unassignVisitorQrCode`

***

### unlockDoor

> `readonly` **unlockDoor**: `EndpointFor`\<`"unlockDoor"`\>

Defined in: src/unifi-access-api.docs.ts:748

Unlock Door.

Performs a PUT request to `/api/v1/developer/doors/:id/unlock`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.unlockDoor`

***

### updateAccessPolicy

> `readonly` **updateAccessPolicy**: `EndpointFor`\<`"updateAccessPolicy"`\>

Defined in: src/unifi-access-api.docs.ts:406

Update Access Policy.

Performs a PUT request to `/api/v1/developer/access_policies/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateAccessPolicy`

***

### updateDeviceAccessSettings

> `readonly` **updateDeviceAccessSettings**: `EndpointFor`\<`"updateDeviceAccessSettings"`\>

Defined in: src/unifi-access-api.docs.ts:811

Update Device Access Settings.

Performs a PUT request to `/api/v1/developer/devices/:device_id/settings`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDeviceAccessSettings`

***

### updateDoorGroupById

> `readonly` **updateDoorGroupById**: `EndpointFor`\<`"updateDoorGroupById"`\>

Defined in: src/unifi-access-api.docs.ts:703

Update Door Group By Id.

Performs a PUT request to `/api/v1/developer/door_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateDoorGroupById`

***

### updateHolidayGroup

> `readonly` **updateHolidayGroup**: `EndpointFor`\<`"updateHolidayGroup"`\>

Defined in: src/unifi-access-api.docs.ts:451

Update Holiday Group.

Performs a PUT request to `/api/v1/developer/access_policies/holiday_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateHolidayGroup`

***

### updateNfcCard

> `readonly` **updateNfcCard**: `EndpointFor`\<`"updateNfcCard"`\>

Defined in: src/unifi-access-api.docs.ts:595

Update Nfc Card.

Performs a PUT request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateNfcCard`

***

### updateSchedule

> `readonly` **updateSchedule**: `EndpointFor`\<`"updateSchedule"`\>

Defined in: src/unifi-access-api.docs.ts:496

Update Schedule.

Performs a PUT request to `/api/v1/developer/access_policies/schedules/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateSchedule`

***

### updateTouchPass

> `readonly` **updateTouchPass**: `EndpointFor`\<`"updateTouchPass"`\>

Defined in: src/unifi-access-api.docs.ts:631

Update Touch Pass.

Performs a PUT request to `/api/v1/developer/credentials/touch_passes/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateTouchPass`

***

### updateUser

> `readonly` **updateUser**: `EndpointFor`\<`"updateUser"`\>

Defined in: src/unifi-access-api.docs.ts:28

Update User.

Performs a PUT request to `/api/v1/developer/users/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUser`

***

### updateUserAccessPolicies

> `readonly` **updateUserAccessPolicies**: `EndpointFor`\<`"updateUserAccessPolicies"`\>

Defined in: src/unifi-access-api.docs.ts:55

Update User Access Policies.

Performs a PUT request to `/api/v1/developer/users/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserAccessPolicies`

***

### updateUserGroup

> `readonly` **updateUserGroup**: `EndpointFor`\<`"updateUserGroup"`\>

Defined in: src/unifi-access-api.docs.ts:127

Update User Group.

Performs a PUT request to `/api/v1/developer/user_groups/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroup`

***

### updateUserGroupAccessPolicies

> `readonly` **updateUserGroupAccessPolicies**: `EndpointFor`\<`"updateUserGroupAccessPolicies"`\>

Defined in: src/unifi-access-api.docs.ts:190

Update User Group Access Policies.

Performs a PUT request to `/api/v1/developer/user_groups/:id/access_policies`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateUserGroupAccessPolicies`

***

### updateVisitor

> `readonly` **updateVisitor**: `EndpointFor`\<`"updateVisitor"`\>

Defined in: src/unifi-access-api.docs.ts:307

Update Visitor.

Performs a PUT request to `/api/v1/developer/visitors/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateVisitor`

***

### updateWebhookEndpoint

> `readonly` **updateWebhookEndpoint**: `EndpointFor`\<`"updateWebhookEndpoint"`\>

Defined in: src/unifi-access-api.docs.ts:928

Update Webhook Endpoint.

Performs a PUT request to `/api/v1/developer/webhooks/endpoints/:id`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.updateWebhookEndpoint`

***

### uploadApiServerCertificate

> `readonly` **uploadApiServerCertificate**: `EndpointFor`\<`"uploadApiServerCertificate"`\>

Defined in: src/unifi-access-api.docs.ts:946

Upload Api Server Certificate.

Performs a POST request to `/api/v1/developer/api_server/certificates`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadApiServerCertificate`

***

### uploadUserAvatar

> `readonly` **uploadUserAvatar**: `EndpointFor`\<`"uploadUserAvatar"`\>

Defined in: src/unifi-access-api.docs.ts:271

Upload User Avatar.

Performs a POST request to `/api/v1/developer/users/:id/avatar`.

#### Returns

Promise resolving with the typed API response.

#### Implementation of

`ApiMethods.uploadUserAvatar`
