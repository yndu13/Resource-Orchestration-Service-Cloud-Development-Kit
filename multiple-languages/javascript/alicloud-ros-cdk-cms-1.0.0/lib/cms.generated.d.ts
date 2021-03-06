import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CMS::Contact`
 */
export interface RosContactProps {
    /**
     * @Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;
    /**
     * @Property contactName: The name of the alarm contact.
     */
    readonly contactName: string;
    /**
     * @Property describe: The description of the alert contact.
     */
    readonly describe: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::Contact`
 */
export declare class RosContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Contact";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ContactName: The name of the alarm contact.
     */
    readonly attrContactName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property channels: undefined
     */
    channels: RosContact.ChannelsProperty | ros.IResolvable;
    /**
     * @Property contactName: The name of the alarm contact.
     */
    contactName: string;
    /**
     * @Property describe: The description of the alert contact.
     */
    describe: string;
    /**
     * Create a new `ALIYUN::CMS::Contact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosContact {
    /**
     * @stability external
     */
    interface ChannelsProperty {
        /**
         * @Property mail: The email address of the contact.
         */
        readonly mail?: string;
        /**
         * @Property aliIm: The TradeManager ID.
         */
        readonly aliIm?: string;
        /**
         * @Property dingWebHook: The DingTalk Chatbot address.
         */
        readonly dingWebHook?: string;
        /**
         * @Property sms: The mobile phone number of the contact.
         */
        readonly sms?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`
 */
export interface RosContactGroupProps {
    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string;
    /**
     * @Property contactNames: The name of the alert contact.
     */
    readonly contactNames: string[];
    /**
     * @Property describe: The description of the alert contact group.
     */
    readonly describe: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::ContactGroup`
 */
export declare class RosContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ContactGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    contactGroupName: string;
    /**
     * @Property contactNames: The name of the alert contact.
     */
    contactNames: string[];
    /**
     * @Property describe: The description of the alert contact group.
     */
    describe: string;
    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::CMS::DynamicTagGroup`
 */
export interface RosDynamicTagGroupProps {
    /**
     * @Property contactGroupList: Alarm contacts.
     */
    readonly contactGroupList: string[];
    /**
     * @Property tagKey: Tag key.
     */
    readonly tagKey: string;
    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    readonly enableInstallAgent?: boolean | ros.IResolvable;
    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;
    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    readonly matchExpressFilterRelation?: string;
    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    readonly templateIdList?: string[];
}
/**
 * A ROS template type:  `ALIYUN::CMS::DynamicTagGroup`
 */
export declare class RosDynamicTagGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::DynamicTagGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: any;
    /**
     * @Attribute TagKey: Tag key.
     */
    readonly attrTagKey: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupList: Alarm contacts.
     */
    contactGroupList: string[];
    /**
     * @Property tagKey: Tag key.
     */
    tagKey: string;
    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    enableInstallAgent: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    enableSubscribeEvent: boolean | ros.IResolvable | undefined;
    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    matchExpress: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    matchExpressFilterRelation: string | undefined;
    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    templateIdList: string[] | undefined;
    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDynamicTagGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDynamicTagGroup {
    /**
     * @stability external
     */
    interface MatchExpressProperty {
        /**
         * @Property tagValue: Tag value, used with TagValueMatchFunction.
         */
        readonly tagValue: string;
        /**
         * @Property tagValueMatchFunction: Matching labeled keys. Values are:
     * contains: contains
     * startWith: Prefix
     * endWith: suffix
     * notContains: not included
     * equals: equals
     * all: All
         */
        readonly tagValueMatchFunction: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::EventRule`
 */
export interface RosEventRuleProps {
    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    readonly eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alarm rule.
     */
    readonly ruleName: string;
    /**
     * @Property description: The description of the alert rule.
     */
    readonly description?: string;
    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    readonly eventType?: string;
    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId?: string;
    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    readonly state?: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::EventRule`
 */
export declare class RosEventRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Data: Number of rows affected.
     */
    readonly attrData: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alarm rule.
     */
    ruleName: string;
    /**
     * @Property description: The description of the alert rule.
     */
    description: string | undefined;
    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    eventType: string | undefined;
    /**
     * @Property groupId: The ID of the application group.
     */
    groupId: string | undefined;
    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    state: string | undefined;
    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEventRule {
    /**
     * @stability external
     */
    interface EventPatternProperty {
        /**
         * @Property nameList: The name of the event. Please refer to the configuration of CMS.
         */
        readonly nameList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
     * levels).
         */
        readonly levelList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property statusList: The status of the event. Please refer to the configuration of CMS.
         */
        readonly statusList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
         */
        readonly eventTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property product: The name of the service. Please refer to the configuration of CMS.
         */
        readonly product?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::EventRuleTargets`
 */
export interface RosEventRuleTargetsProps {
    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string;
    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    readonly contactParameters?: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    readonly fcParameters?: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    readonly mnsParameters?: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    readonly slsParameters?: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    readonly webhookParameters?: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CMS::EventRuleTargets`
 */
export declare class RosEventRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRuleTargets";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    ruleName: string;
    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    contactParameters: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    fcParameters: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    mnsParameters: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    slsParameters: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    webhookParameters: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleTargetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface ContactParametersProperty {
        /**
         * @Property contactGroupName: The name of the alert contact group.
         */
        readonly contactGroupName?: string;
        /**
         * @Property level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
         */
        readonly level?: string;
        /**
         * @Property id: The unique ID of the alert contact group notification.
         */
        readonly id?: string;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface FcParametersProperty {
        /**
         * @Property functionName: The name of the function.
         */
        readonly functionName?: string;
        /**
         * @Property serviceName: The name of the Function Compute service.
         */
        readonly serviceName?: string;
        /**
         * @Property region: The region where Function Compute is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Function Compute notification.
         */
        readonly id?: string;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface MnsParametersProperty {
        /**
         * @Property region: The region where MNS is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Message Service (MNS) notification.
         */
        readonly id?: string;
        /**
         * @Property queue: The name of the MNS queue.
         */
        readonly queue?: string;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface SlsParametersProperty {
        /**
         * @Property project: The project corresponding to Log Service.
         */
        readonly project?: string;
        /**
         * @Property logStore: The logstore corresponding to Log Service.
         */
        readonly logStore?: string;
        /**
         * @Property region: The region where Log Service is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Log Service notification.
         */
        readonly id?: string;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface WebhookParametersProperty {
        /**
         * @Property id: The unique ID of the HTTP callback notification.
         */
        readonly id?: string;
        /**
         * @Property method: The request method of the HTTP callback. Valid values: GET and POST.
         */
        readonly method?: string;
        /**
         * @Property protocol: The name of the protocol.
         */
        readonly protocol?: string;
        /**
         * @Property url: The callback URL.
         */
        readonly url?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::GroupMetricRule`
 */
export interface RosGroupMetricRuleProps {
    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    readonly category: string;
    /**
     * @Property escalations: undefined
     */
    readonly escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property groupId: The ID of application group.
     */
    readonly groupId: string;
    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    readonly metricName: string;
    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    readonly namespace: string;
    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    readonly ruleId: string;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string;
    /**
     * @Property dimensions: The expended resource dimensions.
     */
    readonly dimensions?: string;
    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    readonly effectiveInterval?: string;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string;
    /**
     * @Property interval: The detection period of alerts.
     */
    readonly interval?: number;
    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string;
    /**
     * @Property period: The aggregation period. Unite: second.
     */
    readonly period?: number;
    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    readonly silenceTime?: number;
    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    readonly webhook?: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::GroupMetricRule`
 */
export declare class RosGroupMetricRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::GroupMetricRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    category: string;
    /**
     * @Property escalations: undefined
     */
    escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property groupId: The ID of application group.
     */
    groupId: string;
    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    metricName: string;
    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    namespace: string;
    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    ruleId: string;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    ruleName: string;
    /**
     * @Property dimensions: The expended resource dimensions.
     */
    dimensions: string | undefined;
    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    effectiveInterval: string | undefined;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    emailSubject: string | undefined;
    /**
     * @Property interval: The detection period of alerts.
     */
    interval: number | undefined;
    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    noEffectiveInterval: string | undefined;
    /**
     * @Property period: The aggregation period. Unite: second.
     */
    period: number | undefined;
    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    silenceTime: number | undefined;
    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    webhook: string | undefined;
    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupMetricRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * critical-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for critical-level alerts. The statistical method varies with
     * metric.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for critical-level alerts.
         */
        readonly threshold: number;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical?: RosGroupMetricRule.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosGroupMetricRule.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosGroupMetricRule.WarnProperty | ros.IResolvable;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * info-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for info-level alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for info-level alerts.
         */
        readonly threshold: number;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * warn-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for warn-level alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for warn-level alerts.
         */
        readonly threshold: number;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`
 */
export interface RosMetricRuleTargetsProps {
    /**
     * @Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string;
    /**
     * @Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTargets`
 */
export declare class RosMetricRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTargets";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Arns: The ARN list of targets
     */
    readonly attrArns: any;
    /**
     * @Attribute Ids: The ID list of targets
     */
    readonly attrIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleId: The ID of the alert rule.
     */
    ruleId: string;
    /**
     * @Property targets: undefined
     */
    targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTargetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMetricRuleTargets {
    /**
     * @stability external
     */
    interface TargetsProperty {
        /**
         * @Property level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
     * INFO
     * WARN
     * CRITICAL
         */
        readonly level?: string;
        /**
         * @Property id: The ID of the message resource. The ID must be unique in the alert rule.
         */
        readonly id: string;
        /**
         * @Property arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
     * name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
     * {Service name abbreviation}: the abbreviation of the service name. Set this value
     * to mns.
     * {regionId}: the region ID of the message queue or topic.
     * {userId}: the account ID of the user.
     * {Message resource type}: the type of the message resource. Valid values: queues and
     * topics.
     * {Resource name}: the name of a queue if the resource type is queues, or the name of
     * a topic if the type is topics.
         */
        readonly arn: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`
 */
export interface RosMetricRuleTemplateProps {
    /**
     * @Property name: The name of the alert template.
     */
    readonly name: string;
    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    readonly alertTemplates?: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the alert template.
     */
    readonly description?: string;
    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    readonly restVersion?: number;
    /**
     * @Property templateId: The ID of the alert template.
     */
    readonly templateId?: number;
}
/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
export declare class RosMetricRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTemplate";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Id: Alarm template ID.
     */
    readonly attrId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the alert template.
     */
    name: string;
    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    alertTemplates: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the alert template.
     */
    description: string | undefined;
    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    restVersion: number | undefined;
    /**
     * @Property templateId: The ID of the alert template.
     */
    templateId: number | undefined;
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface AlertTemplatesProperty {
        /**
         * @Property metricName: The name of the metric.
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly metricName: string;
        /**
         * @Property category: The abbreviation of the service name.Value including but not limited to:
     * ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
     * provided by Alibaba Cloud
     * rds: ApsaraDB for RDS
     * ads: AnalyticDB
     * slb: Server Load Balancer (SLB)
     * vpc: Virtual Private Cloud (VPC)
     * apigateway: API Gateway
     * cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
     * cs: Container Service for Swarm
     * dcdn: Dynamic Route for CDN
     * ddos: Anti-DDoS Pro
     * eip: Elastic IP Address (EIP)
     * elasticsearch: Elasticsearch
     * emr: E-MapReduce
     * ess: Auto Scaling
     * hbase: ApsaraDB for Hbase
     * iot_edge: IoT Edge
     * k8s_pod: pods in Container Service for Kubernetes
     * kvstore_sharding: ApsaraDB for Redis of the cluster architecture
     * kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
     * kvstore_standard: ApsaraDB for Redis of the standard architecture
     * memcache: ApsaraDB for Memcache
     * mns: Message Service (MNS)
     * mongodb: ApsaraDB for MongoDB of the replica set architecture
     * mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
     * mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
     * mq_topic: MNS topics
     * ocs: ApsaraDB for Memcache of earlier versions
     * opensearch: Open Search
     * oss: Object Storage Service (OSS)
     * polardb: PolarDB
     * petadata: HybridDB for MySQL
     * scdn: Secure Content Delivery Network (SCDN)
     * sharebandwidthpackages: EIP Bandwidth Plan
     * sls: Log Service
     * vpn: VPN Gateway
         */
        readonly category: string;
        /**
         * @Property escalations: undefined
         */
        readonly escalations?: RosMetricRuleTemplate.EscalationsProperty | ros.IResolvable;
        /**
         * @Property period: The aggregation period of the monitoring data. Unit: seconds.
     * The default value is the lowest frequency at which the metric is polled. Typically,
     * you do not need to specify the aggregation period.
         */
        readonly period?: number;
        /**
         * @Property webhook: The callback URL to which a POST request is sent when an alert is triggered based
     * on the alert rule.
         */
        readonly webhook?: string;
        /**
         * @Property namespace: The namespace of the service.
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly namespace: string;
        /**
         * @Property ruleName: The name of the alert rule.
         */
        readonly ruleName: string;
        /**
         * @Property selector: The dimension of the alert. It is an extended field.
         */
        readonly selector?: string;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical: RosMetricRuleTemplate.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosMetricRuleTemplate.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosMetricRuleTemplate.WarnProperty | ros.IResolvable;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`
 */
export interface RosMonitorGroupProps {
    /**
     * @Property groupName: The name of the application group.
     */
    readonly groupName: string;
    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroup`
 */
export declare class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupId: Application group ID generated after the group is created.
     */
    readonly attrGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of the application group.
     */
    groupName: string;
    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    contactGroups: string | undefined;
    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`
 */
export interface RosMonitorGroupInstancesProps {
    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId: number;
    /**
     * @Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroupInstances`
 */
export declare class RosMonitorGroupInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroupInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupId: The ID of the application group.
     */
    readonly attrGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The ID of the application group.
     */
    groupId: number;
    /**
     * @Property instances:
     */
    instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::MonitorGroupInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMonitorGroupInstances {
    /**
     * @stability external
     */
    interface InstancesProperty {
        /**
         * @Property instanceName: The name of the instance.
         */
        readonly instanceName: string;
        /**
         * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN )
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod )
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (old version ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway )
         */
        readonly category: string;
        /**
         * @Property instanceId: The ID of the resource instance.
         */
        readonly instanceId: string;
        /**
         * @Property regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
         */
        readonly regionId: string;
    }
}
/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`
 */
export interface RosMonitoringAgentProcessProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property processName: The name of the process.
     */
    readonly processName?: string;
    /**
     * @Property processUser: The user who launched the process.
     */
    readonly processUser?: string;
}
/**
 * A ROS template type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
export declare class RosMonitoringAgentProcess extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgentProcess";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Id: The process ID.
     */
    readonly attrId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string;
    /**
     * @Property processName: The name of the process.
     */
    processName: string | undefined;
    /**
     * @Property processUser: The user who launched the process.
     */
    processUser: string | undefined;
    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitoringAgentProcessProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
