import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './datahub.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `ALIYUN::DATAHUB::Topic`
 */
export interface TopicProps {
    /**
     * @Property comment: The comment of topic.
     */
    readonly comment: string;
    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string;
    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    readonly recordType: string;
    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly topicName: string;
    /**
     * @Property lifecycle: Data storage life cycle.
     */
    readonly lifecycle?: number;
    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    readonly recordSchema?: string;
    /**
     * @Property shardCount: Initial shard number.
     */
    readonly shardCount?: number;
}
/**
 * A ROS resource type:  `ALIYUN::DATAHUB::Topic`
 */
export declare class Topic extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ProjectName: Project name
     */
    readonly attrProjectName: any;
    /**
     * @Attribute TopicName: Topic name
     */
    readonly attrTopicName: any;
    /**
     * Create a new `ALIYUN::DATAHUB::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
