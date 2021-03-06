import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccountPrivilege as AccountPrivilegeProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`
 */
export interface AccountPrivilegeProps {

    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    readonly accountName: string;

    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege: string;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    readonly dbClusterId: string;

    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    readonly dbName: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::AccountPrivilege`
 */
export class AccountPrivilege extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccountPrivilege = new RosAccountPrivilege(this, id,  {
            accountPrivilege: props.accountPrivilege,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccountPrivilege;
    }
}
