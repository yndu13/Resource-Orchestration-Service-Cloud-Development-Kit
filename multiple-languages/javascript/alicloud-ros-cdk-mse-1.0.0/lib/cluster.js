"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mse_generated_1 = require("./mse.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return mse_generated_1.RosCluster; } });
/**
 * A ROS resource type:  `ALIYUN::MSE::Cluster`
 */
class Cluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCluster = new mse_generated_1.RosCluster(this, id, {
            diskType: props.diskType,
            instanceCount: props.instanceCount,
            privateSlbSpecification: props.privateSlbSpecification,
            vpcId: props.vpcId,
            clusterVersion: props.clusterVersion,
            pubNetworkFlow: props.pubNetworkFlow,
            clusterSpecification: props.clusterSpecification,
            vSwitchId: props.vSwitchId,
            pubSlbSpecification: props.pubSlbSpecification,
            clusterType: props.clusterType,
            netType: props.netType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrAclEntryList = rosCluster.attrAclEntryList;
        this.attrAclId = rosCluster.attrAclId;
        this.attrAppVersion = rosCluster.attrAppVersion;
        this.attrClusterAliasName = rosCluster.attrClusterAliasName;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrClusterName = rosCluster.attrClusterName;
        this.attrClusterSpecification = rosCluster.attrClusterSpecification;
        this.attrClusterType = rosCluster.attrClusterType;
        this.attrClusterVersion = rosCluster.attrClusterVersion;
        this.attrCpu = rosCluster.attrCpu;
        this.attrDiskCapacity = rosCluster.attrDiskCapacity;
        this.attrDiskType = rosCluster.attrDiskType;
        this.attrHealthStatus = rosCluster.attrHealthStatus;
        this.attrInitStatus = rosCluster.attrInitStatus;
        this.attrInstanceCount = rosCluster.attrInstanceCount;
        this.attrInstanceId = rosCluster.attrInstanceId;
        this.attrInternetAddress = rosCluster.attrInternetAddress;
        this.attrInternetDomain = rosCluster.attrInternetDomain;
        this.attrInternetPort = rosCluster.attrInternetPort;
        this.attrIntranetAddress = rosCluster.attrIntranetAddress;
        this.attrIntranetDomain = rosCluster.attrIntranetDomain;
        this.attrIntranetPort = rosCluster.attrIntranetPort;
        this.attrMemoryCapacity = rosCluster.attrMemoryCapacity;
        this.attrNetType = rosCluster.attrNetType;
        this.attrOrderId = rosCluster.attrOrderId;
        this.attrPayInfo = rosCluster.attrPayInfo;
        this.attrPubNetworkFlow = rosCluster.attrPubNetworkFlow;
        this.attrRegionId = rosCluster.attrRegionId;
        this.attrVSwitchId = rosCluster.attrVSwitchId;
        this.attrVpcId = rosCluster.attrVpcId;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQStEdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTZKckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUMsd0JBQXdCLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFwTkQsMEJBb05DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3RlciB9IGZyb20gJy4vbXNlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NsdXN0ZXIgYXMgQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpNU0U6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyU3BlY2lmaWNhdGlvbjogY2x1c3RlciBzcGVjaWZpY2F0aW9uLCBFbnVtOiBNU0VfU0NfMV8yXzIwMF9jLE1TRV9TQ18yXzRfMjAwX2MsTVNFX1NDXzRfOF8yMDBfYyxNU0VfU0NfOF8xNl8yMDBfY1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJTcGVjaWZpY2F0aW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IGNsdXN0ZXIgdHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclZlcnNpb246IGNsdXN0ZXIgdmVyc2lvbiwgRW51bTogWm9vS2VlcGVyXzNfNF8xNCxab29LZWVwZXJfM181XzUsTkFDT1NfQU5TXzFfMV8zLEVVUkVLQV8xXzlfM1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJWZXJzaW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDb3VudDogaW5zdGFuY2UgY291bnRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNvdW50OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0VHlwZTogbmV0d29yayB0eXBlLCBFbnVtOiBwcml2YXRlbmV0LHB1Ym5ldFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldFR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNrVHlwZTogZGlzayB0eXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlza1R5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpdmF0ZVNsYlNwZWNpZmljYXRpb246XG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZVNsYlNwZWNpZmljYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHViTmV0d29ya0Zsb3c6IHB1YiBuZXR3b3JrIGZsb3dcbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJOZXR3b3JrRmxvdz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwdWJTbGJTcGVjaWZpY2F0aW9uOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHB1YlNsYlNwZWNpZmljYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IHZwYyBpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogc3dpdGNoZXIgSWRcbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok1TRTo6Q2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2xFbnRyeUxpc3Q6IGFjbCBlbnRyeSBsaXN0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2xFbnRyeUxpc3Q6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNsSWQ6IGFjbCBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNsSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwVmVyc2lvbjogYXBwIHZlcnNpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcFZlcnNpb246IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2x1c3RlckFsaWFzTmFtZTogY2x1c3RlciBhbGlhcyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyQWxpYXNOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJJZDogY2x1c3RlciBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJOYW1lOiBjbHVzdGVyIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJTcGVjaWZpY2F0aW9uOiBjbHVzdGVyIHNwZWNpZmljYXRpb24sIEVudW06IE1TRV9TQ18xXzJfMjAwX2MsTVNFX1NDXzJfNF8yMDBfYyxNU0VfU0NfNF84XzIwMF9jLE1TRV9TQ184XzE2XzIwMF9jXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyU3BlY2lmaWNhdGlvbjogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogY2x1c3RlciB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVHlwZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbHVzdGVyVmVyc2lvbjogY2x1c3RlciB2ZXJzaW9uLCBFbnVtOiBab29LZWVwZXJfM180XzE0LFpvb0tlZXBlcl8zXzVfNSxOQUNPU19BTlNfMV8xXzMsRVVSRUtBXzFfOV8zXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVmVyc2lvbjogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcHU6IGNwdSBjb3JlIHNpemVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNwdTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaXNrQ2FwYWNpdHk6IGRpc2sgY2FwYWNpdHksIHVuaXQ6IEdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpc2tDYXBhY2l0eTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaXNrVHlwZTogZGlzayB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXNrVHlwZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBIZWFsdGhTdGF0dXM6IGhlYWx0aCBzdGF0dXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhlYWx0aFN0YXR1czogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbml0U3RhdHVzOiBpbml0IHN0YXR1cywgRW51bTogSU5JVF9JTkcsIElOSVRfRkFJTEVELCBJTklUX1NVQ0NFU1MsIElOSVRfVElNRV9PVVQsREVTVFJPWV9JTkcsIERFU1RST1lfRkFJTEVELCBERVNUUk9ZX1NVQ0NFU1MsIFJFU1RBUlRfSU5HLCBSRVNUQVJUX1NVQ0NFU1MsIFJFU1RBUlRfRkFJTEVELCBTQ0FMRV9JTkcsIFNDQUxFX1NVQ0NFU1MsIFNDQUxFX0ZBSUxFRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5pdFN0YXR1czogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUNvdW50OiBpbnN0YW5jZSBjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VDb3VudDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBpbnN0YW5jZSBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldEFkZHJlc3M6IGludGVybmV0IGFkZHJlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0QWRkcmVzczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldERvbWFpbjogaW50ZXJuZXQgZG9tYWluXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldERvbWFpbjogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldFBvcnQ6IGludGVybmV0IHBvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0UG9ydDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRyYW5ldEFkZHJlc3M6IGludHJhbmV0IGFkZHJlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludHJhbmV0QWRkcmVzczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRyYW5ldERvbWFpbjogaW50cmFuZXQgZG9tYWluXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRyYW5ldERvbWFpbjogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRyYW5ldFBvcnQ6IGludHJhbmV0IHBvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludHJhbmV0UG9ydDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNZW1vcnlDYXBhY2l0eTogbWVtb3J5IGNhcGFjaXR5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNZW1vcnlDYXBhY2l0eTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXRUeXBlOiBuZXR3b3JrIHR5cGUsIEVudW06IHByaXZhdGVuZXQscHVibmV0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXRUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE9yZGVySWQ6IG9yZGVyIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBheUluZm86IHBheSBpbmZvXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXlJbmZvOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFB1Yk5ldHdvcmtGbG93OiBwdWIgbmV0d29yayBmbG93XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJOZXR3b3JrRmxvdzogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZWdpb25JZDogcmVnaW9uIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25JZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IHN3aXRjaGVyIElkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBjSWQ6IHZwYyBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpNU0U6OkNsdXN0ZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NDbHVzdGVyID0gbmV3IFJvc0NsdXN0ZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkaXNrVHlwZTogcHJvcHMuZGlza1R5cGUsXG4gICAgICAgICAgICBpbnN0YW5jZUNvdW50OiBwcm9wcy5pbnN0YW5jZUNvdW50LFxuICAgICAgICAgICAgcHJpdmF0ZVNsYlNwZWNpZmljYXRpb246IHByb3BzLnByaXZhdGVTbGJTcGVjaWZpY2F0aW9uLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgY2x1c3RlclZlcnNpb246IHByb3BzLmNsdXN0ZXJWZXJzaW9uLFxuICAgICAgICAgICAgcHViTmV0d29ya0Zsb3c6IHByb3BzLnB1Yk5ldHdvcmtGbG93LFxuICAgICAgICAgICAgY2x1c3RlclNwZWNpZmljYXRpb246IHByb3BzLmNsdXN0ZXJTcGVjaWZpY2F0aW9uLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBwdWJTbGJTcGVjaWZpY2F0aW9uOiBwcm9wcy5wdWJTbGJTcGVjaWZpY2F0aW9uLFxuICAgICAgICAgICAgY2x1c3RlclR5cGU6IHByb3BzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgICAgbmV0VHlwZTogcHJvcHMubmV0VHlwZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDbHVzdGVyO1xuICAgICAgICB0aGlzLmF0dHJBY2xFbnRyeUxpc3QgPSByb3NDbHVzdGVyLmF0dHJBY2xFbnRyeUxpc3Q7XG4gICAgICAgIHRoaXMuYXR0ckFjbElkID0gcm9zQ2x1c3Rlci5hdHRyQWNsSWQ7XG4gICAgICAgIHRoaXMuYXR0ckFwcFZlcnNpb24gPSByb3NDbHVzdGVyLmF0dHJBcHBWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyQWxpYXNOYW1lID0gcm9zQ2x1c3Rlci5hdHRyQ2x1c3RlckFsaWFzTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zQ2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyU3BlY2lmaWNhdGlvbiA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJTcGVjaWZpY2F0aW9uO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJUeXBlO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVmVyc2lvbiA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJDcHUgPSByb3NDbHVzdGVyLmF0dHJDcHU7XG4gICAgICAgIHRoaXMuYXR0ckRpc2tDYXBhY2l0eSA9IHJvc0NsdXN0ZXIuYXR0ckRpc2tDYXBhY2l0eTtcbiAgICAgICAgdGhpcy5hdHRyRGlza1R5cGUgPSByb3NDbHVzdGVyLmF0dHJEaXNrVHlwZTtcbiAgICAgICAgdGhpcy5hdHRySGVhbHRoU3RhdHVzID0gcm9zQ2x1c3Rlci5hdHRySGVhbHRoU3RhdHVzO1xuICAgICAgICB0aGlzLmF0dHJJbml0U3RhdHVzID0gcm9zQ2x1c3Rlci5hdHRySW5pdFN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VDb3VudCA9IHJvc0NsdXN0ZXIuYXR0ckluc3RhbmNlQ291bnQ7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NDbHVzdGVyLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnRlcm5ldEFkZHJlc3MgPSByb3NDbHVzdGVyLmF0dHJJbnRlcm5ldEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0RG9tYWluID0gcm9zQ2x1c3Rlci5hdHRySW50ZXJuZXREb21haW47XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0UG9ydCA9IHJvc0NsdXN0ZXIuYXR0ckludGVybmV0UG9ydDtcbiAgICAgICAgdGhpcy5hdHRySW50cmFuZXRBZGRyZXNzID0gcm9zQ2x1c3Rlci5hdHRySW50cmFuZXRBZGRyZXNzO1xuICAgICAgICB0aGlzLmF0dHJJbnRyYW5ldERvbWFpbiA9IHJvc0NsdXN0ZXIuYXR0ckludHJhbmV0RG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJJbnRyYW5ldFBvcnQgPSByb3NDbHVzdGVyLmF0dHJJbnRyYW5ldFBvcnQ7XG4gICAgICAgIHRoaXMuYXR0ck1lbW9yeUNhcGFjaXR5ID0gcm9zQ2x1c3Rlci5hdHRyTWVtb3J5Q2FwYWNpdHk7XG4gICAgICAgIHRoaXMuYXR0ck5ldFR5cGUgPSByb3NDbHVzdGVyLmF0dHJOZXRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zQ2x1c3Rlci5hdHRyT3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyUGF5SW5mbyA9IHJvc0NsdXN0ZXIuYXR0clBheUluZm87XG4gICAgICAgIHRoaXMuYXR0clB1Yk5ldHdvcmtGbG93ID0gcm9zQ2x1c3Rlci5hdHRyUHViTmV0d29ya0Zsb3c7XG4gICAgICAgIHRoaXMuYXR0clJlZ2lvbklkID0gcm9zQ2x1c3Rlci5hdHRyUmVnaW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc0NsdXN0ZXIuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NDbHVzdGVyLmF0dHJWcGNJZDtcbiAgICB9XG59XG4iXX0=