import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCache } from './eci.generated';
export { RosImageCache as ImageCacheProperty };
/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`
 */
export interface ImageCacheProps {
    /**
     * @Property image: The image list to be cached.
     */
    readonly image: string[];
    /**
     * @Property imageCacheName: Image cache name.
     */
    readonly imageCacheName: string;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string;
    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string;
    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: string[];
    /**
     * @Property resourceGroupId: Resource group.
     */
    readonly resourceGroupId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECI::ImageCache`
 */
export declare class ImageCache extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ImageCacheId: The ID of the image cache.
     */
    readonly attrImageCacheId: any;
    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint?: boolean);
}
