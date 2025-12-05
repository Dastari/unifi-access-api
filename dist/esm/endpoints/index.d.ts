export declare const endpointDefinitions: {
    readonly uploadApiServerCertificate: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").BodyLike, import("../index.js").UploadCertificateResponse, "json">;
    readonly deleteApiServerCertificate: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").UploadCertificateResponse, "json">;
    readonly fetchWebhookEndpoints: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").WebhookEndpointsResponse, "json">;
    readonly createWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").WebhookEndpointRequest, import("../index.js").WebhookEndpointResponse, "json">;
    readonly updateWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").WebhookEndpointRequest, import("../index.js").WebhookEndpointResponse, "json">;
    readonly deleteWebhookEndpoint: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly sendIdentityInvitations: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").IdentityInvitationRequestItem[], import("../index.js").IdentityInvitationResponse, "json">;
    readonly fetchAvailableIdentityResources: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        resource_type?: string;
    }, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").IdentityAssignmentRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").IdentityAssignmentRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly fetchSystemLogs: import("../internal/endpoint.js").EndpointDefinition<undefined, import("../index.js").SystemLogQuery, import("../index.js").FetchSystemLogsRequest, import("../index.js").SystemLogsResponse, "json">;
    readonly exportSystemLogs: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").FetchSystemLogsRequest, import("../index.js").FileResponse, "arrayBuffer">;
    readonly fetchSystemLogResource: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SystemLogResourceResponse, "json">;
    readonly fetchSystemStaticResource: import("../internal/endpoint.js").EndpointDefinition<{
        path: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getAvatarResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceId: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getPreviewResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getVideoResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getThumbnailResource: import("../internal/endpoint.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly fetchDevices: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DevicesResponse, "json">;
    readonly fetchDeviceAccessSettings: import("../internal/endpoint.js").EndpointDefinition<{
        device_id: string;
    }, undefined, undefined, import("../index.js").DeviceAccessMethodSettingsResponse, "json">;
    readonly updateDeviceAccessSettings: import("../internal/endpoint.js").EndpointDefinition<{
        device_id: string;
    }, undefined, import("../index.js").AccessMethodSettings, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorGroupTopology: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorTopologyResponse, "json">;
    readonly createDoorGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateDoorGroupRequest, import("../index.js").DoorGroupResponse, "json">;
    readonly fetchDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorGroupResponse, "json">;
    readonly updateDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateDoorGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAllDoorGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorGroupsResponse, "json">;
    readonly deleteDoorGroupById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorById: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorResponse, "json">;
    readonly fetchAllDoors: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorsResponse, "json">;
    readonly unlockDoor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnlockDoorRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly setDoorLockRule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").DoorLockRuleRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorLockRule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorLockRuleResponse, "json">;
    readonly setDoorEmergencyStatus: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").DoorEmergencyStatusRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorEmergencyStatus: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorEmergencyStatusResponse, "json">;
    readonly generatePinCode: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").GeneratePinCodeResponse, "json">;
    readonly createNfcEnrollmentSession: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateNfcEnrollmentSessionRequest, import("../index.js").CreateNfcEnrollmentSessionResponse, "json">;
    readonly fetchNfcEnrollmentStatus: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").NfcEnrollmentStatusResponse, "json">;
    readonly deleteNfcEnrollmentSession: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, import("../index.js").NfcCardResponse, "json">;
    readonly fetchAllNfcCards: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
    }, undefined, import("../index.js").NfcCardsResponse, "json">;
    readonly deleteNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly updateNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        token: string;
    }, undefined, import("../index.js").UpdateNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchTouchPassList: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        status?: string;
    }, undefined, import("../index.js").TouchPassListResponse, "json">;
    readonly searchTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        condition: string;
    }, undefined, import("../index.js").TouchPassListResponse, "json">;
    readonly fetchAssignableTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").AssignableTouchPassesResponse, "json">;
    readonly updateTouchPass: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateTouchPassRequest, import("../index.js").TouchPassDetailsResponse, "json">;
    readonly fetchTouchPassDetails: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").TouchPassDetailsResponse, "json">;
    readonly purchaseTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").PurchaseTouchPassesRequest, import("../index.js").PurchaseTouchPassResponse, "json">;
    readonly downloadTouchPassQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FileResponse, "arrayBuffer">;
    readonly importThirdPartyNfcCards: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").BodyLike, import("../index.js").ImportThirdPartyNfcCardsResponse, "json">;
    readonly createAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateAccessPolicyRequest, import("../index.js").AccessPolicyResponse, "json">;
    readonly updateAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateAccessPolicyRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAccessPolicy: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").AccessPolicyResponse, "json">;
    readonly fetchAllAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        keyword?: string;
    }, undefined, import("../index.js").AccessPoliciesResponse, "json">;
    readonly createHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateHolidayGroupRequest, import("../index.js").HolidayGroupResponse, "json">;
    readonly updateHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateHolidayGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchHolidayGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").HolidayGroupResponse, "json">;
    readonly fetchAllHolidayGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").HolidayGroupsResponse, "json">;
    readonly createSchedule: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateScheduleRequest, import("../index.js").ScheduleResponse, "json">;
    readonly updateSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateScheduleRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").ScheduleResponse, "json">;
    readonly fetchAllSchedules: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").SchedulesResponse, "json">;
    readonly deleteSchedule: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createVisitor: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateVisitorRequest, import("../index.js").CreateVisitorResponse, "json">;
    readonly fetchVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchVisitorResponse, "json">;
    readonly fetchAllVisitors: import("../internal/endpoint.js").EndpointDefinition<undefined, {
        status?: number;
        keyword?: string;
        page_num?: number;
        page_size?: number;
        'expand[]'?: string | string[];
    }, undefined, import("../index.js").FetchVisitorsResponse, "json">;
    readonly updateVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateVisitorRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteVisitor: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnassignVisitorNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorPinCodeRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorQrCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorLicensePlates: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorLicensePlatesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorLicensePlate: import("../internal/endpoint.js").EndpointDefinition<{
        visitor_id: string;
        license_plate_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createUser: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateUserRequest, import("../index.js").CreateUserResponse, "json">;
    readonly updateUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, import("../index.js").FetchUserQuery, undefined, import("../index.js").FetchUserResponse, "json">;
    readonly fetchAllUsers: import("../internal/endpoint.js").EndpointDefinition<undefined, import("../index.js").FetchUsersQuery, undefined, import("../index.js").FetchAllUsersResponse, "json">;
    readonly updateUserAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserAccessPoliciesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUserNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUserNfcCard: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnassignNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUserPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignPinCodeRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUserPinCode: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createUserGroup: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateUserGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAllUserGroups: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").FetchAllUserGroupsResponse, "json">;
    readonly fetchUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchUserGroupResponse, "json">;
    readonly updateUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteUserGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUsersToGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUsersFromGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUsersInGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchGroupUsersResponse, "json">;
    readonly fetchAllUsersInGroup: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchGroupUsersResponse, "json">;
    readonly fetchUserAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, import("../index.js").FetchUserAccessPoliciesQuery, undefined, import("../index.js").UserAccessPoliciesResponse, "json">;
    readonly updateUserGroupAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateGroupAccessPoliciesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUserGroupAccessPolicies: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").UserAccessPoliciesResponse, "json">;
    readonly deleteUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly searchUsers: import("../internal/endpoint.js").EndpointDefinition<undefined, import("../index.js").SearchUsersQuery, undefined, import("../index.js").SearchUsersResponse, "json">;
    readonly assignTouchPassToUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, import("../index.js").TouchPassAssignmentResponse, "json">;
    readonly unassignTouchPassFromUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly batchAssignTouchPasses: import("../internal/endpoint.js").EndpointDefinition<undefined, undefined, import("../index.js").BatchAssignTouchPassRequest, import("../index.js").BatchAssignTouchPassResponse, "json">;
    readonly assignLicensePlatesToUser: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignLicensePlatesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignLicensePlateFromUser: import("../internal/endpoint.js").EndpointDefinition<{
        user_id: string;
        license_plate_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly uploadUserAvatar: import("../internal/endpoint.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").BodyLike, import("../index.js").SuccessOnlyResponse, "json">;
};
export type EndpointDefinitions = typeof endpointDefinitions;
//# sourceMappingURL=index.d.ts.map