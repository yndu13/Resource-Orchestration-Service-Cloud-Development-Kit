"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreJob = exports.RestoreJobProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "RestoreJobProperty", { enumerable: true, get: function () { return hbr_generated_1.RosRestoreJob; } });
/**
 * A ROS resource type:  `ALIYUN::HBR::RestoreJob`
 */
class RestoreJob extends ros.Resource {
    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRestoreJob = new hbr_generated_1.RosRestoreJob(this, id, {
            snapshotId: props.snapshotId,
            targetClientId: props.targetClientId,
            targetPath: props.targetPath,
            sourceType: props.sourceType,
            sourceClientId: props.sourceClientId,
            targetInstanceId: props.targetInstanceId,
            vaultId: props.vaultId,
            sourceInstanceId: props.sourceInstanceId,
            restoreType: props.restoreType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRestoreJob;
        this.attrErrorMessage = rosRestoreJob.attrErrorMessage;
        this.attrRestoreId = rosRestoreJob.attrRestoreId;
        this.attrRestoreType = rosRestoreJob.attrRestoreType;
        this.attrSourceType = rosRestoreJob.attrSourceType;
        this.attrStatus = rosRestoreJob.attrStatus;
    }
}
exports.RestoreJob = RestoreJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZWpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc3RvcmVqb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFxRDVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQ3hDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBNURELGdDQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1Jlc3RvcmVKb2IgfSBmcm9tICcuL2hici5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSZXN0b3JlSm9iIGFzIFJlc3RvcmVKb2JQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6SEJSOjpSZXN0b3JlSm9iYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc3RvcmVKb2JQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdG9yZVR5cGU6IFJlc3RvcmUgdHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc3RvcmVUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc25hcHNob3RJZDogU25hcHNob3QgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBzbmFwc2hvdElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQ2xpZW50SWQ6IFNvdXJjZSBjbGllbnQgSUQuIEl0IHNob3VsZCBiZSBwcm92aWRlZCB3aGVuIFNvdXJjZVR5cGU9RklMRS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VDbGllbnRJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUluc3RhbmNlSWQ6IFNvdXJjZSBpbnN0YW5jZSBJRC4gSXQgc2hvdWxkIGJlIHByb3ZpZGVkIHdoZW4gU291cmNlVHlwZT1FQ1NfRklMRS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VJbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlVHlwZTogU291cmNlIHR5cGVcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0Q2xpZW50SWQ6IFRhcmdldCBjbGllbnQgSUQuIEl0IHNob3VsZCBiZSBwcm92aWRlZCB3aGVuIFJlc3RvcmVUeXBlPUZJTEUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0Q2xpZW50SWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJbnN0YW5jZUlkOiBTb3VyY2UgY2xpZW50IElELiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgd2hlbiBSZXN0b3JlVHlwZT1FQ1NfRklMRS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRJbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UGF0aDogVGFyZ2V0IHBhdGguIEZvciBpbnN0YW5jZSwgXCIvXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0UGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhdWx0SWQ6IFZhdWx0IElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmF1bHRJZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OlJlc3RvcmVKb2JgXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXN0b3JlSm9iIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXJyb3JNZXNzYWdlOiBFcnJvciBtZXNzYWdlIG9mIHJlc3RvcmUgam9iXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFcnJvck1lc3NhZ2U6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzdG9yZUlkOiBSZXN0b3JlIGpvYiBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzdG9yZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc3RvcmVUeXBlOiBSZXN0b3JlIHR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc3RvcmVUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNvdXJjZVR5cGU6IFNvdXJjZSB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTb3VyY2VUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0YXR1czogUmVzdG9yZSBqb2Igc3RhdHVzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGF0dXM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpIQlI6OlJlc3RvcmVKb2JgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlc3RvcmVKb2JQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSZXN0b3JlSm9iID0gbmV3IFJvc1Jlc3RvcmVKb2IodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzbmFwc2hvdElkOiBwcm9wcy5zbmFwc2hvdElkLFxuICAgICAgICAgICAgdGFyZ2V0Q2xpZW50SWQ6IHByb3BzLnRhcmdldENsaWVudElkLFxuICAgICAgICAgICAgdGFyZ2V0UGF0aDogcHJvcHMudGFyZ2V0UGF0aCxcbiAgICAgICAgICAgIHNvdXJjZVR5cGU6IHByb3BzLnNvdXJjZVR5cGUsXG4gICAgICAgICAgICBzb3VyY2VDbGllbnRJZDogcHJvcHMuc291cmNlQ2xpZW50SWQsXG4gICAgICAgICAgICB0YXJnZXRJbnN0YW5jZUlkOiBwcm9wcy50YXJnZXRJbnN0YW5jZUlkLFxuICAgICAgICAgICAgdmF1bHRJZDogcHJvcHMudmF1bHRJZCxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlSWQ6IHByb3BzLnNvdXJjZUluc3RhbmNlSWQsXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogcHJvcHMucmVzdG9yZVR5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUmVzdG9yZUpvYjtcbiAgICAgICAgdGhpcy5hdHRyRXJyb3JNZXNzYWdlID0gcm9zUmVzdG9yZUpvYi5hdHRyRXJyb3JNZXNzYWdlO1xuICAgICAgICB0aGlzLmF0dHJSZXN0b3JlSWQgPSByb3NSZXN0b3JlSm9iLmF0dHJSZXN0b3JlSWQ7XG4gICAgICAgIHRoaXMuYXR0clJlc3RvcmVUeXBlID0gcm9zUmVzdG9yZUpvYi5hdHRyUmVzdG9yZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clNvdXJjZVR5cGUgPSByb3NSZXN0b3JlSm9iLmF0dHJTb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJTdGF0dXMgPSByb3NSZXN0b3JlSm9iLmF0dHJTdGF0dXM7XG4gICAgfVxufVxuIl19