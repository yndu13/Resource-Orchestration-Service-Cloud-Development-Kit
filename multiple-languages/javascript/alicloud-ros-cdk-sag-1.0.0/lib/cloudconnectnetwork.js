"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConnectNetwork = exports.CloudConnectNetworkProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sag_generated_1 = require("./sag.generated");
Object.defineProperty(exports, "CloudConnectNetworkProperty", { enumerable: true, get: function () { return sag_generated_1.RosCloudConnectNetwork; } });
/**
 * A ROS resource type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
class CloudConnectNetwork extends ros.Resource {
    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCloudConnectNetwork = new sag_generated_1.RosCloudConnectNetwork(this, id, {
            isDefault: props.isDefault ? props.isDefault : false,
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCloudConnectNetwork;
        this.attrCcnId = rosCloudConnectNetwork.attrCcnId;
    }
}
exports.CloudConnectNetwork = CloudConnectNetwork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRjb25uZWN0bmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkY29ubmVjdG5ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBeUI5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZakQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFrQyxFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHNCQUFzQixHQUFHLElBQUksc0NBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNwRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBOUJELGtEQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmsgfSBmcm9tICcuL3NhZy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDbG91ZENvbm5lY3ROZXR3b3JrIGFzIENsb3VkQ29ubmVjdE5ldHdvcmtQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQ29ubmVjdE5ldHdvcmtQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQ0NOIGluc3RhbmNlLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gY29udGFpbiAyIHRvIDI1NiBjaGFyYWN0ZXJzLiBUaGUgZGVzY3JpcHRpb24gY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc0RlZmF1bHQ6IFdoZXRoZXIgaXMgY3JlYXRlZCBieSBzeXN0ZW1cbiAgICAgKi9cbiAgICByZWFkb25seSBpc0RlZmF1bHQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMiB0byAxMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgY2hpbmVzZSwgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhbiBFbmdsaXNoIGxldHRlciwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrYFxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRDb25uZWN0TmV0d29yayBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENjbklkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNjbklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NDbG91ZENvbm5lY3ROZXR3b3JrID0gbmV3IFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmsodGhpcywgaWQsICB7XG4gICAgICAgICAgICBpc0RlZmF1bHQ6IHByb3BzLmlzRGVmYXVsdCA/IHByb3BzLmlzRGVmYXVsdCA6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDbG91ZENvbm5lY3ROZXR3b3JrO1xuICAgICAgICB0aGlzLmF0dHJDY25JZCA9IHJvc0Nsb3VkQ29ubmVjdE5ldHdvcmsuYXR0ckNjbklkO1xuICAgIH1cbn1cbiJdfQ==