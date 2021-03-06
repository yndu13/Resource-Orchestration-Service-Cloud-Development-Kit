import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneRecord } from './pvtz.generated';
export { RosZoneRecord as ZoneRecordProperty };
/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneRecord`
 */
export interface ZoneRecordProps {
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string;
    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string;
    /**
     * @Property type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
     */
    readonly type: string;
    /**
     * @Property value: Record value
     */
    readonly value: string;
    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string;
    /**
     * @Property priority: MX record priority, value range [1,10]. Default to 10.
     */
    readonly priority?: number;
    /**
     * @Property ttl: Survival time, default is 60
     */
    readonly ttl?: number;
}
/**
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneRecord`
 */
export declare class ZoneRecord extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute RecordId: Parsing record Id
     */
    readonly attrRecordId: any;
    /**
     * Create a new `ALIYUN::PVTZ::ZoneRecord`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneRecordProps, enableResourcePropertyConstraint?: boolean);
}
