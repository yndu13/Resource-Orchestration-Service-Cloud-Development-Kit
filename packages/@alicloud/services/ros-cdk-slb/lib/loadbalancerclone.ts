import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerClone } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancerClone as LoadBalancerCloneProperty };

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`
 */
export interface LoadBalancerCloneProps {

    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string;

    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancerClone`
 */
export class LoadBalancerClone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute LoadBalancerId: The id of load balance generated
     */
    public readonly attrLoadBalancerId: any;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancerClone = new RosLoadBalancerClone(this, id,  {
            loadBalancerName: props.loadBalancerName,
            sourceLoadBalancerId: props.sourceLoadBalancerId,
            resourceGroupId: props.resourceGroupId,
            tagsPolicy: props.tagsPolicy ? props.tagsPolicy : 'empty',
            vSwitchId: props.vSwitchId,
            backendServers: props.backendServers,
            tags: ros.tagFactory(props.tags),
            backendServersPolicy: props.backendServersPolicy ? props.backendServersPolicy : 'clone',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerClone;
        this.attrLoadBalancerId = rosLoadBalancerClone.attrLoadBalancerId;
    }
}
