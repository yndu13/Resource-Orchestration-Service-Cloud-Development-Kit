"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WafSwitch = exports.WafSwitchProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const waf_generated_1 = require("./waf.generated");
Object.defineProperty(exports, "WafSwitchProperty", { enumerable: true, get: function () { return waf_generated_1.RosWafSwitch; } });
/**
 * A ROS resource type:  `ALIYUN::WAF::WafSwitch`
 */
class WafSwitch extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosWafSwitch = new waf_generated_1.RosWafSwitch(this, id, {
            instanceId: props.instanceId,
            region: props.region,
            serviceOn: props.serviceOn,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWafSwitch;
    }
}
exports.WafSwitch = WafSwitch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fmc3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2Fmc3dpdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBaUMxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRXZDOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUF6QkQsOEJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zV2FmU3dpdGNoIH0gZnJvbSAnLi93YWYuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zV2FmU3dpdGNoIGFzIFdhZlN3aXRjaFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpXQUY6OldhZlN3aXRjaGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXYWZTd2l0Y2hQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluOiBEb21haW4gbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW46IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBXQUYgaW5zdGFuY2UgSUQuXG4gICAgICogRGVzY3JpcHRpb24gSW50ZXJmYWNlIFlvdSBjYW4gdmlldyB5b3VyIGN1cnJlbnQgV0FGIGluc3RhbmNlIElEIGJ5IGNhbGxpbmcgRGVzY3JpYmVQYXlJbmZvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlT246IFdlYiBhdHRhY2sgcHJvdGVjdGlvbiBzd2l0Y2gsIHRoZSB2YWx1ZSBvZjpcbiAgICAgKiAwOiBjbG9zZWQuXG4gICAgICogMTogaW5kaWNhdGUgb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uOiBFeGFtcGxlcyBvZiBhcmVhcyB3aGVyZSB0aGUgV0FGLiBWYWx1ZTpcbiAgICAgKiBjbjogQ2hpbmEgbWFpbmxhbmQgKGRlZmF1bHQpXG4gICAgICogY24taG9uZ2tvbmc6IENoaW5hIEhvbmdLb25nIGFuZCBvdGhlciBvdmVyc2Vhc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6V0FGOjpXYWZTd2l0Y2hgXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWZTd2l0Y2ggZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OldBRjo6V2FmU3dpdGNoYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBXYWZTd2l0Y2hQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NXYWZTd2l0Y2ggPSBuZXcgUm9zV2FmU3dpdGNoKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHJlZ2lvbjogcHJvcHMucmVnaW9uLFxuICAgICAgICAgICAgc2VydmljZU9uOiBwcm9wcy5zZXJ2aWNlT24sXG4gICAgICAgICAgICBkb21haW46IHByb3BzLmRvbWFpbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NXYWZTd2l0Y2g7XG4gICAgfVxufVxuIl19