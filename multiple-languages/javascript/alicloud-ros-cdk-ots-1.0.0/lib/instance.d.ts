import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ots.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::OTS::Instance`
 */
export interface InstanceProps {
    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string;
    /**
     * @Property clusterType: Cluster type, the default is SSD.
     */
    readonly clusterType?: string;
    /**
     * @Property description: Instance description.
     */
    readonly description?: string;
    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string;
    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
}
/**
 * A ROS resource type:  `ALIYUN::OTS::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: any;
    /**
     * @Attribute PrivateEndpoint: Private endpoint
     */
    readonly attrPrivateEndpoint: any;
    /**
     * @Attribute PublicEndpoint: Public endpoint
     */
    readonly attrPublicEndpoint: any;
    /**
     * @Attribute VpcEndpoint: Vpc endpoint
     */
    readonly attrVpcEndpoint: any;
    /**
     * Create a new `ALIYUN::OTS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
