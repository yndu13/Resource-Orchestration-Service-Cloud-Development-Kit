import * as ros from '@alicloud/ros-cdk-core';
import { RosDynamicTagGroup } from './cms.generated';
export { RosDynamicTagGroup as DynamicTagGroupProperty };
/**
 * Properties for defining a `ALIYUN::CMS::DynamicTagGroup`
 */
export interface DynamicTagGroupProps {
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
 * A ROS resource type:  `ALIYUN::CMS::DynamicTagGroup`
 */
export declare class DynamicTagGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: any;
    /**
     * @Attribute TagKey: Tag key.
     */
    readonly attrTagKey: any;
    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DynamicTagGroupProps, enableResourcePropertyConstraint?: boolean);
}
