import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroup as ResourceGroupProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`
 */
export interface ResourceGroupProps {

    /**
     * @Property displayName: The display name of the resource group
     */
    readonly displayName: string;

    /**
     * @Property name: The unique identifier of the resource group
     */
    readonly name: string;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceGroup`
 */
export class ResourceGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    public readonly attrAccountId: any;

    /**
     * @Attribute CreateDate: The time when the resource group was created
     */
    public readonly attrCreateDate: any;

    /**
     * @Attribute DisplayName: The display name of the resource group
     */
    public readonly attrDisplayName: any;

    /**
     * @Attribute Id: The ID of the resource group
     */
    public readonly attrId: any;

    /**
     * @Attribute Name: The unique identifier of the resource group
     */
    public readonly attrName: any;

    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions
     */
    public readonly attrRegionStatuses: any;

    /**
     * Create a new `ALIYUN::ResourceManager::ResourceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            displayName: props.displayName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrAccountId = rosResourceGroup.attrAccountId;
        this.attrCreateDate = rosResourceGroup.attrCreateDate;
        this.attrDisplayName = rosResourceGroup.attrDisplayName;
        this.attrId = rosResourceGroup.attrId;
        this.attrName = rosResourceGroup.attrName;
        this.attrRegionStatuses = rosResourceGroup.attrRegionStatuses;
    }
}
