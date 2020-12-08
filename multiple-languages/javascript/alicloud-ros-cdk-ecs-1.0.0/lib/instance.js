"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new ecs_generated_1.RosInstance(this, id, {
            dedicatedHostId: props.dedicatedHostId,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            diskMappings: props.diskMappings,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            spotPriceLimit: props.spotPriceLimit,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp ? props.allocatePublicIp : true,
            tags: ros.tagFactory(props.tags),
            hostName: props.hostName,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : 'optimized',
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            deletionProtection: props.deletionProtection,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByTraffic',
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut ? props.internetMaxBandwidthOut : 1,
            vpcId: props.vpcId,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHostName = rosInstance.attrHostName;
        this.attrInnerIp = rosInstance.attrInnerIp;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrimaryNetworkInterfaceId = rosInstance.attrPrimaryNetworkInterfaceId;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrPublicIp = rosInstance.attrPublicIp;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBbU54Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMEN0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDcEYsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDdEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLDBCQUEwQixFQUFFLEtBQUssQ0FBQywwQkFBMEI7WUFDNUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGtCQUFr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dXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZUlkOiBJbWFnZSBJRCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEVjcyBpbnN0YW5jZSBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZSwgbWFrZSBzdXJlIGl0IHNob3VsZCBiZSBjb3JyZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsbG9jYXRlUHVibGljSXA6IFRoZSBwdWJsaWMgaXAgZm9yIGVjcyBpbnN0YW5jZSwgaWYgcHJvcGVydGllcyBpcyB0cnVlLCB3aWxsIGFsbG9jYXRlIHB1YmxpYyBpcC4gSWYgcHJvcGVydHkgSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQgc2V0IHRvIDAsIGl0IHdpbGwgbm90IGFzc2lnbiBwdWJsaWMgaXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsb2NhdGVQdWJsaWNJcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1JlbmV3OiBXaGV0aGVyIHJlbmV3IHRoZSBmZWUgYXV0b21hdGljYWxseT8gV2hlbiB0aGUgcGFyYW1ldGVyIEluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQcmVQYWlkLCBpdCB3aWxsIHRha2UgZWZmZWN0LiBSYW5nZSBvZiB2YWx1ZTpUcnVlOiBhdXRvbWF0aWMgcmVuZXdhbC5GYWxzZTogbm8gYXV0b21hdGljIHJlbmV3YWwuIERlZmF1bHQgdmFsdWUgaXMgRmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ld1BlcmlvZDogVGhlIHRpbWUgcGVyaW9kIG9mIGF1dG8gcmVuZXcuIFdoZW4gdGhlIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUHJlUGFpZCwgaXQgd2lsbCB0YWtlIGVmZmVjdC5JdCBjb3VsZCBiZSAxLCAyLCAzLCA2LCAxMi4gRGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ld1BlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWRpY2F0ZWRIb3N0SWQ6IHdoaWNoIGRlZGljYXRlZCBob3N0IHdpbGwgYmUgZGVwbG95ZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWRpY2F0ZWRIb3N0SWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIGFuIGluc3RhbmNlIGNhbiBiZSByZWxlYXNlZCBtYW51YWxseSB0aHJvdWdoIHRoZSBjb25zb2xlIG9yIEFQSSwgZGVsZXRpb24gcHJvdGVjdGlvbiBvbmx5IHN1cHBvcnQgcG9zdFBhaWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveW1lbnRTZXRJZDogRGVwbG95bWVudCBzZXQgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95bWVudFNldElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UsIFsyLCAyNTZdIGNoYXJhY3RlcnMuIERvIG5vdCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tNYXBwaW5ncz86IEFycmF5PFJvc0luc3RhbmNlLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBob3N0TmFtZTogSG9zdCBuYW1lIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBhdCBsZWFzdCAyIGNoYXJhY3RlcnMsIGFuZCAnLicgJy0nIElzIG5vdCB0aGUgZmlyc3QgYW5kIGxhc3QgY2hhcmFjdGVycyBhcyBob3N0bmFtZSwgbm90IGNvbnRpbnVvdXMgdXNlLiBXaW5kb3dzIHBsYXRmb3JtIGNhbiBiZSB1cCB0byAxNSBjaGFyYWN0ZXJzLCBhbGxvd2luZyBsZXR0ZXJzICh3aXRob3V0IGxpbWl0aW5nIGNhc2UpLCBudW1iZXJzIGFuZCAnLScsIGFuZCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBudW1iZXIgb2YgcG9pbnRzLCBub3QgYWxsIGlzIGRpZ2l0YWwgKCcuJykuT3RoZXIgKExpbnV4LCBldGMuKSBwbGF0Zm9ybSB1cCB0byAzMCBjaGFyYWN0ZXJzLCBhbGxvd2luZyBzdXBwb3J0IG51bWJlciBtdWx0aXBsZSBwb2ludHMgZm9yIHRoZSBwZXJpb2QgYmV0d2VlbiB0aGUgcG9pbnRzLCBlYWNoIHBlcm1pdCBsZXR0ZXJzICh3aXRob3V0IGxpbWl0aW5nIGNhc2UpLCBudW1iZXJzIGFuZCAnLScgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBocGNDbHVzdGVySWQ6IFRoZSBIUEMgY2x1c3RlciBJRCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBocGNDbHVzdGVySWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogUHJlcGFpZCBhbmQgUG9zdHBhaWQuIElmIHNwZWNpZmllZCBQcmVwYWlkLCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHN1ZmZpY2llbnQgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQuIE9yIGluc3RhbmNlIGNyZWF0aW9uIHdpbGwgYmUgZmFpbHVyZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIGluc3RhbmNlLCBbMiwgMTI4XSBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UgaW4gc2l6ZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICcuJywgJy0nXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogSW5zdGFuY2UgaW50ZXJuZXQgYWNjZXNzIGNoYXJnZSB0eXBlLlN1cHBvcnQgJ1BheUJ5QmFuZHdpZHRoJyBhbmQgJ1BheUJ5VHJhZmZpYycgb25seS4gRGVmYXVsdCBpcyBQYXlCeVRyYWZmaWNcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbjogTWF4IGludGVybmV0IG91dCBiYW5kIHdpZHRoIHNldHRpbmcsIHVuaXQgaW4gTWJwcyhNZWdhIGJpdCBwZXIgc2Vjb25kKS4gVGhlIHJhbmdlIGlzIFsxLDIwMF0sIGRlZmF1bHQgaXMgMjAwIE1icHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbj86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogU2V0IGludGVybmV0IG91dHB1dCBiYW5kd2lkdGggb2YgaW5zdGFuY2UuIFVuaXQgaXMgTWJwcyhNZWdhIGJpdCBwZXIgc2Vjb25kKS4gUmFuZ2UgaXMgWzAsMjAwXS4gRGVmYXVsdCBpcyAxLldoaWxlIHRoZSBwcm9wZXJ0eSBpcyBub3QgMCwgcHVibGljIGlwIHdpbGwgYmUgYXNzaWduZWQgZm9yIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0TWF4QmFuZHdpZHRoT3V0PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlvT3B0aW1pemVkOiBUaGUgJ29wdGltaXplZCcgaW5zdGFuY2UgY2FuIHByb3ZpZGUgYmV0dGVyIElPIHBlcmZvcm1hbmNlLiBTdXBwb3J0ICdub25lJyBhbmQgJ29wdGltaXplZCcgb25seSwgZGVmYXVsdCBpcyAnb3B0aW1pemVkJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBrZXlQYWlyTmFtZTogU1NIIGtleSBwYWlyIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkga2V5UGFpck5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBNdXN0IGNvbnRhaW4gYXQgbGVhc3QgMyB0eXBlcyBvZiBzcGVjaWFsIGNoYXJhY3RlciwgbG93ZXIgY2hhcmFjdGVyLCB1cHBlciBjaGFyYWN0ZXIsIG51bWJlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzd29yZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZEluaGVyaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlc2V0IGluIHRoZSBpbWFnZS4gVG8gdXNlIHRoZSBQYXNzd29yZEluaGVyaXQgcGFyYW1ldGVyLCB0aGUgUGFzc3dvcmQgcGFyYW1ldGVyIG11c3QgYmUgZW1wdHkgYW5kIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgYSBwYXNzd29yZCBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkSW5oZXJpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBVbml0IGlzIG1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSBvciAxMiwgMjQsIDM2LCA0OCwgNjAuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kVW5pdDogVW5pdCBvZiBwcmVwYWlkIHRpbWUgcGVyaW9kLCBpdCBjb3VsZCBiZSBXZWVrL01vbnRoL1llYXIuIERlZmF1bHQgdmFsdWUgaXMgTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBQcml2YXRlIElQIGZvciB0aGUgaW5zdGFuY2UgY3JlYXRlZC4gT25seSB3b3JrcyBmb3IgVlBDIGluc3RhbmNlIGFuZCBjYW5ub3QgZHVwbGljYXRlZCB3aXRoIGV4aXN0aW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVJcEFkZHJlc3M/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmFtUm9sZU5hbWU6IEluc3RhbmNlIFJBTSByb2xlIG5hbWUuIFRoZSBuYW1lIGlzIHByb3ZpZGVkIGFuZCBtYWludGFpbmVkIGJ5IFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIGFuZCBjYW4gYmUgcXVlcmllZCB1c2luZyBMaXN0Um9sZXMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgUkFNIEFQSSBDcmVhdGVSb2xlIGFuZCBMaXN0Um9sZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmFtUm9sZU5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5RW5oYW5jZW1lbnRTdHJhdGVneT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuIEZvciBjbGFzc2ljIGluc3RhbmNlIG5lZWQgdGhlIHNlY3VyaXR5IGdyb3VwIG5vdCBiZWxvbmcgdG8gVlBDLCBmb3IgVlBDIGluc3RhbmNlLCBwbGVhc2UgbWFrZSBzdXJlIHRoZSBzZWN1cml0eSBncm91cCBiZWxvbmcgdG8gc3BlY2lmaWVkIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3BvdFByaWNlTGltaXQ6IFRoZSBob3VybHkgcHJpY2UgdGhyZXNob2xkIG9mIGEgaW5zdGFuY2UsIGFuZCBpdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUG9zdFBhaWQuIFRocmVlIGRlY2ltYWxzIGlzIGFsbG93ZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90UHJpY2VMaW1pdD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcG90U3RyYXRlZ3k6IFRoZSBzcG90IHN0cmF0ZWd5IG9mIGEgUGF5LUFzLVlvdS1HbyBpbnN0YW5jZSwgYW5kIGl0IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcGFyYW1ldGVyIEluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQb3N0UGFpZC4gVmFsdWUgcmFuZ2U6IFwiTm9TcG90OiBBIHJlZ3VsYXIgUGF5LUFzLVlvdS1HbyBpbnN0YW5jZVwiLCBcIlNwb3RXaXRoUHJpY2VMaW1pdDogQSBwcmljZSB0aHJlc2hvbGQgZm9yIGEgc3BvdCBpbnN0YW5jZSwgXCJcIlNwb3RBc1ByaWNlR286IEEgcHJpY2UgdGhhdCBpcyBiYXNlZCBvbiB0aGUgaGlnaGVzdCBQYXktQXMtWW91LUdvIGluc3RhbmNlLiBcIkRlZmF1bHQgdmFsdWU6IE5vU3BvdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90U3RyYXRlZ3k/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3lzdGVtRGlza0NhdGVnb3J5OiBDYXRlZ29yeSBvZiBzeXN0ZW0gZGlzay4gRGVmYXVsdCBpcyBjbG91ZF9lZmZpY2llbmN5LiBzdXBwb3J0IGNsb3VkfGNsb3VkX2VmZmljaWVuY3l8Y2xvdWRfc3NkfGNsb3VkX2Vzc2R8ZXBoZW1lcmFsX3NzZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW1EaXNrRGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIGNyZWF0ZWQgc3lzdGVtIGRpc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbURpc2tEaXNrTmFtZTogTmFtZSBvZiBjcmVhdGVkIHN5c3RlbSBkaXNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tEaXNrTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbDogVGhlIHBlcmZvcm1hbmNlIGxldmVsIG9mIHRoZSBlbmhhbmNlZCBTU0QgdXNlZCBhcyB0aGUgc3lzdGVtIGRpc2suRGVmYXVsdCB2YWx1ZTogUEwxLiBWYWxpZCB2YWx1ZXM6UEwwOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gMTAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuUEwxOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gNTAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuUEwyOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gMTAwLDAwMCByYW5kb20gcmVhZC93cml0ZSBJT1BTLlBMMzogQSBzaW5nbGUgZW5oYW5jZWQgU1NEIGRlbGl2ZXJzIHVwIHRvIDEsMDAwLDAwMCByYW5kb20gcmVhZC93cml0ZSBJT1BTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbURpc2tTaXplOiBEaXNrIHNpemUgb2YgdGhlIHN5c3RlbSBkaXNrLCByYW5nZSBmcm9tIDIwIHRvIDUwMCBHQi4gSWYgeW91IHNwZWNpZnkgd2l0aCB5b3VyIG93biBpbWFnZSwgbWFrZSBzdXJlIHRoZSBzeXN0ZW0gZGlzayBzaXplIGJpZ2dlciB0aGFuIGltYWdlIHNpemUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1NpemU/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJEYXRhOiBVc2VyIGRhdGEgdG8gcGFzcyB0byBpbnN0YW5jZS4gWzEsIDE2S0JdIGNoYXJhY3RlcnMuVXNlciBkYXRhIHNob3VsZCBub3QgYmUgYmFzZTY0IGVuY29kZWQuIElmIHlvdSB3YW50IHRvIHBhc3MgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIHRoZSBwcm9wZXJ0eSwgdXNlIGZ1bmN0aW9uIEZuOjpCYXNlNjREZWNvZGUgdG8gZGVjb2RlIHRoZSBiYXNlNjQgc3RyaW5nIGZpcnN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJEYXRhPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJZCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIFxuICAgICAqIGNhbGwgdGhlIERlc2NyaWJlWm9uZXMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBtb3N0IHJlY2VudCB6b25lIGxpc3QuIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgZW1wdHksIHdoaWNoIG1lYW5zIHJhbmRvbSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBIb3N0TmFtZTogSG9zdCBuYW1lIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0TmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbm5lcklwOiBJbm5lciBJUCBhZGRyZXNzIG9mIHRoZSBzcGVjaWZpZWQgaW5zdGFuY2UuIE9ubHkgZm9yIGNsYXNzaWNhbCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklubmVySXA6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQ6IFByaW1hcnkgbmV0d29yayBpbnRlcmZhY2UgaWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJpdmF0ZUlwOiBQcml2YXRlIElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuIE9ubHkgZm9yIFZQQyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVJcDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNJcDogUHVibGljIElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNJcDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBab25lSWQ6IFpvbmUgaWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6SW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZWRpY2F0ZWRIb3N0SWQ6IHByb3BzLmRlZGljYXRlZEhvc3RJZCxcbiAgICAgICAgICAgIHByaXZhdGVJcEFkZHJlc3M6IHByb3BzLnByaXZhdGVJcEFkZHJlc3MsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGRpc2tNYXBwaW5nczogcHJvcHMuZGlza01hcHBpbmdzLFxuICAgICAgICAgICAgc3lzdGVtRGlza1NpemU6IHByb3BzLnN5c3RlbURpc2tTaXplLFxuICAgICAgICAgICAgdXNlckRhdGE6IHByb3BzLnVzZXJEYXRhLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rlc2NyaXB0aW9uOiBwcm9wcy5zeXN0ZW1EaXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyA/IHByb3BzLmF1dG9SZW5ldyA6ICdGYWxzZScsXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogcHJvcHMucmFtUm9sZU5hbWUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbDogcHJvcHMuc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWwsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rpc2tOYW1lOiBwcm9wcy5zeXN0ZW1EaXNrRGlza05hbWUsXG4gICAgICAgICAgICBzcG90UHJpY2VMaW1pdDogcHJvcHMuc3BvdFByaWNlTGltaXQsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHByb3BzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGFsbG9jYXRlUHVibGljSXA6IHByb3BzLmFsbG9jYXRlUHVibGljSXAgPyBwcm9wcy5hbGxvY2F0ZVB1YmxpY0lwIDogdHJ1ZSxcbiAgICAgICAgICAgIHRhZ3M6IHJvcy50YWdGYWN0b3J5KHByb3BzLnRhZ3MpLFxuICAgICAgICAgICAgaG9zdE5hbWU6IHByb3BzLmhvc3ROYW1lLFxuICAgICAgICAgICAgc3BvdFN0cmF0ZWd5OiBwcm9wcy5zcG90U3RyYXRlZ3ksXG4gICAgICAgICAgICBwYXNzd29yZEluaGVyaXQ6IHByb3BzLnBhc3N3b3JkSW5oZXJpdCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGF1dG9SZW5ld1BlcmlvZDogcHJvcHMuYXV0b1JlbmV3UGVyaW9kID8gcHJvcHMuYXV0b1JlbmV3UGVyaW9kIDogMSxcbiAgICAgICAgICAgIGtleVBhaXJOYW1lOiBwcm9wcy5rZXlQYWlyTmFtZSxcbiAgICAgICAgICAgIGlvT3B0aW1pemVkOiBwcm9wcy5pb09wdGltaXplZCA/IHByb3BzLmlvT3B0aW1pemVkIDogJ29wdGltaXplZCcsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGhwY0NsdXN0ZXJJZDogcHJvcHMuaHBjQ2x1c3RlcklkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgPyBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUgOiAnUGF5QnlUcmFmZmljJyxcbiAgICAgICAgICAgIHN5c3RlbURpc2tDYXRlZ29yeTogcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5ID8gcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5IDogJ2Nsb3VkX2VmZmljaWVuY3knLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBkZXBsb3ltZW50U2V0SWQ6IHByb3BzLmRlcGxveW1lbnRTZXRJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoT3V0OiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCA/IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0IDogMSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoSW46IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoSW4gPyBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aEluIDogMjAwLFxuICAgICAgICAgICAgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OiBwcm9wcy5zZWN1cml0eUVuaGFuY2VtZW50U3RyYXRlZ3ksXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0ID8gcHJvcHMucGVyaW9kVW5pdCA6ICdNb250aCcsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckhvc3ROYW1lID0gcm9zSW5zdGFuY2UuYXR0ckhvc3ROYW1lO1xuICAgICAgICB0aGlzLmF0dHJJbm5lcklwID0gcm9zSW5zdGFuY2UuYXR0cklubmVySXA7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJpbWFyeU5ldHdvcmtJbnRlcmZhY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJQcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXAgPSByb3NJbnN0YW5jZS5hdHRyUHJpdmF0ZUlwO1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNJcCA9IHJvc0luc3RhbmNlLmF0dHJQdWJsaWNJcDtcbiAgICAgICAgdGhpcy5hdHRyWm9uZUlkID0gcm9zSW5zdGFuY2UuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=