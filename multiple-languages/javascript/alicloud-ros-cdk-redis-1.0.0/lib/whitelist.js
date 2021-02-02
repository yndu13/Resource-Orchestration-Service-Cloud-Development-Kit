"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whitelist = exports.WhitelistProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const redis_generated_1 = require("./redis.generated");
Object.defineProperty(exports, "WhitelistProperty", { enumerable: true, get: function () { return redis_generated_1.RosWhitelist; } });
/**
 * A ROS resource type:  `ALIYUN::REDIS::Whitelist`
 */
class Whitelist extends ros.Resource {
    /**
     * Create a new `ALIYUN::REDIS::Whitelist`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosWhitelist = new redis_generated_1.RosWhitelist(this, id, {
            securityIpGroupAttribute: props.securityIpGroupAttribute,
            securityIps: props.securityIps,
            instanceId: props.instanceId,
            securityIpGroupName: props.securityIpGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWhitelist;
        this.attrSecurityIpGroupAttribute = rosWhitelist.attrSecurityIpGroupAttribute;
        this.attrSecurityIpGroupName = rosWhitelist.attrSecurityIpGroupName;
        this.attrSecurityIps = rosWhitelist.attrSecurityIps;
    }
}
exports.Whitelist = Whitelist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGVsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2hpdGVsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5Qyx1REFBaUQ7QUFFeEIsa0dBRmhCLDhCQUFZLE9BRXFCO0FBNEIxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDhCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtTQUNqRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsNEJBQTRCLEdBQUcsWUFBWSxDQUFDLDRCQUE0QixDQUFDO1FBQzlFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUMsdUJBQXVCLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQTNDRCw4QkEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NXaGl0ZWxpc3QgfSBmcm9tICcuL3JlZGlzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1doaXRlbGlzdCBhcyBXaGl0ZWxpc3RQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkVESVM6OldoaXRlbGlzdGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXaGl0ZWxpc3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogSW5zdGFuY2UgSUQgKGdsb2JhbGx5IHVuaXF1ZSlcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlJcHM6IElQIGFkZHJlc3Mgd2hpdGVsaXN0IHRvIGJlIG1vZGlmaWVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlJcHM6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUlwR3JvdXBBdHRyaWJ1dGU6IFRoZSBkZWZhdWx0IGlzIGVtcHR5LiBGb3IgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgYXR0cmlidXRlIHZhbHVlcywgdGhlIGNvbnNvbGUgd2lsbCBub3QgZGlzcGxheSB0aGUgdmFsdWUgb2YgaGlkZGVuIHdoaXRlbGlzdCBwYWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlJcEdyb3VwQXR0cmlidXRlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY3VyaXR5SXBHcm91cE5hbWU6IFdoaXRlbGlzdCBncm91cFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5SXBHcm91cE5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJFRElTOjpXaGl0ZWxpc3RgXG4gKi9cbmV4cG9ydCBjbGFzcyBXaGl0ZWxpc3QgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZWN1cml0eUlwR3JvdXBBdHRyaWJ1dGU6IFRoZSBkZWZhdWx0IGlzIGVtcHR5LiBGb3IgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgYXR0cmlidXRlIHZhbHVlcywgdGhlIGNvbnNvbGUgd2lsbCBub3QgZGlzcGxheSB0aGUgdmFsdWUgb2YgaGlkZGVuIHdoaXRlbGlzdCBwYWNrZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUlwR3JvdXBBdHRyaWJ1dGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VjdXJpdHlJcEdyb3VwTmFtZTogV2hpdGVsaXN0IGdyb3VwXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUlwR3JvdXBOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlY3VyaXR5SXBzOiBJUCBhZGRyZXNzIHdoaXRlbGlzdCB0byBiZSBtb2RpZmllZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VjdXJpdHlJcHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSRURJUzo6V2hpdGVsaXN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBXaGl0ZWxpc3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NXaGl0ZWxpc3QgPSBuZXcgUm9zV2hpdGVsaXN0KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2VjdXJpdHlJcEdyb3VwQXR0cmlidXRlOiBwcm9wcy5zZWN1cml0eUlwR3JvdXBBdHRyaWJ1dGUsXG4gICAgICAgICAgICBzZWN1cml0eUlwczogcHJvcHMuc2VjdXJpdHlJcHMsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgc2VjdXJpdHlJcEdyb3VwTmFtZTogcHJvcHMuc2VjdXJpdHlJcEdyb3VwTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NXaGl0ZWxpc3Q7XG4gICAgICAgIHRoaXMuYXR0clNlY3VyaXR5SXBHcm91cEF0dHJpYnV0ZSA9IHJvc1doaXRlbGlzdC5hdHRyU2VjdXJpdHlJcEdyb3VwQXR0cmlidXRlO1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUlwR3JvdXBOYW1lID0gcm9zV2hpdGVsaXN0LmF0dHJTZWN1cml0eUlwR3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUlwcyA9IHJvc1doaXRlbGlzdC5hdHRyU2VjdXJpdHlJcHM7XG4gICAgfVxufVxuIl19