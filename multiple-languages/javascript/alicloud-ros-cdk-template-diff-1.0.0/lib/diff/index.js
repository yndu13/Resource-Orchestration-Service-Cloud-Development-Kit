"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffUnknown = exports.diffResource = exports.diffParameter = exports.diffOutput = exports.diffMetadata = exports.diffMapping = exports.diffCondition = exports.diffAttribute = void 0;
const rosSpec = require("@alicloud/ros-cdk-spec");
const types = require("./types");
const util_1 = require("./util");
function diffAttribute(oldValue, newValue) {
    return new types.Difference(_asString(oldValue), _asString(newValue));
}
exports.diffAttribute = diffAttribute;
function diffCondition(oldValue, newValue) {
    return new types.ConditionDifference(oldValue, newValue);
}
exports.diffCondition = diffCondition;
function diffMapping(oldValue, newValue) {
    return new types.MappingDifference(oldValue, newValue);
}
exports.diffMapping = diffMapping;
function diffMetadata(oldValue, newValue) {
    return new types.MetadataDifference(oldValue, newValue);
}
exports.diffMetadata = diffMetadata;
function diffOutput(oldValue, newValue) {
    return new types.OutputDifference(oldValue, newValue);
}
exports.diffOutput = diffOutput;
function diffParameter(oldValue, newValue) {
    return new types.ParameterDifference(oldValue, newValue);
}
exports.diffParameter = diffParameter;
function diffResource(oldValue, newValue) {
    const resourceType = {
        oldType: oldValue && oldValue.Type,
        newType: newValue && newValue.Type,
    };
    let propertyDiffs = {};
    let otherDiffs = {};
    if (resourceType.oldType !== undefined && resourceType.oldType === resourceType.newType) {
        // Only makes sense to inspect deeper if the types stayed the same
        const typeSpec = rosSpec.filteredSpecification(resourceType.oldType);
        const impl = typeSpec.ResourceTypes[resourceType.oldType];
        propertyDiffs = util_1.diffKeyedEntities(oldValue.Properties, newValue.Properties, (oldVal, newVal, key) => _diffProperty(oldVal, newVal, key, impl));
        otherDiffs = util_1.diffKeyedEntities(oldValue, newValue, _diffOther);
        delete otherDiffs.Properties;
    }
    return new types.ResourceDifference(oldValue, newValue, {
        resourceType,
        propertyDiffs,
        otherDiffs,
    });
    function _diffProperty(oldV, newV, key, resourceSpec) {
        let changeImpact = types.ResourceImpact.NO_CHANGE;
        const spec = resourceSpec && resourceSpec.Properties && resourceSpec.Properties[key];
        if (spec && !util_1.deepEqual(oldV, newV)) {
            switch (spec.UpdateType) {
                case rosSpec.schema.UpdateType.Immutable:
                    changeImpact = types.ResourceImpact.WILL_REPLACE;
                    break;
                case rosSpec.schema.UpdateType.Conditional:
                    changeImpact = types.ResourceImpact.MAY_REPLACE;
                    break;
                default:
                    // In those cases, whatever is the current value is what we should keep
                    changeImpact = types.ResourceImpact.WILL_UPDATE;
            }
        }
        return new types.PropertyDifference(oldV, newV, { changeImpact });
    }
    function _diffOther(oldV, newV) {
        return new types.Difference(oldV, newV);
    }
}
exports.diffResource = diffResource;
function diffUnknown(oldValue, newValue) {
    return new types.Difference(oldValue, newValue);
}
exports.diffUnknown = diffUnknown;
/**
 * Coerces a given value to +string | undefined+.
 *
 * @param value the value to be coerced.
 *
 * @returns +undefined+ if +value+ is +null+ or +undefined+,
 *      +value+ if it is a +string+,
 *      a compact JSON representation of +value+ otherwise.
 */
function _asString(value) {
    if (value == null) {
        return undefined;
    }
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFDbEQsaUNBQWlDO0FBQ2pDLGlDQUFzRDtBQUV0RCxTQUFnQixhQUFhLENBQUMsUUFBYSxFQUFFLFFBQWE7SUFDeEQsT0FBTyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQVMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxRQUF5QixFQUFFLFFBQXlCO0lBQ2hGLE9BQU8sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxRQUF1QixFQUFFLFFBQXVCO0lBQzFFLE9BQU8sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFlBQVksQ0FBQyxRQUF3QixFQUFFLFFBQXdCO0lBQzdFLE9BQU8sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQ3ZFLE9BQU8sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxRQUF5QixFQUFFLFFBQXlCO0lBQ2hGLE9BQU8sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFGRCxzQ0FFQztB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QUksRUFBRTtRQUNqQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBZSxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3NTcGVjIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLXNwZWMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkZWVwRXF1YWwsIGRpZmZLZXllZEVudGl0aWVzIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGUob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSk6IHR5cGVzLkRpZmZlcmVuY2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgdHlwZXMuRGlmZmVyZW5jZTxzdHJpbmc+KF9hc1N0cmluZyhvbGRWYWx1ZSksIF9hc1N0cmluZyhuZXdWYWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNvbmRpdGlvbihvbGRWYWx1ZTogdHlwZXMuQ29uZGl0aW9uLCBuZXdWYWx1ZTogdHlwZXMuQ29uZGl0aW9uKTogdHlwZXMuQ29uZGl0aW9uRGlmZmVyZW5jZSB7XG4gIHJldHVybiBuZXcgdHlwZXMuQ29uZGl0aW9uRGlmZmVyZW5jZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZk1hcHBpbmcob2xkVmFsdWU6IHR5cGVzLk1hcHBpbmcsIG5ld1ZhbHVlOiB0eXBlcy5NYXBwaW5nKTogdHlwZXMuTWFwcGluZ0RpZmZlcmVuY2Uge1xuICByZXR1cm4gbmV3IHR5cGVzLk1hcHBpbmdEaWZmZXJlbmNlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTWV0YWRhdGEob2xkVmFsdWU6IHR5cGVzLk1ldGFkYXRhLCBuZXdWYWx1ZTogdHlwZXMuTWV0YWRhdGEpOiB0eXBlcy5NZXRhZGF0YURpZmZlcmVuY2Uge1xuICByZXR1cm4gbmV3IHR5cGVzLk1ldGFkYXRhRGlmZmVyZW5jZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZk91dHB1dChvbGRWYWx1ZTogdHlwZXMuT3V0cHV0LCBuZXdWYWx1ZTogdHlwZXMuT3V0cHV0KTogdHlwZXMuT3V0cHV0RGlmZmVyZW5jZSB7XG4gIHJldHVybiBuZXcgdHlwZXMuT3V0cHV0RGlmZmVyZW5jZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlBhcmFtZXRlcihvbGRWYWx1ZTogdHlwZXMuUGFyYW1ldGVyLCBuZXdWYWx1ZTogdHlwZXMuUGFyYW1ldGVyKTogdHlwZXMuUGFyYW1ldGVyRGlmZmVyZW5jZSB7XG4gIHJldHVybiBuZXcgdHlwZXMuUGFyYW1ldGVyRGlmZmVyZW5jZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlJlc291cmNlKG9sZFZhbHVlPzogdHlwZXMuUmVzb3VyY2UsIG5ld1ZhbHVlPzogdHlwZXMuUmVzb3VyY2UpOiB0eXBlcy5SZXNvdXJjZURpZmZlcmVuY2Uge1xuICBjb25zdCByZXNvdXJjZVR5cGUgPSB7XG4gICAgb2xkVHlwZTogb2xkVmFsdWUgJiYgb2xkVmFsdWUuVHlwZSxcbiAgICBuZXdUeXBlOiBuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5UeXBlLFxuICB9O1xuICBsZXQgcHJvcGVydHlEaWZmczogeyBba2V5OiBzdHJpbmddOiB0eXBlcy5Qcm9wZXJ0eURpZmZlcmVuY2U8YW55PiB9ID0ge307XG4gIGxldCBvdGhlckRpZmZzOiB7IFtrZXk6IHN0cmluZ106IHR5cGVzLkRpZmZlcmVuY2U8YW55PiB9ID0ge307XG5cbiAgaWYgKHJlc291cmNlVHlwZS5vbGRUeXBlICE9PSB1bmRlZmluZWQgJiYgcmVzb3VyY2VUeXBlLm9sZFR5cGUgPT09IHJlc291cmNlVHlwZS5uZXdUeXBlKSB7XG4gICAgLy8gT25seSBtYWtlcyBzZW5zZSB0byBpbnNwZWN0IGRlZXBlciBpZiB0aGUgdHlwZXMgc3RheWVkIHRoZSBzYW1lXG4gICAgY29uc3QgdHlwZVNwZWMgPSByb3NTcGVjLmZpbHRlcmVkU3BlY2lmaWNhdGlvbihyZXNvdXJjZVR5cGUub2xkVHlwZSk7XG4gICAgY29uc3QgaW1wbCA9IHR5cGVTcGVjLlJlc291cmNlVHlwZXNbcmVzb3VyY2VUeXBlLm9sZFR5cGVdO1xuICAgIHByb3BlcnR5RGlmZnMgPSBkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSEuUHJvcGVydGllcywgbmV3VmFsdWUhLlByb3BlcnRpZXMsIChvbGRWYWwsIG5ld1ZhbCwga2V5KSA9PlxuICAgICAgX2RpZmZQcm9wZXJ0eShvbGRWYWwsIG5ld1ZhbCwga2V5LCBpbXBsKSxcbiAgICApO1xuXG4gICAgb3RoZXJEaWZmcyA9IGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgX2RpZmZPdGhlcik7XG4gICAgZGVsZXRlIG90aGVyRGlmZnMuUHJvcGVydGllcztcbiAgfVxuXG4gIHJldHVybiBuZXcgdHlwZXMuUmVzb3VyY2VEaWZmZXJlbmNlKG9sZFZhbHVlLCBuZXdWYWx1ZSwge1xuICAgIHJlc291cmNlVHlwZSxcbiAgICBwcm9wZXJ0eURpZmZzLFxuICAgIG90aGVyRGlmZnMsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIF9kaWZmUHJvcGVydHkob2xkVjogYW55LCBuZXdWOiBhbnksIGtleTogc3RyaW5nLCByZXNvdXJjZVNwZWM/OiByb3NTcGVjLnNjaGVtYS5SZXNvdXJjZVR5cGUpIHtcbiAgICBsZXQgY2hhbmdlSW1wYWN0ID0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuTk9fQ0hBTkdFO1xuXG4gICAgY29uc3Qgc3BlYyA9IHJlc291cmNlU3BlYyAmJiByZXNvdXJjZVNwZWMuUHJvcGVydGllcyAmJiByZXNvdXJjZVNwZWMuUHJvcGVydGllc1trZXldO1xuICAgIGlmIChzcGVjICYmICFkZWVwRXF1YWwob2xkViwgbmV3VikpIHtcbiAgICAgIHN3aXRjaCAoc3BlYy5VcGRhdGVUeXBlKSB7XG4gICAgICAgIGNhc2Ugcm9zU3BlYy5zY2hlbWEuVXBkYXRlVHlwZS5JbW11dGFibGU6XG4gICAgICAgICAgY2hhbmdlSW1wYWN0ID0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJvc1NwZWMuc2NoZW1hLlVwZGF0ZVR5cGUuQ29uZGl0aW9uYWw6XG4gICAgICAgICAgY2hhbmdlSW1wYWN0ID0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gSW4gdGhvc2UgY2FzZXMsIHdoYXRldmVyIGlzIHRoZSBjdXJyZW50IHZhbHVlIGlzIHdoYXQgd2Ugc2hvdWxkIGtlZXBcbiAgICAgICAgICBjaGFuZ2VJbXBhY3QgPSB0eXBlcy5SZXNvdXJjZUltcGFjdC5XSUxMX1VQREFURTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IHR5cGVzLlByb3BlcnR5RGlmZmVyZW5jZShvbGRWLCBuZXdWLCB7IGNoYW5nZUltcGFjdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kaWZmT3RoZXIob2xkVjogYW55LCBuZXdWOiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IHR5cGVzLkRpZmZlcmVuY2Uob2xkViwgbmV3Vik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZVbmtub3duKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpOiB0eXBlcy5EaWZmZXJlbmNlPGFueT4ge1xuICByZXR1cm4gbmV3IHR5cGVzLkRpZmZlcmVuY2Uob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb2VyY2VzIGEgZ2l2ZW4gdmFsdWUgdG8gK3N0cmluZyB8IHVuZGVmaW5lZCsuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byBiZSBjb2VyY2VkLlxuICpcbiAqIEByZXR1cm5zICt1bmRlZmluZWQrIGlmICt2YWx1ZSsgaXMgK251bGwrIG9yICt1bmRlZmluZWQrLFxuICogICAgICArdmFsdWUrIGlmIGl0IGlzIGEgK3N0cmluZyssXG4gKiAgICAgIGEgY29tcGFjdCBKU09OIHJlcHJlc2VudGF0aW9uIG9mICt2YWx1ZSsgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBfYXNTdHJpbmcodmFsdWU6IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn1cbiJdfQ==