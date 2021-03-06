import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceSecurityIps } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstanceSecurityIps as DBInstanceSecurityIpsProperty };

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`
 */
export interface DBInstanceSecurityIpsProps {

    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    readonly dbInstanceId: string;

    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    readonly dbInstanceIpArrayAttribute: string;

    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    readonly dbInstanceIpArrayName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceSecurityIps`
 */
export class DBInstanceSecurityIps extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SecurityIps: The security ips of selected database instance.
     */
    public readonly attrSecurityIps: any;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceSecurityIps`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceSecurityIpsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstanceSecurityIps = new RosDBInstanceSecurityIps(this, id,  {
            dbInstanceIpArrayAttribute: props.dbInstanceIpArrayAttribute,
            dbInstanceId: props.dbInstanceId,
            dbInstanceIpArrayName: props.dbInstanceIpArrayName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceSecurityIps;
        this.attrSecurityIps = rosDBInstanceSecurityIps.attrSecurityIps;
    }
}
