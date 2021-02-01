"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.QueueProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mns_generated_1 = require("./mns.generated");
Object.defineProperty(exports, "QueueProperty", { enumerable: true, get: function () { return mns_generated_1.RosQueue; } });
/**
 * A ROS resource type:  `ALIYUN::MNS::Queue`
 */
class Queue extends ros.Resource {
    /**
     * Create a new `ALIYUN::MNS::Queue`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosQueue = new mns_generated_1.RosQueue(this, id, {
            delaySeconds: props.delaySeconds ? props.delaySeconds : 0,
            pollingWaitSeconds: props.pollingWaitSeconds ? props.pollingWaitSeconds : 0,
            messageRetentionPeriod: props.messageRetentionPeriod ? props.messageRetentionPeriod : 345600,
            maximumMessageSize: props.maximumMessageSize ? props.maximumMessageSize : 65536,
            visibilityTimeout: props.visibilityTimeout ? props.visibilityTimeout : 30,
            queueName: props.queueName,
            loggingEnabled: props.loggingEnabled ? props.loggingEnabled : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueue;
        this.attrArnWithSlash = rosQueue.attrArnWithSlash;
        this.attrQueueUrl = rosQueue.attrQueueUrl;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBaURsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUM1RixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMvRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6RSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDdEUsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBeENELHNCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1F1ZXVlIH0gZnJvbSAnLi9tbnMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUXVldWUgYXMgUXVldWVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TU5TOjpRdWV1ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWV1ZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWV1ZU5hbWU6IFF1ZXVlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWV1ZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxheVNlY29uZHM6IEl0IGlzIG1lYXN1cmVkIGluIHNlY29uZHMuIEFsbCBtZXNzYWdlcyBzZW50IHRvIHRoZSBxdWV1ZSBjYW4gYmUgY29uc3VtZWQgdW50aWwgdGhlIERlbGF5U2Vjb25kcyBleHBpcmVzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA2MDQ4MDAgKDcgZGF5cykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDBcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxheVNlY29uZHM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEwMjQgKDFLKSBhbmQgNjU1MzYgKDY0SykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDY1NTM2ICg2NEspLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heGltdW1NZXNzYWdlU2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiBNYXhpbXVtIGxpZmV0aW1lIG9mIHRoZSBtZXNzYWdlIGluIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gc2Vjb25kcy4gQWZ0ZXIgdGhlIHRpbWUgc3BlY2lmaWVkIGJ5IHRoaXMgcGFyYW1ldGVyIGV4cGlyZXMsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGVsZXRlZCBubyBtYXR0ZXIgd2hldGhlciBpdCBoYXMgYmVlbiBjb25zdW1lZCBvciBub3QuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDYwICgxIG1pbnV0ZSkgYW5kIDEyOTYwMDAgKDE1IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzNDU2MDAgKDQgZGF5cylcbiAgICAgKi9cbiAgICByZWFkb25seSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGxpbmdXYWl0U2Vjb25kczogSXQgaXMgdGhlIG1heGltdW0gdGltZSB0aGF0IGEgUmVjZWl2ZU1lc3NhZ2UgcmVxdWVzdCBjb3VsZCBiZSB3YWl0aW5nIGZvciBhbnkgaW5jb21pbmcgbWVzc2FnZXMsIHdoaWxlIHRoZXJlIGFyZSBubyBtZXNzYWdlIGluIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMzAgc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCAoc2Vjb25kcylcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xsaW5nV2FpdFNlY29uZHM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmlzaWJpbGl0eVRpbWVvdXQ6IER1cmF0aW9uIGluIHdoaWNoIGEgbWVzc2FnZSBzdGF5cyBpbiBJbmFjdGl2ZSBzdGF0dXMgYWZ0ZXIgaXQgaXMgY29uc3VtZWQgZnJvbSB0aGUgcXVldWUuIE1lYXN1cmVkIGluIHNlY29uZHMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDQzMjAwICgxMiBob3VycykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZpc2liaWxpdHlUaW1lb3V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpNTlM6OlF1ZXVlYFxuICovXG5leHBvcnQgY2xhc3MgUXVldWUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBUk4uV2l0aFNsYXNoOiBUaGUgQVJOOiBhY3M6bW5zOiRyZWdpb246JGFjY291bnRpZDovcXVldWVzLyRxdWV1ZU5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybldpdGhTbGFzaDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBRdWV1ZVVybDogVVJMIG9mIGNyZWF0ZWQgcXVldWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1ZXVlVXJsOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TU5TOjpRdWV1ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUXVldWVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NRdWV1ZSA9IG5ldyBSb3NRdWV1ZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlbGF5U2Vjb25kczogcHJvcHMuZGVsYXlTZWNvbmRzID8gcHJvcHMuZGVsYXlTZWNvbmRzIDogMCxcbiAgICAgICAgICAgIHBvbGxpbmdXYWl0U2Vjb25kczogcHJvcHMucG9sbGluZ1dhaXRTZWNvbmRzID8gcHJvcHMucG9sbGluZ1dhaXRTZWNvbmRzIDogMCxcbiAgICAgICAgICAgIG1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q6IHByb3BzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QgPyBwcm9wcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kIDogMzQ1NjAwLFxuICAgICAgICAgICAgbWF4aW11bU1lc3NhZ2VTaXplOiBwcm9wcy5tYXhpbXVtTWVzc2FnZVNpemUgPyBwcm9wcy5tYXhpbXVtTWVzc2FnZVNpemUgOiA2NTUzNixcbiAgICAgICAgICAgIHZpc2liaWxpdHlUaW1lb3V0OiBwcm9wcy52aXNpYmlsaXR5VGltZW91dCA/IHByb3BzLnZpc2liaWxpdHlUaW1lb3V0IDogMzAsXG4gICAgICAgICAgICBxdWV1ZU5hbWU6IHByb3BzLnF1ZXVlTmFtZSxcbiAgICAgICAgICAgIGxvZ2dpbmdFbmFibGVkOiBwcm9wcy5sb2dnaW5nRW5hYmxlZCA/IHByb3BzLmxvZ2dpbmdFbmFibGVkIDogZmFsc2UsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUXVldWU7XG4gICAgICAgIHRoaXMuYXR0ckFybldpdGhTbGFzaCA9IHJvc1F1ZXVlLmF0dHJBcm5XaXRoU2xhc2g7XG4gICAgICAgIHRoaXMuYXR0clF1ZXVlVXJsID0gcm9zUXVldWUuYXR0clF1ZXVlVXJsO1xuICAgIH1cbn1cbiJdfQ==