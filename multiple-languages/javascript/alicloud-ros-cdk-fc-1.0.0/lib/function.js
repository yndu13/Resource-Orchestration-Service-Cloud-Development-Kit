"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = exports.FunctionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "FunctionProperty", { enumerable: true, get: function () { return fc_generated_1.RosFunction; } });
/**
 * A ROS resource type:  `ALIYUN::FC::Function`
 */
class Function extends ros.Resource {
    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosFunction = new fc_generated_1.RosFunction(this, id, {
            memorySize: props.memorySize ? props.memorySize : 128,
            description: props.description,
            timeout: props.timeout ? props.timeout : 3,
            handler: props.handler,
            customContainerConfig: props.customContainerConfig,
            code: props.code,
            asyncConfiguration: props.asyncConfiguration,
            functionName: props.functionName,
            caPort: props.caPort ? props.caPort : 9000,
            runtime: props.runtime,
            environmentVariables: props.environmentVariables,
            initializer: props.initializer,
            serviceName: props.serviceName,
            initializationTimeout: props.initializationTimeout,
            instanceConcurrency: props.instanceConcurrency,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunction;
        this.attrArn = rosFunction.attrArn;
        this.attrFunctionId = rosFunction.attrFunctionId;
        this.attrFunctionName = rosFunction.attrFunctionName;
        this.attrServiceName = rosFunction.attrServiceName;
    }
}
exports.Function = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTZDO0FBRXJCLGlHQUZmLDBCQUFXLE9BRW9CO0FBbUZ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMkJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1NBQ2pELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDdkQsQ0FBQztDQUNKO0FBNURELDRCQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0Z1bmN0aW9uIH0gZnJvbSAnLi9mYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NGdW5jdGlvbiBhcyBGdW5jdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlcjogVGhlIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbnRyeSBwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYW5kbGVyOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVudGltZTogVGhlIGZ1bmN0aW9uIHJ1bnRpbWUgZW52aXJvbm1lbnQuIFN1cHBvcnRpbmcgbm9kZWpzNiwgbm9kZWpzOCwgbm9kZWpzMTAsIG5vZGVqczEyLCBweXRob24yLjcsIHB5dGhvbjMsIGphdmE4LCBjdXN0b20sIGN1c3RvbS1jb250YWluZXIgYW5kIHNvIG9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVudGltZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzeW5jQ29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiBvZiBhc3luY2hyb25vdXMgZnVuY3Rpb24gY2FsbHNcbiAgICAgKi9cbiAgICByZWFkb25seSBhc3luY0NvbmZpZ3VyYXRpb24/OiBSb3NGdW5jdGlvbi5Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYVBvcnQ6IEN1c3RvbSBydW50aW1lIGFuZCBjdXN0b20gY29udGFpbmVyIHJ1bnRpbWUgZGVkaWNhdGVkIGZpZWxkcywgd2hpY2ggcmVwcmVzZW50IHRoZSBwb3J0IHRoYXQgdGhlIHN0YXJ0ZWQgY3VzdG9tIGh0dHAgc2VydmVyIGxpc3RlbnMgdG8uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDkwMDBcbiAgICAgKi9cbiAgICByZWFkb25seSBjYVBvcnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29kZTogVGhlIGNvZGUgdGhhdCBjb250YWlucyB0aGUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29kZT86IFJvc0Z1bmN0aW9uLkNvZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdXN0b21Db250YWluZXJDb25maWc6IEN1c3RvbSBjb250YWluZXIgcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uIEFmdGVyIGNvbmZpZ3VyYXRpb24sIHRoZSBmdW5jdGlvbiBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIGN1c3RvbSBjb250YWluZXIgdG8gZXhlY3V0ZSB0aGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21Db250YWluZXJDb25maWc/OiBSb3NGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRnVuY3Rpb24gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnZpcm9ubWVudFZhcmlhYmxlczogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIHNldCBmb3IgdGhlIGZ1bmN0aW9uLCB5b3UgY2FuIGdldCB0aGUgdmFsdWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGluIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbml0aWFsaXphdGlvblRpbWVvdXQ6IHRoZSBtYXggZXhlY3V0aW9uIHRpbWUgb2YgdGhlIGluaXRpYWxpemVyLCBpbiBzZWNvbmRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsaXphdGlvblRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5pdGlhbGl6ZXI6IHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgaW5pdGlhbGl6ZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsaXplcj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNvbmN1cnJlbmN5OiBGdW5jdGlvbiBpbnN0YW5jZSBjb25jdXJyZW5jeS4gVmFsdWUgY2FuIGJlIGJldHdlZW4gMSB0byAxMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDb25jdXJyZW5jeT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZW1vcnlTaXplOiBUaGUgYW1vdW50IG9mIG1lbW9yeSB0aGF04oCZcyB1c2VkIHRvIHJ1biBmdW5jdGlvbiwgaW4gTUIuIEZ1bmN0aW9uIENvbXB1dGUgdXNlcyB0aGlzIHZhbHVlIHRvIGFsbG9jYXRlIENQVSByZXNvdXJjZXMgcHJvcG9ydGlvbmFsbHkuIERlZmF1bHRzIHRvIDEyOCBNQi4gSXQgY2FuIGJlIG11bHRpcGxlIG9mIDY0IE1CIGFuZCBiZXR3ZWVuIDEyOCBNQiBhbmQgMzA3MiBNQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBtZW1vcnlTaXplPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSBtYXhpbXVtIHRpbWUgZHVyYXRpb24gYSBmdW5jdGlvbiBjYW4gcnVuLCBpbiBzZWNvbmRzLiBBZnRlciB3aGljaCBGdW5jdGlvbiBDb21wdXRlIHRlcm1pbmF0ZXMgdGhlIGV4ZWN1dGlvbi4gRGVmYXVsdHMgdG8gMyBzZWNvbmRzLCBhbmQgY2FuIGJlIGJldHdlZW4gMSB0byA2MDAgc2Vjb25kcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFSTjogVGhlIEFSTiBmb3IgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVuY3Rpb25JZDogVGhlIGZ1bmN0aW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbklkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEZ1bmN0aW9uTmFtZTogVGhlIGZ1bmN0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bmN0aW9uTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpGQzo6RnVuY3Rpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEZ1bmN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRnVuY3Rpb24gPSBuZXcgUm9zRnVuY3Rpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBtZW1vcnlTaXplOiBwcm9wcy5tZW1vcnlTaXplID8gcHJvcHMubWVtb3J5U2l6ZSA6IDEyOCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHByb3BzLnRpbWVvdXQgPyBwcm9wcy50aW1lb3V0IDogMyxcbiAgICAgICAgICAgIGhhbmRsZXI6IHByb3BzLmhhbmRsZXIsXG4gICAgICAgICAgICBjdXN0b21Db250YWluZXJDb25maWc6IHByb3BzLmN1c3RvbUNvbnRhaW5lckNvbmZpZyxcbiAgICAgICAgICAgIGNvZGU6IHByb3BzLmNvZGUsXG4gICAgICAgICAgICBhc3luY0NvbmZpZ3VyYXRpb246IHByb3BzLmFzeW5jQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcHJvcHMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgY2FQb3J0OiBwcm9wcy5jYVBvcnQgPyBwcm9wcy5jYVBvcnQgOiA5MDAwLFxuICAgICAgICAgICAgcnVudGltZTogcHJvcHMucnVudGltZSxcbiAgICAgICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiBwcm9wcy5lbnZpcm9ubWVudFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGluaXRpYWxpemVyOiBwcm9wcy5pbml0aWFsaXplcixcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGluaXRpYWxpemF0aW9uVGltZW91dDogcHJvcHMuaW5pdGlhbGl6YXRpb25UaW1lb3V0LFxuICAgICAgICAgICAgaW5zdGFuY2VDb25jdXJyZW5jeTogcHJvcHMuaW5zdGFuY2VDb25jdXJyZW5jeSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NGdW5jdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gcm9zRnVuY3Rpb24uYXR0ckFybjtcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25JZCA9IHJvc0Z1bmN0aW9uLmF0dHJGdW5jdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbk5hbWUgPSByb3NGdW5jdGlvbi5hdHRyRnVuY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHJvc0Z1bmN0aW9uLmF0dHJTZXJ2aWNlTmFtZTtcbiAgICB9XG59XG4iXX0=