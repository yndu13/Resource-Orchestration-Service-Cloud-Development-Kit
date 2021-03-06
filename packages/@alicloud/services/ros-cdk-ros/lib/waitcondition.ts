import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitCondition } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitCondition as WaitConditionProperty };

/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface WaitConditionProps {

    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string;

    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number;

    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number;
}

/**
 * A ROS resource type:  `ALIYUN::ROS::WaitCondition`
 */
export class WaitCondition extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    public readonly attrData: any;

    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrErrorData: any;

    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrJoinedErrorData: any;

    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitConditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWaitCondition = new RosWaitCondition(this, id,  {
            timeout: props.timeout,
            count: props.count ? props.count : 1,
            handle: props.handle,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitCondition;
        this.attrData = rosWaitCondition.attrData;
        this.attrErrorData = rosWaitCondition.attrErrorData;
        this.attrJoinedErrorData = rosWaitCondition.attrJoinedErrorData;
    }
}
