export declare const endpointDefinitions: {
    readonly uploadApiServerCertificate: {
        method: "POST";
        path: string;
        rawBody: true;
    };
    readonly deleteApiServerCertificate: {
        method: "DELETE";
        path: string;
    };
    readonly fetchWebhookEndpoints: {
        method: "GET";
        path: string;
    };
    readonly createWebhookEndpoint: {
        method: "POST";
        path: string;
    };
    readonly updateWebhookEndpoint: {
        method: "PUT";
        path: string;
    };
    readonly deleteWebhookEndpoint: {
        method: "DELETE";
        path: string;
    };
    readonly sendIdentityInvitations: {
        method: "POST";
        path: string;
    };
    readonly fetchAvailableIdentityResources: {
        method: "GET";
        path: string;
    };
    readonly assignIdentityResourcesToUser: {
        method: "POST";
        path: string;
    };
    readonly fetchIdentityResourcesForUser: {
        method: "GET";
        path: string;
    };
    readonly assignIdentityResourcesToUserGroup: {
        method: "POST";
        path: string;
    };
    readonly fetchIdentityResourcesForUserGroup: {
        method: "GET";
        path: string;
    };
    readonly fetchSystemLogs: {
        method: "POST";
        path: string;
    };
    readonly exportSystemLogs: {
        method: "POST";
        path: string;
        responseType: "arrayBuffer";
    };
    readonly fetchSystemLogResource: {
        method: "GET";
        path: string;
    };
    readonly fetchSystemStaticResource: {
        method: "GET";
        path: string;
        responseType: "arrayBuffer";
    };
    readonly fetchDevices: {
        method: "GET";
        path: string;
    };
    readonly fetchDeviceAccessSettings: {
        method: "GET";
        path: string;
    };
    readonly updateDeviceAccessSettings: {
        method: "PUT";
        path: string;
    };
    readonly fetchDoorGroupTopology: {
        method: "GET";
        path: string;
    };
    readonly createDoorGroup: {
        method: "POST";
        path: string;
    };
    readonly fetchDoorGroupById: {
        method: "GET";
        path: string;
    };
    readonly updateDoorGroupById: {
        method: "PUT";
        path: string;
    };
    readonly fetchAllDoorGroups: {
        method: "GET";
        path: string;
    };
    readonly deleteDoorGroupById: {
        method: "DELETE";
        path: string;
    };
    readonly fetchDoorById: {
        method: "GET";
        path: string;
    };
    readonly fetchAllDoors: {
        method: "GET";
        path: string;
    };
    readonly unlockDoor: {
        method: "PUT";
        path: string;
    };
    readonly setDoorLockRule: {
        method: "PUT";
        path: string;
    };
    readonly fetchDoorLockRule: {
        method: "GET";
        path: string;
    };
    readonly setDoorEmergencyStatus: {
        method: "PUT";
        path: string;
    };
    readonly fetchDoorEmergencyStatus: {
        method: "GET";
        path: string;
    };
    readonly generatePinCode: {
        method: "POST";
        path: string;
    };
    readonly createNfcEnrollmentSession: {
        method: "POST";
        path: string;
    };
    readonly fetchNfcEnrollmentStatus: {
        method: "GET";
        path: string;
    };
    readonly deleteNfcEnrollmentSession: {
        method: "DELETE";
        path: string;
    };
    readonly fetchNfcCard: {
        method: "GET";
        path: string;
    };
    readonly fetchAllNfcCards: {
        method: "GET";
        path: string;
    };
    readonly deleteNfcCard: {
        method: "DELETE";
        path: string;
    };
    readonly updateNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly fetchTouchPassList: {
        method: "GET";
        path: string;
    };
    readonly searchTouchPasses: {
        method: "GET";
        path: string;
    };
    readonly fetchAssignableTouchPasses: {
        method: "GET";
        path: string;
    };
    readonly updateTouchPass: {
        method: "PUT";
        path: string;
    };
    readonly fetchTouchPassDetails: {
        method: "GET";
        path: string;
    };
    readonly purchaseTouchPasses: {
        method: "POST";
        path: string;
    };
    readonly downloadTouchPassQrCode: {
        method: "GET";
        path: string;
        responseType: "arrayBuffer";
    };
    readonly importThirdPartyNfcCards: {
        method: "POST";
        path: string;
        rawBody: true;
    };
    readonly createAccessPolicy: {
        method: "POST";
        path: string;
    };
    readonly updateAccessPolicy: {
        method: "PUT";
        path: string;
    };
    readonly deleteAccessPolicy: {
        method: "DELETE";
        path: string;
    };
    readonly fetchAccessPolicy: {
        method: "GET";
        path: string;
    };
    readonly fetchAllAccessPolicies: {
        method: "GET";
        path: string;
    };
    readonly createHolidayGroup: {
        method: "POST";
        path: string;
    };
    readonly updateHolidayGroup: {
        method: "PUT";
        path: string;
    };
    readonly deleteHolidayGroup: {
        method: "DELETE";
        path: string;
    };
    readonly fetchHolidayGroup: {
        method: "GET";
        path: string;
    };
    readonly fetchAllHolidayGroups: {
        method: "GET";
        path: string;
    };
    readonly createSchedule: {
        method: "POST";
        path: string;
    };
    readonly updateSchedule: {
        method: "PUT";
        path: string;
    };
    readonly fetchSchedule: {
        method: "GET";
        path: string;
    };
    readonly fetchAllSchedules: {
        method: "GET";
        path: string;
    };
    readonly deleteSchedule: {
        method: "DELETE";
        path: string;
    };
    readonly createVisitor: {
        method: "POST";
        path: string;
    };
    readonly fetchVisitor: {
        method: "GET";
        path: string;
    };
    readonly fetchAllVisitors: {
        method: "GET";
        path: string;
    };
    readonly updateVisitor: {
        method: "PUT";
        path: string;
    };
    readonly deleteVisitor: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly assignVisitorPinCode: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorPinCode: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorQrCode: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorQrCode: {
        method: "DELETE";
        path: string;
    };
    readonly assignVisitorLicensePlates: {
        method: "PUT";
        path: string;
    };
    readonly unassignVisitorLicensePlate: {
        method: "DELETE";
        path: string;
    };
    readonly createUser: {
        method: "POST";
        path: string;
    };
    readonly updateUser: {
        method: "PUT";
        path: string;
    };
    readonly fetchUser: {
        method: "GET";
        path: string;
    };
    readonly fetchAllUsers: {
        method: "GET";
        path: string;
    };
    readonly updateUserAccessPolicies: {
        method: "PUT";
        path: string;
    };
    readonly assignUserNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly unassignUserNfcCard: {
        method: "PUT";
        path: string;
    };
    readonly assignUserPinCode: {
        method: "PUT";
        path: string;
    };
    readonly unassignUserPinCode: {
        method: "DELETE";
        path: string;
    };
    readonly createUserGroup: {
        method: "POST";
        path: string;
    };
    readonly fetchAllUserGroups: {
        method: "GET";
        path: string;
    };
    readonly fetchUserGroup: {
        method: "GET";
        path: string;
    };
    readonly updateUserGroup: {
        method: "PUT";
        path: string;
    };
    readonly deleteUserGroup: {
        method: "DELETE";
        path: string;
    };
    readonly assignUsersToGroup: {
        method: "POST";
        path: string;
    };
    readonly unassignUsersFromGroup: {
        method: "POST";
        path: string;
    };
    readonly fetchUsersInGroup: {
        method: "GET";
        path: string;
    };
    readonly fetchAllUsersInGroup: {
        method: "GET";
        path: string;
    };
    readonly fetchUserAccessPolicies: {
        method: "GET";
        path: string;
    };
    readonly updateUserGroupAccessPolicies: {
        method: "PUT";
        path: string;
    };
    readonly fetchUserGroupAccessPolicies: {
        method: "GET";
        path: string;
    };
    readonly deleteUser: {
        method: "DELETE";
        path: string;
    };
    readonly searchUsers: {
        method: "GET";
        path: string;
    };
    readonly assignTouchPassToUser: {
        method: "PUT";
        path: string;
    };
    readonly unassignTouchPassFromUser: {
        method: "DELETE";
        path: string;
    };
    readonly batchAssignTouchPasses: {
        method: "PUT";
        path: string;
    };
    readonly assignLicensePlatesToUser: {
        method: "PUT";
        path: string;
    };
    readonly unassignLicensePlateFromUser: {
        method: "DELETE";
        path: string;
    };
    readonly uploadUserAvatar: {
        method: "POST";
        path: string;
        rawBody: true;
    };
};
export type EndpointDefinitions = typeof endpointDefinitions;
//# sourceMappingURL=index.d.ts.map