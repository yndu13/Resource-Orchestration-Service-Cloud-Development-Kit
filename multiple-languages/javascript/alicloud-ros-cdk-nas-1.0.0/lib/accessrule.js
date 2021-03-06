"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessRule = exports.AccessRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "AccessRuleProperty", { enumerable: true, get: function () { return nas_generated_1.RosAccessRule; } });
/**
 * A ROS resource type:  `ALIYUN::NAS::AccessRule`
 */
class AccessRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccessRule = new nas_generated_1.RosAccessRule(this, id, {
            userAccessType: props.userAccessType ? props.userAccessType : 'no_squash',
            priority: props.priority ? props.priority : 1,
            accessGroupName: props.accessGroupName,
            sourceCidrIp: props.sourceCidrIp,
            rwAccessType: props.rwAccessType ? props.rwAccessType : 'RDWR',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessRule;
        this.attrAccessRuleId = rosAccessRule.attrAccessRuleId;
    }
}
exports.AccessRule = AccessRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY2Vzc3J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFpQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDekUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUNqRSxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNELENBQUM7Q0FDSjtBQWhDRCxnQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY2Nlc3NSdWxlIH0gZnJvbSAnLi9uYXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWNjZXNzUnVsZSBhcyBBY2Nlc3NSdWxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok5BUzo6QWNjZXNzUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NSdWxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0dyb3VwTmFtZTogUGVybWlzc2lvbiBncm91cCBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzR3JvdXBOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQ2lkcklwOiBBZGRyZXNzIG9yIGFkZHJlc3Mgc2VnbWVudFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUNpZHJJcDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW9yaXR5OiBQcmlvcml0eSBsZXZlbC4gUmFuZ2U6IDEtMTAwLiBEZWZhdWx0IHZhbHVlOiAxXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcndBY2Nlc3NUeXBlOiBSZWFkLXdyaXRlIHBlcm1pc3Npb24gdHlwZTogUkRXUiAoZGVmYXVsdCksIFJET05MWVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ3QWNjZXNzVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyQWNjZXNzVHlwZTogVXNlciBwZXJtaXNzaW9uIHR5cGU6IG5vX3NxdWFzaCAoZGVmYXVsdCksIHJvb3Rfc3F1YXNoLCBhbGxfc3F1YXNoXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckFjY2Vzc1R5cGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok5BUzo6QWNjZXNzUnVsZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1J1bGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2Nlc3NSdWxlSWQ6IFJ1bGUgc2VyaWFsIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzUnVsZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TkFTOjpBY2Nlc3NSdWxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2Nlc3NSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQWNjZXNzUnVsZSA9IG5ldyBSb3NBY2Nlc3NSdWxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdXNlckFjY2Vzc1R5cGU6IHByb3BzLnVzZXJBY2Nlc3NUeXBlID8gcHJvcHMudXNlckFjY2Vzc1R5cGUgOiAnbm9fc3F1YXNoJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcm9wcy5wcmlvcml0eSA/IHByb3BzLnByaW9yaXR5IDogMSxcbiAgICAgICAgICAgIGFjY2Vzc0dyb3VwTmFtZTogcHJvcHMuYWNjZXNzR3JvdXBOYW1lLFxuICAgICAgICAgICAgc291cmNlQ2lkcklwOiBwcm9wcy5zb3VyY2VDaWRySXAsXG4gICAgICAgICAgICByd0FjY2Vzc1R5cGU6IHByb3BzLnJ3QWNjZXNzVHlwZSA/IHByb3BzLnJ3QWNjZXNzVHlwZSA6ICdSRFdSJyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBY2Nlc3NSdWxlO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NSdWxlSWQgPSByb3NBY2Nlc3NSdWxlLmF0dHJBY2Nlc3NSdWxlSWQ7XG4gICAgfVxufVxuIl19