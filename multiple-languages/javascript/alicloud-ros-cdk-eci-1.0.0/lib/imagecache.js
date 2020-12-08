"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCache = exports.ImageCacheProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const eci_generated_1 = require("./eci.generated");
Object.defineProperty(exports, "ImageCacheProperty", { enumerable: true, get: function () { return eci_generated_1.RosImageCache; } });
/**
 * A ROS resource type:  `ALIYUN::ECI::ImageCache`
 */
class ImageCache extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosImageCache = new eci_generated_1.RosImageCache(this, id, {
            resourceGroupId: props.resourceGroupId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            imageRegistryCredential: props.imageRegistryCredential,
            imageCacheName: props.imageCacheName,
            image: props.image,
            eipInstanceId: props.eipInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageCache;
        this.attrImageCacheId = rosImageCache.attrImageCacheId;
    }
}
exports.ImageCache = ImageCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VjYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUEyQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNyQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNELENBQUM7Q0FDSjtBQWxDRCxnQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbWFnZUNhY2hlIH0gZnJvbSAnLi9lY2kuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW1hZ2VDYWNoZSBhcyBJbWFnZUNhY2hlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDSTo6SW1hZ2VDYWNoZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWFnZUNhY2hlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlOiBUaGUgaW1hZ2UgbGlzdCB0byBiZSBjYWNoZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlQ2FjaGVOYW1lOiBJbWFnZSBjYWNoZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlQ2FjaGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTZWN1cml0eSBncm91cCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFZTd2l0Y2ggSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWlwSW5zdGFuY2VJZDogSWYgeW91IHdhbnQgdG8gcHVsbCB0aGUgcHVibGljIG5ldHdvcmsgaW1hZ2UsIHlvdSBuZWVkIHRvIGNvbmZpZ3VyZSB0aGUgcHVibGljIG5ldHdvcmsgaXAgb3IgY29uZmlndXJlIHRoZSBzd2l0Y2ggTkFUIGdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWlwSW5zdGFuY2VJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZVJlZ2lzdHJ5Q3JlZGVudGlhbDogUHJpdmF0ZSBpbWFnZSBwYXNzd29yZC4gQWxpYmFiYSBDbG91ZCBBQ1IgaW1hZ2UgY2FuIGJlIGxlZnQgYmxhbmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VSZWdpc3RyeUNyZWRlbnRpYWw/OiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNJOjpJbWFnZUNhY2hlYFxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VDYWNoZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEltYWdlQ2FjaGVJZDogVGhlIElEIG9mIHRoZSBpbWFnZSBjYWNoZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckltYWdlQ2FjaGVJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDSTo6SW1hZ2VDYWNoZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW1hZ2VDYWNoZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0ltYWdlQ2FjaGUgPSBuZXcgUm9zSW1hZ2VDYWNoZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGltYWdlUmVnaXN0cnlDcmVkZW50aWFsOiBwcm9wcy5pbWFnZVJlZ2lzdHJ5Q3JlZGVudGlhbCxcbiAgICAgICAgICAgIGltYWdlQ2FjaGVOYW1lOiBwcm9wcy5pbWFnZUNhY2hlTmFtZSxcbiAgICAgICAgICAgIGltYWdlOiBwcm9wcy5pbWFnZSxcbiAgICAgICAgICAgIGVpcEluc3RhbmNlSWQ6IHByb3BzLmVpcEluc3RhbmNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW1hZ2VDYWNoZTtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VDYWNoZUlkID0gcm9zSW1hZ2VDYWNoZS5hdHRySW1hZ2VDYWNoZUlkO1xuICAgIH1cbn1cbiJdfQ==