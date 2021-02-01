"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq_generated_1 = require("./rocketmq.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return rocketmq_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROCKETMQ::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new rocketmq_generated_1.RosInstance(this, id, {
            instanceName: props.instanceName,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHttpInternalEndpoint = rosInstance.attrHttpInternalEndpoint;
        this.attrHttpInternetEndpoint = rosInstance.attrHttpInternetEndpoint;
        this.attrHttpInternetSecureEndpoint = rosInstance.attrHttpInternetSecureEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrTcpEndpoint = rosInstance.attrTcpEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQW1EO0FBRTNCLGlHQUZmLGdDQUFXLE9BRW9CO0FBa0J4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUN0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLGdDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUMsd0JBQXdCLENBQUM7UUFDckUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsOEJBQThCLEdBQUcsV0FBVyxDQUFDLDhCQUE4QixDQUFDO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUEzREQsNEJBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL3JvY2tldG1xLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPQ0tFVE1ROjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZSwgd2hpY2ggY29udGFpbnMgMyB0byA2NCBjaGFyYWN0ZXJzIGluIENoaW5lc2Ugb3IgRW5nbGlzaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEh0dHBJbnRlcm5hbEVuZHBvaW50OiBUaGUgaW50ZXJuYWwgSFRUUCBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckh0dHBJbnRlcm5hbEVuZHBvaW50OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEh0dHBJbnRlcm5ldEVuZHBvaW50OiBUaGUgSW50ZXJuZXQgSFRUUCBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckh0dHBJbnRlcm5ldEVuZHBvaW50OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEh0dHBJbnRlcm5ldFNlY3VyZUVuZHBvaW50OiBUaGUgSW50ZXJuZXQgSFRUUFMgZW5kcG9pbnQgZm9yIHRoZSBNZXNzYWdlIFF1ZXVlIGZvciBBcGFjaGUgUm9ja2V0TVEgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIdHRwSW50ZXJuZXRTZWN1cmVFbmRwb2ludDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBJbnN0YW5jZSBJRCBjcmVhdGVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlVHlwZTogSW5zdGFuY2UgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRjcEVuZHBvaW50OiBUaGUgVENQIGVuZHBvaW50IGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIFJvY2tldE1RIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGNwRW5kcG9pbnQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHJlbWFyazogcHJvcHMucmVtYXJrLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJIdHRwSW50ZXJuYWxFbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJIdHRwSW50ZXJuYWxFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRySHR0cEludGVybmV0RW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRySHR0cEludGVybmV0RW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckh0dHBJbnRlcm5ldFNlY3VyZUVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0ckh0dHBJbnRlcm5ldFNlY3VyZUVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlVHlwZSA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRjcEVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0clRjcEVuZHBvaW50O1xuICAgIH1cbn1cbiJdfQ==