import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTask } from './ess.generated';
export { RosAlarmTask as AlarmTaskProperty };
/**
 * Properties for defining a `ALIYUN::ESS::AlarmTask`
 */
export interface AlarmTaskProps {
    /**
     * @Property alarmAction: Alarm Actions
     */
    readonly alarmAction: string[];
    /**
     * @Property metricName: Metric Name
     */
    readonly metricName: string;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string;
    /**
     * @Property threshold: Threshold
     */
    readonly threshold: number;
    /**
     * @Property comparisonOperator: Comparison Operator
     */
    readonly comparisonOperator?: string;
    /**
     * @Property description: Description
     */
    readonly description?: string;
    /**
     * @Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property evaluationCount: Evaluation Count
     */
    readonly evaluationCount?: number;
    /**
     * @Property groupId: Group Id
     */
    readonly groupId?: number;
    /**
     * @Property metricType: Metric Type
     */
    readonly metricType?: string;
    /**
     * @Property name: Name
     */
    readonly name?: string;
    /**
     * @Property period: Period
     */
    readonly period?: number;
    /**
     * @Property statistics: Statistics
     */
    readonly statistics?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ESS::AlarmTask`
 */
export declare class AlarmTask extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: any;
    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskProps, enableResourcePropertyConstraint?: boolean);
}
