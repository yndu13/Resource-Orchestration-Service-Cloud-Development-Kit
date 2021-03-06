import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteTable } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteTable as RouteTableProperty };

/**
 * Properties for defining a `ALIYUN::VPC::RouteTable`
 */
export interface RouteTableProps {

    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    readonly vpcId: string;

    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    readonly routeTableName?: string;

    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::VPC::RouteTable`
 */
export class RouteTable extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: any;

    /**
     * @Attribute RouteTableName: The name of the route table.
     */
    public readonly attrRouteTableName: any;

    /**
     * @Attribute RouteTableType: The type of the route table.
     */
    public readonly attrRouteTableType: any;

    /**
     * @Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    public readonly attrVSwitchIds: any;

    /**
     * @Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    public readonly attrVpcId: any;

    /**
     * Create a new `ALIYUN::VPC::RouteTable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteTableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRouteTable = new RosRouteTable(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            routeTableName: props.routeTableName,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTable;
        this.attrRouteTableId = rosRouteTable.attrRouteTableId;
        this.attrRouteTableName = rosRouteTable.attrRouteTableName;
        this.attrRouteTableType = rosRouteTable.attrRouteTableType;
        this.attrVSwitchIds = rosRouteTable.attrVSwitchIds;
        this.attrVpcId = rosRouteTable.attrVpcId;
    }
}
