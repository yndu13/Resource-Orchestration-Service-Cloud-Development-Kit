"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosMapping = void 0;
const token_1 = require("./token");
const ros_element_1 = require("./ros-element");
const ros_fn_1 = require("./ros-fn");
/**
 * Represents a mapping.
 */
class RosMapping extends ros_element_1.RosRefElement {
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.mapping = {};
        this.mapping = props.mapping || {};
    }
    /**
     * Sets a value in the map based on the two keys.
     */
    setValue(key1, key2, value) {
        if (!(key1 in this.mapping)) {
            this.mapping[key1] = {};
        }
        this.mapping[key1][key2] = value;
    }
    /**
     * @returns A reference to a value in the map based on the two keys.
     */
    findInMap(key1, key2) {
        // opportunistically check that the key exists (if the key does not contain tokens)
        if (!token_1.Token.isUnresolved(key1) && !(key1 in this.mapping)) {
            throw new Error(`Mapping doesn't contain top-level key '${key1}'`);
        }
        // opportunistically check that the second key exists (if the key does not contain tokens)
        if (!token_1.Token.isUnresolved(key1) &&
            !token_1.Token.isUnresolved(key2) &&
            !(key2 in this.mapping[key1])) {
            throw new Error(`Mapping doesn't contain second-level key '${key2}'`);
        }
        return ros_fn_1.Fn.findInMap(this.logicalId, key1, key2);
    }
    /**
     * @internal
     */
    _toRosTemplate() {
        return {
            Mappings: {
                [this.logicalId]: this.mapping,
            },
        };
    }
}
exports.RosMapping = RosMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLW1hcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3MtbWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBZ0M7QUFDaEMsK0NBQThDO0FBQzlDLHFDQUE4QjtBQWdCOUI7O0dBRUc7QUFDSCxNQUFhLFVBQVcsU0FBUSwyQkFBYTtJQUczQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQXlCLEVBQUU7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUhYLFlBQU8sR0FBNEMsRUFBRSxDQUFDO1FBSTVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUSxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsS0FBVTtRQUNwRCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLElBQVksRUFBRSxJQUFZO1FBQ3pDLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsYUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4RCxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsMEZBQTBGO1FBQzFGLElBQ0UsQ0FBQyxhQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN6QixDQUFDLGFBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM3QjtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDdkU7UUFFRCxPQUFPLFdBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFO2dCQUNSLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQy9CO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWxERCxnQ0FrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBSb3NSZWZFbGVtZW50IH0gZnJvbSBcIi4vcm9zLWVsZW1lbnRcIjtcbmltcG9ydCB7IEZuIH0gZnJvbSBcIi4vcm9zLWZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTWFwcGluZ1Byb3BzIHtcbiAgLyoqXG4gICAqIE1hcHBpbmcgb2Yga2V5IHRvIGEgc2V0IG9mIGNvcnJlc3BvbmRpbmcgc2V0IG9mIG5hbWVkIHZhbHVlcy5cbiAgICogVGhlIGtleSBpZGVudGlmaWVzIGEgbWFwIG9mIG5hbWUtdmFsdWUgcGFpcnMgYW5kIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgbWFwcGluZy5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHNldCB2YWx1ZXMgYmFzZWQgb24gYSByZWdpb24sIHlvdSBjYW4gY3JlYXRlIGEgbWFwcGluZ1xuICAgKiB0aGF0IHVzZXMgdGhlIHJlZ2lvbiBuYW1lIGFzIGEga2V5IGFuZCBjb250YWlucyB0aGUgdmFsdWVzIHlvdSB3YW50IHRvIHNwZWNpZnkgZm9yXG4gICAqIGVhY2ggc3BlY2lmaWMgcmVnaW9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIG1hcHBpbmcuXG4gICAqL1xuICByZWFkb25seSBtYXBwaW5nPzogeyBbazE6IHN0cmluZ106IHsgW2syOiBzdHJpbmddOiBhbnkgfSB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBtYXBwaW5nLlxuICovXG5leHBvcnQgY2xhc3MgUm9zTWFwcGluZyBleHRlbmRzIFJvc1JlZkVsZW1lbnQge1xuICBwcml2YXRlIG1hcHBpbmc6IHsgW2sxOiBzdHJpbmddOiB7IFtrMjogc3RyaW5nXTogYW55IH0gfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNYXBwaW5nUHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgdGhpcy5tYXBwaW5nID0gcHJvcHMubWFwcGluZyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hcCBiYXNlZCBvbiB0aGUgdHdvIGtleXMuXG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWUoa2V5MTogc3RyaW5nLCBrZXkyOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIShrZXkxIGluIHRoaXMubWFwcGluZykpIHtcbiAgICAgIHRoaXMubWFwcGluZ1trZXkxXSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMubWFwcGluZ1trZXkxXVtrZXkyXSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIEEgcmVmZXJlbmNlIHRvIGEgdmFsdWUgaW4gdGhlIG1hcCBiYXNlZCBvbiB0aGUgdHdvIGtleXMuXG4gICAqL1xuICBwdWJsaWMgZmluZEluTWFwKGtleTE6IHN0cmluZywga2V5Mjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBvcHBvcnR1bmlzdGljYWxseSBjaGVjayB0aGF0IHRoZSBrZXkgZXhpc3RzIChpZiB0aGUga2V5IGRvZXMgbm90IGNvbnRhaW4gdG9rZW5zKVxuICAgIGlmICghVG9rZW4uaXNVbnJlc29sdmVkKGtleTEpICYmICEoa2V5MSBpbiB0aGlzLm1hcHBpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hcHBpbmcgZG9lc24ndCBjb250YWluIHRvcC1sZXZlbCBrZXkgJyR7a2V5MX0nYCk7XG4gICAgfVxuXG4gICAgLy8gb3Bwb3J0dW5pc3RpY2FsbHkgY2hlY2sgdGhhdCB0aGUgc2Vjb25kIGtleSBleGlzdHMgKGlmIHRoZSBrZXkgZG9lcyBub3QgY29udGFpbiB0b2tlbnMpXG4gICAgaWYgKFxuICAgICAgIVRva2VuLmlzVW5yZXNvbHZlZChrZXkxKSAmJlxuICAgICAgIVRva2VuLmlzVW5yZXNvbHZlZChrZXkyKSAmJlxuICAgICAgIShrZXkyIGluIHRoaXMubWFwcGluZ1trZXkxXSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWFwcGluZyBkb2Vzbid0IGNvbnRhaW4gc2Vjb25kLWxldmVsIGtleSAnJHtrZXkyfSdgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRm4uZmluZEluTWFwKHRoaXMubG9naWNhbElkLCBrZXkxLCBrZXkyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfdG9Sb3NUZW1wbGF0ZSgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBNYXBwaW5nczoge1xuICAgICAgICBbdGhpcy5sb2dpY2FsSWRdOiB0aGlzLm1hcHBpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==