// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`
 */
export interface RosAccessGroupProps {

    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string;

    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string;

    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    readonly description?: string;
}

/**
 * Determine whether the given properties match those of a `RosAccessGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAccessGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessGroupType', ros.requiredValidator)(properties.accessGroupType));
    if(properties.accessGroupType && (typeof properties.accessGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('accessGroupType', ros.validateAllowedValues)({
          data: properties.accessGroupType,
          allowedValues: ["Vpc","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('accessGroupType', ros.validateString)(properties.accessGroupType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    if(properties.accessGroupName && (typeof properties.accessGroupName) !== 'object') {
        errors.collect(ros.propertyValidator('accessGroupName', ros.validateAllowedPattern)({
          data: properties.accessGroupName,
          reg: /^[_a-zA-Z0-9-]{3,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    return errors.wrap('supplied properties not correct for "RosAccessGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessGroup` resource.
 */
// @ts-ignore TS6133
function rosAccessGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessGroupPropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupName: ros.stringToRosTemplate(properties.accessGroupName),
      AccessGroupType: ros.stringToRosTemplate(properties.accessGroupType),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::NAS::AccessGroup`
 */
export class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccessGroupName: Permission group name
     */
    public readonly attrAccessGroupName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: Permission group name
     */
    public accessGroupName: string;

    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    public accessGroupType: string;

    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    public description: string | undefined;

    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessGroupName = ros.Token.asString(this.getAtt('AccessGroupName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.accessGroupType = props.accessGroupType;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            accessGroupType: this.accessGroupType,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NAS::AccessRule`
 */
export interface RosAccessRuleProps {

    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string;

    /**
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp: string;

    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number;

    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string;

    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string;
}

/**
 * Determine whether the given properties match those of a `RosAccessRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAccessRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.userAccessType && (typeof properties.userAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('userAccessType', ros.validateAllowedValues)({
          data: properties.userAccessType,
          allowedValues: ["no_squash","root_squash","all_squash"],
        }));
    }
    errors.collect(ros.propertyValidator('userAccessType', ros.validateString)(properties.userAccessType));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.requiredValidator)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    if(properties.rwAccessType && (typeof properties.rwAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('rwAccessType', ros.validateAllowedValues)({
          data: properties.rwAccessType,
          allowedValues: ["RDWR","RDONLY"],
        }));
    }
    errors.collect(ros.propertyValidator('rwAccessType', ros.validateString)(properties.rwAccessType));
    return errors.wrap('supplied properties not correct for "RosAccessRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessRule` resource.
 */
// @ts-ignore TS6133
function rosAccessRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessRulePropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupName: ros.stringToRosTemplate(properties.accessGroupName),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      Priority: ros.numberToRosTemplate(properties.priority),
      RWAccessType: ros.stringToRosTemplate(properties.rwAccessType),
      UserAccessType: ros.stringToRosTemplate(properties.userAccessType),
    };
}

/**
 * A ROS template type:  `ALIYUN::NAS::AccessRule`
 */
export class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccessRuleId: Rule serial number
     */
    public readonly attrAccessRuleId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: Permission group name
     */
    public accessGroupName: string;

    /**
     * @Property sourceCidrIp: Address or address segment
     */
    public sourceCidrIp: string;

    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    public priority: number | undefined;

    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    public rwAccessType: string | undefined;

    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    public userAccessType: string | undefined;

    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessRuleId = ros.Token.asString(this.getAtt('AccessRuleId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.sourceCidrIp = props.sourceCidrIp;
        this.priority = props.priority;
        this.rwAccessType = props.rwAccessType;
        this.userAccessType = props.userAccessType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            sourceCidrIp: this.sourceCidrIp,
            priority: this.priority,
            rwAccessType: this.rwAccessType,
            userAccessType: this.userAccessType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NAS::FileSystem`
 */
export interface RosFileSystemProps {

    /**
     * @Property protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
     */
    readonly protocolType: string;

    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
     */
    readonly storageType: string;

    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number;

    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
     */
    readonly capacity?: number;

    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    readonly chargeType?: string;

    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property description: File system description (space characters are not allowed)
     */
    readonly description?: string;

    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number;

    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    readonly encryptType?: number;

    /**
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
     */
    readonly fileSystemType?: string;

    /**
     * @Property snapshotId: Snapshot ID.
     */
    readonly snapshotId?: string;

    /**
     * @Property vpcId: Vpc ID.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: Zone ID.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosFileSystemProps`
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the result of the validation.
 */
function RosFileSystemPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('storageType', ros.requiredValidator)(properties.storageType));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('encryptType', ros.validateNumber)(properties.encryptType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["NFS","SMB"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","Subscription"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    return errors.wrap('supplied properties not correct for "RosFileSystemProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem` resource
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem` resource.
 */
// @ts-ignore TS6133
function rosFileSystemPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFileSystemPropsValidator(properties).assertSuccess();
    }
    return {
      ProtocolType: ros.stringToRosTemplate(properties.protocolType),
      StorageType: ros.stringToRosTemplate(properties.storageType),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      Capacity: ros.numberToRosTemplate(properties.capacity),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      Description: ros.stringToRosTemplate(properties.description),
      Duration: ros.numberToRosTemplate(properties.duration),
      EncryptType: ros.numberToRosTemplate(properties.encryptType),
      FileSystemType: ros.stringToRosTemplate(properties.fileSystemType),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::NAS::FileSystem`
 */
export class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::FileSystem";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FileSystemId: ID of the file system created
     */
    public readonly attrFileSystemId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
     */
    public protocolType: string;

    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
     */
    public storageType: string;

    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    public bandwidth: number | undefined;

    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
     */
    public capacity: number | undefined;

    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    public chargeType: string | undefined;

    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: File system description (space characters are not allowed)
     */
    public description: string | undefined;

    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    public duration: number | undefined;

    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    public encryptType: number | undefined;

    /**
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
     */
    public fileSystemType: string | undefined;

    /**
     * @Property snapshotId: Snapshot ID.
     */
    public snapshotId: string | undefined;

    /**
     * @Property vpcId: Vpc ID.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: Zone ID.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::NAS::FileSystem`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFileSystem.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemId = ros.Token.asString(this.getAtt('FileSystemId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.protocolType = props.protocolType;
        this.storageType = props.storageType;
        this.bandwidth = props.bandwidth;
        this.capacity = props.capacity;
        this.chargeType = props.chargeType;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.duration = props.duration;
        this.encryptType = props.encryptType;
        this.fileSystemType = props.fileSystemType;
        this.snapshotId = props.snapshotId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            protocolType: this.protocolType,
            storageType: this.storageType,
            bandwidth: this.bandwidth,
            capacity: this.capacity,
            chargeType: this.chargeType,
            deletionForce: this.deletionForce,
            description: this.description,
            duration: this.duration,
            encryptType: this.encryptType,
            fileSystemType: this.fileSystemType,
            snapshotId: this.snapshotId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFileSystemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface RosMountTargetProps {

    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string;

    /**
     * @Property fileSystemId: File system ID
     */
    readonly fileSystemId: string;

    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string;

    /**
     * @Property status: Status, including Active and Inactive
     */
    readonly status?: string;

    /**
     * @Property vpcId: VPC network ID
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;
}

/**
 * Determine whether the given properties match those of a `RosMountTargetProps`
 *
 * @param properties - the TypeScript properties of a `RosMountTargetProps`
 *
 * @returns the result of the validation.
 */
function RosMountTargetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Active","Inactive"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["Vpc","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    return errors.wrap('supplied properties not correct for "RosMountTargetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::MountTarget` resource
 *
 * @param properties - the TypeScript properties of a `RosMountTargetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::MountTarget` resource.
 */
// @ts-ignore TS6133
function rosMountTargetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMountTargetPropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupName: ros.stringToRosTemplate(properties.accessGroupName),
      FileSystemId: ros.stringToRosTemplate(properties.fileSystemId),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Status: ros.stringToRosTemplate(properties.status),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::NAS::MountTarget`
 */
export class RosMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::MountTarget";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MountTargetDomain: Mount point domain name
     */
    public readonly attrMountTargetDomain: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    public accessGroupName: string;

    /**
     * @Property fileSystemId: File system ID
     */
    public fileSystemId: string;

    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    public networkType: string;

    /**
     * @Property status: Status, including Active and Inactive
     */
    public status: string | undefined;

    /**
     * @Property vpcId: VPC network ID
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::NAS::MountTarget`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMountTargetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMountTarget.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMountTargetDomain = ros.Token.asString(this.getAtt('MountTargetDomain'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.fileSystemId = props.fileSystemId;
        this.networkType = props.networkType;
        this.status = props.status;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            fileSystemId: this.fileSystemId,
            networkType: this.networkType,
            status: this.status,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMountTargetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
