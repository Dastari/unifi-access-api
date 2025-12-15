import type { EndpointInvoker } from './internal/endpoint.js';
import type { endpointDefinitions } from './endpoints/index.js';
declare module './client.js' {
    interface UnifiAccessApi {
        /**
         * Create User.
         *
         * Performs a POST request to `/api/v1/developer/users`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createUser: EndpointInvoker<(typeof endpointDefinitions)['createUser']>;
        /**
         * Update User.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateUser: EndpointInvoker<(typeof endpointDefinitions)['updateUser']>;
        /**
         * Fetch User.
         *
         * Performs a GET request to `/api/v1/developer/users/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchUser: EndpointInvoker<(typeof endpointDefinitions)['fetchUser']>;
        /**
         * Fetch All Users.
         *
         * Performs a GET request to `/api/v1/developer/users`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllUsers: EndpointInvoker<(typeof endpointDefinitions)['fetchAllUsers']>;
        /**
         * Update User Access Policies.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateUserAccessPolicies: EndpointInvoker<(typeof endpointDefinitions)['updateUserAccessPolicies']>;
        /**
         * Assign User Nfc Card.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignUserNfcCard: EndpointInvoker<(typeof endpointDefinitions)['assignUserNfcCard']>;
        /**
         * Unassign User Nfc Card.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id/nfc_cards/delete`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignUserNfcCard: EndpointInvoker<(typeof endpointDefinitions)['unassignUserNfcCard']>;
        /**
         * Assign User Pin Code.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id/pin_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignUserPinCode: EndpointInvoker<(typeof endpointDefinitions)['assignUserPinCode']>;
        /**
         * Unassign User Pin Code.
         *
         * Performs a DELETE request to `/api/v1/developer/users/:id/pin_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignUserPinCode: EndpointInvoker<(typeof endpointDefinitions)['unassignUserPinCode']>;
        /**
         * Create User Group.
         *
         * Performs a POST request to `/api/v1/developer/user_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createUserGroup: EndpointInvoker<(typeof endpointDefinitions)['createUserGroup']>;
        /**
         * Fetch All User Groups.
         *
         * Performs a GET request to `/api/v1/developer/user_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllUserGroups: EndpointInvoker<(typeof endpointDefinitions)['fetchAllUserGroups']>;
        /**
         * Fetch User Group.
         *
         * Performs a GET request to `/api/v1/developer/user_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchUserGroup: EndpointInvoker<(typeof endpointDefinitions)['fetchUserGroup']>;
        /**
         * Update User Group.
         *
         * Performs a PUT request to `/api/v1/developer/user_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateUserGroup: EndpointInvoker<(typeof endpointDefinitions)['updateUserGroup']>;
        /**
         * Delete User Group.
         *
         * Performs a DELETE request to `/api/v1/developer/user_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteUserGroup: EndpointInvoker<(typeof endpointDefinitions)['deleteUserGroup']>;
        /**
         * Assign Users To Group.
         *
         * Performs a POST request to `/api/v1/developer/user_groups/:id/users`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignUsersToGroup: EndpointInvoker<(typeof endpointDefinitions)['assignUsersToGroup']>;
        /**
         * Unassign Users From Group.
         *
         * Performs a POST request to `/api/v1/developer/user_groups/:id/users/delete`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignUsersFromGroup: EndpointInvoker<(typeof endpointDefinitions)['unassignUsersFromGroup']>;
        /**
         * Fetch Users In Group.
         *
         * Performs a GET request to `/api/v1/developer/user_groups/:id/users`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchUsersInGroup: EndpointInvoker<(typeof endpointDefinitions)['fetchUsersInGroup']>;
        /**
         * Fetch All Users In Group.
         *
         * Performs a GET request to `/api/v1/developer/user_groups/:id/users/all`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllUsersInGroup: EndpointInvoker<(typeof endpointDefinitions)['fetchAllUsersInGroup']>;
        /**
         * Fetch User Access Policies.
         *
         * Performs a GET request to `/api/v1/developer/users/:id/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchUserAccessPolicies: EndpointInvoker<(typeof endpointDefinitions)['fetchUserAccessPolicies']>;
        /**
         * Update User Group Access Policies.
         *
         * Performs a PUT request to `/api/v1/developer/user_groups/:id/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateUserGroupAccessPolicies: EndpointInvoker<(typeof endpointDefinitions)['updateUserGroupAccessPolicies']>;
        /**
         * Fetch User Group Access Policies.
         *
         * Performs a GET request to `/api/v1/developer/user_groups/:id/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchUserGroupAccessPolicies: EndpointInvoker<(typeof endpointDefinitions)['fetchUserGroupAccessPolicies']>;
        /**
         * Delete User.
         *
         * Performs a DELETE request to `/api/v1/developer/users/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteUser: EndpointInvoker<(typeof endpointDefinitions)['deleteUser']>;
        /**
         * Search Users.
         *
         * Performs a GET request to `/api/v1/developer/users/search`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly searchUsers: EndpointInvoker<(typeof endpointDefinitions)['searchUsers']>;
        /**
         * Assign Touch Pass To User.
         *
         * Performs a PUT request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignTouchPassToUser: EndpointInvoker<(typeof endpointDefinitions)['assignTouchPassToUser']>;
        /**
         * Unassign Touch Pass From User.
         *
         * Performs a DELETE request to `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignTouchPassFromUser: EndpointInvoker<(typeof endpointDefinitions)['unassignTouchPassFromUser']>;
        /**
         * Batch Assign Touch Passes.
         *
         * Performs a PUT request to `/api/v1/developer/users/touch_passes/assign`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly batchAssignTouchPasses: EndpointInvoker<(typeof endpointDefinitions)['batchAssignTouchPasses']>;
        /**
         * Assign License Plates To User.
         *
         * Performs a PUT request to `/api/v1/developer/users/:id/license_plates`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignLicensePlatesToUser: EndpointInvoker<(typeof endpointDefinitions)['assignLicensePlatesToUser']>;
        /**
         * Unassign License Plate From User.
         *
         * Performs a DELETE request to `/api/v1/developer/users/:user_id/license_plates/:license_plate_id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignLicensePlateFromUser: EndpointInvoker<(typeof endpointDefinitions)['unassignLicensePlateFromUser']>;
        /**
         * Upload User Avatar.
         *
         * Performs a POST request to `/api/v1/developer/users/:id/avatar`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly uploadUserAvatar: EndpointInvoker<(typeof endpointDefinitions)['uploadUserAvatar']>;
        /**
         * Create Visitor.
         *
         * Performs a POST request to `/api/v1/developer/visitors`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createVisitor: EndpointInvoker<(typeof endpointDefinitions)['createVisitor']>;
        /**
         * Fetch Visitor.
         *
         * Performs a GET request to `/api/v1/developer/visitors/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchVisitor: EndpointInvoker<(typeof endpointDefinitions)['fetchVisitor']>;
        /**
         * Fetch All Visitors.
         *
         * Performs a GET request to `/api/v1/developer/visitors`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllVisitors: EndpointInvoker<(typeof endpointDefinitions)['fetchAllVisitors']>;
        /**
         * Update Visitor.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateVisitor: EndpointInvoker<(typeof endpointDefinitions)['updateVisitor']>;
        /**
         * Delete Visitor.
         *
         * Performs a DELETE request to `/api/v1/developer/visitors/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteVisitor: EndpointInvoker<(typeof endpointDefinitions)['deleteVisitor']>;
        /**
         * Assign Visitor Nfc Card.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignVisitorNfcCard: EndpointInvoker<(typeof endpointDefinitions)['assignVisitorNfcCard']>;
        /**
         * Unassign Visitor Nfc Card.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id/nfc_cards/delete`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignVisitorNfcCard: EndpointInvoker<(typeof endpointDefinitions)['unassignVisitorNfcCard']>;
        /**
         * Assign Visitor Pin Code.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id/pin_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignVisitorPinCode: EndpointInvoker<(typeof endpointDefinitions)['assignVisitorPinCode']>;
        /**
         * Unassign Visitor Pin Code.
         *
         * Performs a DELETE request to `/api/v1/developer/visitors/:id/pin_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignVisitorPinCode: EndpointInvoker<(typeof endpointDefinitions)['unassignVisitorPinCode']>;
        /**
         * Assign Visitor Qr Code.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id/qr_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignVisitorQrCode: EndpointInvoker<(typeof endpointDefinitions)['assignVisitorQrCode']>;
        /**
         * Unassign Visitor Qr Code.
         *
         * Performs a DELETE request to `/api/v1/developer/visitors/:id/qr_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignVisitorQrCode: EndpointInvoker<(typeof endpointDefinitions)['unassignVisitorQrCode']>;
        /**
         * Assign Visitor License Plates.
         *
         * Performs a PUT request to `/api/v1/developer/visitors/:id/license_plates`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignVisitorLicensePlates: EndpointInvoker<(typeof endpointDefinitions)['assignVisitorLicensePlates']>;
        /**
         * Unassign Visitor License Plate.
         *
         * Performs a DELETE request to `/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unassignVisitorLicensePlate: EndpointInvoker<(typeof endpointDefinitions)['unassignVisitorLicensePlate']>;
        /**
         * Create Access Policy.
         *
         * Performs a POST request to `/api/v1/developer/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createAccessPolicy: EndpointInvoker<(typeof endpointDefinitions)['createAccessPolicy']>;
        /**
         * Update Access Policy.
         *
         * Performs a PUT request to `/api/v1/developer/access_policies/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateAccessPolicy: EndpointInvoker<(typeof endpointDefinitions)['updateAccessPolicy']>;
        /**
         * Delete Access Policy.
         *
         * Performs a DELETE request to `/api/v1/developer/access_policies/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteAccessPolicy: EndpointInvoker<(typeof endpointDefinitions)['deleteAccessPolicy']>;
        /**
         * Fetch Access Policy.
         *
         * Performs a GET request to `/api/v1/developer/access_policies/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAccessPolicy: EndpointInvoker<(typeof endpointDefinitions)['fetchAccessPolicy']>;
        /**
         * Fetch All Access Policies.
         *
         * Performs a GET request to `/api/v1/developer/access_policies`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllAccessPolicies: EndpointInvoker<(typeof endpointDefinitions)['fetchAllAccessPolicies']>;
        /**
         * Create Holiday Group.
         *
         * Performs a POST request to `/api/v1/developer/access_policies/holiday_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createHolidayGroup: EndpointInvoker<(typeof endpointDefinitions)['createHolidayGroup']>;
        /**
         * Update Holiday Group.
         *
         * Performs a PUT request to `/api/v1/developer/access_policies/holiday_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateHolidayGroup: EndpointInvoker<(typeof endpointDefinitions)['updateHolidayGroup']>;
        /**
         * Delete Holiday Group.
         *
         * Performs a DELETE request to `/api/v1/developer/access_policies/holiday_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteHolidayGroup: EndpointInvoker<(typeof endpointDefinitions)['deleteHolidayGroup']>;
        /**
         * Fetch Holiday Group.
         *
         * Performs a GET request to `/api/v1/developer/access_policies/holiday_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchHolidayGroup: EndpointInvoker<(typeof endpointDefinitions)['fetchHolidayGroup']>;
        /**
         * Fetch All Holiday Groups.
         *
         * Performs a GET request to `/api/v1/developer/access_policies/holiday_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllHolidayGroups: EndpointInvoker<(typeof endpointDefinitions)['fetchAllHolidayGroups']>;
        /**
         * Create Schedule.
         *
         * Performs a POST request to `/api/v1/developer/access_policies/schedules`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createSchedule: EndpointInvoker<(typeof endpointDefinitions)['createSchedule']>;
        /**
         * Update Schedule.
         *
         * Performs a PUT request to `/api/v1/developer/access_policies/schedules/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateSchedule: EndpointInvoker<(typeof endpointDefinitions)['updateSchedule']>;
        /**
         * Fetch Schedule.
         *
         * Performs a GET request to `/api/v1/developer/access_policies/schedules/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchSchedule: EndpointInvoker<(typeof endpointDefinitions)['fetchSchedule']>;
        /**
         * Fetch All Schedules.
         *
         * Performs a GET request to `/api/v1/developer/access_policies/schedules`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllSchedules: EndpointInvoker<(typeof endpointDefinitions)['fetchAllSchedules']>;
        /**
         * Delete Schedule.
         *
         * Performs a DELETE request to `/api/v1/developer/access_policies/schedules/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteSchedule: EndpointInvoker<(typeof endpointDefinitions)['deleteSchedule']>;
        /**
         * Generate Pin Code.
         *
         * Performs a POST request to `/api/v1/developer/credentials/pin_codes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly generatePinCode: EndpointInvoker<(typeof endpointDefinitions)['generatePinCode']>;
        /**
         * Create Nfc Enrollment Session.
         *
         * Performs a POST request to `/api/v1/developer/credentials/nfc_cards/sessions`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createNfcEnrollmentSession: EndpointInvoker<(typeof endpointDefinitions)['createNfcEnrollmentSession']>;
        /**
         * Fetch Nfc Enrollment Status.
         *
         * Performs a GET request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchNfcEnrollmentStatus: EndpointInvoker<(typeof endpointDefinitions)['fetchNfcEnrollmentStatus']>;
        /**
         * Delete Nfc Enrollment Session.
         *
         * Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/sessions/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteNfcEnrollmentSession: EndpointInvoker<(typeof endpointDefinitions)['deleteNfcEnrollmentSession']>;
        /**
         * Fetch Nfc Card.
         *
         * Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchNfcCard: EndpointInvoker<(typeof endpointDefinitions)['fetchNfcCard']>;
        /**
         * Fetch All Nfc Cards.
         *
         * Performs a GET request to `/api/v1/developer/credentials/nfc_cards/tokens`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllNfcCards: EndpointInvoker<(typeof endpointDefinitions)['fetchAllNfcCards']>;
        /**
         * Delete Nfc Card.
         *
         * Performs a DELETE request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteNfcCard: EndpointInvoker<(typeof endpointDefinitions)['deleteNfcCard']>;
        /**
         * Update Nfc Card.
         *
         * Performs a PUT request to `/api/v1/developer/credentials/nfc_cards/tokens/:token`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateNfcCard: EndpointInvoker<(typeof endpointDefinitions)['updateNfcCard']>;
        /**
         * Fetch Touch Pass List.
         *
         * Performs a GET request to `/api/v1/developer/credentials/touch_passes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchTouchPassList: EndpointInvoker<(typeof endpointDefinitions)['fetchTouchPassList']>;
        /**
         * Search Touch Passes.
         *
         * Performs a GET request to `/api/v1/developer/credentials/touch_passes/search`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly searchTouchPasses: EndpointInvoker<(typeof endpointDefinitions)['searchTouchPasses']>;
        /**
         * Fetch Assignable Touch Passes.
         *
         * Performs a GET request to `/api/v1/developer/credentials/touch_passes/assignable`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAssignableTouchPasses: EndpointInvoker<(typeof endpointDefinitions)['fetchAssignableTouchPasses']>;
        /**
         * Update Touch Pass.
         *
         * Performs a PUT request to `/api/v1/developer/credentials/touch_passes/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateTouchPass: EndpointInvoker<(typeof endpointDefinitions)['updateTouchPass']>;
        /**
         * Fetch Touch Pass Details.
         *
         * Performs a GET request to `/api/v1/developer/credentials/touch_passes/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchTouchPassDetails: EndpointInvoker<(typeof endpointDefinitions)['fetchTouchPassDetails']>;
        /**
         * Purchase Touch Passes.
         *
         * Performs a POST request to `/api/v1/developer/credentials/touch_passes`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly purchaseTouchPasses: EndpointInvoker<(typeof endpointDefinitions)['purchaseTouchPasses']>;
        /**
         * Download Touch Pass Qr Code.
         *
         * Performs a GET request to `/api/v1/developer/credentials/qr_codes/download/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly downloadTouchPassQrCode: EndpointInvoker<(typeof endpointDefinitions)['downloadTouchPassQrCode']>;
        /**
         * Import Third Party Nfc Cards.
         *
         * Performs a POST request to `/api/v1/developer/credentials/nfc_cards/import`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly importThirdPartyNfcCards: EndpointInvoker<(typeof endpointDefinitions)['importThirdPartyNfcCards']>;
        /**
         * Fetch Door Group Topology.
         *
         * Performs a GET request to `/api/v1/developer/door_groups/topology`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDoorGroupTopology: EndpointInvoker<(typeof endpointDefinitions)['fetchDoorGroupTopology']>;
        /**
         * Create Door Group.
         *
         * Performs a POST request to `/api/v1/developer/door_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createDoorGroup: EndpointInvoker<(typeof endpointDefinitions)['createDoorGroup']>;
        /**
         * Fetch Door Group By Id.
         *
         * Performs a GET request to `/api/v1/developer/door_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDoorGroupById: EndpointInvoker<(typeof endpointDefinitions)['fetchDoorGroupById']>;
        /**
         * Update Door Group By Id.
         *
         * Performs a PUT request to `/api/v1/developer/door_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateDoorGroupById: EndpointInvoker<(typeof endpointDefinitions)['updateDoorGroupById']>;
        /**
         * Fetch All Door Groups.
         *
         * Performs a GET request to `/api/v1/developer/door_groups`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllDoorGroups: EndpointInvoker<(typeof endpointDefinitions)['fetchAllDoorGroups']>;
        /**
         * Delete Door Group By Id.
         *
         * Performs a DELETE request to `/api/v1/developer/door_groups/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteDoorGroupById: EndpointInvoker<(typeof endpointDefinitions)['deleteDoorGroupById']>;
        /**
         * Fetch Door By Id.
         *
         * Performs a GET request to `/api/v1/developer/doors/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDoorById: EndpointInvoker<(typeof endpointDefinitions)['fetchDoorById']>;
        /**
         * Fetch All Doors.
         *
         * Performs a GET request to `/api/v1/developer/doors`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAllDoors: EndpointInvoker<(typeof endpointDefinitions)['fetchAllDoors']>;
        /**
         * Unlock Door.
         *
         * Performs a PUT request to `/api/v1/developer/doors/:id/unlock`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly unlockDoor: EndpointInvoker<(typeof endpointDefinitions)['unlockDoor']>;
        /**
         * Set Door Lock Rule.
         *
         * Performs a PUT request to `/api/v1/developer/doors/:id/lock_rule`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly setDoorLockRule: EndpointInvoker<(typeof endpointDefinitions)['setDoorLockRule']>;
        /**
         * Fetch Door Lock Rule.
         *
         * Performs a GET request to `/api/v1/developer/doors/:id/lock_rule`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDoorLockRule: EndpointInvoker<(typeof endpointDefinitions)['fetchDoorLockRule']>;
        /**
         * Set Door Emergency Status.
         *
         * Performs a PUT request to `/api/v1/developer/doors/settings/emergency`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly setDoorEmergencyStatus: EndpointInvoker<(typeof endpointDefinitions)['setDoorEmergencyStatus']>;
        /**
         * Fetch Door Emergency Status.
         *
         * Performs a GET request to `/api/v1/developer/doors/settings/emergency`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDoorEmergencyStatus: EndpointInvoker<(typeof endpointDefinitions)['fetchDoorEmergencyStatus']>;
        /**
         * Fetch Devices.
         *
         * Performs a GET request to `/api/v1/developer/devices`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDevices: EndpointInvoker<(typeof endpointDefinitions)['fetchDevices']>;
        /**
         * Fetch Device Access Settings.
         *
         * Performs a GET request to `/api/v1/developer/devices/:device_id/settings`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchDeviceAccessSettings: EndpointInvoker<(typeof endpointDefinitions)['fetchDeviceAccessSettings']>;
        /**
         * Update Device Access Settings.
         *
         * Performs a PUT request to `/api/v1/developer/devices/:device_id/settings`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateDeviceAccessSettings: EndpointInvoker<(typeof endpointDefinitions)['updateDeviceAccessSettings']>;
        /**
         * Fetch System Logs.
         *
         * Performs a POST request to `/api/v1/developer/system/logs`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchSystemLogs: EndpointInvoker<(typeof endpointDefinitions)['fetchSystemLogs']>;
        /**
         * Export System Logs.
         *
         * Performs a POST request to `/api/v1/developer/system/logs/export`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly exportSystemLogs: EndpointInvoker<(typeof endpointDefinitions)['exportSystemLogs']>;
        /**
         * Fetch System Log Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/logs/resource/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchSystemLogResource: EndpointInvoker<(typeof endpointDefinitions)['fetchSystemLogResource']>;
        /**
         * Fetch System Static Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/static/:path`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchSystemStaticResource: EndpointInvoker<(typeof endpointDefinitions)['fetchSystemStaticResource']>;
        /**
         * Get Avatar Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/static/avatar/:resourceId`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly getAvatarResource: EndpointInvoker<(typeof endpointDefinitions)['getAvatarResource']>;
        /**
         * Get Preview Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/static/preview/:resourceName`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly getPreviewResource: EndpointInvoker<(typeof endpointDefinitions)['getPreviewResource']>;
        /**
         * Get Video Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/static/activities_resource/video/:resourceName`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly getVideoResource: EndpointInvoker<(typeof endpointDefinitions)['getVideoResource']>;
        /**
         * Get Thumbnail Resource.
         *
         * Performs a GET request to `/api/v1/developer/system/static/activities_resource/thumbnail/:resourceName`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly getThumbnailResource: EndpointInvoker<(typeof endpointDefinitions)['getThumbnailResource']>;
        /**
         * Send Identity Invitations.
         *
         * Performs a POST request to `/api/v1/developer/users/identity/invitations`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly sendIdentityInvitations: EndpointInvoker<(typeof endpointDefinitions)['sendIdentityInvitations']>;
        /**
         * Fetch Available Identity Resources.
         *
         * Performs a GET request to `/api/v1/developer/users/identity/assignments`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchAvailableIdentityResources: EndpointInvoker<(typeof endpointDefinitions)['fetchAvailableIdentityResources']>;
        /**
         * Assign Identity Resources To User.
         *
         * Performs a POST request to `/api/v1/developer/users/:id/identity/assignments`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignIdentityResourcesToUser: EndpointInvoker<(typeof endpointDefinitions)['assignIdentityResourcesToUser']>;
        /**
         * Fetch Identity Resources For User.
         *
         * Performs a GET request to `/api/v1/developer/users/:id/identity/assignments`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchIdentityResourcesForUser: EndpointInvoker<(typeof endpointDefinitions)['fetchIdentityResourcesForUser']>;
        /**
         * Assign Identity Resources To User Group.
         *
         * Performs a POST request to `/api/v1/developer/user_groups/:id/identity/assignments`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly assignIdentityResourcesToUserGroup: EndpointInvoker<(typeof endpointDefinitions)['assignIdentityResourcesToUserGroup']>;
        /**
         * Fetch Identity Resources For User Group.
         *
         * Performs a GET request to `/api/v1/developer/user_groups/:id/identity/assignments`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchIdentityResourcesForUserGroup: EndpointInvoker<(typeof endpointDefinitions)['fetchIdentityResourcesForUserGroup']>;
        /**
         * Fetch Webhook Endpoints.
         *
         * Performs a GET request to `/api/v1/developer/webhooks/endpoints`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly fetchWebhookEndpoints: EndpointInvoker<(typeof endpointDefinitions)['fetchWebhookEndpoints']>;
        /**
         * Create Webhook Endpoint.
         *
         * Performs a POST request to `/api/v1/developer/webhooks/endpoints`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly createWebhookEndpoint: EndpointInvoker<(typeof endpointDefinitions)['createWebhookEndpoint']>;
        /**
         * Update Webhook Endpoint.
         *
         * Performs a PUT request to `/api/v1/developer/webhooks/endpoints/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly updateWebhookEndpoint: EndpointInvoker<(typeof endpointDefinitions)['updateWebhookEndpoint']>;
        /**
         * Delete Webhook Endpoint.
         *
         * Performs a DELETE request to `/api/v1/developer/webhooks/endpoints/:id`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteWebhookEndpoint: EndpointInvoker<(typeof endpointDefinitions)['deleteWebhookEndpoint']>;
        /**
         * Upload Api Server Certificate.
         *
         * Performs a POST request to `/api/v1/developer/api_server/certificates`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly uploadApiServerCertificate: EndpointInvoker<(typeof endpointDefinitions)['uploadApiServerCertificate']>;
        /**
         * Delete Api Server Certificate.
         *
         * Performs a DELETE request to `/api/v1/developer/api_server/certificates`.
         *
         * @returns Promise resolving with the typed API response.
         */
        readonly deleteApiServerCertificate: EndpointInvoker<(typeof endpointDefinitions)['deleteApiServerCertificate']>;
    }
}
//# sourceMappingURL=unifi-access-api.docs.d.ts.map