import * as ros from '@alicloud/ros-cdk-core';
import { RosScheduledTask } from './ess.generated';
export { RosScheduledTask as ScheduledTaskProperty };
/**
 * Properties for defining a `ALIYUN::ESS::ScheduledTask`
 */
export interface ScheduledTaskProps {
    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    readonly launchTime: string;
    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     */
    readonly scheduledAction: string;
    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    readonly description?: string;
    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    readonly launchExpirationTime?: number;
    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceEndTime?: string;
    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceType?: string;
    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceValue?: string;
    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    readonly scheduledTaskName?: string;
    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    readonly taskEnabled?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ESS::ScheduledTask`
 */
export declare class ScheduledTask extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
     */
    readonly attrScheduledTaskId: any;
    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScheduledTaskProps, enableResourcePropertyConstraint?: boolean);
}