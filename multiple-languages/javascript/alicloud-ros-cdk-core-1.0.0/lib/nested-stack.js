"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStack = void 0;
const construct_compat_1 = require("./construct-compat");
const stack_1 = require("./stack");
const token_1 = require("./token");
const lazy_1 = require("./lazy");
const ros_fn_1 = require("./ros-fn");
const ros_pseudo_1 = require("./ros-pseudo");
const ros_stack_1 = require("./ros-stack");
const ros_element_1 = require("./ros-element");
const NESTED_STACK_SYMBOL = Symbol.for("ros-cdk-core.NestedStack");
class NestedStack extends stack_1.Stack {
    constructor(scope, id, props = {}) {
        super(scope, id);
        let stackProps = {
            parameters: lazy_1.Lazy.anyValue({
                produce: () => Object.keys(this.parameters).length > 0 ? this.parameters : undefined,
            }),
            timeoutMins: props.timeout,
        };
        if (props.templateUrl) {
            stackProps.templateUrl = props.templateUrl;
        }
        else {
            stackProps.templateBody = lazy_1.Lazy.stringValue({
                produce: () => this.templateBody,
            });
        }
        const parentScope = new construct_compat_1.Construct(scope, id + ".NestedStack");
        this.resource = new ros_stack_1.RosStack(parentScope, `${id}`, stackProps);
        this._contextualStackName = this.contextualAttribute(ros_pseudo_1.RosPseudo.stackName, ros_fn_1.Fn.select(1, ros_fn_1.Fn.split("/", this.resource.ref)));
        this._contextualStackId = this.contextualAttribute(ros_pseudo_1.RosPseudo.stackId, this.resource.ref);
        Object.defineProperty(this, NESTED_STACK_SYMBOL, { value: true });
        this.parameters = props.parameters || {};
    }
    static isNestedStack(x) {
        return x != null && typeof x === "object" && NESTED_STACK_SYMBOL in x;
    }
    /**
     * @internal
     */
    _toRosTemplate() {
        const template = {};
        const elements = rosElements(this);
        if (elements.length === 0)
            return;
        const fragments = elements.map((e) => this.resolve(e._toRosTemplate()));
        for (const fragment of fragments) {
            merge(template, fragment);
        }
        this.templateBody = this.resolve(template);
        return this.templateBody;
    }
    get stackName() {
        return this._contextualStackName;
    }
    get stackId() {
        return this._contextualStackId;
    }
    setParameter(name, value) {
        this.parameters[name] = value;
    }
    getAtt(attributeName) {
        return token_1.Token.asString(this.resource.getAtt("Outputs." + attributeName));
    }
    contextualAttribute(innerValue, outerValue) {
        return token_1.Token.asString({
            resolve: (context) => {
                if (stack_1.Stack.of(context.scope) === this) {
                    return innerValue;
                }
                else {
                    return outerValue;
                }
            },
        });
    }
}
exports.NestedStack = NestedStack;
function rosElements(node, into = []) {
    if (ros_element_1.RosElement.isRosElement(node)) {
        into.push(node);
    }
    for (const child of node.node.children) {
        // Don't recurse into a substack
        if (stack_1.Stack.isStack(child)) {
            continue;
        }
        rosElements(child, into);
    }
    return into;
}
function merge(template, fragment) {
    for (const section of Object.keys(fragment)) {
        const src = fragment[section];
        // create top-level section if it doesn't exist
        const dest = template[section];
        if (!dest) {
            template[section] = src;
        }
        else {
            template[section] = mergeSection(section, dest, src);
        }
    }
}
function mergeSection(section, val1, val2) {
    switch (section) {
        case "Description":
            return `${val1}\n${val2}`;
        case "Resources":
        case "Conditions":
        case "Parameters":
        case "Outputs":
        case "Mappings":
        case "Metadata":
            return mergeObjectsWithoutDuplicates(section, val1, val2);
        default:
            throw new Error(`CDK doesn't know how to merge two instances of the template section '${section}' - ` +
                "please remove one of them from your code");
    }
}
function mergeObjectsWithoutDuplicates(section, dest, src) {
    if (typeof dest !== "object") {
        throw new Error(`Expecting ${JSON.stringify(dest)} to be an object`);
    }
    if (typeof src !== "object") {
        throw new Error(`Expecting ${JSON.stringify(src)} to be an object`);
    }
    // add all entities from source section to destination section
    for (const id of Object.keys(src)) {
        if (id in dest) {
            throw new Error(`section '${section}' already contains '${id}'`);
        }
        dest[id] = src[id];
    }
    return dest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmVzdGVkLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUEyRDtBQUMzRCxtQ0FBZ0M7QUFFaEMsbUNBQWdDO0FBQ2hDLGlDQUE4QjtBQUM5QixxQ0FBOEI7QUFDOUIsNkNBQXlDO0FBQ3pDLDJDQUF1QztBQUN2QywrQ0FBMkM7QUFHM0MsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFRbkUsTUFBYSxXQUFZLFNBQVEsYUFBSztJQVdwQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQTBCLEVBQUU7UUFDcEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBMkI7WUFDdkMsVUFBVSxFQUFFLFdBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3hFLENBQUM7WUFDRixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDM0IsQ0FBQztRQUVGLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNyQixVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDNUM7YUFBTTtZQUNMLFVBQVUsQ0FBQyxZQUFZLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO2FBQ2pDLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSw0QkFBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsY0FBYyxDQUFD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TyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0VBQXdFLE9BQU8sTUFBTTtnQkFDbkYsMENBQTBDLENBQzdDLENBQUM7S0FDTDtBQUNILENBQUM7QUFFRCxTQUFTLDZCQUE2QixDQUNwQyxPQUFlLEVBQ2YsSUFBUyxFQUNULEdBQVE7SUFFUixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN0RTtJQUNELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3JFO0lBRUQsOERBQThEO0lBQzlELEtBQUssTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNqQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksT0FBTyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XG5cbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCB7IExhenkgfSBmcm9tIFwiLi9sYXp5XCI7XG5pbXBvcnQgeyBGbiB9IGZyb20gXCIuL3Jvcy1mblwiO1xuaW1wb3J0IHsgUm9zUHNldWRvIH0gZnJvbSBcIi4vcm9zLXBzZXVkb1wiO1xuaW1wb3J0IHsgUm9zU3RhY2sgfSBmcm9tIFwiLi9yb3Mtc3RhY2tcIjtcbmltcG9ydCB7IFJvc0VsZW1lbnQgfSBmcm9tIFwiLi9yb3MtZWxlbWVudFwiO1xuaW1wb3J0IHsgSVJlc29sdmVDb250ZXh0IH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuXG5jb25zdCBORVNURURfU1RBQ0tfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5OZXN0ZWRTdGFja1wiKTtcbmV4cG9ydCBpbnRlcmZhY2UgTmVzdGVkU3RhY2tQcm9wcyB7XG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICByZWFkb25seSB0ZW1wbGF0ZVVybD86IHN0cmluZztcbiAgcmVhZG9ubHkgdGVtcGxhdGVCb2R5Pzogc3RyaW5nO1xuICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmVzdGVkU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIHB1YmxpYyBzdGF0aWMgaXNOZXN0ZWRTdGFjayh4OiBhbnkpOiB4IGlzIE5lc3RlZFN0YWNrIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIE5FU1RFRF9TVEFDS19TWU1CT0wgaW4geDtcbiAgfVxuXG4gIHByaXZhdGUgcGFyYW1ldGVyczogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG4gIHByaXZhdGUgcmVzb3VyY2U6IFJvc1N0YWNrO1xuICBwcml2YXRlIF9jb250ZXh0dWFsU3RhY2tJZDogc3RyaW5nO1xuICBwcml2YXRlIF9jb250ZXh0dWFsU3RhY2tOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdGVtcGxhdGVCb2R5Pzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBOZXN0ZWRTdGFja1Byb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIGxldCBzdGFja1Byb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgcGFyYW1ldGVyczogTGF6eS5hbnlWYWx1ZSh7XG4gICAgICAgIHByb2R1Y2U6ICgpID0+XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wYXJhbWV0ZXJzKS5sZW5ndGggPiAwID8gdGhpcy5wYXJhbWV0ZXJzIDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgICB0aW1lb3V0TWluczogcHJvcHMudGltZW91dCxcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzdGFja1Byb3BzLnRlbXBsYXRlVXJsID0gcHJvcHMudGVtcGxhdGVVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrUHJvcHMudGVtcGxhdGVCb2R5ID0gTGF6eS5zdHJpbmdWYWx1ZSh7XG4gICAgICAgIHByb2R1Y2U6ICgpID0+IHRoaXMudGVtcGxhdGVCb2R5LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2NvcGUgPSBuZXcgQ29uc3RydWN0KHNjb3BlLCBpZCArIFwiLk5lc3RlZFN0YWNrXCIpO1xuICAgIHRoaXMucmVzb3VyY2UgPSBuZXcgUm9zU3RhY2socGFyZW50U2NvcGUsIGAke2lkfWAsIHN0YWNrUHJvcHMpO1xuICAgIHRoaXMuX2NvbnRleHR1YWxTdGFja05hbWUgPSB0aGlzLmNvbnRleHR1YWxBdHRyaWJ1dGUoXG4gICAgICBSb3NQc2V1ZG8uc3RhY2tOYW1lLFxuICAgICAgRm4uc2VsZWN0KDEsIEZuLnNwbGl0KFwiL1wiLCB0aGlzLnJlc291cmNlLnJlZikpXG4gICAgKTtcbiAgICB0aGlzLl9jb250ZXh0dWFsU3RhY2tJZCA9IHRoaXMuY29udGV4dHVhbEF0dHJpYnV0ZShcbiAgICAgIFJvc1BzZXVkby5zdGFja0lkLFxuICAgICAgdGhpcy5yZXNvdXJjZS5yZWZcbiAgICApO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBORVNURURfU1RBQ0tfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHByb3BzLnBhcmFtZXRlcnMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfdG9Sb3NUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZTogYW55ID0ge307XG4gICAgY29uc3QgZWxlbWVudHMgPSByb3NFbGVtZW50cyh0aGlzKTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBmcmFnbWVudHMgPSBlbGVtZW50cy5tYXAoKGUpID0+IHRoaXMucmVzb2x2ZShlLl90b1Jvc1RlbXBsYXRlKCkpKTtcbiAgICBmb3IgKGNvbnN0IGZyYWdtZW50IG9mIGZyYWdtZW50cykge1xuICAgICAgbWVyZ2UodGVtcGxhdGUsIGZyYWdtZW50KTtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZUJvZHkgPSB0aGlzLnJlc29sdmUodGVtcGxhdGUpO1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlQm9keTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhY2tOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0dWFsU3RhY2tOYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFja0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0dWFsU3RhY2tJZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYXJhbWV0ZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5wYXJhbWV0ZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXR0KGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFRva2VuLmFzU3RyaW5nKHRoaXMucmVzb3VyY2UuZ2V0QXR0KFwiT3V0cHV0cy5cIiArIGF0dHJpYnV0ZU5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udGV4dHVhbEF0dHJpYnV0ZShpbm5lclZhbHVlOiBzdHJpbmcsIG91dGVyVmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh7XG4gICAgICByZXNvbHZlOiAoY29udGV4dDogSVJlc29sdmVDb250ZXh0KSA9PiB7XG4gICAgICAgIGlmIChTdGFjay5vZihjb250ZXh0LnNjb3BlKSA9PT0gdGhpcykge1xuICAgICAgICAgIHJldHVybiBpbm5lclZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvdXRlclZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvc0VsZW1lbnRzKG5vZGU6IElDb25zdHJ1Y3QsIGludG86IFJvc0VsZW1lbnRbXSA9IFtdKTogUm9zRWxlbWVudFtdIHtcbiAgaWYgKFJvc0VsZW1lbnQuaXNSb3NFbGVtZW50KG5vZGUpKSB7XG4gICAgaW50by5wdXNoKG5vZGUpO1xuICB9XG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gRG9uJ3QgcmVjdXJzZSBpbnRvIGEgc3Vic3RhY2tcbiAgICBpZiAoU3RhY2suaXNTdGFjayhjaGlsZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByb3NFbGVtZW50cyhjaGlsZCwgaW50byk7XG4gIH1cbiAgcmV0dXJuIGludG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlOiBhbnksIGZyYWdtZW50OiBhbnkpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBzZWN0aW9uIG9mIE9iamVjdC5rZXlzKGZyYWdtZW50KSkge1xuICAgIGNvbnN0IHNyYyA9IGZyYWdtZW50W3NlY3Rpb25dO1xuXG4gICAgLy8gY3JlYXRlIHRvcC1sZXZlbCBzZWN0aW9uIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBjb25zdCBkZXN0ID0gdGVtcGxhdGVbc2VjdGlvbl07XG4gICAgaWYgKCFkZXN0KSB7XG4gICAgICB0ZW1wbGF0ZVtzZWN0aW9uXSA9IHNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGxhdGVbc2VjdGlvbl0gPSBtZXJnZVNlY3Rpb24oc2VjdGlvbiwgZGVzdCwgc3JjKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTZWN0aW9uKHNlY3Rpb246IHN0cmluZywgdmFsMTogYW55LCB2YWwyOiBhbnkpOiBhbnkge1xuICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICBjYXNlIFwiRGVzY3JpcHRpb25cIjpcbiAgICAgIHJldHVybiBgJHt2YWwxfVxcbiR7dmFsMn1gO1xuICAgIGNhc2UgXCJSZXNvdXJjZXNcIjpcbiAgICBjYXNlIFwiQ29uZGl0aW9uc1wiOlxuICAgIGNhc2UgXCJQYXJhbWV0ZXJzXCI6XG4gICAgY2FzZSBcIk91dHB1dHNcIjpcbiAgICBjYXNlIFwiTWFwcGluZ3NcIjpcbiAgICBjYXNlIFwiTWV0YWRhdGFcIjpcbiAgICAgIHJldHVybiBtZXJnZU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyhzZWN0aW9uLCB2YWwxLCB2YWwyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ0RLIGRvZXNuJ3Qga25vdyBob3cgdG8gbWVyZ2UgdHdvIGluc3RhbmNlcyBvZiB0aGUgdGVtcGxhdGUgc2VjdGlvbiAnJHtzZWN0aW9ufScgLSBgICtcbiAgICAgICAgICBcInBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0gZnJvbSB5b3VyIGNvZGVcIlxuICAgICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyhcbiAgc2VjdGlvbjogc3RyaW5nLFxuICBkZXN0OiBhbnksXG4gIHNyYzogYW55XG4pOiBhbnkge1xuICBpZiAodHlwZW9mIGRlc3QgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyAke0pTT04uc3RyaW5naWZ5KGRlc3QpfSB0byBiZSBhbiBvYmplY3RgKTtcbiAgfVxuICBpZiAodHlwZW9mIHNyYyAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nICR7SlNPTi5zdHJpbmdpZnkoc3JjKX0gdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cblxuICAvLyBhZGQgYWxsIGVudGl0aWVzIGZyb20gc291cmNlIHNlY3Rpb24gdG8gZGVzdGluYXRpb24gc2VjdGlvblxuICBmb3IgKGNvbnN0IGlkIG9mIE9iamVjdC5rZXlzKHNyYykpIHtcbiAgICBpZiAoaWQgaW4gZGVzdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBzZWN0aW9uICcke3NlY3Rpb259JyBhbHJlYWR5IGNvbnRhaW5zICcke2lkfSdgKTtcbiAgICB9XG4gICAgZGVzdFtpZF0gPSBzcmNbaWRdO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG4iXX0=