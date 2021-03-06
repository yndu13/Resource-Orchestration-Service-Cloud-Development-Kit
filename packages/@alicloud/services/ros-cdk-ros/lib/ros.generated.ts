// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ROS::AutoEnableService`
 */
export interface RosAutoEnableServiceProps {

    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * CMS: Cloud Monitor Service
     * DataHub: Data Hub
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * NAS: Network Attached Storage
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * RocketMQ: RocketMQ
     * SLS: Log Service
     *
     */
    readonly serviceName: string;
}

/**
 * Determine whether the given properties match those of a `RosAutoEnableServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the result of the validation.
 */
function RosAutoEnableServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if(properties.serviceName && (typeof properties.serviceName) !== 'object') {
        errors.collect(ros.propertyValidator('serviceName', ros.validateAllowedValues)({
          data: properties.serviceName,
          allowedValues: ["ApiGateway","NLP","EMAS","OSS","BatchCompute","IMM","ARMS","SLS","NAS","FC","KMS","RocketMQ","AHAS","DataHub","OTS","CMS","PrivateLink","HBR"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    return errors.wrap('supplied properties not correct for "RosAutoEnableServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource.
 */
// @ts-ignore TS6133
function rosAutoEnableServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoEnableServicePropsValidator(properties).assertSuccess();
    }
    return {
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::AutoEnableService`
 */
export class RosAutoEnableService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::AutoEnableService";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * CMS: Cloud Monitor Service
     * DataHub: Data Hub
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * NAS: Network Attached Storage
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * RocketMQ: RocketMQ
     * SLS: Log Service
     *
     */
    public serviceName: string;

    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoEnableServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoEnableService.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoEnableServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::CustomResource`
 */
export interface RosCustomResourceProps {

    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    readonly serviceToken: string;

    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number;

    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomResourceProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the result of the validation.
 */
function RosCustomResourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceToken', ros.requiredValidator)(properties.serviceToken));
    if(properties.serviceToken && (Array.isArray(properties.serviceToken) || (typeof properties.serviceToken) === 'string')) {
        errors.collect(ros.propertyValidator('serviceToken', ros.validateLength)({
            data: properties.serviceToken.length,
            min: undefined,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('serviceToken', ros.validateString)(properties.serviceToken));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    return errors.wrap('supplied properties not correct for "RosCustomResourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource.
 */
// @ts-ignore TS6133
function rosCustomResourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomResourcePropsValidator(properties).assertSuccess();
    }
    return {
      ServiceToken: ros.stringToRosTemplate(properties.serviceToken),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::CustomResource`
 */
export class RosCustomResource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::CustomResource";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Outputs: Output data received from service provider.
     */
    public readonly attrOutputs: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    public serviceToken: string;

    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    public timeout: number;

    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomResourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomResource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOutputs = ros.Token.asString(this.getAtt('Outputs'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceToken = props.serviceToken;
        this.timeout = props.timeout;
        this.parameters = props.parameters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceToken: this.serviceToken,
            timeout: this.timeout,
            parameters: this.parameters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomResourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::Stack`
 */
export interface RosStackProps {

    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateBody?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    readonly templateId?: string;

    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateUrl?: string;

    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    readonly templateVersion?: string;

    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    readonly timeoutMins?: number;
}

/**
 * Determine whether the given properties match those of a `RosStackProps`
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the result of the validation.
 */
function RosStackPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.templateUrl && (Array.isArray(properties.templateUrl) || (typeof properties.templateUrl) === 'string')) {
        errors.collect(ros.propertyValidator('templateUrl', ros.validateLength)({
            data: properties.templateUrl.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('templateUrl', ros.validateString)(properties.templateUrl));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if(properties.templateVersion && (typeof properties.templateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('templateVersion', ros.validateAllowedPattern)({
          data: properties.templateVersion,
          reg: /^v(([1-9])|([1-9][0-9])|([1-9][0-9][0-9]))$/
        }));
    }
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    errors.collect(ros.propertyValidator('templateBody', ros.hashValidator(ros.validateAny))(properties.templateBody));
    if(properties.templateId && (typeof properties.templateId) !== 'object') {
        errors.collect(ros.propertyValidator('templateId', ros.validateAllowedPattern)({
          data: properties.templateId,
          reg: /^([0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:][*][:]\d+[:]template\/[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})$/
        }));
    }
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosStackProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource.
 */
// @ts-ignore TS6133
function rosStackPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStackPropsValidator(properties).assertSuccess();
    }
    return {
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      TemplateBody: ros.hashMapper(ros.objectToRosTemplate)(properties.templateBody),
      TemplateId: ros.stringToRosTemplate(properties.templateId),
      TemplateURL: ros.stringToRosTemplate(properties.templateUrl),
      TemplateVersion: ros.stringToRosTemplate(properties.templateVersion),
      TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::Stack`
 */
export class RosStack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    public templateBody: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    public templateId: string | undefined;

    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    public templateUrl: string | undefined;

    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    public templateVersion: string | undefined;

    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    public timeoutMins: number | undefined;

    /**
     * Create a new `ALIYUN::ROS::Stack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStack.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.parameters = props.parameters;
        this.templateBody = props.templateBody;
        this.templateId = props.templateId;
        this.templateUrl = props.templateUrl;
        this.templateVersion = props.templateVersion;
        this.timeoutMins = props.timeoutMins;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            parameters: this.parameters,
            templateBody: this.templateBody,
            templateId: this.templateId,
            templateUrl: this.templateUrl,
            templateVersion: this.templateVersion,
            timeoutMins: this.timeoutMins,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface RosWaitConditionProps {

    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string;

    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number;

    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number;
}

/**
 * Determine whether the given properties match those of a `RosWaitConditionProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('handle', ros.requiredValidator)(properties.handle));
    errors.collect(ros.propertyValidator('handle', ros.validateString)(properties.handle));
    return errors.wrap('supplied properties not correct for "RosWaitConditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitConditionPropsValidator(properties).assertSuccess();
    }
    return {
      Handle: ros.stringToRosTemplate(properties.handle),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      Count: ros.numberToRosTemplate(properties.count),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`
 */
export class RosWaitCondition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitCondition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    public readonly attrData: any;

    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrErrorData: any;

    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    public readonly attrJoinedErrorData: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    public handle: string;

    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    public timeout: number;

    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    public count: number | undefined;

    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitCondition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrData = ros.Token.asString(this.getAtt('Data'));
        this.attrErrorData = ros.Token.asString(this.getAtt('ErrorData'));
        this.attrJoinedErrorData = ros.Token.asString(this.getAtt('JoinedErrorData'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.handle = props.handle;
        this.timeout = props.timeout;
        this.count = props.count;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            handle: this.handle,
            timeout: this.timeout,
            count: this.count,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitConditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`
 */
export interface RosWaitConditionHandleProps {

    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * 
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    readonly count?: number;

    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * 
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * 
     * Default to Full.
     */
    readonly mode?: string;
}

/**
 * Determine whether the given properties match those of a `RosWaitConditionHandleProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionHandlePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["Increment","Full"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    return errors.wrap('supplied properties not correct for "RosWaitConditionHandleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionHandlePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitConditionHandlePropsValidator(properties).assertSuccess();
    }
    return {
      Count: ros.numberToRosTemplate(properties.count),
      Mode: ros.stringToRosTemplate(properties.mode),
    };
}

/**
 * A ROS template type:  `ALIYUN::ROS::WaitConditionHandle`
 */
export class RosWaitConditionHandle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitConditionHandle";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    public readonly attrCurlCli: any;

    /**
     * @Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    public readonly attrHeaders: any;

    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    public readonly attrPowerShellCurlCli: any;

    /**
     * @Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    public readonly attrUrl: any;

    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
     */
    public readonly attrWindowsCurlCli: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * 
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    public count: number | undefined;

    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * 
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * 
     * Default to Full.
     */
    public mode: string | undefined;

    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionHandleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitConditionHandle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCurlCli = ros.Token.asString(this.getAtt('CurlCli'));
        this.attrHeaders = ros.Token.asString(this.getAtt('Headers'));
        this.attrPowerShellCurlCli = ros.Token.asString(this.getAtt('PowerShellCurlCli'));
        this.attrUrl = ros.Token.asString(this.getAtt('URL'));
        this.attrWindowsCurlCli = ros.Token.asString(this.getAtt('WindowsCurlCli'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.count = props.count;
        this.mode = props.mode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            count: this.count,
            mode: this.mode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitConditionHandlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
