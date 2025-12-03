import type { ApiResponse } from './common.js';

export type AccessResourceType = 'door' | 'door_group';

export interface AccessPolicyResource {
  id: string;
  type: AccessResourceType;
  name?: string;
}

export interface AccessPolicy {
  id: string;
  name: string;
  resources: AccessPolicyResource[];
  schedule_id?: string | null;
  [key: string]: unknown;
}

export interface Holiday {
  id: string;
  name: string;
  description?: string;
  repeat: boolean;
  start_time: string;
  end_time: string;
  [key: string]: unknown;
}

export interface HolidayGroup {
  id: string;
  name: string;
  is_default?: boolean;
  description?: string;
  holidays?: Holiday[];
  [key: string]: unknown;
}

export type DayOfWeek =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export interface SchedulePeriod {
  start_time: string;
  end_time: string;
}

export interface ScheduleWeeklySlots {
  sunday?: SchedulePeriod[];
  monday?: SchedulePeriod[];
  tuesday?: SchedulePeriod[];
  wednesday?: SchedulePeriod[];
  thursday?: SchedulePeriod[];
  friday?: SchedulePeriod[];
  saturday?: SchedulePeriod[];
  [key: string]: SchedulePeriod[] | undefined;
}

export interface ScheduleHolidayPeriod extends SchedulePeriod {}

export interface Schedule {
  id: string;
  name: string;
  is_default: boolean;
  type: string;
  weekly?: ScheduleWeeklySlots;
  holiday_schedule?: ScheduleHolidayPeriod[];
  holiday_group_id?: string | null;
  holiday_group?: HolidayGroup;
  [key: string]: unknown;
}

export interface CreateAccessPolicyRequest {
  name: string;
  resources?: AccessPolicyResource[];
  schedule_id?: string;
}

export interface UpdateAccessPolicyRequest {
  name?: string;
  resources?: AccessPolicyResource[];
  schedule_id?: string | null;
}

export interface CreateHolidayRequest {
  name: string;
  start_time: string;
  end_time: string;
  repeat?: boolean;
  description?: string;
}

export interface CreateHolidayGroupRequest {
  name: string;
  description?: string;
  holidays?: CreateHolidayRequest[];
}

export interface UpdateHolidayGroupRequest extends Partial<CreateHolidayGroupRequest> {}

export interface CreateScheduleRequest {
  name: string;
  type: string;
  weekly?: ScheduleWeeklySlots;
  holiday_schedule?: ScheduleHolidayPeriod[];
  holiday_group_id?: string;
}

export interface UpdateScheduleRequest extends Partial<CreateScheduleRequest> {}

export type AccessPolicyResponse = ApiResponse<AccessPolicy>;
export interface AccessPoliciesResponse extends ApiResponse<AccessPolicy[]> {
  pagination?: {
    page_num: number;
    page_size: number;
    total: number;
  };
}
export type HolidayGroupResponse = ApiResponse<HolidayGroup>;
export type HolidayGroupsResponse = ApiResponse<HolidayGroup[]>;
export type ScheduleResponse = ApiResponse<Schedule>;
export type SchedulesResponse = ApiResponse<Schedule[]>;
