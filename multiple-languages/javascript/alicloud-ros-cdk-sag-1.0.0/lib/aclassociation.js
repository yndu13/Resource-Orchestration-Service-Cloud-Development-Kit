"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLAssociation = exports.ACLAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sag_generated_1 = require("./sag.generated");
Object.defineProperty(exports, "ACLAssociationProperty", { enumerable: true, get: function () { return sag_generated_1.RosACLAssociation; } });
/**
 * A ROS resource type:  `ALIYUN::SAG::ACLAssociation`
 */
class ACLAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosACLAssociation = new sag_generated_1.RosACLAssociation(this, id, {
            aclId: props.aclId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosACLAssociation;
    }
}
exports.ACLAssociation = ACLAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2xhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUFrQnBEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFNUM7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQXZCRCx3Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBQ0xBc3NvY2lhdGlvbiB9IGZyb20gJy4vc2FnLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FDTEFzc29jaWF0aW9uIGFzIEFDTEFzc29jaWF0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQUNMQXNzb2NpYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IEFjY2VzcyBjb250cm9sIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc21hcnRBZ0lkOiBBbiBpbnRlbGxpZ2VudCBnYXRld2F5IGluc3RhbmNlIHRoYXQgbmVlZHMgdG8gYmluZCBhY2Nlc3MgY29udHJvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbWFydEFnSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpBQ0xBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEFDTEFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUc6OkFDTEFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBQ0xBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FDTEFzc29jaWF0aW9uID0gbmV3IFJvc0FDTEFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWNsSWQ6IHByb3BzLmFjbElkLFxuICAgICAgICAgICAgc21hcnRBZ0lkOiBwcm9wcy5zbWFydEFnSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQUNMQXNzb2NpYXRpb247XG4gICAgfVxufVxuIl19