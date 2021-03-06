"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlbBinding = exports.SlbBindingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "SlbBindingProperty", { enumerable: true, get: function () { return sae_generated_1.RosSlbBinding; } });
/**
 * A ROS resource type:  `ALIYUN::SAE::SlbBinding`
 */
class SlbBinding extends ros.Resource {
    /**
     * Create a new `ALIYUN::SAE::SlbBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSlbBinding = new sae_generated_1.RosSlbBinding(this, id, {
            internetSlbId: props.internetSlbId,
            appId: props.appId,
            intranet: props.intranet,
            intranetSlbId: props.intranetSlbId,
            internet: props.internet,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSlbBinding;
        this.attrAppId = rosSlbBinding.attrAppId;
        this.attrChangeOrderId = rosSlbBinding.attrChangeOrderId;
    }
}
exports.SlbBinding = SlbBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsYmJpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFpQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBdENELGdDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NsYkJpbmRpbmcgfSBmcm9tICcuL3NhZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTbGJCaW5kaW5nIGFzIFNsYkJpbmRpbmdQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0FFOjpTbGJCaW5kaW5nYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNsYkJpbmRpbmdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwSWQ6IFN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gZGVwbG95bWVudCB0YXJnZXQgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0OiBCaW5kaW5nIHB1YmxpYyBTTEIuIEZvciBleGFtcGxlOiBbeyBcInBvcnRcIjogODAsIFwidGFyZ2V0UG9ydFwiOiA4MDgwLCBcInByb3RvY29sXCI6IFwiVENQXCJ9XSwgc2hvd3MgYSBjb250YWluZXIgcG9ydCA4MDgwIHRocm91Z2ggcG9ydCA4MCBzbGIgZXhwb3NlZCBzZXJ2aWNlLCB0aGUgcHJvdG9jb2wgaXMgVENQLCB0aGUgYmxhbmsgaXMgaWdub3JlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldFNsYklkOiBVc2UgU0xCIHB1cmNoYXNlZCBzcGVjaWZpZWQsIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIG5vbi1zaGFyZWQgZXhhbXBsZXNcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldFNsYklkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludHJhbmV0OiBCaW5kIHByaXZhdGUgU0xCLiBGb3IgZXhhbXBsZTogW3sgXCJwb3J0XCI6IDgwLCBcInRhcmdldFBvcnRcIjogODA4MCwgXCJwcm90b2NvbFwiOiBcIlRDUFwifV0sIHNob3dzIGEgY29udGFpbmVyIHBvcnQgODA4MCB0aHJvdWdoIHBvcnQgODAgc2xiIGV4cG9zZWQgc2VydmljZSwgdGhlIHByb3RvY29sIGlzIFRDUCwgdGhlIGJsYW5rIGlzIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50cmFuZXRTbGJJZDogVXNlIFNMQiBwdXJjaGFzZWQgc3BlY2lmaWVkLCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBub24tc2hhcmVkIGV4YW1wbGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXRTbGJJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0FFOjpTbGJCaW5kaW5nYFxuICovXG5leHBvcnQgY2xhc3MgU2xiQmluZGluZyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcElkOiBTdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGRlcGxveW1lbnQgdGFyZ2V0IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDaGFuZ2VPcmRlcklkOiBSZXR1cm4gdG8gcmVsZWFzZSBhIHNpbmdsZSBJRCwgdXNlZCB0byBxdWVyeSB0YXNrIGV4ZWN1dGlvbiBzdGF0dXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFuZ2VPcmRlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FFOjpTbGJCaW5kaW5nYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTbGJCaW5kaW5nUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2xiQmluZGluZyA9IG5ldyBSb3NTbGJCaW5kaW5nKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW50ZXJuZXRTbGJJZDogcHJvcHMuaW50ZXJuZXRTbGJJZCxcbiAgICAgICAgICAgIGFwcElkOiBwcm9wcy5hcHBJZCxcbiAgICAgICAgICAgIGludHJhbmV0OiBwcm9wcy5pbnRyYW5ldCxcbiAgICAgICAgICAgIGludHJhbmV0U2xiSWQ6IHByb3BzLmludHJhbmV0U2xiSWQsXG4gICAgICAgICAgICBpbnRlcm5ldDogcHJvcHMuaW50ZXJuZXQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2xiQmluZGluZztcbiAgICAgICAgdGhpcy5hdHRyQXBwSWQgPSByb3NTbGJCaW5kaW5nLmF0dHJBcHBJZDtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbmdlT3JkZXJJZCA9IHJvc1NsYkJpbmRpbmcuYXR0ckNoYW5nZU9yZGVySWQ7XG4gICAgfVxufVxuIl19