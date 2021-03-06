// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ResourceManager::Account`
 */
export interface RosAccountProps {

    /**
     * @Property displayName: Member name
     */
    readonly displayName: string;

    /**
     * @Property folderId: The ID of the parent folder
     */
    readonly folderId?: string;

    /**
     * @Property payerAccountId:
     */
    readonly payerAccountId?: string;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payerAccountId', ros.validateString)(properties.payerAccountId));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('folderId', ros.validateString)(properties.folderId));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      FolderId: ros.stringToRosTemplate(properties.folderId),
      PayerAccountId: ros.stringToRosTemplate(properties.payerAccountId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ResourceManager::Account`
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccountId: This ID of Resource Manager Account
     */
    public readonly attrAccountId: any;

    /**
     * @Attribute DisplayName: Member name
     */
    public readonly attrDisplayName: any;

    /**
     * @Attribute FolderId: The ID of the parent folder
     */
    public readonly attrFolderId: any;

    /**
     * @Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    public readonly attrJoinMethod: any;

    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: any;

    /**
     * @Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    public readonly attrType: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: Member name
     */
    public displayName: string;

    /**
     * @Property folderId: The ID of the parent folder
     */
    public folderId: string | undefined;

    /**
     * @Property payerAccountId:
     */
    public payerAccountId: string | undefined;

    /**
     * Create a new `ALIYUN::ResourceManager::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = ros.Token.asString(this.getAtt('AccountId'));
        this.attrDisplayName = ros.Token.asString(this.getAtt('DisplayName'));
        this.attrFolderId = ros.Token.asString(this.getAtt('FolderId'));
        this.attrJoinMethod = ros.Token.asString(this.getAtt('JoinMethod'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrType = ros.Token.asString(this.getAtt('Type'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.folderId = props.folderId;
        this.payerAccountId = props.payerAccountId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            folderId: this.folderId,
            payerAccountId: this.payerAccountId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ResourceManager::Folder`
 */
export interface RosFolderProps {

    /**
     * @Property folderName: The name of the folder
     */
    readonly folderName: string;

    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string;
}

/**
 * Determine whether the given properties match those of a `RosFolderProps`
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the result of the validation.
 */
function RosFolderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('folderName', ros.requiredValidator)(properties.folderName));
    errors.collect(ros.propertyValidator('folderName', ros.validateString)(properties.folderName));
    errors.collect(ros.propertyValidator('parentFolderId', ros.validateString)(properties.parentFolderId));
    return errors.wrap('supplied properties not correct for "RosFolderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource.
 */
// @ts-ignore TS6133
function rosFolderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFolderPropsValidator(properties).assertSuccess();
    }
    return {
      FolderName: ros.stringToRosTemplate(properties.folderName),
      ParentFolderId: ros.stringToRosTemplate(properties.parentFolderId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ResourceManager::Folder`
 */
export class RosFolder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FolderId: The ID of the folder
     */
    public readonly attrFolderId: any;

    /**
     * @Attribute FolderName: The name of the folder
     */
    public readonly attrFolderName: any;

    /**
     * @Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public readonly attrParentFolderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property folderName: The name of the folder
     */
    public folderName: string;

    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public parentFolderId: string | undefined;

    /**
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFolderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFolder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFolderId = ros.Token.asString(this.getAtt('FolderId'));
        this.attrFolderName = ros.Token.asString(this.getAtt('FolderName'));
        this.attrParentFolderId = ros.Token.asString(this.getAtt('ParentFolderId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.folderName = props.folderName;
        this.parentFolderId = props.parentFolderId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            folderName: this.folderName,
            parentFolderId: this.parentFolderId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFolderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`
 */
export interface RosHandshakeProps {

    /**
     * @Property targetEntity: Invited account ID or login email
     */
    readonly targetEntity: string;

    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string;

    /**
     * @Property note: Remarks
     */
    readonly note?: string;
}

/**
 * Determine whether the given properties match those of a `RosHandshakeProps`
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the result of the validation.
 */
function RosHandshakePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('note', ros.validateString)(properties.note));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('targetEntity', ros.requiredValidator)(properties.targetEntity));
    errors.collect(ros.propertyValidator('targetEntity', ros.validateString)(properties.targetEntity));
    return errors.wrap('supplied properties not correct for "RosHandshakeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource.
 */
// @ts-ignore TS6133
function rosHandshakePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHandshakePropsValidator(properties).assertSuccess();
    }
    return {
      TargetEntity: ros.stringToRosTemplate(properties.targetEntity),
      TargetType: ros.stringToRosTemplate(properties.targetType),
      Note: ros.stringToRosTemplate(properties.note),
    };
}

/**
 * A ROS template type:  `ALIYUN::ResourceManager::Handshake`
 */
export class RosHandshake extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HandshakeId: This ID of Resource Manager handshake
     */
    public readonly attrHandshakeId: any;

    /**
     * @Attribute MasterAccountId: Resource account master account ID
     */
    public readonly attrMasterAccountId: any;

    /**
     * @Attribute MasterAccountName: The name of the main account of the resource directory
     */
    public readonly attrMasterAccountName: any;

    /**
     * @Attribute Note: Remarks
     */
    public readonly attrNote: any;

    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: any;

    /**
     * @Attribute TargetEntity: Invited account ID or login email
     */
    public readonly attrTargetEntity: any;

    /**
     * @Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    public readonly attrTargetType: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property targetEntity: Invited account ID or login email
     */
    public targetEntity: string;

    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    public targetType: string;

    /**
     * @Property note: Remarks
     */
    public note: string | undefined;

    /**
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHandshakeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHandshake.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHandshakeId = ros.Token.asString(this.getAtt('HandshakeId'));
        this.attrMasterAccountId = ros.Token.asString(this.getAtt('MasterAccountId'));
        this.attrMasterAccountName = ros.Token.asString(this.getAtt('MasterAccountName'));
        this.attrNote = ros.Token.asString(this.getAtt('Note'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrTargetEntity = ros.Token.asString(this.getAtt('TargetEntity'));
        this.attrTargetType = ros.Token.asString(this.getAtt('TargetType'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.targetEntity = props.targetEntity;
        this.targetType = props.targetType;
        this.note = props.note;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            targetEntity: this.targetEntity,
            targetType: this.targetType,
            note: this.note,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHandshakePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceDirectory`
 */
export interface RosResourceDirectoryProps {
}

/**
 * Determine whether the given properties match those of a `RosResourceDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosResourceDirectoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosResourceDirectoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource.
 */
// @ts-ignore TS6133
function rosResourceDirectoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceDirectory`
 */
export class RosResourceDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MasterAccountId: The ID of the master account
     */
    public readonly attrMasterAccountId: any;

    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    public readonly attrMasterAccountName: any;

    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    public readonly attrResourceDirectoryId: any;

    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    public readonly attrRootFolderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceDirectoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterAccountId = ros.Token.asString(this.getAtt('MasterAccountId'));
        this.attrMasterAccountName = ros.Token.asString(this.getAtt('MasterAccountName'));
        this.attrResourceDirectoryId = ros.Token.asString(this.getAtt('ResourceDirectoryId'));
        this.attrRootFolderId = ros.Token.asString(this.getAtt('RootFolderId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`
 */
export interface RosResourceGroupProps {

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
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceGroup`
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
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

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: The display name of the resource group
     */
    public displayName: string;

    /**
     * @Property name: The unique identifier of the resource group
     */
    public name: string;

    /**
     * Create a new `ALIYUN::ResourceManager::ResourceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = ros.Token.asString(this.getAtt('AccountId'));
        this.attrCreateDate = ros.Token.asString(this.getAtt('CreateDate'));
        this.attrDisplayName = ros.Token.asString(this.getAtt('DisplayName'));
        this.attrId = ros.Token.asString(this.getAtt('Id'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.attrRegionStatuses = ros.Token.asString(this.getAtt('RegionStatuses'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
