"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandwidthPackage = exports.BandwidthPackageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "BandwidthPackageProperty", { enumerable: true, get: function () { return ecs_generated_1.RosBandwidthPackage; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::BandwidthPackage`
 */
class BandwidthPackage extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBandwidthPackage = new ecs_generated_1.RosBandwidthPackage(this, id, {
            bandwidthPackageName: props.bandwidthPackageName,
            ipCount: props.ipCount,
            description: props.description,
            zoneId: props.zoneId,
            bandwidth: props.bandwidth ? props.bandwidth : 5,
            natGatewayId: props.natGatewayId,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByTraffic',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackage;
        this.attrBandwidthPackageId = rosBandwidthPackage.attrBandwidthPackageId;
        this.attrBandwidthPackageIps = rosBandwidthPackage.attrBandwidthPackageIps;
    }
}
exports.BandwidthPackage = BandwidthPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuZHdpZHRocGFja2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhbmR3aWR0aHBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBMkN4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxjQUFjO1NBQzNGLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO1FBQ3pFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQztJQUMvRSxDQUFDO0NBQ0o7QUF4Q0QsNENBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQmFuZHdpZHRoUGFja2FnZSB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0JhbmR3aWR0aFBhY2thZ2UgYXMgQmFuZHdpZHRoUGFja2FnZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OkJhbmR3aWR0aFBhY2thZ2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFuZHdpZHRoUGFja2FnZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IEJhbmR3aWR0aCwgWzUtNTAwMF1NIGZvciBQYXlCeUJhbmR3aWR0aCwgWzUtNTBdTSBmb3IgUGF5QnlUcmFmZmljLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwQ291bnQ6IFRvdGFsIGludGVybmV0IElQcyBvZiB0aGlzIEJhbmR3aWR0aCBwYWNrYWdlLCBbMS01XVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwQ291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRHYXRld2F5SWQ6IENyZWF0ZSBiYW5kd2lkdGggcGFja2FnZSBmb3Igc3BlY2lmaWVkIE5BVCBnYXRld2F5XG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0R2F0ZXdheUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoUGFja2FnZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGhQYWNrYWdlTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGJhbmR3aWR0aCBwYWNrYWdlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEbyBub3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBOYXQgR2F0ZXdheSBpbnRlcm5ldCBhY2Nlc3MgY2hhcmdlIHR5cGUuU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LiBEZWZhdWx0IGlzIFBheUJ5VHJhZmZpY1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBhdmFpbGFiaWxpdHkgem9uZSB3aGVyZSB0aGUgYmFuZHdpZHRoIHBhY2thZ2Ugd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpCYW5kd2lkdGhQYWNrYWdlYFxuICovXG5leHBvcnQgY2xhc3MgQmFuZHdpZHRoUGFja2FnZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJhbmR3aWR0aFBhY2thZ2VJZDogVGhlIGJhbmR3aWR0aCBwYWNrYWdlIGlkIG9mIGNyZWF0ZWQgQmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYW5kd2lkdGhQYWNrYWdlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmFuZHdpZHRoUGFja2FnZUlwczogVGhlIGFsbG9jYXRlZCBwdWJsaWMgSVBzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFuZHdpZHRoUGFja2FnZUlwczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6QmFuZHdpZHRoUGFja2FnZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQmFuZHdpZHRoUGFja2FnZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0JhbmR3aWR0aFBhY2thZ2UgPSBuZXcgUm9zQmFuZHdpZHRoUGFja2FnZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJhbmR3aWR0aFBhY2thZ2VOYW1lOiBwcm9wcy5iYW5kd2lkdGhQYWNrYWdlTmFtZSxcbiAgICAgICAgICAgIGlwQ291bnQ6IHByb3BzLmlwQ291bnQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoID8gcHJvcHMuYmFuZHdpZHRoIDogNSxcbiAgICAgICAgICAgIG5hdEdhdGV3YXlJZDogcHJvcHMubmF0R2F0ZXdheUlkLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgPyBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgOiAnUGF5QnlUcmFmZmljJyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NCYW5kd2lkdGhQYWNrYWdlO1xuICAgICAgICB0aGlzLmF0dHJCYW5kd2lkdGhQYWNrYWdlSWQgPSByb3NCYW5kd2lkdGhQYWNrYWdlLmF0dHJCYW5kd2lkdGhQYWNrYWdlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aFBhY2thZ2VJcHMgPSByb3NCYW5kd2lkdGhQYWNrYWdlLmF0dHJCYW5kd2lkdGhQYWNrYWdlSXBzO1xuICAgIH1cbn1cbiJdfQ==