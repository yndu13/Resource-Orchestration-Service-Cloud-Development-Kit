"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ens_generated_1 = require("./ens.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return ens_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ENS::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ENS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new ens_generated_1.RosInstance(this, id, {
            autoRenewPeriod: props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            privateIpAddress: props.privateIpAddress,
            userData: props.userData,
            ipType: props.ipType,
            systemDiskSize: props.systemDiskSize,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period,
            quantity: props.quantity,
            internetChargeType: props.internetChargeType,
            imageId: props.imageId,
            paymentType: props.paymentType,
            dataDiskSize: props.dataDiskSize,
            ensRegionId: props.ensRegionId,
            instanceType: props.instanceType,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAutoRenew = rosInstance.attrAutoRenew;
        this.attrAutoRenewPeriod = rosInstance.attrAutoRenewPeriod;
        this.attrDataDiskSize = rosInstance.attrDataDiskSize;
        this.attrEnsRegionId = rosInstance.attrEnsRegionId;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInternetChargeType = rosInstance.attrInternetChargeType;
        this.attrIpType = rosInstance.attrIpType;
        this.attrKeyPairName = rosInstance.attrKeyPairName;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPeriod = rosInstance.attrPeriod;
        this.attrPrivateIpAddress = rosInstance.attrPrivateIpAddress;
        this.attrPrivateIps = rosInstance.attrPrivateIps;
        this.attrPublicIps = rosInstance.attrPublicIps;
        this.attrQuantity = rosInstance.attrQuantity;
        this.attrSystemDiskSize = rosInstance.attrSystemDiskSize;
        this.attrUserData = rosInstance.attrUserData;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNkZ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0d0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQXhKRCw0QkF3SkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZSB9IGZyb20gJy4vZW5zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVOUzo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGF0YURpc2tTaXplOiBEaXNrIHNpemUgb2YgdGhlIHN5c3RlbSBkaXNrLCByYW5nZSBmcm9tIDIwIHRvIDUwMCBHQi4gSWYgeW91IHNwZWNpZnkgd2l0aCB5b3VyIG93biBpbWFnZSwgbWFrZSBzdXJlIHRoZSBzeXN0ZW0gZGlzayBzaXplIGJpZ2dlciB0aGFuIGltYWdlIHNpemUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YURpc2tTaXplOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5zUmVnaW9uSWQ6IEVOUyBSZWdpb24gSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5zUmVnaW9uSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbWFnZUlkOiBJbWFnZSBJRCB0byBjcmVhdGUgZW5zIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEVOUyBpbnN0YW5jZSBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZSwgbWFrZSBzdXJlIGl0IHNob3VsZCBiZSBjb3JyZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogUHJlcGFpZCB0aW1lIHBlcmlvZC4gVW5pdCBpcyBtb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDkgb3IgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWFudGl0eTogbnVtYmVyIG9mIGluc3RhbmNlcyB0byBjcmVhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVhbnRpdHk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW1EaXNrU2l6ZTogRGlzayBzaXplIG9mIHRoZSBzeXN0ZW0gZGlzay5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrU2l6ZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ldzogV2hldGhlciByZW5ldyB0aGUgZmVlIGF1dG9tYXRpY2FsbHk/aXQgY291bGQgYmUgVHJ1ZSxGYWxzZURlZmF1bHQgdmFsdWUgaXMgRmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ld1BlcmlvZDogVGhlIHRpbWUgcGVyaW9kIG9mIGF1dG8gcmVuZXcuIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXdQZXJpb2Q/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZS5pdCBjb3VsZCBiZSA5NUJhbmR3aWR0aEJ5TW9udGgsIFBheUJ5QmFuZHdpZHRoNHRoTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwVHlwZTogaXAgdHlwZSwgSXQgY291bGQgYmUgaXB2NEFuZGlwdjYsaXB2NCxpcHY2LmRlZmF1bHQgdmFsdWUgaXNpIHB2NC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcFR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkga2V5UGFpck5hbWU6IFNTSCBrZXkgcGFpciBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVucyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGF5bWVudFR5cGU6IFBheW1lbnQgVHlwZS5vbmx5IHN1cHBvcnQgdmFsdWUgU3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheW1lbnRUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaXZhdGVJcEFkZHJlc3M6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzcz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyRGF0YTogVXNlciBkYXRhIHRvIHBhc3MgdG8gaW5zdGFuY2UuIFsxLCAxNktCXSBjaGFyYWN0ZXJzLlVzZXIgZGF0YSBzaG91bGQgbm90IGJlIGJhc2U2NCBlbmNvZGVkLiBJZiB5b3Ugd2FudCB0byBwYXNzIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byB0aGUgcHJvcGVydHksIHVzZSBmdW5jdGlvbiBGbjo6QmFzZTY0RGVjb2RlIHRvIGRlY29kZSB0aGUgYmFzZTY0IHN0cmluZyBmaXJzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyRGF0YT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2U3dpdGNoIElkIHRvIGNyZWF0ZSBlbnMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFTlM6Okluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBdXRvUmVuZXc6IFdoZXRoZXIgcmVuZXcgdGhlIGZlZSBhdXRvbWF0aWNhbGx5P2l0IGNvdWxkIGJlIFRydWUsRmFsc2VEZWZhdWx0IHZhbHVlIGlzIEZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXV0b1JlbmV3OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEF1dG9SZW5ld1BlcmlvZDogVGhlIHRpbWUgcGVyaW9kIG9mIGF1dG8gcmVuZXcuIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF1dG9SZW5ld1BlcmlvZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYXRhRGlza1NpemU6IERpc2sgc2l6ZSBvZiB0aGUgc3lzdGVtIGRpc2ssIHJhbmdlIGZyb20gMjAgdG8gNTAwIEdCLiBJZiB5b3Ugc3BlY2lmeSB3aXRoIHlvdXIgb3duIGltYWdlLCBtYWtlIHN1cmUgdGhlIHN5c3RlbSBkaXNrIHNpemUgYmlnZ2VyIHRoYW4gaW1hZ2Ugc2l6ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFEaXNrU2l6ZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFbnNSZWdpb25JZDogRU5TIFJlZ2lvbiBJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuc1JlZ2lvbklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEltYWdlSWQ6IEltYWdlIElEIHRvIGNyZWF0ZSBlbnMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlSWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlVHlwZTogRU5TIGluc3RhbmNlIHN1cHBvcnRlZCBpbnN0YW5jZSB0eXBlLCBtYWtlIHN1cmUgaXQgc2hvdWxkIGJlIGNvcnJlY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVR5cGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW50ZXJuZXRDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZS5pdCBjb3VsZCBiZSA5NUJhbmR3aWR0aEJ5TW9udGgsIFBheUJ5QmFuZHdpZHRoNHRoTW9udGguXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldENoYXJnZVR5cGU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSXBUeXBlOiBpcCB0eXBlLCBJdCBjb3VsZCBiZSBpcHY0QW5kaXB2NixpcHY0LGlwdjYuZGVmYXVsdCB2YWx1ZSBpc2kgcHY0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cktleVBhaXJOYW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBheW1lbnRUeXBlOiBQYXltZW50IFR5cGUub25seSBzdXBwb3J0IHZhbHVlIFN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBheW1lbnRUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBlcmlvZDogUHJlcGFpZCB0aW1lIHBlcmlvZC4gVW5pdCBpcyBtb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDkgb3IgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBlcmlvZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcml2YXRlSXBBZGRyZXNzOiBQcml2YXRlIElQIGZvciB0aGUgaW5zdGFuY2UgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVJcEFkZHJlc3M6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJpdmF0ZUlwczogUHJpdmF0ZSBJUFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNJcHM6IFB1YmxpYyBJUFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljSXBzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFF1YW50aXR5OiBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIGNyZWF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1YW50aXR5OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN5c3RlbURpc2tTaXplOiBEaXNrIHNpemUgb2YgdGhlIHN5c3RlbSBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3lzdGVtRGlza1NpemU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlckRhdGE6IFVzZXIgZGF0YSB0byBwYXNzIHRvIGluc3RhbmNlLiBbMSwgMTZLQl0gY2hhcmFjdGVycy5Vc2VyIGRhdGEgc2hvdWxkIG5vdCBiZSBiYXNlNjQgZW5jb2RlZC4gSWYgeW91IHdhbnQgdG8gcGFzcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gdGhlIHByb3BlcnR5LCB1c2UgZnVuY3Rpb24gRm46OkJhc2U2NERlY29kZSB0byBkZWNvZGUgdGhlIGJhc2U2NCBzdHJpbmcgZmlyc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VyRGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFRoZSB2U3dpdGNoIElkIHRvIGNyZWF0ZSBlbnMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFTlM6Okluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBwcml2YXRlSXBBZGRyZXNzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzLFxuICAgICAgICAgICAgdXNlckRhdGE6IHByb3BzLnVzZXJEYXRhLFxuICAgICAgICAgICAgaXBUeXBlOiBwcm9wcy5pcFR5cGUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrU2l6ZTogcHJvcHMuc3lzdGVtRGlza1NpemUsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvcHMucXVhbnRpdHksXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGltYWdlSWQ6IHByb3BzLmltYWdlSWQsXG4gICAgICAgICAgICBwYXltZW50VHlwZTogcHJvcHMucGF5bWVudFR5cGUsXG4gICAgICAgICAgICBkYXRhRGlza1NpemU6IHByb3BzLmRhdGFEaXNrU2l6ZSxcbiAgICAgICAgICAgIGVuc1JlZ2lvbklkOiBwcm9wcy5lbnNSZWdpb25JZCxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJBdXRvUmVuZXcgPSByb3NJbnN0YW5jZS5hdHRyQXV0b1JlbmV3O1xuICAgICAgICB0aGlzLmF0dHJBdXRvUmVuZXdQZXJpb2QgPSByb3NJbnN0YW5jZS5hdHRyQXV0b1JlbmV3UGVyaW9kO1xuICAgICAgICB0aGlzLmF0dHJEYXRhRGlza1NpemUgPSByb3NJbnN0YW5jZS5hdHRyRGF0YURpc2tTaXplO1xuICAgICAgICB0aGlzLmF0dHJFbnNSZWdpb25JZCA9IHJvc0luc3RhbmNlLmF0dHJFbnNSZWdpb25JZDtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbWFnZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlVHlwZSA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0Q2hhcmdlVHlwZSA9IHJvc0luc3RhbmNlLmF0dHJJbnRlcm5ldENoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0cklwVHlwZSA9IHJvc0luc3RhbmNlLmF0dHJJcFR5cGU7XG4gICAgICAgIHRoaXMuYXR0cktleVBhaXJOYW1lID0gcm9zSW5zdGFuY2UuYXR0cktleVBhaXJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJQYXltZW50VHlwZSA9IHJvc0luc3RhbmNlLmF0dHJQYXltZW50VHlwZTtcbiAgICAgICAgdGhpcy5hdHRyUGVyaW9kID0gcm9zSW5zdGFuY2UuYXR0clBlcmlvZDtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUlwQWRkcmVzcyA9IHJvc0luc3RhbmNlLmF0dHJQcml2YXRlSXBBZGRyZXNzO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXBzID0gcm9zSW5zdGFuY2UuYXR0clByaXZhdGVJcHM7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0lwcyA9IHJvc0luc3RhbmNlLmF0dHJQdWJsaWNJcHM7XG4gICAgICAgIHRoaXMuYXR0clF1YW50aXR5ID0gcm9zSW5zdGFuY2UuYXR0clF1YW50aXR5O1xuICAgICAgICB0aGlzLmF0dHJTeXN0ZW1EaXNrU2l6ZSA9IHJvc0luc3RhbmNlLmF0dHJTeXN0ZW1EaXNrU2l6ZTtcbiAgICAgICAgdGhpcy5hdHRyVXNlckRhdGEgPSByb3NJbnN0YW5jZS5hdHRyVXNlckRhdGE7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc0luc3RhbmNlLmF0dHJWU3dpdGNoSWQ7XG4gICAgfVxufVxuIl19