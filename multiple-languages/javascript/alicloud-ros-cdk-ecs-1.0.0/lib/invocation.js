"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invocation = exports.InvocationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InvocationProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInvocation; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Invocation`
 */
class Invocation extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::Invocation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInvocation = new ecs_generated_1.RosInvocation(this, id, {
            parameters: props.parameters,
            timed: props.timed,
            frequency: props.frequency,
            commandId: props.commandId,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInvocation;
        this.attrInvokeId = rosInvocation.attrInvokeId;
    }
}
exports.Invocation = Invocation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludm9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUF1QzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDbkQsQ0FBQztDQUNKO0FBaENELGdDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0ludm9jYXRpb24gfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnZvY2F0aW9uIGFzIEludm9jYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpJbnZvY2F0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEludm9jYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWFuZElkOiBUaGUgaWQgb2YgY29tbWFuZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tYW5kSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkczogVGhlIGluc3RhbmNlIGlkIGxpc3QuIFNlbGVjdCB1cCB0byA1MCBpbnN0YW5jZXMgYXQgYSB0aW1lLkluc3RhbmNlcyBzdGF0dXMgbXVzdCBiZSBydW5uaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZyZXF1ZW5jeTogVGhlIGZyZXF1ZW5jeSBvZiB0aW1pbmcgZXhlY3V0aW9uICh0aGUgc2hvcnRlc3QgZnJlcXVlbmN5IGlzIHBlcmZvcm1lZCBldmVyeSAxIG1pbnV0ZSkuIEl0IGlzcyBtYW5kYXRvcnkgd2hlbiBUaW1pbmcgaXMgVHJ1ZS5UaGUgdmFsdWUgcnVsZSBmb2xsb3dzIHRoZSBydWxlcyBvZiB0aGUgY3JvbiBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZyZXF1ZW5jeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBUaGUga2V5LXZhbHVlIHBhaXJzIG9mIGN1c3RvbSBwYXJhbWV0ZXJzIHBhc3NlZCBpbiB3aGVuIHRoZSBzY3JpcHQgY29udGFpbnMgY3VzdG9tIHBhcmFtZXRlcnMuXG4gICAgICogTnVtYmVyIG9mIGN1c3RvbSBwYXJhbWV0ZXJzOiAwIHRvIDEwLlxuICAgICAqIFRoZSBrZXkgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy4gSXQgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIFRoZSB2YWx1ZSBjYW4gYmUgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqIEFmdGVyIHRoZSBjdXN0b20gcGFyYW1ldGVycyBhbmQgdGhlIG9yaWdpbmFsIHNjcmlwdCBjb250ZW50IGFyZSBCYXNlNjQgZW5jb2RlZCwgdGhlIHRvdGFsIHNpemUgY2Fubm90IGV4Y2VlZCAxNiBLQi5cbiAgICAgKiBUaGUgc2V0IG9mIGN1c3RvbSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBhIHN1YnNldCBvZiB0aGUgcGFyYW1ldGVyIHNldCB0aGF0IGlzIGRlZmluZWQgd2hlbiB5b3UgY3JlYXRlZCB0aGUgc2NyaXB0LiBZb3UgY2FuIHVzZSBhbiBlbXB0eSBzdHJpbmcgdG8gcmVwcmVzZW50IHRoZSBwYXJhbWV0ZXJzIHRoYXQgYXJlIG5vdCBwYXNzZWQgaW4uXG4gICAgICogRGVmYXVsdCB2YWx1ZTogbnVsbCwgaW5kaWNhdGluZyB0aGF0IHRoaXMgcGFyYW1ldGVyIGlzIGNhbmNlbGVkIGFuZCBjdXN0b21lciBwYXJhbWV0ZXJzIGFyZSBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVkOiBXaGV0aGVyIGl0IGlzIHRpbWVkIGV4ZWN1dGlvbi4gRGVmYXVsdCBpcyBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6SW52b2NhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEludm9jYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnZva2VJZDogVGhlIGlkIG9mIGNvbW1hbmQgZXhlY3V0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW52b2tlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6Okludm9jYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEludm9jYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnZvY2F0aW9uID0gbmV3IFJvc0ludm9jYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBwcm9wcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgdGltZWQ6IHByb3BzLnRpbWVkLFxuICAgICAgICAgICAgZnJlcXVlbmN5OiBwcm9wcy5mcmVxdWVuY3ksXG4gICAgICAgICAgICBjb21tYW5kSWQ6IHByb3BzLmNvbW1hbmRJZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWRzOiBwcm9wcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnZvY2F0aW9uO1xuICAgICAgICB0aGlzLmF0dHJJbnZva2VJZCA9IHJvc0ludm9jYXRpb24uYXR0ckludm9rZUlkO1xuICAgIH1cbn1cbiJdfQ==