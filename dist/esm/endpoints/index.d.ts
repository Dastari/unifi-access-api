export declare const endpointDefinitions: {
    readonly uploadApiServerCertificate: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").BodyLike, import("../index.js").UploadCertificateResponse, "json">;
    readonly deleteApiServerCertificate: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").UploadCertificateResponse, "json">;
    readonly fetchWebhookEndpoints: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").WebhookEndpointsResponse, "json">;
    readonly createWebhookEndpoint: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").WebhookEndpointRequest, import("../index.js").WebhookEndpointResponse, "json">;
    readonly updateWebhookEndpoint: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").WebhookEndpointRequest, import("../index.js").WebhookEndpointResponse, "json">;
    readonly deleteWebhookEndpoint: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly sendIdentityInvitations: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").IdentityInvitationRequestItem[], import("../index.js").IdentityInvitationResponse, "json">;
    readonly fetchAvailableIdentityResources: import("../index.js").EndpointDefinition<undefined, {
        resource_type?: string;
    }, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").IdentityAssignmentRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly assignIdentityResourcesToUserGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").IdentityAssignmentRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchIdentityResourcesForUserGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").IdentityAvailableResourcesResponse, "json">;
    readonly fetchSystemLogs: import("../index.js").EndpointDefinition<undefined, import("../index.js").SystemLogQuery, import("../index.js").FetchSystemLogsRequest, import("../index.js").SystemLogsResponse, "json">;
    readonly exportSystemLogs: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").FetchSystemLogsRequest, import("../index.js").FileResponse, "arrayBuffer">;
    readonly fetchSystemLogResource: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SystemLogResourceResponse, "json">;
    readonly fetchSystemStaticResource: import("../index.js").EndpointDefinition<{
        path: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getAvatarResource: import("../index.js").EndpointDefinition<{
        resourceId: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getPreviewResource: import("../index.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getVideoResource: import("../index.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly getThumbnailResource: import("../index.js").EndpointDefinition<{
        resourceName: string;
    }, undefined, undefined, import("../index.js").StaticResourceResponse, "arrayBuffer">;
    readonly fetchDevices: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DevicesResponse, "json">;
    readonly fetchDeviceAccessSettings: import("../index.js").EndpointDefinition<{
        device_id: string;
    }, undefined, undefined, import("../index.js").DeviceAccessMethodSettingsResponse, "json">;
    readonly updateDeviceAccessSettings: import("../index.js").EndpointDefinition<{
        device_id: string;
    }, undefined, import("../index.js").AccessMethodSettings, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorGroupTopology: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorTopologyResponse, "json">;
    readonly createDoorGroup: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateDoorGroupRequest, import("../index.js").DoorGroupResponse, "json">;
    readonly fetchDoorGroupById: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorGroupResponse, "json">;
    readonly updateDoorGroupById: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateDoorGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAllDoorGroups: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorGroupsResponse, "json">;
    readonly deleteDoorGroupById: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorById: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorResponse, "json">;
    readonly fetchAllDoors: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorsResponse, "json">;
    readonly unlockDoor: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnlockDoorRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly setDoorLockRule: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").DoorLockRuleRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorLockRule: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").DoorLockRuleResponse, "json">;
    readonly setDoorEmergencyStatus: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").DoorEmergencyStatusRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchDoorEmergencyStatus: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").DoorEmergencyStatusResponse, "json">;
    readonly generatePinCode: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").GeneratePinCodeResponse, "json">;
    readonly createNfcEnrollmentSession: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateNfcEnrollmentSessionRequest, import("../index.js").CreateNfcEnrollmentSessionResponse, "json">;
    readonly fetchNfcEnrollmentStatus: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").NfcEnrollmentStatusResponse, "json">;
    readonly deleteNfcEnrollmentSession: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchNfcCard: import("../index.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, import("../index.js").NfcCardResponse, "json">;
    readonly fetchAllNfcCards: import("../index.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
    }, undefined, import("../index.js").NfcCardsResponse, "json">;
    readonly deleteNfcCard: import("../index.js").EndpointDefinition<{
        token: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly updateNfcCard: import("../index.js").EndpointDefinition<{
        token: string;
    }, undefined, import("../index.js").UpdateNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchTouchPassList: import("../index.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        status?: string;
    }, undefined, import("../index.js").TouchPassListResponse, "json">;
    readonly searchTouchPasses: import("../index.js").EndpointDefinition<undefined, {
        condition: string;
    }, undefined, import("../index.js").TouchPassListResponse, "json">;
    readonly fetchAssignableTouchPasses: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").AssignableTouchPassesResponse, "json">;
    readonly updateTouchPass: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateTouchPassRequest, import("../index.js").TouchPassDetailsResponse, "json">;
    readonly fetchTouchPassDetails: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").TouchPassDetailsResponse, "json">;
    readonly purchaseTouchPasses: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").PurchaseTouchPassesRequest, import("../index.js").PurchaseTouchPassResponse, "json">;
    readonly downloadTouchPassQrCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FileResponse, "arrayBuffer">;
    readonly importThirdPartyNfcCards: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").BodyLike, import("../index.js").ImportThirdPartyNfcCardsResponse, "json">;
    readonly createAccessPolicy: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateAccessPolicyRequest, import("../index.js").AccessPolicyResponse, "json">;
    readonly updateAccessPolicy: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateAccessPolicyRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteAccessPolicy: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAccessPolicy: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").AccessPolicyResponse, "json">;
    readonly fetchAllAccessPolicies: import("../index.js").EndpointDefinition<undefined, {
        page_num?: number;
        page_size?: number;
        keyword?: string;
    }, undefined, import("../index.js").AccessPoliciesResponse, "json">;
    readonly createHolidayGroup: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateHolidayGroupRequest, import("../index.js").HolidayGroupResponse, "json">;
    readonly updateHolidayGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateHolidayGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteHolidayGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchHolidayGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").HolidayGroupResponse, "json">;
    readonly fetchAllHolidayGroups: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").HolidayGroupsResponse, "json">;
    readonly createSchedule: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateScheduleRequest, import("../index.js").ScheduleResponse, "json">;
    readonly updateSchedule: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateScheduleRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchSchedule: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").ScheduleResponse, "json">;
    readonly fetchAllSchedules: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").SchedulesResponse, "json">;
    readonly deleteSchedule: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createVisitor: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateVisitorRequest, import("../index.js").CreateVisitorResponse, "json">;
    readonly fetchVisitor: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchVisitorResponse, "json">;
    readonly fetchAllVisitors: import("../index.js").EndpointDefinition<undefined, {
        status?: number;
        keyword?: string;
        page_num?: number;
        page_size?: number;
        'expand[]'?: string | string[];
    }, undefined, import("../index.js").FetchVisitorsResponse, "json">;
    readonly updateVisitor: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateVisitorRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteVisitor: import("../index.js").EndpointDefinition<{
        id: string;
    }, {
        is_force?: boolean | 0 | 1;
    }, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorNfcCard: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorNfcCard: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnassignVisitorNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorPinCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorPinCodeRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorPinCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorQrCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorQrCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignVisitorLicensePlates: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignVisitorLicensePlatesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignVisitorLicensePlate: import("../index.js").EndpointDefinition<{
        visitor_id: string;
        license_plate_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createUser: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateUserRequest, import("../index.js").CreateUserResponse, "json">;
    readonly updateUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, import("../index.js").FetchUserQuery, undefined, import("../index.js").FetchUserResponse, "json">;
    readonly fetchAllUsers: import("../index.js").EndpointDefinition<undefined, import("../index.js").FetchUsersQuery, undefined, import("../index.js").FetchAllUsersResponse, "json">;
    readonly updateUserAccessPolicies: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserAccessPoliciesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUserNfcCard: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUserNfcCard: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UnassignNfcCardRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUserPinCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignPinCodeRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUserPinCode: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly createUserGroup: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").CreateUserGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchAllUserGroups: import("../index.js").EndpointDefinition<undefined, undefined, undefined, import("../index.js").FetchAllUserGroupsResponse, "json">;
    readonly fetchUserGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchUserGroupResponse, "json">;
    readonly updateUserGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateUserGroupRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly deleteUserGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly assignUsersToGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignUsersFromGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, string[], import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUsersInGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchGroupUsersResponse, "json">;
    readonly fetchAllUsersInGroup: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").FetchGroupUsersResponse, "json">;
    readonly fetchUserAccessPolicies: import("../index.js").EndpointDefinition<{
        id: string;
    }, import("../index.js").FetchUserAccessPoliciesQuery, undefined, import("../index.js").UserAccessPoliciesResponse, "json">;
    readonly updateUserGroupAccessPolicies: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").UpdateGroupAccessPoliciesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly fetchUserGroupAccessPolicies: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").UserAccessPoliciesResponse, "json">;
    readonly deleteUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly searchUsers: import("../index.js").EndpointDefinition<undefined, import("../index.js").SearchUsersQuery, undefined, import("../index.js").SearchUsersResponse, "json">;
    readonly assignTouchPassToUser: import("../index.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, import("../index.js").TouchPassAssignmentResponse, "json">;
    readonly unassignTouchPassFromUser: import("../index.js").EndpointDefinition<{
        user_id: string;
        touch_pass_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly batchAssignTouchPasses: import("../index.js").EndpointDefinition<undefined, undefined, import("../index.js").BatchAssignTouchPassRequest, import("../index.js").BatchAssignTouchPassResponse, "json">;
    readonly assignLicensePlatesToUser: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").AssignLicensePlatesRequest, import("../index.js").SuccessOnlyResponse, "json">;
    readonly unassignLicensePlateFromUser: import("../index.js").EndpointDefinition<{
        user_id: string;
        license_plate_id: string;
    }, undefined, undefined, import("../index.js").SuccessOnlyResponse, "json">;
    readonly uploadUserAvatar: import("../index.js").EndpointDefinition<{
        id: string;
    }, undefined, import("../index.js").BodyLike, import("../index.js").SuccessOnlyResponse, "json">;
};
export type EndpointDefinitions = typeof endpointDefinitions;
//# sourceMappingURL=index.d.ts.map