"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Savedsearch = exports.SavedsearchProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "SavedsearchProperty", { enumerable: true, get: function () { return sls_generated_1.RosSavedsearch; } });
/**
 * A ROS resource type:  `ALIYUN::SLS::Savedsearch`
 */
class Savedsearch extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSavedsearch = new sls_generated_1.RosSavedsearch(this, id, {
            project: props.project,
            detail: props.detail,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSavedsearch;
        this.attrSavedsearchName = rosSavedsearch.attrSavedsearchName;
    }
}
exports.Savedsearch = Savedsearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWRzZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlZHNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWtCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUM7SUFDbEUsQ0FBQztDQUNKO0FBN0JELGtDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NhdmVkc2VhcmNoIH0gZnJvbSAnLi9zbHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2F2ZWRzZWFyY2ggYXMgU2F2ZWRzZWFyY2hQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xTOjpTYXZlZHNlYXJjaGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYXZlZHNlYXJjaFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXRhaWw6XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV0YWlsOiBSb3NTYXZlZHNlYXJjaC5EZXRhaWxQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0OiBQcm9qZWN0IG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlNMUzo6U2F2ZWRzZWFyY2hgXG4gKi9cbmV4cG9ydCBjbGFzcyBTYXZlZHNlYXJjaCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNhdmVkc2VhcmNoTmFtZTogU2F2ZWRzZWFyY2ggbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhdmVkc2VhcmNoTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMUzo6U2F2ZWRzZWFyY2hgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNhdmVkc2VhcmNoUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2F2ZWRzZWFyY2ggPSBuZXcgUm9zU2F2ZWRzZWFyY2godGhpcywgaWQsICB7XG4gICAgICAgICAgICBwcm9qZWN0OiBwcm9wcy5wcm9qZWN0LFxuICAgICAgICAgICAgZGV0YWlsOiBwcm9wcy5kZXRhaWwsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2F2ZWRzZWFyY2g7XG4gICAgICAgIHRoaXMuYXR0clNhdmVkc2VhcmNoTmFtZSA9IHJvc1NhdmVkc2VhcmNoLmF0dHJTYXZlZHNlYXJjaE5hbWU7XG4gICAgfVxufVxuIl19