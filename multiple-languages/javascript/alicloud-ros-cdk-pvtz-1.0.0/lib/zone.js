"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = exports.ZoneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const pvtz_generated_1 = require("./pvtz.generated");
Object.defineProperty(exports, "ZoneProperty", { enumerable: true, get: function () { return pvtz_generated_1.RosZone; } });
/**
 * A ROS resource type:  `ALIYUN::PVTZ::Zone`
 */
class Zone extends ros.Resource {
    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosZone = new pvtz_generated_1.RosZone(this, id, {
            zoneName: props.zoneName,
            proxyPattern: props.proxyPattern ? props.proxyPattern : 'ZONE',
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZone;
        this.attrZoneId = rosZone.attrZoneId;
    }
}
exports.Zone = Zone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUEyQztBQUV2Qiw2RkFGWCx3QkFBTyxPQUVnQjtBQXlCaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlsQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdCLEVBQUUsbUNBQTJDLElBQUk7UUFDM0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE9BQU8sR0FBRyxJQUFJLHdCQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDOUQsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUE5QkQsb0JBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zWm9uZSB9IGZyb20gJy4vcHZ0ei5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3Nab25lIGFzIFpvbmVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UFZUWjo6Wm9uZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBab25lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHpvbmVOYW1lOiBab25lIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3h5UGF0dGVybjogWk9ORTogY29tcGxldGVseSBoaWphY2sgdGhlIGVudGlyZSB6b25lLlxuICAgICAqIFJFQ09SRDogSW5jb21wbGV0ZSBoaWphY2tpbmcsIHJlY3Vyc2l2ZSByZXNvbHV0aW9uIGFnZW50LlxuICAgICAqIERlZmF1bHQgdG8gWk9ORS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eVBhdHRlcm4/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVtYXJrOiA1MCBjaGFyYWN0ZXJzIGF0IG1vc3QuIEl0IGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgQ2hpbmVzZSwgRW5nbGlzaCBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzOiBcIl8tLC7vvIzjgIJcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlBWVFo6OlpvbmVgXG4gKi9cbmV4cG9ydCBjbGFzcyBab25lIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgWm9uZUlkOiBab25lIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpQVlRaOjpab25lYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBab25lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zWm9uZSA9IG5ldyBSb3Nab25lKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgem9uZU5hbWU6IHByb3BzLnpvbmVOYW1lLFxuICAgICAgICAgICAgcHJveHlQYXR0ZXJuOiBwcm9wcy5wcm94eVBhdHRlcm4gPyBwcm9wcy5wcm94eVBhdHRlcm4gOiAnWk9ORScsXG4gICAgICAgICAgICByZW1hcms6IHByb3BzLnJlbWFyayxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3Nab25lO1xuICAgICAgICB0aGlzLmF0dHJab25lSWQgPSByb3Nab25lLmF0dHJab25lSWQ7XG4gICAgfVxufVxuIl19