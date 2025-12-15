[**unifi-access-api v1.1.0**](../README.md)

***

> `const` **endpointDefinitions**: `object`

Defined in: [src/endpoints/index.ts:12](https://github.com/Dastari/unifi-access-api/blob/c46fde22b8dd006c45b0d11709f3a55a97c21715/src/endpoints/index.ts#L12)

## Type Declaration

### assignIdentityResourcesToUser

> `readonly` **assignIdentityResourcesToUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignIdentityResourcesToUserGroup

> `readonly` **assignIdentityResourcesToUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`IdentityAssignmentRequest`](../interfaces/IdentityAssignmentRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignLicensePlatesToUser

> `readonly` **assignLicensePlatesToUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignLicensePlatesRequest`](../type-aliases/AssignLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignTouchPassToUser

> `readonly` **assignTouchPassToUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`TouchPassAssignmentResponse`](../type-aliases/TouchPassAssignmentResponse.md), `"json"`\>

### assignUserNfcCard

> `readonly` **assignUserNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignNfcCardRequest`](../interfaces/AssignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignUserPinCode

> `readonly` **assignUserPinCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignPinCodeRequest`](../interfaces/AssignPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignUsersToGroup

> `readonly` **assignUsersToGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignVisitorLicensePlates

> `readonly` **assignVisitorLicensePlates**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorLicensePlatesRequest`](../interfaces/AssignVisitorLicensePlatesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignVisitorNfcCard

> `readonly` **assignVisitorNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorNfcCardRequest`](../interfaces/AssignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignVisitorPinCode

> `readonly` **assignVisitorPinCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`AssignVisitorPinCodeRequest`](../interfaces/AssignVisitorPinCodeRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### assignVisitorQrCode

> `readonly` **assignVisitorQrCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### batchAssignTouchPasses

> `readonly` **batchAssignTouchPasses**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BatchAssignTouchPassRequest`](../interfaces/BatchAssignTouchPassRequest.md), [`BatchAssignTouchPassResponse`](../type-aliases/BatchAssignTouchPassResponse.md), `"json"`\>

### createAccessPolicy

> `readonly` **createAccessPolicy**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateAccessPolicyRequest`](../interfaces/CreateAccessPolicyRequest.md), [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>

### createDoorGroup

> `readonly` **createDoorGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateDoorGroupRequest`](../interfaces/CreateDoorGroupRequest.md), [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>

### createHolidayGroup

> `readonly` **createHolidayGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateHolidayGroupRequest`](../interfaces/CreateHolidayGroupRequest.md), [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>

### createNfcEnrollmentSession

> `readonly` **createNfcEnrollmentSession**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateNfcEnrollmentSessionRequest`](../interfaces/CreateNfcEnrollmentSessionRequest.md), [`CreateNfcEnrollmentSessionResponse`](../type-aliases/CreateNfcEnrollmentSessionResponse.md), `"json"`\>

### createSchedule

> `readonly` **createSchedule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateScheduleRequest`](../interfaces/CreateScheduleRequest.md), [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>

### createUser

> `readonly` **createUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateUserRequest`](../interfaces/CreateUserRequest.md), [`CreateUserResponse`](../type-aliases/CreateUserResponse.md), `"json"`\>

### createUserGroup

> `readonly` **createUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateUserGroupRequest`](../interfaces/CreateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### createVisitor

> `readonly` **createVisitor**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`CreateVisitorRequest`](../interfaces/CreateVisitorRequest.md), [`CreateVisitorResponse`](../type-aliases/CreateVisitorResponse.md), `"json"`\>

### createWebhookEndpoint

> `readonly` **createWebhookEndpoint**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>

### deleteAccessPolicy

> `readonly` **deleteAccessPolicy**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteApiServerCertificate

> `readonly` **deleteApiServerCertificate**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md), `"json"`\>

### deleteDoorGroupById

> `readonly` **deleteDoorGroupById**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteHolidayGroup

> `readonly` **deleteHolidayGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteNfcCard

> `readonly` **deleteNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteNfcEnrollmentSession

> `readonly` **deleteNfcEnrollmentSession**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteSchedule

> `readonly` **deleteSchedule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteUser

> `readonly` **deleteUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteUserGroup

> `readonly` **deleteUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteVisitor

> `readonly` **deleteVisitor**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### deleteWebhookEndpoint

> `readonly` **deleteWebhookEndpoint**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### downloadTouchPassQrCode

> `readonly` **downloadTouchPassQrCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>

### exportSystemLogs

> `readonly` **exportSystemLogs**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`FileResponse`](../interfaces/FileResponse.md), `"arrayBuffer"`\>

### fetchAccessPolicy

> `readonly` **fetchAccessPolicy**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`AccessPolicyResponse`](../type-aliases/AccessPolicyResponse.md), `"json"`\>

### fetchAllAccessPolicies

> `readonly` **fetchAllAccessPolicies**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`AccessPoliciesResponse`](../interfaces/AccessPoliciesResponse.md), `"json"`\>

### fetchAllDoorGroups

> `readonly` **fetchAllDoorGroups**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`DoorGroupsResponse`](../type-aliases/DoorGroupsResponse.md), `"json"`\>

### fetchAllDoors

> `readonly` **fetchAllDoors**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`DoorsResponse`](../type-aliases/DoorsResponse.md), `"json"`\>

### fetchAllHolidayGroups

> `readonly` **fetchAllHolidayGroups**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`HolidayGroupsResponse`](../type-aliases/HolidayGroupsResponse.md), `"json"`\>

### fetchAllNfcCards

> `readonly` **fetchAllNfcCards**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; \}, `undefined`, [`NfcCardsResponse`](../interfaces/NfcCardsResponse.md), `"json"`\>

### fetchAllSchedules

> `readonly` **fetchAllSchedules**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`SchedulesResponse`](../type-aliases/SchedulesResponse.md), `"json"`\>

### fetchAllUserGroups

> `readonly` **fetchAllUserGroups**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`FetchAllUserGroupsResponse`](../type-aliases/FetchAllUserGroupsResponse.md), `"json"`\>

### fetchAllUsers

> `readonly` **fetchAllUsers**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`FetchUsersQuery`](../interfaces/FetchUsersQuery.md), `undefined`, [`FetchAllUsersResponse`](../type-aliases/FetchAllUsersResponse.md), `"json"`\>

### fetchAllUsersInGroup

> `readonly` **fetchAllUsersInGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>

### fetchAllVisitors

> `readonly` **fetchAllVisitors**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `expand[]?`: `string` \| `string`[]; `keyword?`: `string`; `page_num?`: `number`; `page_size?`: `number`; `status?`: `number`; \}, `undefined`, [`FetchVisitorsResponse`](../type-aliases/FetchVisitorsResponse.md), `"json"`\>

### fetchAssignableTouchPasses

> `readonly` **fetchAssignableTouchPasses**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`AssignableTouchPassesResponse`](../type-aliases/AssignableTouchPassesResponse.md), `"json"`\>

### fetchAvailableIdentityResources

> `readonly` **fetchAvailableIdentityResources**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `resource_type?`: `string`; \}, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>

### fetchDeviceAccessSettings

> `readonly` **fetchDeviceAccessSettings**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `device_id`: `string`; \}, `undefined`, `undefined`, [`DeviceAccessMethodSettingsResponse`](../type-aliases/DeviceAccessMethodSettingsResponse.md), `"json"`\>

### fetchDevices

> `readonly` **fetchDevices**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`DevicesResponse`](../type-aliases/DevicesResponse.md), `"json"`\>

### fetchDoorById

> `readonly` **fetchDoorById**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorResponse`](../type-aliases/DoorResponse.md), `"json"`\>

### fetchDoorEmergencyStatus

> `readonly` **fetchDoorEmergencyStatus**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`DoorEmergencyStatusResponse`](../type-aliases/DoorEmergencyStatusResponse.md), `"json"`\>

### fetchDoorGroupById

> `readonly` **fetchDoorGroupById**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorGroupResponse`](../type-aliases/DoorGroupResponse.md), `"json"`\>

### fetchDoorGroupTopology

> `readonly` **fetchDoorGroupTopology**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`DoorTopologyResponse`](../type-aliases/DoorTopologyResponse.md), `"json"`\>

### fetchDoorLockRule

> `readonly` **fetchDoorLockRule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`DoorLockRuleResponse`](../type-aliases/DoorLockRuleResponse.md), `"json"`\>

### fetchHolidayGroup

> `readonly` **fetchHolidayGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`HolidayGroupResponse`](../type-aliases/HolidayGroupResponse.md), `"json"`\>

### fetchIdentityResourcesForUser

> `readonly` **fetchIdentityResourcesForUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>

### fetchIdentityResourcesForUserGroup

> `readonly` **fetchIdentityResourcesForUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`IdentityAvailableResourcesResponse`](../type-aliases/IdentityAvailableResourcesResponse.md), `"json"`\>

### fetchNfcCard

> `readonly` **fetchNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, `undefined`, [`NfcCardResponse`](../type-aliases/NfcCardResponse.md), `"json"`\>

### fetchNfcEnrollmentStatus

> `readonly` **fetchNfcEnrollmentStatus**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`NfcEnrollmentStatusResponse`](../type-aliases/NfcEnrollmentStatusResponse.md), `"json"`\>

### fetchSchedule

> `readonly` **fetchSchedule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`ScheduleResponse`](../type-aliases/ScheduleResponse.md), `"json"`\>

### fetchSystemLogResource

> `readonly` **fetchSystemLogResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SystemLogResourceResponse`](../interfaces/SystemLogResourceResponse.md), `"json"`\>

### fetchSystemLogs

> `readonly` **fetchSystemLogs**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`SystemLogQuery`](../interfaces/SystemLogQuery.md), [`FetchSystemLogsRequest`](../interfaces/FetchSystemLogsRequest.md), [`SystemLogsResponse`](../interfaces/SystemLogsResponse.md), `"json"`\>

### fetchSystemStaticResource

> `readonly` **fetchSystemStaticResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `path`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>

### fetchTouchPassDetails

> `readonly` **fetchTouchPassDetails**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>

### fetchTouchPassList

> `readonly` **fetchTouchPassList**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `page_num?`: `number`; `page_size?`: `number`; `status?`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>

### fetchUser

> `readonly` **fetchUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, [`FetchUserQuery`](../interfaces/FetchUserQuery.md), `undefined`, [`FetchUserResponse`](../type-aliases/FetchUserResponse.md), `"json"`\>

### fetchUserAccessPolicies

> `readonly` **fetchUserAccessPolicies**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, [`FetchUserAccessPoliciesQuery`](../interfaces/FetchUserAccessPoliciesQuery.md), `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>

### fetchUserGroup

> `readonly` **fetchUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchUserGroupResponse`](../type-aliases/FetchUserGroupResponse.md), `"json"`\>

### fetchUserGroupAccessPolicies

> `readonly` **fetchUserGroupAccessPolicies**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`UserAccessPoliciesResponse`](../type-aliases/UserAccessPoliciesResponse.md), `"json"`\>

### fetchUsersInGroup

> `readonly` **fetchUsersInGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchGroupUsersResponse`](../type-aliases/FetchGroupUsersResponse.md), `"json"`\>

### fetchVisitor

> `readonly` **fetchVisitor**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`FetchVisitorResponse`](../type-aliases/FetchVisitorResponse.md), `"json"`\>

### fetchWebhookEndpoints

> `readonly` **fetchWebhookEndpoints**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`WebhookEndpointsResponse`](../type-aliases/WebhookEndpointsResponse.md), `"json"`\>

### generatePinCode

> `readonly` **generatePinCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, `undefined`, [`GeneratePinCodeResponse`](../type-aliases/GeneratePinCodeResponse.md), `"json"`\>

### getAvatarResource

> `readonly` **getAvatarResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceId`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>

### getPreviewResource

> `readonly` **getPreviewResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>

### getThumbnailResource

> `readonly` **getThumbnailResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>

### getVideoResource

> `readonly` **getVideoResource**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `resourceName`: `string`; \}, `undefined`, `undefined`, [`StaticResourceResponse`](../interfaces/StaticResourceResponse.md), `"arrayBuffer"`\>

### importThirdPartyNfcCards

> `readonly` **importThirdPartyNfcCards**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`ImportThirdPartyNfcCardsResponse`](../type-aliases/ImportThirdPartyNfcCardsResponse.md), `"json"`\>

### purchaseTouchPasses

> `readonly` **purchaseTouchPasses**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`PurchaseTouchPassesRequest`](../interfaces/PurchaseTouchPassesRequest.md), [`PurchaseTouchPassResponse`](../type-aliases/PurchaseTouchPassResponse.md), `"json"`\>

### searchTouchPasses

> `readonly` **searchTouchPasses**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, \{ `condition`: `string`; \}, `undefined`, [`TouchPassListResponse`](../interfaces/TouchPassListResponse.md), `"json"`\>

### searchUsers

> `readonly` **searchUsers**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, [`SearchUsersQuery`](../interfaces/SearchUsersQuery.md), `undefined`, [`SearchUsersResponse`](../type-aliases/SearchUsersResponse.md), `"json"`\>

### sendIdentityInvitations

> `readonly` **sendIdentityInvitations**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`IdentityInvitationRequestItem`](../interfaces/IdentityInvitationRequestItem.md)[], [`IdentityInvitationResponse`](../type-aliases/IdentityInvitationResponse.md), `"json"`\>

### setDoorEmergencyStatus

> `readonly` **setDoorEmergencyStatus**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`DoorEmergencyStatusRequest`](../interfaces/DoorEmergencyStatusRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### setDoorLockRule

> `readonly` **setDoorLockRule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`DoorLockRuleRequest`](../interfaces/DoorLockRuleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignLicensePlateFromUser

> `readonly` **unassignLicensePlateFromUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `license_plate_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignTouchPassFromUser

> `readonly` **unassignTouchPassFromUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `touch_pass_id`: `string`; `user_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignUserNfcCard

> `readonly` **unassignUserNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnassignNfcCardRequest`](../interfaces/UnassignNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignUserPinCode

> `readonly` **unassignUserPinCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignUsersFromGroup

> `readonly` **unassignUsersFromGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `string`[], [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignVisitorLicensePlate

> `readonly` **unassignVisitorLicensePlate**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `license_plate_id`: `string`; `visitor_id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignVisitorNfcCard

> `readonly` **unassignVisitorNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnassignVisitorNfcCardRequest`](../interfaces/UnassignVisitorNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignVisitorPinCode

> `readonly` **unassignVisitorPinCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unassignVisitorQrCode

> `readonly` **unassignVisitorQrCode**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, `undefined`, [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### unlockDoor

> `readonly` **unlockDoor**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UnlockDoorRequest`](../interfaces/UnlockDoorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateAccessPolicy

> `readonly` **updateAccessPolicy**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateAccessPolicyRequest`](../interfaces/UpdateAccessPolicyRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateDeviceAccessSettings

> `readonly` **updateDeviceAccessSettings**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `device_id`: `string`; \}, `undefined`, [`AccessMethodSettings`](../interfaces/AccessMethodSettings.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateDoorGroupById

> `readonly` **updateDoorGroupById**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateDoorGroupRequest`](../interfaces/UpdateDoorGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateHolidayGroup

> `readonly` **updateHolidayGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateHolidayGroupRequest`](../interfaces/UpdateHolidayGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateNfcCard

> `readonly` **updateNfcCard**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `token`: `string`; \}, `undefined`, [`UpdateNfcCardRequest`](../interfaces/UpdateNfcCardRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateSchedule

> `readonly` **updateSchedule**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateScheduleRequest`](../interfaces/UpdateScheduleRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateTouchPass

> `readonly` **updateTouchPass**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateTouchPassRequest`](../interfaces/UpdateTouchPassRequest.md), [`TouchPassDetailsResponse`](../type-aliases/TouchPassDetailsResponse.md), `"json"`\>

### updateUser

> `readonly` **updateUser**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserRequest`](../interfaces/UpdateUserRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateUserAccessPolicies

> `readonly` **updateUserAccessPolicies**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserAccessPoliciesRequest`](../interfaces/UpdateUserAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateUserGroup

> `readonly` **updateUserGroup**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateUserGroupRequest`](../interfaces/UpdateUserGroupRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateUserGroupAccessPolicies

> `readonly` **updateUserGroupAccessPolicies**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateGroupAccessPoliciesRequest`](../interfaces/UpdateGroupAccessPoliciesRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateVisitor

> `readonly` **updateVisitor**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`UpdateVisitorRequest`](../interfaces/UpdateVisitorRequest.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>

### updateWebhookEndpoint

> `readonly` **updateWebhookEndpoint**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`WebhookEndpointRequest`](../interfaces/WebhookEndpointRequest.md), [`WebhookEndpointResponse`](../type-aliases/WebhookEndpointResponse.md), `"json"`\>

### uploadApiServerCertificate

> `readonly` **uploadApiServerCertificate**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<`undefined`, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`UploadCertificateResponse`](../type-aliases/UploadCertificateResponse.md), `"json"`\>

### uploadUserAvatar

> `readonly` **uploadUserAvatar**: [`EndpointDefinition`](../interfaces/EndpointDefinition.md)\<\{ `id`: `string`; \}, `undefined`, [`BodyLike`](../type-aliases/BodyLike.md), [`SuccessOnlyResponse`](../type-aliases/SuccessOnlyResponse.md), `"json"`\>
