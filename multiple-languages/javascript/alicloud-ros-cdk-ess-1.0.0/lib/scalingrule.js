"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingRule = exports.ScalingRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "ScalingRuleProperty", { enumerable: true, get: function () { return ess_generated_1.RosScalingRule; } });
/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingRule`
 */
class ScalingRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosScalingRule = new ess_generated_1.RosScalingRule(this, id, {
            targetValue: props.targetValue,
            cooldown: props.cooldown,
            scalingGroupId: props.scalingGroupId,
            predictiveValueBehavior: props.predictiveValueBehavior,
            minAdjustmentMagnitude: props.minAdjustmentMagnitude,
            disableScaleIn: props.disableScaleIn,
            stepAdjustment: props.stepAdjustment,
            adjustmentType: props.adjustmentType,
            metricName: props.metricName,
            scalingRuleName: props.scalingRuleName,
            adjustmentValue: props.adjustmentValue,
            initialMaxSize: props.initialMaxSize,
            scalingRuleType: props.scalingRuleType,
            estimatedInstanceWarmup: props.estimatedInstanceWarmup,
            predictiveScalingMode: props.predictiveScalingMode,
            predictiveTaskBufferTime: props.predictiveTaskBufferTime,
            predictiveValueBuffer: props.predictiveValueBuffer,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingRule;
        this.attrScalingRuleAri = rosScalingRule.attrScalingRuleAri;
        this.attrScalingRuleId = rosScalingRule.attrScalingRuleId;
    }
}
exports.ScalingRule = ScalingRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGluZ3J1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FsaW5ncnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWdJOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsc0JBQXNCO1lBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0I7WUFDeEQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtTQUNyRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBbERELGtDQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NjYWxpbmdSdWxlIH0gZnJvbSAnLi9lc3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2NhbGluZ1J1bGUgYXMgU2NhbGluZ1J1bGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RVNTOjpTY2FsaW5nUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2FsaW5nUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZDogSUQgb2YgdGhlIHNjYWxpbmcgZ3JvdXAgb2YgYSBzY2FsaW5nIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGp1c3RtZW50VHlwZTogQWRqdXN0bWVudCBtb2RlIG9mIGEgc2NhbGluZyBydWxlLiBPcHRpb25hbCB2YWx1ZXM6XG4gICAgICogLSBRdWFudGl0eUNoYW5nZUluQ2FwYWNpdHk6IEl0IGlzIHVzZWQgdG8gaW5jcmVhc2Ugb3IgZGVjcmVhc2UgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIEVDUyBpbnN0YW5jZXMuXG4gICAgICogLSBQZXJjZW50Q2hhbmdlSW5DYXBhY2l0eTogSXQgaXMgdXNlZCB0byBpbmNyZWFzZSBvciBkZWNyZWFzZSBhIHNwZWNpZmllZCBwcm9wb3J0aW9uIG9mIEVDUyBpbnN0YW5jZXMuXG4gICAgICogLSBUb3RhbENhcGFjaXR5OiBJdCBpcyB1c2VkIHRvIGFkanVzdCB0aGUgcXVhbnRpdHkgb2YgRUNTIGluc3RhbmNlcyBpbiB0aGUgY3VycmVudCBzY2FsaW5nIGdyb3VwIHRvIGEgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkanVzdG1lbnRUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFkanVzdG1lbnRWYWx1ZTogQWRqdXN0ZWQgdmFsdWUgb2YgYSBzY2FsaW5nIHJ1bGUuIFZhbHVlIHJhbmdlOlxuICAgICAqIC0gUXVhbnRpdHlDaGFuZ2VJbkNhcGFjaXR5OiBbLTUwMCwgNTAwXVxuICAgICAqIC0gUGVyY2VudENoYW5nZUluQ2FwYWNpdHk6IFstMTAwLCAxMDAwMF1cbiAgICAgKiAtIFRvdGFsQ2FwYWNpdHk6IFswLCAxMDAwXVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkanVzdG1lbnRWYWx1ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb29sZG93bjogQ29vbC1kb3duIHRpbWUgb2YgYSBzY2FsaW5nIHJ1bGUuIFZhbHVlIHJhbmdlOiBbMCwgODYsNDAwXSwgaW4gc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29vbGRvd24/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzYWJsZVNjYWxlSW46IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc2FibGUgc2NhbGUtaW4uIFRoaXMgcGFyYW1ldGVyIGlzIGFwcGxpY2FibGUgb25seSB0byB0YXJnZXQgdHJhY2tpbmcgc2NhbGluZyBydWxlcy5cbiAgICAgKiAgRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNhYmxlU2NhbGVJbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA6IFRoZSB3YXJtLXVwIHBlcmlvZCBvZiB0aGUgRUNTIGluc3RhbmNlcy4gVGhpcyBwYXJhbWV0ZXIgaXMgYXBwbGljYWJsZSB0byB0YXJnZXQgdHJhY2tpbmcgc2NhbGluZyBydWxlcyBhbmQgc3RlcCBzY2FsaW5nIHJ1bGVzLiBUaGUgc3lzdGVtIGFkZHMgRUNTIGluc3RhbmNlcyB0aGF0IGFyZSBpbiB0aGUgd2FybS11cCBzdGF0ZSB0byB0aGUgc2NhbGluZyBncm91cCwgYnV0IGRvZXMgbm90IHJlcG9ydCBtb25pdG9yaW5nIGRhdGEgZHVyaW5nIHRoZSB3YXJtLXVwIHBlcmlvZCB0byBDbG91ZE1vbml0b3IuXG4gICAgICogTm90ZTogV2hlbiBjYWxjdWxhdGluZyB0aGUgbnVtYmVyIG9mIEVDUyBpbnN0YW5jZXMgdG8gYmUgYWRqdXN0ZWQsIHRoZSBzeXN0ZW0gZG9lcyBub3QgY291bnQgRUNTIGluc3RhbmNlcyBpbiB0aGUgd2FybS11cCBzdGF0ZSBhcyBwYXJ0IG9mIHRoZSBjdXJyZW50IGNhcGFjaXR5IG9mIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqIFZhbGlkIHZhbHVlczogMCB0byA4NjQwMC4gVW5pdDogc2Vjb25kcy4gRGVmYXVsdCB2YWx1ZTogMzAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVzdGltYXRlZEluc3RhbmNlV2FybXVwPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluaXRpYWxNYXhTaXplOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgRUNTIGluc3RhbmNlcyBpbiB0aGUgc2NhbGluZyBncm91cCwgd2hpY2ggaXMgdXNlZCB0b2dldGhlciB3aXRoIFByZWRpY3RpdmVWYWx1ZUJlaGF2aW9yLlxuICAgICAqICBEZWZhdWx0IHZhbHVlOiB0aGUgc2FtZSBhcyB0aGUgdmFsdWUgb2YgTWF4U2l6ZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluaXRpYWxNYXhTaXplPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1ldHJpY05hbWU6IFRoZSBwcmVkZWZpbmVkIG1ldHJpYyB0byBtb25pdG9yLiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBhbmQgYXBwbGljYWJsZSBvbmx5IHRvIHRhcmdldCB0cmFja2luZyBzY2FsaW5nIHJ1bGVzIGFuZCBwcmVkaWN0aXZlIHNjYWxpbmcgcnVsZXMuXG4gICAgICogVmFsaWQgdmFsdWVzIG9mIGEgdGFyZ2V0IHRyYWNraW5nIHNjYWxpbmcgcnVsZTpcbiAgICAgKiAtIENwdVV0aWxpemF0aW9uOiB0aGUgYXZlcmFnZSBDUFUgdXRpbGl6YXRpb24tIENsYXNzaWNJbnRlcm5ldFJ4OiB0aGUgYXZlcmFnZSBwdWJsaWMgbmV0d29yayBpbmJvdW5kIHRyYWZmaWMgb3ZlciB0aGUgY2xhc3NpYyBuZXR3b3JrXG4gICAgICogLSBDbGFzc2ljSW50ZXJuZXRUeDogdGhlIGF2ZXJhZ2UgcHVibGljIG5ldHdvcmsgb3V0Ym91bmQgdHJhZmZpYyBvdmVyIHRoZSBjbGFzc2ljIG5ldHdvcmtcbiAgICAgKiAtIFZwY0ludGVybmV0Ung6IHRoZSBhdmVyYWdlIHB1YmxpYyBuZXR3b3JrIGluYm91bmQgdHJhZmZpYyBvdmVyIHRoZSBWUENcbiAgICAgKiAtIFZwY0ludGVybmV0VHg6IHRoZSBhdmVyYWdlIHB1YmxpYyBuZXR3b3JrIG91dGJvdW5kIHRyYWZmaWMgb3ZlciB0aGUgVlBDXG4gICAgICogLSBJbnRyYW5ldFJ4OiB0aGUgYXZlcmFnZSBpbnRlcm5hbCBuZXR3b3JrIGluYm91bmQgdHJhZmZpY1xuICAgICAqIC0gSW50cmFuZXRUeDogdGhlIGF2ZXJhZ2UgaW50ZXJuYWwgbmV0d29yayBvdXRib3VuZCB0cmFmZmljXG4gICAgICogVmFsaWQgdmFsdWVzIG9mIGEgcHJlZGljdGl2ZSBzY2FsaW5nIHJ1bGU6XG4gICAgICogLSBDcHVVdGlsaXphdGlvbjogdGhlIGF2ZXJhZ2UgQ1BVIHV0aWxpemF0aW9uXG4gICAgICogLSBJbnRyYW5ldFJ4OiB0aGUgYXZlcmFnZSBpbnRlcm5hbCBuZXR3b3JrIGluYm91bmQgdHJhZmZpY1xuICAgICAqIC0gSW50cmFuZXRUeDogdGhlIGF2ZXJhZ2UgaW50ZXJuYWwgbmV0d29yayBvdXRib3VuZCB0cmFmZmljXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWV0cmljTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtaW5BZGp1c3RtZW50TWFnbml0dWRlOiBUaGUgbWluaW11bSBudW1iZXIgb2YgRUNTIGluc3RhbmNlcyB0byBiZSBhZGp1c3RlZCBpbiBhIHNjYWxpbmcgcnVsZS4gVGhpcyBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiB0aGUgc2NhbGluZyBydWxlIHR5cGUgaXMgU2ltcGxlU2NhbGluZ1J1bGUgb3IgU3RlcFNjYWxpbmdSdWxlIGFuZCBBZGp1c3RtZW50VHlwZSBpcyBQZXJjZW50Q2hhbmdlSW5DYXBhY2l0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtaW5BZGp1c3RtZW50TWFnbml0dWRlPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWRpY3RpdmVTY2FsaW5nTW9kZTogVGhlIG1vZGUgb2YgdGhlIHByZWRpY3RpdmUgc2NhbGluZyBydWxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBQcmVkaWN0QW5kU2NhbGU6IGdlbmVyYXRlcyBmb3JlY2FzdHMgYW5kIGNyZWF0ZXMgZm9yZWNhc3QgdGFza3MuXG4gICAgICogLSBQcmVkaWN0T25seTogZ2VuZXJhdGVzIGZvcmVjYXN0cyBidXQgZG9lcyBub3QgY3JlYXRlIGZvcmVjYXN0IHRhc2tzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IFByZWRpY3RBbmRTY2FsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nTW9kZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVkaWN0aXZlVGFza0J1ZmZlclRpbWU6IFRoZSBhbW91bnQgb2YgYnVmZmVyIHRpbWUgYWhlYWQgb2YgdGhlIGZvcmVjYXN0IHRhc2sgZXhlY3V0aW9uIHRpbWUuIEJ5IGRlZmF1bHQsIGFsbCBzY2hlZHVsZWQgdGFza3MgdGhhdCBhcmUgYXV0b21hdGljYWxseSBjcmVhdGVkIGZvciBhIHByZWRpY3RpdmUgc2NhbGluZyBydWxlIGFyZSBleGVjdXRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggaG91ci4gWW91IGNhbiBzZXQgYSBidWZmZXIgdGltZSB0byBleGVjdXRlIGZvcmVjYXN0IHRhc2tzIGFoZWFkIG9mIHNjaGVkdWxlLCBzbyB0aGF0IHJlc291cmNlcyBjYW4gYmUgcHJlcGFyZWQgaW4gYWR2YW5jZS4gVmFsaWQgdmFsdWVzOiAwIHRvIDYwLiBVbml0OiBtaW51dGVzLlxuICAgICAqICBEZWZhdWx0IHZhbHVlOiAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZGljdGl2ZVRhc2tCdWZmZXJUaW1lPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZWRpY3RpdmVWYWx1ZUJlaGF2aW9yOiBUaGUgYWN0aW9uIHRha2VuIG9uIHRoZSBwcmVkaWN0ZWQgbWF4aW11bSB2YWx1ZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTWF4T3ZlcnJpZGVQcmVkaWN0aXZlVmFsdWU6IHVzZXMgdGhlIGluaXRpYWwgbWF4aW11bSBjYXBhY2l0eSBhcyB0aGUgbWF4aW11bSB2YWx1ZSBmb3IgZm9yZWNhc3QgdGFza3Mgd2hlbiB0aGUgcHJlZGljdGVkIHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgaW5pdGlhbCBtYXhpbXVtIGNhcGFjaXR5LlxuICAgICAqICAtIFByZWRpY3RpdmVWYWx1ZU92ZXJyaWRlTWF4OiB1c2VzIHRoZSBwcmVkaWN0ZWQgdmFsdWUgYXMgdGhlIG1heGltdW0gdmFsdWUgZm9yIGZvcmVjYXN0IHRhc2tzIHdoZW4gdGhlIHByZWRpY3RlZCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gdGhlIGluaXRpYWwgbWF4aW11bSBjYXBhY2l0eS5cbiAgICAgKiAgLSBQcmVkaWN0aXZlVmFsdWVPdmVycmlkZU1heFdpdGhCdWZmZXI6IGluY3JlYXNlcyB0aGUgcHJlZGljdGVkIHZhbHVlIHdpdGggYSByYXRpbywgd2hpY2ggaXMgc3BlY2lmaWVkIGJ5IFByZWRpY3RpdmVWYWx1ZUJ1ZmZlci4gSWYgdGhlIHZhbHVlIGFmdGVyIHRoZSBpbmNyZWFzZSBpcyBncmVhdGVyIHRoYW4gdGhlIGluaXRpYWwgbWF4aW11bSBjYXBhY2l0eSwgdGhlIHZhbHVlIGFmdGVyIHRoZSBpbmNyZWFzZSBpcyB1c2VkIGFzIHRoZSBtYXhpbXVtIHZhbHVlIGZvciBmb3JlY2FzdCB0YXNrcy5cbiAgICAgKiAgRGVmYXVsdCB2YWx1ZTogTWF4T3ZlcnJpZGVQcmVkaWN0aXZlVmFsdWVcbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVkaWN0aXZlVmFsdWVCZWhhdmlvcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVkaWN0aXZlVmFsdWVCdWZmZXI6IFRoZSByYXRpbyBvZiB0aGUgaW5jcmVtZW50IHRvIHRoZSBwcmVkaWN0ZWQgdmFsdWUgd2hlbiBQcmVkaWN0aXZlVmFsdWVCZWhhdmlvciBpcyBzZXQgdG8gUHJlZGljdGl2ZVZhbHVlT3ZlcnJpZGVNYXhXaXRoQnVmZmVyLiBXaGVuIHRoZSB2YWx1ZSBhZnRlciB0aGUgaW5jcmVhc2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBpbml0aWFsIG1heGltdW0gY2FwYWNpdHksIHRoZSB2YWx1ZSBhZnRlciB0aGUgaW5jcmVhc2UgaXMgdXNlZCBmb3IgZm9yZWNhc3QgdGFza3MuIFZhbGlkIHZhbHVlczogMCB0byAxMDBcbiAgICAgKiAgRGVmYXVsdCB2YWx1ZTogMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWRpY3RpdmVWYWx1ZUJ1ZmZlcj86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nUnVsZU5hbWU6IE5hbWUgc2hvd24gZm9yIHRoZSBzY2FsaW5nIGdyb3VwLCB3aGljaCBpcyBhIHN0cmluZyBjb250YWluaW5nIDIgdG8gNDAgRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMuIEl0IG11c3QgYmVnaW4gd2l0aCBhIG51bWJlciwgYSBsZXR0ZXIgKGNhc2UtaW5zZW5zaXRpdmUpIG9yIGEgQ2hpbmVzZSBjaGFyYWN0ZXIgYW5kIGNhbiBjb250YWluIG51bWJlcnMsIFwiX1wiLCBcIi1cIiBvciBcIi5cIi4gVGhlIGFjY291bnQgbmFtZSBpbiB0aGUgc2FtZSBzY2FsaW5nIGdyb3VwIGlzIHVuaXF1ZSBpbiB0aGUgc2FtZSByZWdpb24uIElmIHRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIFNjYWxpbmdSdWxlSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ1J1bGVOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjYWxpbmdSdWxlVHlwZTogVGhlIHR5cGUgb2YgdGhlIHNjYWxpbmcgcnVsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gU2ltcGxlU2NhbGluZ1J1bGU6IHNjYWxlcyBFQ1MgaW5zdGFuY2VzIGJhc2VkIG9uIHRoZSB2YWx1ZXMgb2YgQWRqdXN0bWVudFR5cGUgYW5kIEFkanVzdG1lbnRWYWx1ZS5cbiAgICAgKiAtIFRhcmdldFRyYWNraW5nU2NhbGluZ1J1bGU6IGR5bmFtaWNhbGx5IGNhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBFQ1MgaW5zdGFuY2VzIHRvIGJlIGFkanVzdGVkIGFuZCB0cmllcyB0byBrZWVwIHRoZSB2YWx1ZSBvZiBhIHByZWRlZmluZWQgbW9uaXRvcmluZyBtZXRyaWMgY2xvc2UgdG8gVGFyZ2V0VmFsdWUuXG4gICAgICogLSBTdGVwU2NhbGluZ1J1bGU6IHNjYWxlcyBFQ1MgaW5zdGFuY2VzIGluIHN0ZXBzIGJhc2VkIG9uIHNwZWNpZmllZCB0aHJlc2hvbGRzIGFuZCBtZXRyaWMgdmFsdWVzLlxuICAgICAqIC0gUHJlZGljdGl2ZVNjYWxpbmdSdWxlOiB1c2VzIG1hY2hpbmUgbGVhcm5pbmcgdG8gYW5hbHl6ZSBoaXN0b3JpY2FsIG1vbml0b3JpbmcgZGF0YSBvZiB0aGUgc2NhbGluZyBncm91cCBhbmQgdGhlbiBwcmVkaWN0cyB0aGUgZnV0dXJlIHZhbHVlcyBvZiBtb25pdG9yZWQgbWV0cmljcywgdGhlIHJ1bGUgdGhlbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgc2NoZWR1bGVkIHRhc2tzIHRvIHNldCB0aGUgYm91bmRhcnkgdmFsdWVzIGZvciB0aGUgc2NhbGluZyBncm91cC5cbiAgICAgKiAgSWYgdGhpcyBwYXJhbWV0ZXIgdmFsdWUgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgU2ltcGxlU2NhbGluZ1J1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ1J1bGVUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0ZXBBZGp1c3RtZW50OlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0ZXBBZGp1c3RtZW50PzogQXJyYXk8Um9zU2NhbGluZ1J1bGUuU3RlcEFkanVzdG1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0VmFsdWU6IFRoZSB0YXJnZXQgdmFsdWUgb2YgYSBtZXRyaWMuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGFuZCBhcHBsaWNhYmxlIG9ubHkgdG8gdGFyZ2V0IHRyYWNraW5nIHNjYWxpbmcgcnVsZXMgYW5kIHByZWRpY3RpdmUgc2NhbGluZyBydWxlcy4gVGhlIHZhbHVlIG9mIFRhcmdldFZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGNhbiBoYXZlIGEgbWF4aW11bSBvZiB0aHJlZSBkZWNpbWFsIHBsYWNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRWYWx1ZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RVNTOjpTY2FsaW5nUnVsZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFNjYWxpbmdSdWxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2NhbGluZ1J1bGVBcmk6IFVuaXF1ZSBpZGVudGlmaWVyIG9mIGEgc2NhbGluZyBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ1J1bGVBcmk6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2NhbGluZ1J1bGVJZDogSUQgb2YgYSBzY2FsaW5nIHJ1bGUsIGdlbmVyYXRlZCBieSB0aGUgc3lzdGVtIGFuZCBnbG9iYWxseSB1bmlxdWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nUnVsZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RVNTOjpTY2FsaW5nUnVsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2NhbGluZ1J1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTY2FsaW5nUnVsZSA9IG5ldyBSb3NTY2FsaW5nUnVsZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHRhcmdldFZhbHVlOiBwcm9wcy50YXJnZXRWYWx1ZSxcbiAgICAgICAgICAgIGNvb2xkb3duOiBwcm9wcy5jb29sZG93bixcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkOiBwcm9wcy5zY2FsaW5nR3JvdXBJZCxcbiAgICAgICAgICAgIHByZWRpY3RpdmVWYWx1ZUJlaGF2aW9yOiBwcm9wcy5wcmVkaWN0aXZlVmFsdWVCZWhhdmlvcixcbiAgICAgICAgICAgIG1pbkFkanVzdG1lbnRNYWduaXR1ZGU6IHByb3BzLm1pbkFkanVzdG1lbnRNYWduaXR1ZGUsXG4gICAgICAgICAgICBkaXNhYmxlU2NhbGVJbjogcHJvcHMuZGlzYWJsZVNjYWxlSW4sXG4gICAgICAgICAgICBzdGVwQWRqdXN0bWVudDogcHJvcHMuc3RlcEFkanVzdG1lbnQsXG4gICAgICAgICAgICBhZGp1c3RtZW50VHlwZTogcHJvcHMuYWRqdXN0bWVudFR5cGUsXG4gICAgICAgICAgICBtZXRyaWNOYW1lOiBwcm9wcy5tZXRyaWNOYW1lLFxuICAgICAgICAgICAgc2NhbGluZ1J1bGVOYW1lOiBwcm9wcy5zY2FsaW5nUnVsZU5hbWUsXG4gICAgICAgICAgICBhZGp1c3RtZW50VmFsdWU6IHByb3BzLmFkanVzdG1lbnRWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxNYXhTaXplOiBwcm9wcy5pbml0aWFsTWF4U2l6ZSxcbiAgICAgICAgICAgIHNjYWxpbmdSdWxlVHlwZTogcHJvcHMuc2NhbGluZ1J1bGVUeXBlLFxuICAgICAgICAgICAgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA6IHByb3BzLmVzdGltYXRlZEluc3RhbmNlV2FybXVwLFxuICAgICAgICAgICAgcHJlZGljdGl2ZVNjYWxpbmdNb2RlOiBwcm9wcy5wcmVkaWN0aXZlU2NhbGluZ01vZGUsXG4gICAgICAgICAgICBwcmVkaWN0aXZlVGFza0J1ZmZlclRpbWU6IHByb3BzLnByZWRpY3RpdmVUYXNrQnVmZmVyVGltZSxcbiAgICAgICAgICAgIHByZWRpY3RpdmVWYWx1ZUJ1ZmZlcjogcHJvcHMucHJlZGljdGl2ZVZhbHVlQnVmZmVyLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NjYWxpbmdSdWxlO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nUnVsZUFyaSA9IHJvc1NjYWxpbmdSdWxlLmF0dHJTY2FsaW5nUnVsZUFyaTtcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ1J1bGVJZCA9IHJvc1NjYWxpbmdSdWxlLmF0dHJTY2FsaW5nUnVsZUlkO1xuICAgIH1cbn1cbiJdfQ==