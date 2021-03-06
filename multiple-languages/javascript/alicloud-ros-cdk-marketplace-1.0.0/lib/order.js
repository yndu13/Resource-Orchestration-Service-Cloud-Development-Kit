"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const marketplace_generated_1 = require("./marketplace.generated");
Object.defineProperty(exports, "OrderProperty", { enumerable: true, get: function () { return marketplace_generated_1.RosOrder; } });
/**
 * A ROS resource type:  `ALIYUN::MarketPlace::Order`
 */
class Order extends ros.Resource {
    /**
     * Create a new `ALIYUN::MarketPlace::Order`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosOrder = new marketplace_generated_1.RosOrder(this, id, {
            productCode: props.productCode,
            preference: props.preference,
            skuCode: props.skuCode,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType ? props.chargeType : 'Prepaid',
            quantity: props.quantity ? props.quantity : 1,
            duration: props.duration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOrder;
        this.attrOrderId = rosOrder.attrOrderId;
    }
}
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbUVBQW1EO0FBRTlCLDhGQUZaLGdDQUFRLE9BRWlCO0FBMkNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWW5DOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksZ0NBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQWxDRCxzQkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NPcmRlciB9IGZyb20gJy4vbWFya2V0cGxhY2UuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zT3JkZXIgYXMgT3JkZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TWFya2V0UGxhY2U6Ok9yZGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2R1Y3RDb2RlOiBQcm9kdWN0IGNvZGUgZm9yIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9kdWN0Q29kZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNrdUNvZGU6IFNrdSBjb2RlIGZvciB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2t1Q29kZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoYXJnZVR5cGU6IFRoZSByZXNvdXJjZSBjaGFyZ2UgdHlwZS4gRGVmYXVsdCB2YWx1ZSBpcyBQcmVwYWlkXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmdlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkdXJhdGlvbjogRHVyYXRpb24gb2YgdGhlIHJlc291cmNlLiBJZiBDaGFyZ2VUeXBlIGlzIHNwZWNpZmllZCBhcyBQb3N0cGFpZCwgdGhpcyB2YWx1ZSB3aWxsIGJlIGlnbm9yZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkdXJhdGlvbj86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVmZXJlbmNlOiBDdXN0b21pemVkIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZmVyZW5jZT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFByaWNlIGN5Y2xlIG9mIHRoZSByZXNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBoYXMgbm8gZGVmYXVsdCB2YWx1ZS4gSWYgQ2hhcmdlVHlwZSBpcyBzcGVjaWZpZWQgYXMgUG9zdHBhaWQsIHRoaXMgdmFsdWUgd2lsbCBiZSBpZ25vcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpY2luZ0N5Y2xlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1YW50aXR5OiBSZXNvdXJjZSBudW1iZXIuIERlZmF1bHQgdmFsdWUgaXMgMVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHF1YW50aXR5PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpNYXJrZXRQbGFjZTo6T3JkZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBPcmRlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElEIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TWFya2V0UGxhY2U6Ok9yZGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBPcmRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc09yZGVyID0gbmV3IFJvc09yZGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcHJvZHVjdENvZGU6IHByb3BzLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcHJlZmVyZW5jZTogcHJvcHMucHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHNrdUNvZGU6IHByb3BzLnNrdUNvZGUsXG4gICAgICAgICAgICBwcmljaW5nQ3ljbGU6IHByb3BzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUgPyBwcm9wcy5jaGFyZ2VUeXBlIDogJ1ByZXBhaWQnLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHByb3BzLnF1YW50aXR5ID8gcHJvcHMucXVhbnRpdHkgOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IHByb3BzLmR1cmF0aW9uLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc09yZGVyO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zT3JkZXIuYXR0ck9yZGVySWQ7XG4gICAgfVxufVxuIl19