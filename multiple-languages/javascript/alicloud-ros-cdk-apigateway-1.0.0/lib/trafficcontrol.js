"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficControl = exports.TrafficControlProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "TrafficControlProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosTrafficControl; } });
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControl`
 */
class TrafficControl extends ros.Resource {
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTrafficControl = new apigateway_generated_1.RosTrafficControl(this, id, {
            description: props.description,
            trafficControlUnit: props.trafficControlUnit,
            trafficControlName: props.trafficControlName,
            appDefault: props.appDefault,
            special: props.special,
            userDefault: props.userDefault,
            apiDefault: props.apiDefault,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControl;
        this.attrTrafficControlId = rosTrafficControl.attrTrafficControlId;
    }
}
exports.TrafficControl = TrafficControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpY2NvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFmZmljY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaUVBQTJEO0FBRTdCLHVHQUZyQix3Q0FBaUIsT0FFMEI7QUEyQ3BEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZNUM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHdDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7SUFDdkUsQ0FBQztDQUNKO0FBbENELHdDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1RyYWZmaWNDb250cm9sIH0gZnJvbSAnLi9hcGlnYXRld2F5LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYWZmaWNDb250cm9sIGFzIFRyYWZmaWNDb250cm9sUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWZmaWNDb250cm9sUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwaURlZmF1bHQ6IERlZmF1bHQgQVBJIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBpRGVmYXVsdDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNDb250cm9sTmFtZTogVGhlIG5hbWUgb2YgdGhlIHRyYWZmaWMgY29udHJvbC5OZWVkIFs0LCA1MF0gQ2hpbmVzZVxcRW5nbGlzaFxcTnVtYmVyIGNoYXJhY3RlcnMgb3IgXCJfXCIsYW5kIHNob3VsZCBzdGFydCB3aXRoIENoaW5lc2UvRW5nbGlzaCBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhZmZpY0NvbnRyb2xOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJhZmZpY0NvbnRyb2xVbml0OiBUcmFmZmljIGNvbnRyb2wgdW5pdCwgREFZL0hPVVIvTUlOVVRFLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWZmaWNDb250cm9sVW5pdDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcERlZmF1bHQ6IERlZmF1bHQgQVBQIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwRGVmYXVsdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHRyYWZmaWMgY29udHJvbCwgbGVzcyB0aGFuIDE4MCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWNpYWw6IFNwZWNpYWwgdHJhZmZpYyBjb250cm9scy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjaWFsPzogQXJyYXk8Um9zVHJhZmZpY0NvbnRyb2wuU3BlY2lhbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyRGVmYXVsdDogRGVmYXVsdCB1c2VyIHRyYWZmaWMgdmFsdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRlZmF1bHQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYFxuICovXG5leHBvcnQgY2xhc3MgVHJhZmZpY0NvbnRyb2wgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUcmFmZmljQ29udHJvbElkOiBUaGUgaWQgb2YgdGhlIHRyYWZmaWMgY29udHJvbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhZmZpY0NvbnRyb2xJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUcmFmZmljQ29udHJvbFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1RyYWZmaWNDb250cm9sID0gbmV3IFJvc1RyYWZmaWNDb250cm9sKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdHJhZmZpY0NvbnRyb2xVbml0OiBwcm9wcy50cmFmZmljQ29udHJvbFVuaXQsXG4gICAgICAgICAgICB0cmFmZmljQ29udHJvbE5hbWU6IHByb3BzLnRyYWZmaWNDb250cm9sTmFtZSxcbiAgICAgICAgICAgIGFwcERlZmF1bHQ6IHByb3BzLmFwcERlZmF1bHQsXG4gICAgICAgICAgICBzcGVjaWFsOiBwcm9wcy5zcGVjaWFsLFxuICAgICAgICAgICAgdXNlckRlZmF1bHQ6IHByb3BzLnVzZXJEZWZhdWx0LFxuICAgICAgICAgICAgYXBpRGVmYXVsdDogcHJvcHMuYXBpRGVmYXVsdCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NUcmFmZmljQ29udHJvbDtcbiAgICAgICAgdGhpcy5hdHRyVHJhZmZpY0NvbnRyb2xJZCA9IHJvc1RyYWZmaWNDb250cm9sLmF0dHJUcmFmZmljQ29udHJvbElkO1xuICAgIH1cbn1cbiJdfQ==