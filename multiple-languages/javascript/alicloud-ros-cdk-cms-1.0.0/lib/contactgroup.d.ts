import * as ros from '@alicloud/ros-cdk-core';
import { RosContactGroup } from './cms.generated';
export { RosContactGroup as ContactGroupProperty };
/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`
 */
export interface ContactGroupProps {
    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string;
    /**
     * @Property contactNames: The name of the alert contact.
     */
    readonly contactNames: string[];
    /**
     * @Property describe: The description of the alert contact group.
     */
    readonly describe: string;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::ContactGroup`
 */
export declare class ContactGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: any;
    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactGroupProps, enableResourcePropertyConstraint?: boolean);
}
