import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroup } from './dns.generated';
export { RosDomainGroup as DomainGroupProperty };
/**
 * Properties for defining a `ALIYUN::DNS::DomainGroup`
 */
export interface DomainGroupProps {
    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string;
}
/**
 * A ROS resource type:  `ALIYUN::DNS::DomainGroup`
 */
export declare class DomainGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: any;
    /**
     * Create a new `ALIYUN::DNS::DomainGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainGroupProps, enableResourcePropertyConstraint?: boolean);
}
