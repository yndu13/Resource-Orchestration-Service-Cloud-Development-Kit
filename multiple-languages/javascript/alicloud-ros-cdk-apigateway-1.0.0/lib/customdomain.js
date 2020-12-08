"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDomain = exports.CustomDomainProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "CustomDomainProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosCustomDomain; } });
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::CustomDomain`
 */
class CustomDomain extends ros.Resource {
    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCustomDomain = new apigateway_generated_1.RosCustomDomain(this, id, {
            certificateBody: props.certificateBody,
            domainName: props.domainName,
            certificatePrivateKey: props.certificatePrivateKey,
            certificateName: props.certificateName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrCertificateId = rosCustomDomain.attrCertificateId;
    }
}
exports.CustomDomain = CustomDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBeUQ7QUFFN0IscUdBRm5CLHNDQUFlLE9BRXdCO0FBaUNoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTFDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksc0NBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBaENELG9DQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0N1c3RvbURvbWFpbiB9IGZyb20gJy4vYXBpZ2F0ZXdheS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDdXN0b21Eb21haW4gYXMgQ3VzdG9tRG9tYWluUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFwaUdhdGV3YXk6OkN1c3RvbURvbWFpbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDdXN0b21Eb21haW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogQ3VzdG9tIGRvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgdGhlIEdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZXJ0aWZpY2F0ZUJvZHk6IFNTTCBjZXJ0aWZpY2F0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlQm9keT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZXJ0aWZpY2F0ZU5hbWU6IFNTTCBjZXJ0aWZpY2F0ZSBuYW1lLk5lZWQgWzQsIDUwXSBDaGluZXNlXFxFbmdsaXNoXFxOdW1iZXIgY2hhcmFjdGVycyBvciBcIl9cIixhbmQgc2hvdWxkIHN0YXJ0IHdpdGggQ2hpbmVzZS9FbmdsaXNoIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VydGlmaWNhdGVQcml2YXRlS2V5OiBTU0wgY2VydGlmaWNhdGUga2V5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlUHJpdmF0ZUtleT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QXBpR2F0ZXdheTo6Q3VzdG9tRG9tYWluYFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tRG9tYWluIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VydGlmaWNhdGVJZDogVGhlIGlkIG9mIHRoZSBjZXJ0aWZpY2F0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlcnRpZmljYXRlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBcGlHYXRld2F5OjpDdXN0b21Eb21haW5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEN1c3RvbURvbWFpblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0N1c3RvbURvbWFpbiA9IG5ldyBSb3NDdXN0b21Eb21haW4odGhpcywgaWQsICB7XG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZUJvZHk6IHByb3BzLmNlcnRpZmljYXRlQm9keSxcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHByb3BzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZVByaXZhdGVLZXk6IHByb3BzLmNlcnRpZmljYXRlUHJpdmF0ZUtleSxcbiAgICAgICAgICAgIGNlcnRpZmljYXRlTmFtZTogcHJvcHMuY2VydGlmaWNhdGVOYW1lLFxuICAgICAgICAgICAgZ3JvdXBJZDogcHJvcHMuZ3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDdXN0b21Eb21haW47XG4gICAgICAgIHRoaXMuYXR0ckNlcnRpZmljYXRlSWQgPSByb3NDdXN0b21Eb21haW4uYXR0ckNlcnRpZmljYXRlSWQ7XG4gICAgfVxufVxuIl19