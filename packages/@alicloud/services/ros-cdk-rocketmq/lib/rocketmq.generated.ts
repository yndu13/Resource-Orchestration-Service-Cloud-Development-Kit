// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Group`
 */
export interface RosGroupProps {

    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    readonly groupId: string;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;

    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    readonly groupType?: string;

    /**
     * @Property remark: The remarks on the request.
     */
    readonly remark?: string;
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
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["tcp","http"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    if(properties.groupId && (Array.isArray(properties.groupId) || (typeof properties.groupId) === 'string')) {
        errors.collect(ros.propertyValidator('groupId', ros.validateLength)({
            data: properties.groupId.length,
            min: 7,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupId: ros.stringToRosTemplate(properties.groupId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      GroupType: ros.stringToRosTemplate(properties.groupType),
      Remark: ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Group`
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Group";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: Group ID
     */
    public readonly attrGroupId: any;

    /**
     * @Attribute GroupType: Group Type
     */
    public readonly attrGroupType: any;

    /**
     * @Attribute InstanceId: Instance ID
     */
    public readonly attrInstanceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    public groupId: string;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string;

    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    public groupType: string | undefined;

    /**
     * @Property remark: The remarks on the request.
     */
    public remark: string | undefined;

    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.attrGroupType = ros.Token.asString(this.getAtt('GroupType'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.instanceId = props.instanceId;
        this.groupType = props.groupType;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            instanceId: this.instanceId,
            groupType: this.groupType,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    readonly instanceName: string;

    /**
     * @Property remark: The remark of instance.
     */
    readonly remark?: string;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 3,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Remark: ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternalEndpoint: any;

    /**
     * @Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternetEndpoint: any;

    /**
     * @Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrHttpInternetSecureEndpoint: any;

    /**
     * @Attribute InstanceId: Instance ID created
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute InstanceType: Instance Type
     */
    public readonly attrInstanceType: any;

    /**
     * @Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    public readonly attrTcpEndpoint: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
     */
    public instanceName: string;

    /**
     * @Property remark: The remark of instance.
     */
    public remark: string | undefined;

    /**
     * Create a new `ALIYUN::ROCKETMQ::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHttpInternalEndpoint = ros.Token.asString(this.getAtt('HttpInternalEndpoint'));
        this.attrHttpInternetEndpoint = ros.Token.asString(this.getAtt('HttpInternetEndpoint'));
        this.attrHttpInternetSecureEndpoint = ros.Token.asString(this.getAtt('HttpInternetSecureEndpoint'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrInstanceType = ros.Token.asString(this.getAtt('InstanceType'));
        this.attrTcpEndpoint = ros.Token.asString(this.getAtt('TcpEndpoint'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Topic`
 */
export interface RosTopicProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;

    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    readonly messageType: number;

    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    readonly topic: string;

    /**
     * @Property perm: Set the read-write mode for the topic Valid values.:
     * 6: Both read and write operations are supported.
     * 4: Write operation is prohibited.
     * 2: Read operation is prohibited.
     */
    readonly perm?: number;

    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    readonly remark?: string;
}

/**
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.perm && (typeof properties.perm) !== 'object') {
        errors.collect(ros.propertyValidator('perm', ros.validateAllowedValues)({
          data: properties.perm,
          allowedValues: [2,4,6],
        }));
    }
    errors.collect(ros.propertyValidator('perm', ros.validateNumber)(properties.perm));
    errors.collect(ros.propertyValidator('topic', ros.requiredValidator)(properties.topic));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    errors.collect(ros.propertyValidator('messageType', ros.requiredValidator)(properties.messageType));
    if(properties.messageType && (typeof properties.messageType) !== 'object') {
        errors.collect(ros.propertyValidator('messageType', ros.validateAllowedValues)({
          data: properties.messageType,
          allowedValues: [0,1,2,4,5],
        }));
    }
    errors.collect(ros.propertyValidator('messageType', ros.validateNumber)(properties.messageType));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      MessageType: ros.numberToRosTemplate(properties.messageType),
      Topic: ros.stringToRosTemplate(properties.topic),
      Perm: ros.numberToRosTemplate(properties.perm),
      Remark: ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROCKETMQ::Topic`
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Topic";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute MessageType: The type of the message.
     */
    public readonly attrMessageType: any;

    /**
     * @Attribute Topic: The name of the topic.
     */
    public readonly attrTopic: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string;

    /**
     * @Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    public messageType: number;

    /**
     * @Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    public topic: string;

    /**
     * @Property perm: Set the read-write mode for the topic Valid values.:
     * 6: Both read and write operations are supported.
     * 4: Write operation is prohibited.
     * 2: Read operation is prohibited.
     */
    public perm: number | undefined;

    /**
     * @Property remark: The remarks on the request. This parameter can be left blank.
     */
    public remark: string | undefined;

    /**
     * Create a new `ALIYUN::ROCKETMQ::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrMessageType = ros.Token.asString(this.getAtt('MessageType'));
        this.attrTopic = ros.Token.asString(this.getAtt('Topic'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.messageType = props.messageType;
        this.topic = props.topic;
        this.perm = props.perm;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            messageType: this.messageType,
            topic: this.topic,
            perm: this.perm,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
