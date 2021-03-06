// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface RosAccessKeyProps {

    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;
}

/**
 * Determine whether the given properties match those of a `RosAccessKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessKeyProps`
 *
 * @returns the result of the validation.
 */
function RosAccessKeyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    return errors.wrap('supplied properties not correct for "RosAccessKeyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AccessKey` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessKeyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AccessKey` resource.
 */
// @ts-ignore TS6133
function rosAccessKeyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessKeyPropsValidator(properties).assertSuccess();
    }
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::AccessKey`
 */
export class RosAccessKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AccessKey";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccessKeyId: Id of access key.
     */
    public readonly attrAccessKeyId: any;

    /**
     * @Attribute AccessKeySecret: Secret of access key.
     */
    public readonly attrAccessKeySecret: any;

    /**
     * @Attribute Status: Status of access key.
     */
    public readonly attrStatus: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    public userName: string;

    /**
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessKeyId = ros.Token.asString(this.getAtt('AccessKeyId'));
        this.attrAccessKeySecret = ros.Token.asString(this.getAtt('AccessKeySecret'));
        this.attrStatus = ros.Token.asString(this.getAtt('Status'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`
 */
export interface RosAttachPolicyToRoleProps {

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;

    /**
     * @Property roleName: Role name.Example: dev.
     */
    readonly roleName: string;
}

/**
 * Determine whether the given properties match those of a `RosAttachPolicyToRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToRoleProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["System","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosAttachPolicyToRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToRole` resource
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToRole` resource.
 */
// @ts-ignore TS6133
function rosAttachPolicyToRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttachPolicyToRolePropsValidator(properties).assertSuccess();
    }
    return {
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyType: ros.stringToRosTemplate(properties.policyType),
      RoleName: ros.stringToRosTemplate(properties.roleName),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::AttachPolicyToRole`
 */
export class RosAttachPolicyToRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToRole";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Authorization policy name.
     */
    public policyName: string;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    public policyType: string;

    /**
     * @Property roleName: Role name.Example: dev.
     */
    public roleName: string;

    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToRole`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttachPolicyToRole.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.roleName = props.roleName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            roleName: this.roleName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttachPolicyToRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`
 */
export interface RosAttachPolicyToUserProps {

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;

    /**
     * @Property userName: User name.Example: dev.
     */
    readonly userName: string;
}

/**
 * Determine whether the given properties match those of a `RosAttachPolicyToUserProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToUserProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["System","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosAttachPolicyToUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToUser` resource
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToUser` resource.
 */
// @ts-ignore TS6133
function rosAttachPolicyToUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttachPolicyToUserPropsValidator(properties).assertSuccess();
    }
    return {
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyType: ros.stringToRosTemplate(properties.policyType),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::AttachPolicyToUser`
 */
export class RosAttachPolicyToUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToUser";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Authorization policy name.
     */
    public policyName: string;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    public policyType: string;

    /**
     * @Property userName: User name.Example: dev.
     */
    public userName: string;

    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToUser`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttachPolicyToUser.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttachPolicyToUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RAM::Group`
 */
export interface RosGroupProps {

    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string;

    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosGroup_PoliciesPropertyValidator))(properties.policies));
    if(properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
        errors.collect(ros.propertyValidator('comments', ros.validateLength)({
            data: properties.comments.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('comments', ros.validateString)(properties.comments));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Comments: ros.stringToRosTemplate(properties.comments),
      Policies: ros.listMapper(rosGroupPoliciesPropertyToRosTemplate)(properties.policies),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::Group`
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Group";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupName: Id of ram group.
     */
    public readonly attrGroupName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    public groupName: string;

    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    public comments: string | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RAM::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = ros.Token.asString(this.getAtt('GroupName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.comments = props.comments;
        this.policies = props.policies;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            comments: this.comments,
            policies: this.policies,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosGroup.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosGroup_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Policies` resource.
 */
// @ts-ignore TS6133
function rosGroupPoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyDocument: rosGroupPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosGroup.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosGroup_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosGroupPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Statement: ros.listMapper(rosGroupStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Statement` resource.
 */
// @ts-ignore TS6133
function rosGroupStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_StatementPropertyValidator(properties).assertSuccess();
    return {
      Condition: ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      Action: ros.listMapper(ros.objectToRosTemplate)(properties.action),
      Resource: ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      Effect: ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `ALIYUN::RAM::ManagedPolicy`
 */
export interface RosManagedPolicyProps {

    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    readonly policyName: string;

    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    readonly description?: string;

    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    readonly policyDocument?: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    readonly policyDocumentUnchecked?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    readonly roles?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property users: The names of users to attach to this policy.
     */
    readonly users?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('groups', ros.listValidator(ros.validateAny))(properties.groups));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocumentUnchecked', ros.hashValidator(ros.validateAny))(properties.policyDocumentUnchecked));
    errors.collect(ros.propertyValidator('policyDocument', RosManagedPolicy_PolicyDocumentPropertyValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('roles', ros.listValidator(ros.validateAny))(properties.roles));
    errors.collect(ros.propertyValidator('users', ros.listValidator(ros.validateAny))(properties.users));
    return errors.wrap('supplied properties not correct for "RosManagedPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      Description: ros.stringToRosTemplate(properties.description),
      Groups: ros.listMapper(ros.objectToRosTemplate)(properties.groups),
      PolicyDocument: rosManagedPolicyPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
      PolicyDocumentUnchecked: ros.hashMapper(ros.objectToRosTemplate)(properties.policyDocumentUnchecked),
      Roles: ros.listMapper(ros.objectToRosTemplate)(properties.roles),
      Users: ros.listMapper(ros.objectToRosTemplate)(properties.users),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::ManagedPolicy`
 */
export class RosManagedPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::ManagedPolicy";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    public readonly attrPolicyName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    public policyName: string;

    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    public description: string | undefined;

    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    public groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    public policyDocument: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable | undefined;

    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    public policyDocumentUnchecked: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    public roles: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property users: The names of users to attach to this policy.
     */
    public users: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyName = ros.Token.asString(this.getAtt('PolicyName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.description = props.description;
        this.groups = props.groups;
        this.policyDocument = props.policyDocument;
        this.policyDocumentUnchecked = props.policyDocumentUnchecked;
        this.roles = props.roles;
        this.users = props.users;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            description: this.description,
            groups: this.groups,
            policyDocument: this.policyDocument,
            policyDocumentUnchecked: this.policyDocumentUnchecked,
            roles: this.roles,
            users: this.users,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedPolicy {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosManagedPolicy.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosManagedPolicy_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedPolicy_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Statement: ros.listMapper(rosManagedPolicyStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosManagedPolicy {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.Statement` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedPolicy_StatementPropertyValidator(properties).assertSuccess();
    return {
      Condition: ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      Action: ros.listMapper(ros.objectToRosTemplate)(properties.action),
      Resource: ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      Effect: ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `ALIYUN::RAM::Role`
 */
export interface RosRoleProps {

    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    readonly assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    readonly roleName: string;

    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    readonly description?: string;

    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    readonly maxSessionDuration?: number;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.maxSessionDuration && (typeof properties.maxSessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateRange)({
            data: properties.maxSessionDuration,
            min: 3600,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateNumber)(properties.maxSessionDuration));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosRole_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', ros.requiredValidator)(properties.assumeRolePolicyDocument));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', RosRole_AssumeRolePolicyDocumentPropertyValidator)(properties.assumeRolePolicyDocument));
    return errors.wrap('supplied properties not correct for "RosRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role` resource
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role` resource.
 */
// @ts-ignore TS6133
function rosRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolePropsValidator(properties).assertSuccess();
    }
    return {
      AssumeRolePolicyDocument: rosRoleAssumeRolePolicyDocumentPropertyToRosTemplate(properties.assumeRolePolicyDocument),
      RoleName: ros.stringToRosTemplate(properties.roleName),
      Description: ros.stringToRosTemplate(properties.description),
      MaxSessionDuration: ros.numberToRosTemplate(properties.maxSessionDuration),
      Policies: ros.listMapper(rosRolePoliciesPropertyToRosTemplate)(properties.policies),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::Role`
 */
export class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Role";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Arn: Name of alicloud resource.
     */
    public readonly attrArn: any;

    /**
     * @Attribute RoleId: Id of ram role.
     */
    public readonly attrRoleId: any;

    /**
     * @Attribute RoleName: Name of ram role.
     */
    public readonly attrRoleName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    public assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    public roleName: string;

    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    public description: string | undefined;

    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    public maxSessionDuration: number | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RAM::Role`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = ros.Token.asString(this.getAtt('Arn'));
        this.attrRoleId = ros.Token.asString(this.getAtt('RoleId'));
        this.attrRoleName = ros.Token.asString(this.getAtt('RoleName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.assumeRolePolicyDocument = props.assumeRolePolicyDocument;
        this.roleName = props.roleName;
        this.description = props.description;
        this.maxSessionDuration = props.maxSessionDuration;
        this.policies = props.policies;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            assumeRolePolicyDocument: this.assumeRolePolicyDocument,
            roleName: this.roleName,
            description: this.description,
            maxSessionDuration: this.maxSessionDuration,
            policies: this.policies,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface AssumeRolePolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosRole.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AssumeRolePolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `AssumeRolePolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_AssumeRolePolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosRole_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "AssumeRolePolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.AssumeRolePolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `AssumeRolePolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.AssumeRolePolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosRoleAssumeRolePolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_AssumeRolePolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Statement: ros.listMapper(rosRoleStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface ConditionProperty {
        /**
         * @Property numericNotEquals: undefined
         */
        readonly numericNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringEquals: undefined
         */
        readonly stringEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringLike: undefined
         */
        readonly stringLike?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericLessThanEquals: undefined
         */
        readonly numericLessThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotEquals: undefined
         */
        readonly stringNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotEqualsIgnoreCase: undefined
         */
        readonly stringNotEqualsIgnoreCase?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericLessThan: undefined
         */
        readonly numericLessThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericGreaterThan: undefined
         */
        readonly numericGreaterThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateLessThanEquals: undefined
         */
        readonly dateLessThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericEquals: undefined
         */
        readonly numericEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateGreaterThanEquals: undefined
         */
        readonly dateGreaterThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateLessThan: undefined
         */
        readonly dateLessThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateNotEquals: undefined
         */
        readonly dateNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotLike: undefined
         */
        readonly stringNotLike?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property notIpAddress: undefined
         */
        readonly notIpAddress?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringEqualsIgnoreCase: undefined
         */
        readonly stringEqualsIgnoreCase?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property bool: undefined
         */
        readonly bool?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateEquals: undefined
         */
        readonly dateEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateGreaterThan: undefined
         */
        readonly dateGreaterThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericGreaterThanEquals: undefined
         */
        readonly numericGreaterThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property ipAddress: undefined
         */
        readonly ipAddress?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_ConditionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('numericNotEquals', ros.hashValidator(ros.validateAny))(properties.numericNotEquals));
    errors.collect(ros.propertyValidator('stringEquals', ros.hashValidator(ros.validateAny))(properties.stringEquals));
    errors.collect(ros.propertyValidator('stringLike', ros.hashValidator(ros.validateAny))(properties.stringLike));
    errors.collect(ros.propertyValidator('numericLessThanEquals', ros.hashValidator(ros.validateAny))(properties.numericLessThanEquals));
    errors.collect(ros.propertyValidator('stringNotEquals', ros.hashValidator(ros.validateAny))(properties.stringNotEquals));
    errors.collect(ros.propertyValidator('stringNotEqualsIgnoreCase', ros.hashValidator(ros.validateAny))(properties.stringNotEqualsIgnoreCase));
    errors.collect(ros.propertyValidator('numericLessThan', ros.hashValidator(ros.validateAny))(properties.numericLessThan));
    errors.collect(ros.propertyValidator('numericGreaterThan', ros.hashValidator(ros.validateAny))(properties.numericGreaterThan));
    errors.collect(ros.propertyValidator('dateLessThanEquals', ros.hashValidator(ros.validateAny))(properties.dateLessThanEquals));
    errors.collect(ros.propertyValidator('numericEquals', ros.hashValidator(ros.validateAny))(properties.numericEquals));
    errors.collect(ros.propertyValidator('dateGreaterThanEquals', ros.hashValidator(ros.validateAny))(properties.dateGreaterThanEquals));
    errors.collect(ros.propertyValidator('dateLessThan', ros.hashValidator(ros.validateAny))(properties.dateLessThan));
    errors.collect(ros.propertyValidator('dateNotEquals', ros.hashValidator(ros.validateAny))(properties.dateNotEquals));
    errors.collect(ros.propertyValidator('stringNotLike', ros.hashValidator(ros.validateAny))(properties.stringNotLike));
    errors.collect(ros.propertyValidator('notIpAddress', ros.hashValidator(ros.validateAny))(properties.notIpAddress));
    errors.collect(ros.propertyValidator('stringEqualsIgnoreCase', ros.hashValidator(ros.validateAny))(properties.stringEqualsIgnoreCase));
    errors.collect(ros.propertyValidator('bool', ros.hashValidator(ros.validateAny))(properties.bool));
    errors.collect(ros.propertyValidator('dateEquals', ros.hashValidator(ros.validateAny))(properties.dateEquals));
    errors.collect(ros.propertyValidator('dateGreaterThan', ros.hashValidator(ros.validateAny))(properties.dateGreaterThan));
    errors.collect(ros.propertyValidator('numericGreaterThanEquals', ros.hashValidator(ros.validateAny))(properties.numericGreaterThanEquals));
    errors.collect(ros.propertyValidator('ipAddress', ros.hashValidator(ros.validateAny))(properties.ipAddress));
    return errors.wrap('supplied properties not correct for "ConditionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Condition` resource
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Condition` resource.
 */
// @ts-ignore TS6133
function rosRoleConditionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_ConditionPropertyValidator(properties).assertSuccess();
    return {
      NumericNotEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.numericNotEquals),
      StringEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.stringEquals),
      StringLike: ros.hashMapper(ros.objectToRosTemplate)(properties.stringLike),
      NumericLessThanEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThanEquals),
      StringNotEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEquals),
      StringNotEqualsIgnoreCase: ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEqualsIgnoreCase),
      NumericLessThan: ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThan),
      NumericGreaterThan: ros.hashMapper(ros.objectToRosTemplate)(properties.numericGreaterThan),
      DateLessThanEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.dateLessThanEquals),
      NumericEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.numericEquals),
      DateGreaterThanEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.dateGreaterThanEquals),
      DateLessThan: ros.hashMapper(ros.objectToRosTemplate)(properties.dateLessThan),
      DateNotEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.dateNotEquals),
      StringNotLike: ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotLike),
      NotIpAddress: ros.hashMapper(ros.objectToRosTemplate)(properties.notIpAddress),
      StringEqualsIgnoreCase: ros.hashMapper(ros.objectToRosTemplate)(properties.stringEqualsIgnoreCase),
      Bool: ros.hashMapper(ros.objectToRosTemplate)(properties.bool),
      DateEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.dateEquals),
      DateGreaterThan: ros.hashMapper(ros.objectToRosTemplate)(properties.dateGreaterThan),
      NumericGreaterThanEquals: ros.hashMapper(ros.objectToRosTemplate)(properties.numericGreaterThanEquals),
      IpAddress: ros.hashMapper(ros.objectToRosTemplate)(properties.ipAddress),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosRole.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosRole_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Policies` resource.
 */
// @ts-ignore TS6133
function rosRolePoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyDocument: rosRolePolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosRole.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosRole_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosRolePolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Statement: ros.listMapper(rosRoleStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PrincipalProperty {
        /**
         * @Property service: undefined
         */
        readonly service?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property federated: undefined
         */
        readonly federated?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ram: undefined
         */
        readonly ram?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrincipalProperty`
 *
 * @param properties - the TypeScript properties of a `PrincipalProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PrincipalPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('service', ros.listValidator(ros.validateAny))(properties.service));
    errors.collect(ros.propertyValidator('federated', ros.listValidator(ros.validateAny))(properties.federated));
    errors.collect(ros.propertyValidator('ram', ros.listValidator(ros.validateAny))(properties.ram));
    return errors.wrap('supplied properties not correct for "PrincipalProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Principal` resource
 *
 * @param properties - the TypeScript properties of a `PrincipalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Principal` resource.
 */
// @ts-ignore TS6133
function rosRolePrincipalPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PrincipalPropertyValidator(properties).assertSuccess();
    return {
      Service: ros.listMapper(ros.objectToRosTemplate)(properties.service),
      Federated: ros.listMapper(ros.objectToRosTemplate)(properties.federated),
      RAM: ros.listMapper(ros.objectToRosTemplate)(properties.ram),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Statement` resource.
 */
// @ts-ignore TS6133
function rosRoleStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_StatementPropertyValidator(properties).assertSuccess();
    return {
      Condition: ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      Action: ros.listMapper(ros.objectToRosTemplate)(properties.action),
      Resource: ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      Effect: ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`
 */
export interface RosSAMLProviderProps {

    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string;

    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string;

    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    readonly samlMetadataDocument?: string;

    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    readonly samlMetadataDocumentUrl?: string;
}

/**
 * Determine whether the given properties match those of a `RosSAMLProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosSAMLProviderProps`
 *
 * @returns the result of the validation.
 */
function RosSAMLProviderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('samlProviderName', ros.requiredValidator)(properties.samlProviderName));
    if(properties.samlProviderName && (Array.isArray(properties.samlProviderName) || (typeof properties.samlProviderName) === 'string')) {
        errors.collect(ros.propertyValidator('samlProviderName', ros.validateLength)({
            data: properties.samlProviderName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('samlProviderName', ros.validateString)(properties.samlProviderName));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.samlMetadataDocumentUrl && (Array.isArray(properties.samlMetadataDocumentUrl) || (typeof properties.samlMetadataDocumentUrl) === 'string')) {
        errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateLength)({
            data: properties.samlMetadataDocumentUrl.length,
            min: 1,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateString)(properties.samlMetadataDocumentUrl));
    if(properties.samlMetadataDocument && (Array.isArray(properties.samlMetadataDocument) || (typeof properties.samlMetadataDocument) === 'string')) {
        errors.collect(ros.propertyValidator('samlMetadataDocument', ros.validateLength)({
            data: properties.samlMetadataDocument.length,
            min: 1,
            max: 102400,
          }));
    }
    errors.collect(ros.propertyValidator('samlMetadataDocument', ros.validateString)(properties.samlMetadataDocument));
    return errors.wrap('supplied properties not correct for "RosSAMLProviderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::SAMLProvider` resource
 *
 * @param properties - the TypeScript properties of a `RosSAMLProviderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::SAMLProvider` resource.
 */
// @ts-ignore TS6133
function rosSAMLProviderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSAMLProviderPropsValidator(properties).assertSuccess();
    }
    return {
      SAMLProviderName: ros.stringToRosTemplate(properties.samlProviderName),
      Description: ros.stringToRosTemplate(properties.description),
      SAMLMetadataDocument: ros.stringToRosTemplate(properties.samlMetadataDocument),
      SAMLMetadataDocumentURL: ros.stringToRosTemplate(properties.samlMetadataDocumentUrl),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::SAMLProvider`
 */
export class RosSAMLProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SAMLProvider";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Arn: ARN.
     */
    public readonly attrArn: any;

    /**
     * @Attribute SAMLProviderName: IdP Name.
     */
    public readonly attrSamlProviderName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    public samlProviderName: string;

    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    public description: string | undefined;

    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    public samlMetadataDocument: string | undefined;

    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    public samlMetadataDocumentUrl: string | undefined;

    /**
     * Create a new `ALIYUN::RAM::SAMLProvider`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSAMLProviderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSAMLProvider.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = ros.Token.asString(this.getAtt('Arn'));
        this.attrSamlProviderName = ros.Token.asString(this.getAtt('SAMLProviderName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.samlProviderName = props.samlProviderName;
        this.description = props.description;
        this.samlMetadataDocument = props.samlMetadataDocument;
        this.samlMetadataDocumentUrl = props.samlMetadataDocumentUrl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            samlProviderName: this.samlProviderName,
            description: this.description,
            samlMetadataDocument: this.samlMetadataDocument,
            samlMetadataDocumentUrl: this.samlMetadataDocumentUrl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSAMLProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RAM::User`
 */
export interface RosUserProps {

    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;

    /**
     * @Property comments: Comments of ram user.
     */
    readonly comments?: string;

    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string;

    /**
     * @Property email: Email of ram user.
     */
    readonly email?: string;

    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    readonly loginProfile?: RosUser.LoginProfileProperty | ros.IResolvable;

    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    readonly mobilePhone?: string;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosUser_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('groups', ros.listValidator(ros.validateAny))(properties.groups));
    if(properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
        errors.collect(ros.propertyValidator('comments', ros.validateLength)({
            data: properties.comments.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('comments', ros.validateString)(properties.comments));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('loginProfile', RosUser_LoginProfilePropertyValidator)(properties.loginProfile));
    errors.collect(ros.propertyValidator('mobilePhone', ros.validateString)(properties.mobilePhone));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
      Comments: ros.stringToRosTemplate(properties.comments),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      Email: ros.stringToRosTemplate(properties.email),
      Groups: ros.listMapper(ros.objectToRosTemplate)(properties.groups),
      LoginProfile: rosUserLoginProfilePropertyToRosTemplate(properties.loginProfile),
      MobilePhone: ros.stringToRosTemplate(properties.mobilePhone),
      Policies: ros.listMapper(rosUserPoliciesPropertyToRosTemplate)(properties.policies),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::User`
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::User";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CreateDate: Create date of ram user.
     */
    public readonly attrCreateDate: any;

    /**
     * @Attribute LastLoginDate: Last login date of ram user.
     */
    public readonly attrLastLoginDate: any;

    /**
     * @Attribute UserId: Id of ram user.
     */
    public readonly attrUserId: any;

    /**
     * @Attribute UserName: Name of ram user.
     */
    public readonly attrUserName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    public userName: string;

    /**
     * @Property comments: Comments of ram user.
     */
    public comments: string | undefined;

    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    public displayName: string | undefined;

    /**
     * @Property email: Email of ram user.
     */
    public email: string | undefined;

    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    public groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    public loginProfile: RosUser.LoginProfileProperty | ros.IResolvable | undefined;

    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    public mobilePhone: string | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RAM::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateDate = ros.Token.asString(this.getAtt('CreateDate'));
        this.attrLastLoginDate = ros.Token.asString(this.getAtt('LastLoginDate'));
        this.attrUserId = ros.Token.asString(this.getAtt('UserId'));
        this.attrUserName = ros.Token.asString(this.getAtt('UserName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userName = props.userName;
        this.comments = props.comments;
        this.displayName = props.displayName;
        this.email = props.email;
        this.groups = props.groups;
        this.loginProfile = props.loginProfile;
        this.mobilePhone = props.mobilePhone;
        this.policies = props.policies;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userName: this.userName,
            comments: this.comments,
            displayName: this.displayName,
            email: this.email,
            groups: this.groups,
            loginProfile: this.loginProfile,
            mobilePhone: this.mobilePhone,
            policies: this.policies,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface LoginProfileProperty {
        /**
         * @Property passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
         */
        readonly passwordResetRequired?: boolean | ros.IResolvable;
        /**
         * @Property mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
         */
        readonly mfaBindRequired?: boolean | ros.IResolvable;
        /**
         * @Property password: The password for the user.
         */
        readonly password?: string;
    }
}
/**
 * Determine whether the given properties match those of a `LoginProfileProperty`
 *
 * @param properties - the TypeScript properties of a `LoginProfileProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_LoginProfilePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passwordResetRequired', ros.validateBoolean)(properties.passwordResetRequired));
    errors.collect(ros.propertyValidator('mfaBindRequired', ros.validateBoolean)(properties.mfaBindRequired));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "LoginProfileProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.LoginProfile` resource
 *
 * @param properties - the TypeScript properties of a `LoginProfileProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.LoginProfile` resource.
 */
// @ts-ignore TS6133
function rosUserLoginProfilePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_LoginProfilePropertyValidator(properties).assertSuccess();
    return {
      PasswordResetRequired: ros.booleanToRosTemplate(properties.passwordResetRequired),
      MFABindRequired: ros.booleanToRosTemplate(properties.mfaBindRequired),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosUser.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosUser_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Policies` resource.
 */
// @ts-ignore TS6133
function rosUserPoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyDocument: rosUserPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosUser.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosUser_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosUserPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      Statement: ros.listMapper(rosUserStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Statement` resource.
 */
// @ts-ignore TS6133
function rosUserStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_StatementPropertyValidator(properties).assertSuccess();
    return {
      Condition: ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      Action: ros.listMapper(ros.objectToRosTemplate)(properties.action),
      Resource: ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      Effect: ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`
 */
export interface RosUserToGroupAdditionProps {

    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string;

    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    readonly users: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserToGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosUserToGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('users', ros.requiredValidator)(properties.users));
    errors.collect(ros.propertyValidator('users', ros.listValidator(ros.validateAny))(properties.users));
    return errors.wrap('supplied properties not correct for "RosUserToGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::UserToGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::UserToGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosUserToGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserToGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Users: ros.listMapper(ros.objectToRosTemplate)(properties.users),
    };
}

/**
 * A ROS template type:  `ALIYUN::RAM::UserToGroupAddition`
 */
export class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::UserToGroupAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    public groupName: string;

    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    public users: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserToGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.users = props.users;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            users: this.users,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserToGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
