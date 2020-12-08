"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIPAssociation = exports.EIPAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "EIPAssociationProperty", { enumerable: true, get: function () { return vpc_generated_1.RosEIPAssociation; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::EIPAssociation`
 */
class EIPAssociation extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::EIPAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosEIPAssociation = new vpc_generated_1.RosEIPAssociation(this, id, {
            privateIpAddress: props.privateIpAddress,
            instanceId: props.instanceId,
            mode: props.mode,
            allocationId: props.allocationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIPAssociation;
        this.attrAllocationId = rosEIPAssociation.attrAllocationId;
        this.attrEipAddress = rosEIPAssociation.attrEipAddress;
    }
}
exports.EIPAssociation = EIPAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlwYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlaXBhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUFpQ3BEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjVDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBckNELHdDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0VJUEFzc29jaWF0aW9uIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRUlQQXNzb2NpYXRpb24gYXMgRUlQQXNzb2NpYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpFSVBBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFSVBBc3NvY2lhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvY2F0aW9uSWQ6IEVJUCBpbnN0YW5jZSBpZCB0byBiaW5kLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG9jYXRpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IEVDUy9TTEIvTkFUL0hhVmlwL0VOSSBpbnN0YW5jZSBpZCB0byBiaWQgdGhlIEVJUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogVGhlIG1vZGUgb2YgYXNzb2NpYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOQVQoRGVmYXVsdCk6IE5BVCBtb2RlLlxuICAgICAqIEJJTkRFRDogQ3V0LXRocm91Z2ggbW9kZS5cbiAgICAgKiBNVUxUSV9CSU5ERUQ6IE11bHRpLUVJUCB0byBFTkkgbW9kZS5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgSW5zdGFuY2VUeXBlIGlzIE5ldHdvcmtJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBBbiBJUCBhZGRyZXNzIGluIHRoZSBDSURSIGJsb2NrIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGUgb3B0aW9uIGVtcHR5LCB0aGUgc3lzdGVtIGFsbG9jYXRlcyBhIHByaXZhdGUgSVAgYWRkcmVzcyBhY2NvcmRpbmcgdG8gdGhlIFZQQyBJRCBhbmQgVlN3aXRjaCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkVJUEFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgRUlQQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGxvY2F0aW9uSWQ6IElEIHRoYXQgQWxpeXVuIGFzc2lnbnMgdG8gcmVwcmVzZW50IHRoZSBhbGxvY2F0aW9uIG9mIHRoZSBhZGRyZXNzIGZvciB1c2Ugd2l0aCBWUEMuIFJldHVybmVkIG9ubHkgZm9yIFZQQyBlbGFzdGljIElQIGFkZHJlc3Nlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG9jYXRpb25JZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFaXBBZGRyZXNzOiBJUCBhZGRyZXNzIG9mIGNyZWF0ZWQgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWlwQWRkcmVzczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6RUlQQXNzb2NpYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEVJUEFzc29jaWF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRUlQQXNzb2NpYXRpb24gPSBuZXcgUm9zRUlQQXNzb2NpYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBwcml2YXRlSXBBZGRyZXNzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUsXG4gICAgICAgICAgICBhbGxvY2F0aW9uSWQ6IHByb3BzLmFsbG9jYXRpb25JZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NFSVBBc3NvY2lhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyQWxsb2NhdGlvbklkID0gcm9zRUlQQXNzb2NpYXRpb24uYXR0ckFsbG9jYXRpb25JZDtcbiAgICAgICAgdGhpcy5hdHRyRWlwQWRkcmVzcyA9IHJvc0VJUEFzc29jaWF0aW9uLmF0dHJFaXBBZGRyZXNzO1xuICAgIH1cbn1cbiJdfQ==