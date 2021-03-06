import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControlBinding } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficControlBinding as TrafficControlBindingProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export interface TrafficControlBindingProps {

    /**
     * @Property apiIds: APIs to bind with the traffic control.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property groupId: The id of group.
     */
    readonly groupId: string;

    /**
     * @Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string;

    /**
     * @Property trafficControlId: The id of traffic control.
     */
    readonly trafficControlId: string;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export class TrafficControlBinding extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTrafficControlBinding = new RosTrafficControlBinding(this, id,  {
            stageName: props.stageName,
            apiIds: props.apiIds,
            trafficControlId: props.trafficControlId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControlBinding;
    }
}
