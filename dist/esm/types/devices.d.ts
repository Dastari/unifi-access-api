import type { ApiResponse } from './common.js';
export interface Device {
    id: string;
    name: string;
    type: string;
    alias?: string;
}
export type DevicesResponse = ApiResponse<Device[] | Device[][]>;
export interface AccessMethodSwitch {
    enabled?: boolean | 'true' | 'false';
    [key: string]: unknown;
}
export interface AccessMethodSettings {
    nfc?: AccessMethodSwitch;
    bt_tap?: AccessMethodSwitch;
    bt_button?: AccessMethodSwitch;
    bt_shake?: AccessMethodSwitch;
    mobile_wave?: AccessMethodSwitch;
    pin_code?: AccessMethodSwitch & {
        pin_code_shuffle?: boolean | 'true' | 'false';
    };
    face?: AccessMethodSwitch & {
        anti_spoofing_level?: string | number;
        detect_distance?: string | number;
    };
    wave?: AccessMethodSwitch;
    qr_code?: AccessMethodSwitch;
    touch_pass?: AccessMethodSwitch;
    [key: string]: AccessMethodSwitch | undefined;
}
export type DeviceAccessMethodSettingsResponse = ApiResponse<AccessMethodSettings>;
//# sourceMappingURL=devices.d.ts.map