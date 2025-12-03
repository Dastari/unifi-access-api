export declare const userEndpoints: {
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
export type UserEndpoints = typeof userEndpoints;
//# sourceMappingURL=users.d.ts.map