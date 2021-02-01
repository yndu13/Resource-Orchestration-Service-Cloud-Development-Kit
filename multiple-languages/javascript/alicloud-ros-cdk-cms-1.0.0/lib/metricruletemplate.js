"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricRuleTemplate = exports.MetricRuleTemplateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "MetricRuleTemplateProperty", { enumerable: true, get: function () { return cms_generated_1.RosMetricRuleTemplate; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
class MetricRuleTemplate extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMetricRuleTemplate = new cms_generated_1.RosMetricRuleTemplate(this, id, {
            alertTemplates: props.alertTemplates,
            description: props.description,
            restVersion: props.restVersion,
            templateId: props.templateId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMetricRuleTemplate;
        this.attrId = rosMetricRuleTemplate.attrId;
    }
}
exports.MetricRuleTemplate = MetricRuleTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcnVsZXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWV0cmljcnVsZXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQW1DNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWWhEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxxQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUFoQ0QsZ0RBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTWV0cmljUnVsZVRlbXBsYXRlIH0gZnJvbSAnLi9jbXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTWV0cmljUnVsZVRlbXBsYXRlIGFzIE1ldHJpY1J1bGVUZW1wbGF0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRyaWNSdWxlVGVtcGxhdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGVydFRlbXBsYXRlczogVmFsaWQgdmFsdWVzIG9mIE46IDAgdG8gMjAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsZXJ0VGVtcGxhdGVzPzogQXJyYXk8Um9zTWV0cmljUnVsZVRlbXBsYXRlLkFsZXJ0VGVtcGxhdGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3RWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuIENhbGwgRGVzY3JpYmVNZXRyaWNSdWxlVGVtcGxhdGVMaXN0IG9yIERlc2NyaWJlTWV0cmljUnVsZVRlbXBsYXRlQXR0cmlidXRlXG4gICAgICogdG8gb2J0YWluIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbGVydCB0ZW1wbGF0ZXMuIFRoZSBjb21iaW5hdGlvbiBvZiB2ZXJzaW9uIGFuZCBJRFxuICAgICAqIHVuaXF1ZWx5IGlkZW50aWZpZXMgYW4gYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzdFZlcnNpb24/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUlkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZWBcbiAqL1xuZXhwb3J0IGNsYXNzIE1ldHJpY1J1bGVUZW1wbGF0ZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBBbGFybSB0ZW1wbGF0ZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1ldHJpY1J1bGVUZW1wbGF0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc01ldHJpY1J1bGVUZW1wbGF0ZSA9IG5ldyBSb3NNZXRyaWNSdWxlVGVtcGxhdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBhbGVydFRlbXBsYXRlczogcHJvcHMuYWxlcnRUZW1wbGF0ZXMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXN0VmVyc2lvbjogcHJvcHMucmVzdFZlcnNpb24sXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiBwcm9wcy50ZW1wbGF0ZUlkLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNZXRyaWNSdWxlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYXR0cklkID0gcm9zTWV0cmljUnVsZVRlbXBsYXRlLmF0dHJJZDtcbiAgICB9XG59XG4iXX0=