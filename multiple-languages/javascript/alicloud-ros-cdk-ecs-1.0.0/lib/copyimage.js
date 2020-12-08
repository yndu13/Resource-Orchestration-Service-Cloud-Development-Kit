"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyImage = exports.CopyImageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "CopyImageProperty", { enumerable: true, get: function () { return ecs_generated_1.RosCopyImage; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::CopyImage`
 */
class CopyImage extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCopyImage = new ecs_generated_1.RosCopyImage(this, id, {
            kmsKeyId: props.kmsKeyId,
            destinationRegionId: props.destinationRegionId,
            encrypted: props.encrypted,
            imageId: props.imageId,
            destinationDescription: props.destinationDescription,
            tag: props.tag,
            destinationImageName: props.destinationImageName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCopyImage;
        this.attrImageId = rosCopyImage.attrImageId;
    }
}
exports.CopyImage = CopyImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weWltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29weWltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBMkMxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1NBQ25ELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFsQ0QsOEJBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ29weUltYWdlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29weUltYWdlIGFzIENvcHlJbWFnZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OkNvcHlJbWFnZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb3B5SW1hZ2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzdGluYXRpb25SZWdpb25JZDogSUQgb2YgdGhlIHJlZ2lvbiB0byB3aGVyZSB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGltYWdlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25SZWdpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlSWQ6IElEIG9mIHRoZSBzb3VyY2UgY3VzdG9tIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXN0aW5hdGlvbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBpbWFnZS5JdCBjYW5ub3QgYmVnaW4gd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLiAgRGVmYXVsdCB2YWx1ZTogbnVsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RpbmF0aW9uSW1hZ2VOYW1lOiBOYW1lIG9mIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gaW1hZ2UuVGhlIG5hbWUgaXMgYSBzdHJpbmcgb2YgMiB0byAxMjggY2hhcmFjdGVycy4gSXQgbXVzdCBiZWdpbiB3aXRoIGFuIEVuZ2xpc2ggb3IgYSBDaGluZXNlIGNoYXJhY3Rlci4gSXQgY2FuIGNvbnRhaW4gQS1aLCBhLXosIENoaW5lc2UgY2hhcmFjdGVycywgbnVtYmVycywgcGVyaW9kcyAoLiksIGNvbG9ucyAoOiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiAgRGVmYXVsdCB2YWx1ZTogbnVsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkltYWdlTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmNyeXB0ZWQ6IFdoZXRoZXIgdG8gZW5jcnlwdCB0aGUgaW1hZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBrbXNLZXlJZDogVGhlIElEIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWc6XG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFnPzogQXJyYXk8cm9zLlJvc1RhZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6Q29weUltYWdlYFxuICovXG5leHBvcnQgY2xhc3MgQ29weUltYWdlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW1hZ2VJZDogSUQgb2YgdGhlIHNvdXJjZSBjdXN0b20gaW1hZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpDb3B5SW1hZ2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvcHlJbWFnZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NvcHlJbWFnZSA9IG5ldyBSb3NDb3B5SW1hZ2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBrbXNLZXlJZDogcHJvcHMua21zS2V5SWQsXG4gICAgICAgICAgICBkZXN0aW5hdGlvblJlZ2lvbklkOiBwcm9wcy5kZXN0aW5hdGlvblJlZ2lvbklkLFxuICAgICAgICAgICAgZW5jcnlwdGVkOiBwcm9wcy5lbmNyeXB0ZWQsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgZGVzdGluYXRpb25EZXNjcmlwdGlvbjogcHJvcHMuZGVzdGluYXRpb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhZzogcHJvcHMudGFnLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JbWFnZU5hbWU6IHByb3BzLmRlc3RpbmF0aW9uSW1hZ2VOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0NvcHlJbWFnZTtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VJZCA9IHJvc0NvcHlJbWFnZS5hdHRySW1hZ2VJZDtcbiAgICB9XG59XG4iXX0=