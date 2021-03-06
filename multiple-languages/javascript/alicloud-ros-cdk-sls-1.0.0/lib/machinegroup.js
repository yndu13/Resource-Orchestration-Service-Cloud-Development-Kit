"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineGroup = exports.MachineGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "MachineGroupProperty", { enumerable: true, get: function () { return sls_generated_1.RosMachineGroup; } });
/**
 * A ROS resource type:  `ALIYUN::SLS::MachineGroup`
 */
class MachineGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMachineGroup = new sls_generated_1.RosMachineGroup(this, id, {
            machineList: props.machineList,
            groupName: props.groupName,
            groupType: props.groupType,
            projectName: props.projectName,
            machineIdentifyType: props.machineIdentifyType,
            groupAttribute: props.groupAttribute,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMachineGroup;
        this.attrGroupName = rosMachineGroup.attrGroupName;
        this.attrProjectName = rosMachineGroup.attrProjectName;
    }
}
exports.MachineGroup = MachineGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjaGluZWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFjaGluZWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBc0NoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQXZDRCxvQ0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNYWNoaW5lR3JvdXAgfSBmcm9tICcuL3Nscy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNYWNoaW5lR3JvdXAgYXMgTWFjaGluZUdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hY2hpbmVHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cEF0dHJpYnV0ZTogR3JvdXAgYXR0cmlidXRlLCBkZWZhdWx0IGlzIG51bGwuIFRoZSBvYmplY3QgdmFsdWUgaXMgZ3JvdXBUb2ljIGFuZCBleHRlcm5hbE5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cEF0dHJpYnV0ZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgZ3JvdXAgbmFtZSwgdGhlIFByb2plY3Qgb25seS4gWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cFR5cGU6IE1hY2hpbmVHcm91cCB0eXBlLCB0aGUgdmFsdWUgaXMgZW1wdHkgb3IgQXJtb3J5XG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hY2hpbmVJZGVudGlmeVR5cGU6IE1hY2hpbmUgaW5kZW50aWZ5IHR5cGUsIHRoZSB2YWx1ZSBpcyAnaXAnIG9yICd1c2VyZGVmaW5lZCdcbiAgICAgKi9cbiAgICByZWFkb25seSBtYWNoaW5lSWRlbnRpZnlUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hY2hpbmVMaXN0OiBUaGUgbWFjaGluZSB0YWcsIHRoZSB2YWx1ZSBpcyBpcCBvciB1c2VyZGVmaW5lZC1pZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYWNoaW5lTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdE5hbWU6IE1hY2hpbmVHcm91cCBjcmVhdGVkIGluIHByb2plY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdE5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgTWFjaGluZUdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBHcm91cE5hbWUgb2YgU0xTLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByb2plY3ROYW1lOiBQcm9qZWN0TmFtZSBvZiBTTFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm9qZWN0TmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNYWNoaW5lR3JvdXBQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc01hY2hpbmVHcm91cCA9IG5ldyBSb3NNYWNoaW5lR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBtYWNoaW5lTGlzdDogcHJvcHMubWFjaGluZUxpc3QsXG4gICAgICAgICAgICBncm91cE5hbWU6IHByb3BzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIGdyb3VwVHlwZTogcHJvcHMuZ3JvdXBUeXBlLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb3BzLnByb2plY3ROYW1lLFxuICAgICAgICAgICAgbWFjaGluZUlkZW50aWZ5VHlwZTogcHJvcHMubWFjaGluZUlkZW50aWZ5VHlwZSxcbiAgICAgICAgICAgIGdyb3VwQXR0cmlidXRlOiBwcm9wcy5ncm91cEF0dHJpYnV0ZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNYWNoaW5lR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHJvc01hY2hpbmVHcm91cC5hdHRyR3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmF0dHJQcm9qZWN0TmFtZSA9IHJvc01hY2hpbmVHcm91cC5hdHRyUHJvamVjdE5hbWU7XG4gICAgfVxufVxuIl19