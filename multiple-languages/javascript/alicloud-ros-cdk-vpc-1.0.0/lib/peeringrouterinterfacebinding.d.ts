import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceBinding } from './vpc.generated';
export { RosPeeringRouterInterfaceBinding as PeeringRouterInterfaceBindingProperty };
/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export interface PeeringRouterInterfaceBindingProps {
    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string;
    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export declare class PeeringRouterInterfaceBinding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute RouterInterfaceId: The RouterInterface ID.
     */
    readonly attrRouterInterfaceId: any;
    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceBindingProps, enableResourcePropertyConstraint?: boolean);
}
