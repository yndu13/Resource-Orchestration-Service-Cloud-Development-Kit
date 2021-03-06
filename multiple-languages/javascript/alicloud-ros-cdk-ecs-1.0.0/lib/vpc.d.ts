import * as ros from '@alicloud/ros-cdk-core';
import { RosVPC } from './ecs.generated';
export { RosVPC as VPCProperty };
/**
 * Properties for defining a `ALIYUN::ECS::VPC`
 */
export interface VPCProps {
    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    readonly cidrBlock?: string;
    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;
    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;
    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::VPC`
 */
export declare class Vpc extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute RouteTableId: The router table id of created VPC.
     */
    readonly attrRouteTableId: any;
    /**
     * @Attribute VRouterId: Router id of created VPC.
     */
    readonly attrVRouterId: any;
    /**
     * @Attribute VpcId: Id of created VPC.
     */
    readonly attrVpcId: any;
    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VPCProps, enableResourcePropertyConstraint?: boolean);
}
