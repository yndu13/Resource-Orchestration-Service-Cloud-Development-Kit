"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailLogging = exports.TrailLoggingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const actiontrail_generated_1 = require("./actiontrail.generated");
Object.defineProperty(exports, "TrailLoggingProperty", { enumerable: true, get: function () { return actiontrail_generated_1.RosTrailLogging; } });
/**
 * A ROS resource type:  `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
class TrailLogging extends ros.Resource {
    /**
     * Create a new `ALIYUN::ACTIONTRAIL::TrailLogging`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTrailLogging = new actiontrail_generated_1.RosTrailLogging(this, id, {
            enable: props.enable,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrailLogging;
        this.attrIsLogging = rosTrailLogging.attrIsLogging;
        this.attrLatestDeliveryError = rosTrailLogging.attrLatestDeliveryError;
        this.attrLatestDeliveryTime = rosTrailLogging.attrLatestDeliveryTime;
        this.attrStartLoggingTime = rosTrailLogging.attrStartLoggingTime;
        this.attrStopLoggingTime = rosTrailLogging.attrStopLoggingTime;
    }
}
exports.TrailLogging = TrailLogging;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaWxsb2dnaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhaWxsb2dnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtRUFBMEQ7QUFFOUIscUdBRm5CLHVDQUFlLE9BRXdCO0FBa0JoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0MxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLHVDQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxlQUFlLENBQUMsc0JBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQXJERCxvQ0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NUcmFpbExvZ2dpbmcgfSBmcm9tICcuL2FjdGlvbnRyYWlsLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYWlsTG9nZ2luZyBhcyBUcmFpbExvZ2dpbmdQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QUNUSU9OVFJBSUw6OlRyYWlsTG9nZ2luZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFpbExvZ2dpbmdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgdHJhaWwgbG9nZ2luZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGU6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIHRyYWlsIHRvIGJlIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpBQ1RJT05UUkFJTDo6VHJhaWxMb2dnaW5nYFxuICovXG5leHBvcnQgY2xhc3MgVHJhaWxMb2dnaW5nIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSXNMb2dnaW5nOiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdHJhaWwgaXMgbG9nZ2luZyBBUEkgaW52b2NhdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJc0xvZ2dpbmc6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTGF0ZXN0RGVsaXZlcnlFcnJvcjogVGhlIGxhc3QgdGltZSBhbiBlcnJvciBvY2N1cnJlZCB3aGVuIHRoZSB0cmFpbCBhdHRlbXB0ZWQgdG8gZGVsaXZlciBsb2cgZmlsZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXRlc3REZWxpdmVyeUVycm9yOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExhdGVzdERlbGl2ZXJ5VGltZTogVGhlIGRhdGUgYW5kIHRpbWUgb2YgdGhlIGxhc3Qgc3VjY2Vzc2Z1bCBkZWxpdmVyeSBvZiBhIGxvZyBmaWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGF0ZXN0RGVsaXZlcnlUaW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0YXJ0TG9nZ2luZ1RpbWU6IFRoZSBtb3N0IHJlY2VudCBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHVzZXIgZW5hYmxlcyB0aGUgdHJhaWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGFydExvZ2dpbmdUaW1lOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0b3BMb2dnaW5nVGltZTogVGhlIG1vc3QgcmVjZW50IGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgdXNlciBkaXNhYmxlcyB0aGUgdHJhaWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdG9wTG9nZ2luZ1RpbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBQ1RJT05UUkFJTDo6VHJhaWxMb2dnaW5nYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUcmFpbExvZ2dpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NUcmFpbExvZ2dpbmcgPSBuZXcgUm9zVHJhaWxMb2dnaW5nKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZW5hYmxlOiBwcm9wcy5lbmFibGUsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1RyYWlsTG9nZ2luZztcbiAgICAgICAgdGhpcy5hdHRySXNMb2dnaW5nID0gcm9zVHJhaWxMb2dnaW5nLmF0dHJJc0xvZ2dpbmc7XG4gICAgICAgIHRoaXMuYXR0ckxhdGVzdERlbGl2ZXJ5RXJyb3IgPSByb3NUcmFpbExvZ2dpbmcuYXR0ckxhdGVzdERlbGl2ZXJ5RXJyb3I7XG4gICAgICAgIHRoaXMuYXR0ckxhdGVzdERlbGl2ZXJ5VGltZSA9IHJvc1RyYWlsTG9nZ2luZy5hdHRyTGF0ZXN0RGVsaXZlcnlUaW1lO1xuICAgICAgICB0aGlzLmF0dHJTdGFydExvZ2dpbmdUaW1lID0gcm9zVHJhaWxMb2dnaW5nLmF0dHJTdGFydExvZ2dpbmdUaW1lO1xuICAgICAgICB0aGlzLmF0dHJTdG9wTG9nZ2luZ1RpbWUgPSByb3NUcmFpbExvZ2dpbmcuYXR0clN0b3BMb2dnaW5nVGltZTtcbiAgICB9XG59XG4iXX0=