// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    readonly dataNode: RosInstance.DataNodeProperty | ros.IResolvable;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    readonly password: string;

    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    readonly version: string;

    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    readonly vSwitchId: string;

    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    readonly description?: string;

    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    readonly instanceChargeType?: string;

    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    readonly kibanaWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    readonly masterNode?: RosInstance.MasterNodeProperty | ros.IResolvable;

    /**
     * @Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;

    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    readonly privateWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet.
     */
    readonly publicWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('masterNode', RosInstance_MasterNodePropertyValidator)(properties.masterNode));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('privateWhitelist', ros.listValidator(ros.validateAny))(properties.privateWhitelist));
    errors.collect(ros.propertyValidator('publicWhitelist', ros.listValidator(ros.validateAny))(properties.publicWhitelist));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('dataNode', ros.requiredValidator)(properties.dataNode));
    errors.collect(ros.propertyValidator('dataNode', RosInstance_DataNodePropertyValidator)(properties.dataNode));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PrePaid","PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('kibanaWhitelist', ros.listValidator(ros.validateAny))(properties.kibanaWhitelist));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DataNode: rosInstanceDataNodePropertyToRosTemplate(properties.dataNode),
      Password: ros.stringToRosTemplate(properties.password),
      Version: ros.stringToRosTemplate(properties.version),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Description: ros.stringToRosTemplate(properties.description),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      KibanaWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.kibanaWhitelist),
      MasterNode: rosInstanceMasterNodePropertyToRosTemplate(properties.masterNode),
      Period: ros.numberToRosTemplate(properties.period),
      PrivateWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.privateWhitelist),
      PublicWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.publicWhitelist),
    };
}

/**
 * A ROS template type:  `ALIYUN::ElasticSearch::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearch::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    public readonly attrDomain: any;

    /**
     * @Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    public readonly attrKibanaDomain: any;

    /**
     * @Attribute KibanaPort: Kibana console port.
     */
    public readonly attrKibanaPort: any;

    /**
     * @Attribute Port:  Instance connection port.
     */
    public readonly attrPort: any;

    /**
     * @Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    public readonly attrStatus: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    public dataNode: RosInstance.DataNodeProperty | ros.IResolvable;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    public password: string;

    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    public version: string;

    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    public vSwitchId: string;

    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    public description: string | undefined;

    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    public instanceChargeType: string | undefined;

    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    public kibanaWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    public masterNode: RosInstance.MasterNodeProperty | ros.IResolvable | undefined;

    /**
     * @Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | undefined;

    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    public privateWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet.
     */
    public publicWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = ros.Token.asString(this.getAtt('Domain'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrKibanaDomain = ros.Token.asString(this.getAtt('KibanaDomain'));
        this.attrKibanaPort = ros.Token.asString(this.getAtt('KibanaPort'));
        this.attrPort = ros.Token.asString(this.getAtt('Port'));
        this.attrStatus = ros.Token.asString(this.getAtt('Status'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataNode = props.dataNode;
        this.password = props.password;
        this.version = props.version;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.kibanaWhitelist = props.kibanaWhitelist;
        this.masterNode = props.masterNode;
        this.period = props.period;
        this.privateWhitelist = props.privateWhitelist;
        this.publicWhitelist = props.publicWhitelist;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataNode: this.dataNode,
            password: this.password,
            version: this.version,
            vSwitchId: this.vSwitchId,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            kibanaWhitelist: this.kibanaWhitelist,
            masterNode: this.masterNode,
            period: this.period,
            privateWhitelist: this.privateWhitelist,
            publicWhitelist: this.publicWhitelist,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface DataNodeProperty {
        /**
         * @Property diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency.
         */
        readonly diskType: string;
        /**
         * @Property amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
         */
        readonly amount: number;
        /**
         * @Property diskSize: The single data node storage space.
     * cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
     * cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
         */
        readonly diskSize: number;
        /**
         * @Property spec: The data node specifications of the Elasticsearch instance.
         */
        readonly spec: string;
    }
}
/**
 * Determine whether the given properties match those of a `DataNodeProperty`
 *
 * @param properties - the TypeScript properties of a `DataNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DataNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskType', ros.requiredValidator)(properties.diskType));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["cloud_ssd","cloud_efficiency"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('amount', ros.requiredValidator)(properties.amount));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 2,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('diskSize', ros.requiredValidator)(properties.diskSize));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "DataNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.DataNode` resource
 *
 * @param properties - the TypeScript properties of a `DataNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.DataNode` resource.
 */
// @ts-ignore TS6133
function rosInstanceDataNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DataNodePropertyValidator(properties).assertSuccess();
    return {
      DiskType: ros.stringToRosTemplate(properties.diskType),
      Amount: ros.numberToRosTemplate(properties.amount),
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      Spec: ros.stringToRosTemplate(properties.spec),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface MasterNodeProperty {
        /**
         * @Property diskType: The dedicated master node disk type.
         */
        readonly diskType?: string;
        /**
         * @Property amount: The dedicated master node quantity. Default to 3.
         */
        readonly amount?: number;
        /**
         * @Property diskSize: The dedicated master node storage space. Default to 20.
         */
        readonly diskSize?: number;
        /**
         * @Property spec: The dedicated master node spec.
         */
        readonly spec: string;
    }
}
/**
 * Determine whether the given properties match those of a `MasterNodeProperty`
 *
 * @param properties - the TypeScript properties of a `MasterNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_MasterNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "MasterNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.MasterNode` resource
 *
 * @param properties - the TypeScript properties of a `MasterNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.MasterNode` resource.
 */
// @ts-ignore TS6133
function rosInstanceMasterNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_MasterNodePropertyValidator(properties).assertSuccess();
    return {
      DiskType: ros.stringToRosTemplate(properties.diskType),
      Amount: ros.numberToRosTemplate(properties.amount),
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      Spec: ros.stringToRosTemplate(properties.spec),
    };
}
