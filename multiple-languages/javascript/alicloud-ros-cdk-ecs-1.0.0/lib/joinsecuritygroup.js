"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinSecurityGroup = exports.JoinSecurityGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "JoinSecurityGroupProperty", { enumerable: true, get: function () { return ecs_generated_1.RosJoinSecurityGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::JoinSecurityGroup`
 */
class JoinSecurityGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosJoinSecurityGroup = new ecs_generated_1.RosJoinSecurityGroup(this, id, {
            networkInterfaceList: props.networkInterfaceList,
            instanceId: props.instanceId,
            securityGroupId: props.securityGroupId,
            instanceIdList: props.instanceIdList,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJoinSecurityGroup;
    }
}
exports.JoinSecurityGroup = JoinSecurityGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbnNlY3VyaXR5Z3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2luc2VjdXJpdHlncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUE0QjFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQUUvQzs7O09BR0c7SUFFSDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1NBQ3ZDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBekJELDhDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0pvaW5TZWN1cml0eUdyb3VwIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSm9pblNlY3VyaXR5R3JvdXAgYXMgSm9pblNlY3VyaXR5R3JvdXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpKb2luU2VjdXJpdHlHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBKb2luU2VjdXJpdHlHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIGlkIHRvIGpvaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogSW5zdGFuY2UgSWQgdG8gdGhlIGpvaW4gdGhlIHNlY3VyaXR5IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZExpc3Q6IFRoZSBjb21tYSBkZWxpbWl0ZWQgaW5zdGFuY2UgaWQgbGlzdC5JZiB0aGUgcHJvcGVydHkgXCJJbnN0YW5jZUlkXCIgaXMgc2V0dGluZywgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZExpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtJbnRlcmZhY2VMaXN0OiBOZXR3b3JrIGludGVyZmFjZSBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtJbnRlcmZhY2VMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpKb2luU2VjdXJpdHlHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIEpvaW5TZWN1cml0eUdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OkpvaW5TZWN1cml0eUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBKb2luU2VjdXJpdHlHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0pvaW5TZWN1cml0eUdyb3VwID0gbmV3IFJvc0pvaW5TZWN1cml0eUdyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbmV0d29ya0ludGVyZmFjZUxpc3Q6IHByb3BzLm5ldHdvcmtJbnRlcmZhY2VMaXN0LFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgaW5zdGFuY2VJZExpc3Q6IHByb3BzLmluc3RhbmNlSWRMaXN0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0pvaW5TZWN1cml0eUdyb3VwO1xuICAgIH1cbn1cbiJdfQ==