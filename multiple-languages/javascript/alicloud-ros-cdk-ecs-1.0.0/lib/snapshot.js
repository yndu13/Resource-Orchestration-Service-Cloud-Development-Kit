"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot = exports.SnapshotProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "SnapshotProperty", { enumerable: true, get: function () { return ecs_generated_1.RosSnapshot; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Snapshot`
 */
class Snapshot extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSnapshot = new ecs_generated_1.RosSnapshot(this, id, {
            description: props.description,
            timeout: props.timeout ? props.timeout : 200,
            snapshotName: props.snapshotName,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnapshot;
        this.attrSnapshotId = rosSnapshot.attrSnapshotId;
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hcHNob3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzbmFwc2hvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNEJ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXRDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRztZQUM1QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUEvQkQsNEJBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU25hcHNob3QgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTbmFwc2hvdCBhcyBTbmFwc2hvdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OlNuYXBzaG90YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNuYXBzaG90UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpc2tJZDogSW5kaWNhdGVzIHRoZSBJRCBvZiB0aGUgc3BlY2lmaWVkIGRpc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlza0lkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiBhIHNuYXBzaG90IGNhbiBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy4gVGhlIGRlc2NyaXB0aW9uIHdpbGwgYXBwZWFyIG9uIHRoZSBjb25zb2xlLiBCeSBkZWZhdWx0LCB0aGUgdmFsdWUgaXMgemVyby5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbmFwc2hvdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzbmFwc2hvdCwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMuIEl0IG11c3QgYmVnaW4gd2l0aCBhbiB1cHBlcmNhc2UvbG93ZXJjYXNlIGxldHRlciBvciBhIENoaW5lc2UgY2hhcmFjdGVyLCBhbmQgbWF5IGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICctJy4gSXQgY2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbmFwc2hvdE5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIG51bWJlciBvZiBtaW51dGVzIHRvIHdhaXQgZm9yIGNyZWF0ZSBzbmFwc2hvdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ1M6OlNuYXBzaG90YFxuICovXG5leHBvcnQgY2xhc3MgU25hcHNob3QgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTbmFwc2hvdElkOiBUaGUgc25hcHNob3QgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTbmFwc2hvdElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpTbmFwc2hvdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU25hcHNob3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTbmFwc2hvdCA9IG5ldyBSb3NTbmFwc2hvdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHByb3BzLnRpbWVvdXQgPyBwcm9wcy50aW1lb3V0IDogMjAwLFxuICAgICAgICAgICAgc25hcHNob3ROYW1lOiBwcm9wcy5zbmFwc2hvdE5hbWUsXG4gICAgICAgICAgICBkaXNrSWQ6IHByb3BzLmRpc2tJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTbmFwc2hvdDtcbiAgICAgICAgdGhpcy5hdHRyU25hcHNob3RJZCA9IHJvc1NuYXBzaG90LmF0dHJTbmFwc2hvdElkO1xuICAgIH1cbn1cbiJdfQ==