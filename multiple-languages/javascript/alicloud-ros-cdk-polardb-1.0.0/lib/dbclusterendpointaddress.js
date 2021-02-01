"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClusterEndpointAddress = exports.DBClusterEndpointAddressProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "DBClusterEndpointAddressProperty", { enumerable: true, get: function () { return polardb_generated_1.RosDBClusterEndpointAddress; } });
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterEndpointAddress`
 */
class DBClusterEndpointAddress extends ros.Resource {
    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpointAddress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBClusterEndpointAddress = new polardb_generated_1.RosDBClusterEndpointAddress(this, id, {
            dbEndpointId: props.dbEndpointId,
            dbClusterId: props.dbClusterId,
            connectionStringPrefix: props.connectionStringPrefix,
            netType: props.netType ? props.netType : 'Public',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusterEndpointAddress;
        this.attrAddress = rosDBClusterEndpointAddress.attrAddress;
        this.attrConnectionString = rosDBClusterEndpointAddress.attrConnectionString;
    }
}
exports.DBClusterEndpointAddress = DBClusterEndpointAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJjbHVzdGVyZW5kcG9pbnRhZGRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJjbHVzdGVyZW5kcG9pbnRhZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyREFBa0U7QUFFMUIsaUhBRi9CLCtDQUEyQixPQUVvQztBQWlDeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ0RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9DLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDJCQUEyQixHQUFHLElBQUksK0NBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7U0FDcEQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMsb0JBQW9CLENBQUM7SUFDakYsQ0FBQztDQUNKO0FBckNELDREQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RCQ2x1c3RlckVuZHBvaW50QWRkcmVzcyB9IGZyb20gJy4vcG9sYXJkYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEQkNsdXN0ZXJFbmRwb2ludEFkZHJlc3MgYXMgREJDbHVzdGVyRW5kcG9pbnRBZGRyZXNzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlBPTEFSREI6OkRCQ2x1c3RlckVuZHBvaW50QWRkcmVzc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEQkNsdXN0ZXJFbmRwb2ludEFkZHJlc3NQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgQXBzYXJhREIgZm9yIFBPTEFSREIgY2x1c3RlciBmb3Igd2hpY2ggYSBwdWJsaWMgY29ubmVjdGlvbiBwb2ludCBpcyB0byBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3RlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJFbmRwb2ludElkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIgY29ubmVjdGlvbiBwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkVuZHBvaW50SWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb25uZWN0aW9uU3RyaW5nUHJlZml4OiBUaGUgcHJlZml4IG9mIHRoZSBjb25uZWN0aW9uIHN0cmluZy4gVGhlIHByZWZpeCBtdXN0IGNvbXBseSB3aXRoIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAgICogSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGFuZCBjb25zaXN0IG9mIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zKC0pLCBjYW5ub3QgZW5kIHdpdGggYSBkYXNoLlxuICAgICAqIFRoZSBsZW5ndGggaXMgNn4zMCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpb25TdHJpbmdQcmVmaXg/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0VHlwZTogVGhlIG5ldHdvcmsgdHlwZSBvZiB0aGUgY29ubmVjdGlvbiBzdHJpbmcuIFxuICAgICAqIElmIHNldCB0byBQdWJsaWMsIFJPUyB3aWxsIGNyZWF0ZSwgbW9kaWZ5IGFuZCBkZWxldGUgUHVibGljIGFkZHJlc3MgZm9yIHlvdS5cbiAgICAgKiBJZiBzZXQgdG8gUHJpdmF0ZSwgUk9TIHdpbGwgb25seSBtb2RpZnkgUHJpdmF0ZSBhZGRyZXNzIGZvciB5b3UuXG4gICAgICogRGVmYXVsdCB0byBQdWJsaWMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0VHlwZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UE9MQVJEQjo6REJDbHVzdGVyRW5kcG9pbnRBZGRyZXNzYFxuICovXG5leHBvcnQgY2xhc3MgREJDbHVzdGVyRW5kcG9pbnRBZGRyZXNzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWRkcmVzczogVGhlIGRldGFpbHMgb2YgdGhlIGVuZHBvaW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBZGRyZXNzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbm5lY3Rpb25TdHJpbmc6IFRoZSBjb25uZWN0aW9uIHN0cmluZyBvZiB0aGUgZW5kcG9pbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbm5lY3Rpb25TdHJpbmc6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpQT0xBUkRCOjpEQkNsdXN0ZXJFbmRwb2ludEFkZHJlc3NgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCQ2x1c3RlckVuZHBvaW50QWRkcmVzc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RCQ2x1c3RlckVuZHBvaW50QWRkcmVzcyA9IG5ldyBSb3NEQkNsdXN0ZXJFbmRwb2ludEFkZHJlc3ModGhpcywgaWQsICB7XG4gICAgICAgICAgICBkYkVuZHBvaW50SWQ6IHByb3BzLmRiRW5kcG9pbnRJZCxcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGNvbm5lY3Rpb25TdHJpbmdQcmVmaXg6IHByb3BzLmNvbm5lY3Rpb25TdHJpbmdQcmVmaXgsXG4gICAgICAgICAgICBuZXRUeXBlOiBwcm9wcy5uZXRUeXBlID8gcHJvcHMubmV0VHlwZSA6ICdQdWJsaWMnLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RCQ2x1c3RlckVuZHBvaW50QWRkcmVzcztcbiAgICAgICAgdGhpcy5hdHRyQWRkcmVzcyA9IHJvc0RCQ2x1c3RlckVuZHBvaW50QWRkcmVzcy5hdHRyQWRkcmVzcztcbiAgICAgICAgdGhpcy5hdHRyQ29ubmVjdGlvblN0cmluZyA9IHJvc0RCQ2x1c3RlckVuZHBvaW50QWRkcmVzcy5hdHRyQ29ubmVjdGlvblN0cmluZztcbiAgICB9XG59XG4iXX0=