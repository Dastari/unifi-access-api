[**unifi-access-api v0.1.0**](../README.md)

***

Defined in: src/client.ts:97

## Extends

- `ApiMethods`

## Implements

- `ApiMethods`

## Constructors

### Constructor

> **new UnifiAccessApi**(`options`): `UnifiAccessApi`

Defined in: src/client.ts:104

#### Parameters

##### options

`UnifiAccessApiOptions`

#### Returns

`UnifiAccessApi`

## Properties

### assignIdentityResourcesToUser

> `readonly` **assignIdentityResourcesToUser**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:23

#### Implementation of

`ApiMethods.assignIdentityResourcesToUser`

***

### assignIdentityResourcesToUserGroup

> `readonly` **assignIdentityResourcesToUserGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:33

#### Implementation of

`ApiMethods.assignIdentityResourcesToUserGroup`

***

### assignLicensePlatesToUser

> `readonly` **assignLicensePlatesToUser**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:165

#### Implementation of

`ApiMethods.assignLicensePlatesToUser`

***

### assignTouchPassToUser

> `readonly` **assignTouchPassToUser**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:150

#### Implementation of

`ApiMethods.assignTouchPassToUser`

***

### assignUserNfcCard

> `readonly` **assignUserNfcCard**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:60

#### Implementation of

`ApiMethods.assignUserNfcCard`

***

### assignUserPinCode

> `readonly` **assignUserPinCode**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:70

#### Implementation of

`ApiMethods.assignUserPinCode`

***

### assignUsersToGroup

> `readonly` **assignUsersToGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:105

#### Implementation of

`ApiMethods.assignUsersToGroup`

***

### assignVisitorLicensePlates

> `readonly` **assignVisitorLicensePlates**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:80

#### Implementation of

`ApiMethods.assignVisitorLicensePlates`

***

### assignVisitorNfcCard

> `readonly` **assignVisitorNfcCard**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:50

#### Implementation of

`ApiMethods.assignVisitorNfcCard`

***

### assignVisitorPinCode

> `readonly` **assignVisitorPinCode**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:60

#### Implementation of

`ApiMethods.assignVisitorPinCode`

***

### assignVisitorQrCode

> `readonly` **assignVisitorQrCode**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:70

#### Implementation of

`ApiMethods.assignVisitorQrCode`

***

### batchAssignTouchPasses

> `readonly` **batchAssignTouchPasses**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:160

#### Implementation of

`ApiMethods.batchAssignTouchPasses`

***

### createAccessPolicy

> `readonly` **createAccessPolicy**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:21

#### Implementation of

`ApiMethods.createAccessPolicy`

***

### createDoorGroup

> `readonly` **createDoorGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:26

#### Implementation of

`ApiMethods.createDoorGroup`

***

### createHolidayGroup

> `readonly` **createHolidayGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:50

#### Implementation of

`ApiMethods.createHolidayGroup`

***

### createNfcEnrollmentSession

> `readonly` **createNfcEnrollmentSession**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:31

#### Implementation of

`ApiMethods.createNfcEnrollmentSession`

***

### createSchedule

> `readonly` **createSchedule**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:75

#### Implementation of

`ApiMethods.createSchedule`

***

### createUser

> `readonly` **createUser**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:35

#### Implementation of

`ApiMethods.createUser`

***

### createUserGroup

> `readonly` **createUserGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:80

#### Implementation of

`ApiMethods.createUserGroup`

***

### createVisitor

> `readonly` **createVisitor**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:19

#### Implementation of

`ApiMethods.createVisitor`

***

### createWebhookEndpoint

> `readonly` **createWebhookEndpoint**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/webhooks.ts:17

#### Implementation of

`ApiMethods.createWebhookEndpoint`

***

### deleteAccessPolicy

> `readonly` **deleteAccessPolicy**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:31

#### Implementation of

`ApiMethods.deleteAccessPolicy`

***

### deleteApiServerCertificate

> `readonly` **deleteApiServerCertificate**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/api-server.ts:13

#### Implementation of

`ApiMethods.deleteApiServerCertificate`

***

### deleteDoorGroupById

> `readonly` **deleteDoorGroupById**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:46

#### Implementation of

`ApiMethods.deleteDoorGroupById`

***

### deleteHolidayGroup

> `readonly` **deleteHolidayGroup**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:60

#### Implementation of

`ApiMethods.deleteHolidayGroup`

***

### deleteNfcCard

> `readonly` **deleteNfcCard**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:56

#### Implementation of

`ApiMethods.deleteNfcCard`

***

### deleteNfcEnrollmentSession

> `readonly` **deleteNfcEnrollmentSession**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:41

#### Implementation of

`ApiMethods.deleteNfcEnrollmentSession`

***

### deleteSchedule

> `readonly` **deleteSchedule**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:95

#### Implementation of

`ApiMethods.deleteSchedule`

***

### deleteUser

> `readonly` **deleteUser**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:140

#### Implementation of

`ApiMethods.deleteUser`

***

### deleteUserGroup

> `readonly` **deleteUserGroup**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:100

#### Implementation of

`ApiMethods.deleteUserGroup`

***

### deleteVisitor

> `readonly` **deleteVisitor**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:45

#### Implementation of

`ApiMethods.deleteVisitor`

***

### deleteWebhookEndpoint

> `readonly` **deleteWebhookEndpoint**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/webhooks.ts:27

#### Implementation of

`ApiMethods.deleteWebhookEndpoint`

***

### downloadTouchPassQrCode

> `readonly` **downloadTouchPassQrCode**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; `responseType`: `"arrayBuffer"`; \}\>

Defined in: src/endpoints/credentials.ts:101

#### Implementation of

`ApiMethods.downloadTouchPassQrCode`

***

### exportSystemLogs

> `readonly` **exportSystemLogs**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; `responseType`: `"arrayBuffer"`; \}\>

Defined in: src/endpoints/system.ts:18

#### Implementation of

`ApiMethods.exportSystemLogs`

***

### fetchAccessPolicy

> `readonly` **fetchAccessPolicy**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:36

#### Implementation of

`ApiMethods.fetchAccessPolicy`

***

### fetchAllAccessPolicies

> `readonly` **fetchAllAccessPolicies**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:41

#### Implementation of

`ApiMethods.fetchAllAccessPolicies`

***

### fetchAllDoorGroups

> `readonly` **fetchAllDoorGroups**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:41

#### Implementation of

`ApiMethods.fetchAllDoorGroups`

***

### fetchAllDoors

> `readonly` **fetchAllDoors**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:56

#### Implementation of

`ApiMethods.fetchAllDoors`

***

### fetchAllHolidayGroups

> `readonly` **fetchAllHolidayGroups**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:70

#### Implementation of

`ApiMethods.fetchAllHolidayGroups`

***

### fetchAllNfcCards

> `readonly` **fetchAllNfcCards**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:51

#### Implementation of

`ApiMethods.fetchAllNfcCards`

***

### fetchAllSchedules

> `readonly` **fetchAllSchedules**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:90

#### Implementation of

`ApiMethods.fetchAllSchedules`

***

### fetchAllUserGroups

> `readonly` **fetchAllUserGroups**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:85

#### Implementation of

`ApiMethods.fetchAllUserGroups`

***

### fetchAllUsers

> `readonly` **fetchAllUsers**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:50

#### Implementation of

`ApiMethods.fetchAllUsers`

***

### fetchAllUsersInGroup

> `readonly` **fetchAllUsersInGroup**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:120

#### Implementation of

`ApiMethods.fetchAllUsersInGroup`

***

### fetchAllVisitors

> `readonly` **fetchAllVisitors**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:29

#### Implementation of

`ApiMethods.fetchAllVisitors`

***

### fetchAssignableTouchPasses

> `readonly` **fetchAssignableTouchPasses**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:81

#### Implementation of

`ApiMethods.fetchAssignableTouchPasses`

***

### fetchAvailableIdentityResources

> `readonly` **fetchAvailableIdentityResources**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:18

#### Implementation of

`ApiMethods.fetchAvailableIdentityResources`

***

### fetchDeviceAccessSettings

> `readonly` **fetchDeviceAccessSettings**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/devices.ts:13

#### Implementation of

`ApiMethods.fetchDeviceAccessSettings`

***

### fetchDevices

> `readonly` **fetchDevices**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/devices.ts:8

#### Implementation of

`ApiMethods.fetchDevices`

***

### fetchDoorById

> `readonly` **fetchDoorById**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:51

#### Implementation of

`ApiMethods.fetchDoorById`

***

### fetchDoorEmergencyStatus

> `readonly` **fetchDoorEmergencyStatus**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:81

#### Implementation of

`ApiMethods.fetchDoorEmergencyStatus`

***

### fetchDoorGroupById

> `readonly` **fetchDoorGroupById**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:31

#### Implementation of

`ApiMethods.fetchDoorGroupById`

***

### fetchDoorGroupTopology

> `readonly` **fetchDoorGroupTopology**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:21

#### Implementation of

`ApiMethods.fetchDoorGroupTopology`

***

### fetchDoorLockRule

> `readonly` **fetchDoorLockRule**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:71

#### Implementation of

`ApiMethods.fetchDoorLockRule`

***

### fetchHolidayGroup

> `readonly` **fetchHolidayGroup**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:65

#### Implementation of

`ApiMethods.fetchHolidayGroup`

***

### fetchIdentityResourcesForUser

> `readonly` **fetchIdentityResourcesForUser**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:28

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUser`

***

### fetchIdentityResourcesForUserGroup

> `readonly` **fetchIdentityResourcesForUserGroup**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:38

#### Implementation of

`ApiMethods.fetchIdentityResourcesForUserGroup`

***

### fetchNfcCard

> `readonly` **fetchNfcCard**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:46

#### Implementation of

`ApiMethods.fetchNfcCard`

***

### fetchNfcEnrollmentStatus

> `readonly` **fetchNfcEnrollmentStatus**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:36

#### Implementation of

`ApiMethods.fetchNfcEnrollmentStatus`

***

### fetchSchedule

> `readonly` **fetchSchedule**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:85

#### Implementation of

`ApiMethods.fetchSchedule`

***

### fetchSystemLogResource

> `readonly` **fetchSystemLogResource**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/system.ts:24

#### Implementation of

`ApiMethods.fetchSystemLogResource`

***

### fetchSystemLogs

> `readonly` **fetchSystemLogs**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/system.ts:13

#### Implementation of

`ApiMethods.fetchSystemLogs`

***

### fetchSystemStaticResource

> `readonly` **fetchSystemStaticResource**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; `responseType`: `"arrayBuffer"`; \}\>

Defined in: src/endpoints/system.ts:29

#### Implementation of

`ApiMethods.fetchSystemStaticResource`

***

### fetchTouchPassDetails

> `readonly` **fetchTouchPassDetails**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:91

#### Implementation of

`ApiMethods.fetchTouchPassDetails`

***

### fetchTouchPassList

> `readonly` **fetchTouchPassList**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:66

#### Implementation of

`ApiMethods.fetchTouchPassList`

***

### fetchUser

> `readonly` **fetchUser**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:45

#### Implementation of

`ApiMethods.fetchUser`

***

### fetchUserAccessPolicies

> `readonly` **fetchUserAccessPolicies**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:125

#### Implementation of

`ApiMethods.fetchUserAccessPolicies`

***

### fetchUserGroup

> `readonly` **fetchUserGroup**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:90

#### Implementation of

`ApiMethods.fetchUserGroup`

***

### fetchUserGroupAccessPolicies

> `readonly` **fetchUserGroupAccessPolicies**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:135

#### Implementation of

`ApiMethods.fetchUserGroupAccessPolicies`

***

### fetchUsersInGroup

> `readonly` **fetchUsersInGroup**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:115

#### Implementation of

`ApiMethods.fetchUsersInGroup`

***

### fetchVisitor

> `readonly` **fetchVisitor**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:24

#### Implementation of

`ApiMethods.fetchVisitor`

***

### fetchWebhookEndpoints

> `readonly` **fetchWebhookEndpoints**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/webhooks.ts:12

#### Implementation of

`ApiMethods.fetchWebhookEndpoints`

***

### generatePinCode

> `readonly` **generatePinCode**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:26

#### Implementation of

`ApiMethods.generatePinCode`

***

### importThirdPartyNfcCards

> `readonly` **importThirdPartyNfcCards**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; `rawBody`: `true`; \}\>

Defined in: src/endpoints/credentials.ts:107

#### Implementation of

`ApiMethods.importThirdPartyNfcCards`

***

### purchaseTouchPasses

> `readonly` **purchaseTouchPasses**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:96

#### Implementation of

`ApiMethods.purchaseTouchPasses`

***

### searchTouchPasses

> `readonly` **searchTouchPasses**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:76

#### Implementation of

`ApiMethods.searchTouchPasses`

***

### searchUsers

> `readonly` **searchUsers**: `EndpointInvoker`\<\{ `method`: `"GET"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:145

#### Implementation of

`ApiMethods.searchUsers`

***

### sendIdentityInvitations

> `readonly` **sendIdentityInvitations**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/identity.ts:13

#### Implementation of

`ApiMethods.sendIdentityInvitations`

***

### setDoorEmergencyStatus

> `readonly` **setDoorEmergencyStatus**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:76

#### Implementation of

`ApiMethods.setDoorEmergencyStatus`

***

### setDoorLockRule

> `readonly` **setDoorLockRule**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:66

#### Implementation of

`ApiMethods.setDoorLockRule`

***

### unassignLicensePlateFromUser

> `readonly` **unassignLicensePlateFromUser**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:170

#### Implementation of

`ApiMethods.unassignLicensePlateFromUser`

***

### unassignTouchPassFromUser

> `readonly` **unassignTouchPassFromUser**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:155

#### Implementation of

`ApiMethods.unassignTouchPassFromUser`

***

### unassignUserNfcCard

> `readonly` **unassignUserNfcCard**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:65

#### Implementation of

`ApiMethods.unassignUserNfcCard`

***

### unassignUserPinCode

> `readonly` **unassignUserPinCode**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:75

#### Implementation of

`ApiMethods.unassignUserPinCode`

***

### unassignUsersFromGroup

> `readonly` **unassignUsersFromGroup**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:110

#### Implementation of

`ApiMethods.unassignUsersFromGroup`

***

### unassignVisitorLicensePlate

> `readonly` **unassignVisitorLicensePlate**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:85

#### Implementation of

`ApiMethods.unassignVisitorLicensePlate`

***

### unassignVisitorNfcCard

> `readonly` **unassignVisitorNfcCard**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:55

#### Implementation of

`ApiMethods.unassignVisitorNfcCard`

***

### unassignVisitorPinCode

> `readonly` **unassignVisitorPinCode**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:65

#### Implementation of

`ApiMethods.unassignVisitorPinCode`

***

### unassignVisitorQrCode

> `readonly` **unassignVisitorQrCode**: `EndpointInvoker`\<\{ `method`: `"DELETE"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:75

#### Implementation of

`ApiMethods.unassignVisitorQrCode`

***

### unlockDoor

> `readonly` **unlockDoor**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:61

#### Implementation of

`ApiMethods.unlockDoor`

***

### updateAccessPolicy

> `readonly` **updateAccessPolicy**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:26

#### Implementation of

`ApiMethods.updateAccessPolicy`

***

### updateDeviceAccessSettings

> `readonly` **updateDeviceAccessSettings**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/devices.ts:18

#### Implementation of

`ApiMethods.updateDeviceAccessSettings`

***

### updateDoorGroupById

> `readonly` **updateDoorGroupById**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/spaces.ts:36

#### Implementation of

`ApiMethods.updateDoorGroupById`

***

### updateHolidayGroup

> `readonly` **updateHolidayGroup**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:55

#### Implementation of

`ApiMethods.updateHolidayGroup`

***

### updateNfcCard

> `readonly` **updateNfcCard**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:61

#### Implementation of

`ApiMethods.updateNfcCard`

***

### updateSchedule

> `readonly` **updateSchedule**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/access-policies.ts:80

#### Implementation of

`ApiMethods.updateSchedule`

***

### updateTouchPass

> `readonly` **updateTouchPass**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/credentials.ts:86

#### Implementation of

`ApiMethods.updateTouchPass`

***

### updateUser

> `readonly` **updateUser**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:40

#### Implementation of

`ApiMethods.updateUser`

***

### updateUserAccessPolicies

> `readonly` **updateUserAccessPolicies**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:55

#### Implementation of

`ApiMethods.updateUserAccessPolicies`

***

### updateUserGroup

> `readonly` **updateUserGroup**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:95

#### Implementation of

`ApiMethods.updateUserGroup`

***

### updateUserGroupAccessPolicies

> `readonly` **updateUserGroupAccessPolicies**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/users.ts:130

#### Implementation of

`ApiMethods.updateUserGroupAccessPolicies`

***

### updateVisitor

> `readonly` **updateVisitor**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/visitors.ts:40

#### Implementation of

`ApiMethods.updateVisitor`

***

### updateWebhookEndpoint

> `readonly` **updateWebhookEndpoint**: `EndpointInvoker`\<\{ `method`: `"PUT"`; `path`: `string`; \}\>

Defined in: src/endpoints/webhooks.ts:22

#### Implementation of

`ApiMethods.updateWebhookEndpoint`

***

### uploadApiServerCertificate

> `readonly` **uploadApiServerCertificate**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; `rawBody`: `true`; \}\>

Defined in: src/endpoints/api-server.ts:7

#### Implementation of

`ApiMethods.uploadApiServerCertificate`

***

### uploadUserAvatar

> `readonly` **uploadUserAvatar**: `EndpointInvoker`\<\{ `method`: `"POST"`; `path`: `string`; `rawBody`: `true`; \}\>

Defined in: src/endpoints/users.ts:175

#### Implementation of

`ApiMethods.uploadUserAvatar`
