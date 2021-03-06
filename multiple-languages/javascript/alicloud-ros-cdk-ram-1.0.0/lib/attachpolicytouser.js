"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachPolicyToUser = exports.AttachPolicyToUserProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "AttachPolicyToUserProperty", { enumerable: true, get: function () { return ram_generated_1.RosAttachPolicyToUser; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::AttachPolicyToUser`
 */
class AttachPolicyToUser extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToUser`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAttachPolicyToUser = new ram_generated_1.RosAttachPolicyToUser(this, id, {
            policyType: props.policyType,
            userName: props.userName,
            policyName: props.policyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAttachPolicyToUser;
    }
}
exports.AttachPolicyToUser = AttachPolicyToUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNocG9saWN5dG91c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0YWNocG9saWN5dG91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQXVCNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRWhEOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxxQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBeEJELGdEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0F0dGFjaFBvbGljeVRvVXNlciB9IGZyb20gJy4vcmFtLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0F0dGFjaFBvbGljeVRvVXNlciBhcyBBdHRhY2hQb2xpY3lUb1VzZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb1VzZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNoUG9saWN5VG9Vc2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IEF1dGhvcml6YXRpb24gcG9saWN5IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeVR5cGU6IEF1dGhvcml6YXRpb24gcG9saWN5IHR5cGUuIFZhbHVlOiBcIlN5c3RlbVwiIG9yIFwiQ3VzdG9tXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5VHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJOYW1lOiBVc2VyIG5hbWUuRXhhbXBsZTogZGV2LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJBTTo6QXR0YWNoUG9saWN5VG9Vc2VyYFxuICovXG5leHBvcnQgY2xhc3MgQXR0YWNoUG9saWN5VG9Vc2VyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSQU06OkF0dGFjaFBvbGljeVRvVXNlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQXR0YWNoUG9saWN5VG9Vc2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQXR0YWNoUG9saWN5VG9Vc2VyID0gbmV3IFJvc0F0dGFjaFBvbGljeVRvVXNlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBvbGljeVR5cGU6IHByb3BzLnBvbGljeVR5cGUsXG4gICAgICAgICAgICB1c2VyTmFtZTogcHJvcHMudXNlck5hbWUsXG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBwcm9wcy5wb2xpY3lOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0F0dGFjaFBvbGljeVRvVXNlcjtcbiAgICB9XG59XG4iXX0=