"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return edas_generated_1.RosCluster; } });
/**
 * A ROS resource type:  `ALIYUN::EDAS::Cluster`
 */
class Cluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCluster = new edas_generated_1.RosCluster(this, id, {
            logicalRegionId: props.logicalRegionId,
            oversoldFactor: props.oversoldFactor,
            vpcId: props.vpcId,
            clusterName: props.clusterName,
            networkMode: props.networkMode,
            clusterType: props.clusterType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrClusterName = rosCluster.attrClusterName;
        this.attrClusterType = rosCluster.attrClusterType;
        this.attrIaasProvider = rosCluster.attrIaasProvider;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUE4QztBQUV2QixnR0FGZCwyQkFBVSxPQUVtQjtBQXNDdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTJCckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSwyQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4RCxDQUFDO0NBQ0o7QUFuREQsMEJBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3RlciB9IGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDbHVzdGVyIGFzIENsdXN0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBDbHVzdGVyIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBDbHVzdGVyIHR5cGUuIDEtU3dhcm0gY2x1c3RlciwgMi1FQ1MgY2x1c3RlciwgMy1LdWJlcm5ldGVzIENsdXN0ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyVHlwZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtNb2RlOiBOZXR3b3JrIFR5cGUuIDEtIGNsYXNzaWMgbmV0d29yaywgMi1WUENcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrTW9kZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2ljYWxSZWdpb25JZDogQ3VzdG9tIG5hbWVzcGFjZSBSZWdpb25JZCAoZm9ybWF0OiBQaHlzaWNhbCBSZWdpb246IGN1c3RvbSBuYW1lc3BhY2UgaWRlbnRpZmllcilcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpY2FsUmVnaW9uSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3ZlcnNvbGRGYWN0b3I6IERvY2tlciBDUFUgY2x1c3RlciBvdmVyc29sZC4gU3VwcG9ydCAyICgxOiAyIHJhdGlvKSAvIDQgKDE6IDQpIC8gOCAoMTogOCByYXRpbylcbiAgICAgKi9cbiAgICByZWFkb25seSBvdmVyc29sZEZhY3Rvcj86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIG5ldHdvcmsgSUQuIElmIG5ldHdvcmsgc2VsZWN0aW9uIFZQQywgdGhpcyBwYXJhbWV0ZXIgUmVxdWlyZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyTmFtZTogQ2x1c3RlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogQ2x1c3RlciB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVHlwZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJYWFzUHJvdmlkZXI6IFByb3ZpZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJYWFzUHJvdmlkZXI6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2x1c3RlciA9IG5ldyBSb3NDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbG9naWNhbFJlZ2lvbklkOiBwcm9wcy5sb2dpY2FsUmVnaW9uSWQsXG4gICAgICAgICAgICBvdmVyc29sZEZhY3RvcjogcHJvcHMub3ZlcnNvbGRGYWN0b3IsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBjbHVzdGVyTmFtZTogcHJvcHMuY2x1c3Rlck5hbWUsXG4gICAgICAgICAgICBuZXR3b3JrTW9kZTogcHJvcHMubmV0d29ya01vZGUsXG4gICAgICAgICAgICBjbHVzdGVyVHlwZTogcHJvcHMuY2x1c3RlclR5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zQ2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJUeXBlO1xuICAgICAgICB0aGlzLmF0dHJJYWFzUHJvdmlkZXIgPSByb3NDbHVzdGVyLmF0dHJJYWFzUHJvdmlkZXI7XG4gICAgfVxufVxuIl19