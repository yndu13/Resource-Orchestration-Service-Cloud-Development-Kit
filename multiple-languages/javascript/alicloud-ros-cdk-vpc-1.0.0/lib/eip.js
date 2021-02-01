"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eip = exports.EIPProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "EIPProperty", { enumerable: true, get: function () { return vpc_generated_1.RosEIP; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::EIP`
 */
class Eip extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosEIP = new vpc_generated_1.RosEIP(this, id, {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'Postpaid',
            pricingCycle: props.pricingCycle ? props.pricingCycle : 'Month',
            isp: props.isp,
            period: props.period ? props.period : 1,
            deletionProtection: props.deletionProtection ? props.deletionProtection : false,
            autoPay: props.autoPay ? props.autoPay : false,
            name: props.name,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByBandwidth',
            netmode: props.netmode,
            bandwidth: props.bandwidth ? props.bandwidth : 5,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIP;
        this.attrAllocationId = rosEIP.attrAllocationId;
        this.attrEipAddress = rosEIP.attrEipAddress;
        this.attrOrderId = rosEIP.attrOrderId;
    }
}
exports.Eip = Eip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBeUM7QUFFdEIsNEZBRlYsc0JBQU0sT0FFZTtBQTBFOUI7O0dBRUc7QUFDSCxNQUFhLEdBQUksU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCakM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFrQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ3BGLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQy9ELEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQy9FLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzlDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO1lBQzFGLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFwREQsa0JBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRUlQIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRUlQIGFzIEVJUFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkVJUGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFSVBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1BheTogQXV0b21hdGljIFBheW1lbnQuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBCYW5kd2lkdGggZm9yIHRoZSBvdXRwdXQgbmV0d29yay4gRGVmYXVsdCBpcyA1TUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIEZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IE9wdGlvbmFsLiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEVJUC4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyAgb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBUaGUgcmVzb3VyY2UgY2hhcmdlIHR5cGUuIERlZmF1bHQgdmFsdWUgaXMgUG9zdHBhaWRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBUaGUgbmV0d29yayBjaGFyZ2UgdHlwZS4gU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LiBEZWZhdWx0IGlzIFBheUJ5QmFuZHdpZHRoLiBQYXlCeVRyYWZmaWMgd2lsbCBjaGFyZ2UgYnkgaG91ciwgUGF5QnlCYW5kd2lkdGggd2lsbCBjaGFyZ2UgYnkgZGF5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IElTUCB0YWcgZm9yIGZpbmFuY2UgY2xvdWQgcmVnaW9uLiBvbmx5IGZvciBjbi1oYW5nemhvdSBhbmQgY24tcWluZ2RhbyByZWdpb24pLCBpZiB5b3UgYXJlIG5vdCBmaW5hbmNlIGNsb3VkIHVzZXIsIHRoaXMgdmFsdWUgd2lsbCBiZSBpZ25vcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNwPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBFSVAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vICBvciBodHRwczovL1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0bW9kZTogVGhlIG5ldHdvcmsgdHlwZS4gVmFsaWQgdmFsdWU6IHB1YmxpYyAocHVibGljIG5ldHdvcmspLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldG1vZGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBXaGlsZSBjaG9vc2UgYnkgcGF5IGJ5IG1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOS4gV2hpbGUgY2hvb3NlIHBheSBieSB5ZWFyLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBQcmljZSBjeWNsZSBvZiB0aGUgcmVzb3VyY2UuIFRoaXMgcHJvcGVydHkgaGFzIG5vIGRlZmF1bHQgdmFsdWUuIElmIENoYXJnZVR5cGUgaXMgc3BlY2lmaWVkIGFzIFBvc3RwYWlkLCB0aGlzIHZhbHVlIHdpbGwgYmUgaWdub3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBlaXAuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgZWlwLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpFSVBgXG4gKi9cbmV4cG9ydCBjbGFzcyBFaXAgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGxvY2F0aW9uSWQ6IElEIHRoYXQgQWxpeXVuIGFzc2lnbnMgdG8gcmVwcmVzZW50IHRoZSBhbGxvY2F0aW9uIG9mIHRoZSBhZGRyZXNzIGZvciB1c2Ugd2l0aCBWUEMuIFJldHVybmVkIG9ubHkgZm9yIFZQQyBlbGFzdGljIElQIGFkZHJlc3Nlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG9jYXRpb25JZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFaXBBZGRyZXNzOiBJUCBhZGRyZXNzIG9mIGNyZWF0ZWQgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWlwQWRkcmVzczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBPcmRlciBJRCBvZiBwcmVwYWlkIEVJUCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OkVJUGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRUlQUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NFSVAgPSBuZXcgUm9zRUlQKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0cGFpZCcsXG4gICAgICAgICAgICBwcmljaW5nQ3ljbGU6IHByb3BzLnByaWNpbmdDeWNsZSA/IHByb3BzLnByaWNpbmdDeWNsZSA6ICdNb250aCcsXG4gICAgICAgICAgICBpc3A6IHByb3BzLmlzcCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uID8gcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uIDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvUGF5OiBwcm9wcy5hdXRvUGF5ID8gcHJvcHMuYXV0b1BheSA6IGZhbHNlLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIGludGVybmV0Q2hhcmdlVHlwZTogcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlID8gcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlIDogJ1BheUJ5QmFuZHdpZHRoJyxcbiAgICAgICAgICAgIG5ldG1vZGU6IHByb3BzLm5ldG1vZGUsXG4gICAgICAgICAgICBiYW5kd2lkdGg6IHByb3BzLmJhbmR3aWR0aCA/IHByb3BzLmJhbmR3aWR0aCA6IDUsXG4gICAgICAgICAgICB0YWdzOiByb3MudGFnRmFjdG9yeShwcm9wcy50YWdzKSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NFSVA7XG4gICAgICAgIHRoaXMuYXR0ckFsbG9jYXRpb25JZCA9IHJvc0VJUC5hdHRyQWxsb2NhdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJFaXBBZGRyZXNzID0gcm9zRUlQLmF0dHJFaXBBZGRyZXNzO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zRUlQLmF0dHJPcmRlcklkO1xuICAgIH1cbn1cbiJdfQ==