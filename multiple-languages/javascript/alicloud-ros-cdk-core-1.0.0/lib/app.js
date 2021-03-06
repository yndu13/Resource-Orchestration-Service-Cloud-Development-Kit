"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const tree_metadata_1 = require("./private/tree-metadata");
const stage_1 = require("./stage");
const APP_SYMBOL = Symbol.for("ros-cdk-core.App");
/**
 * A construct which represents an entire CDK app. This construct is normally
 * the root of the construct tree.
 *
 * You would normally define an `App` instance in your program's entrypoint,
 * then define constructs where the app is used as the parent scope.
 *
 * After all the child constructs are defined within the app, you should call
 * `app.synth()` which will emit a "ros template" from this app into the
 * directory specified by `outdir`.
 */
class App extends stage_1.Stage {
    /**
     * Checks if an object is an instance of the `App` class.
     * @returns `true` if `obj` is an `App`.
     * @param obj The object to evaluate
     */
    static isApp(obj) {
        return APP_SYMBOL in obj;
    }
    /**
     * Initializes a CDK application.
     * @param props initialization properties
     */
    constructor(props = {}) {
        var _a;
        super(undefined, "", {
            outdir: (_a = props.outdir) !== null && _a !== void 0 ? _a : process.env[cxapi.OUTDIR_ENV],
        });
        Object.defineProperty(this, APP_SYMBOL, { value: true });
        this.loadContext(props.context);
        if (props.stackTraces === false) {
            this.node.setContext(cxapi.DISABLE_METADATA_STACK_TRACE, true);
        }
        const autoSynth = props.autoSynth !== undefined
            ? props.autoSynth
            : cxapi.OUTDIR_ENV in process.env;
        if (autoSynth) {
            // synth() guarantuees it will only execute once, so a default of 'true'
            // doesn't bite manual calling of the function.
            process.once("beforeExit", () => this.synth());
        }
        if (props.treeMetadata === undefined || props.treeMetadata) {
            new tree_metadata_1.TreeMetadata(this);
        }
    }
    loadContext(defaults = {}) {
        // prime with defaults passed through constructor
        for (const [k, v] of Object.entries(defaults)) {
            this.node.setContext(k, v);
        }
        // read from environment
        const contextJson = process.env[cxapi.CONTEXT_ENV];
        const contextFromEnvironment = contextJson ? JSON.parse(contextJson) : {};
        for (const [k, v] of Object.entries(contextFromEnvironment)) {
            this.node.setContext(k, v);
        }
    }
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCwyREFBdUQ7QUFDdkQsbUNBQWdDO0FBRWhDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQXlEbEQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQWEsR0FBSSxTQUFRLGFBQUs7SUFDNUI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBUTtRQUMxQixPQUFPLFVBQVUsSUFBSSxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksUUFBa0IsRUFBRTs7UUFDOUIsS0FBSyxDQUFDLFNBQWdCLEVBQUUsRUFBRSxFQUFFO1lBQzFCLE1BQU0sUUFBRSxLQUFLLENBQUMsTUFBTSxtQ0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEU7UUFFRCxNQUFNLFNBQVMsR0FDYixLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxTQUFTLEVBQUU7WUFDYix3RUFBd0U7WUFDeEUsK0NBQStDO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzFELElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTyxXQUFXLENBQUMsV0FBc0MsRUFBRTtRQUMxRCxpREFBaUQ7UUFDakQsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsd0JBQXdCO1FBQ3hCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sc0JBQXNCLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFMUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQ0Y7QUF4REQsa0JBd0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgeyBUcmVlTWV0YWRhdGEgfSBmcm9tIFwiLi9wcml2YXRlL3RyZWUtbWV0YWRhdGFcIjtcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2VcIjtcblxuY29uc3QgQVBQX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuQXBwXCIpO1xuXG4vKipcbiAqIEluaXRpYWxpemF0aW9uIHByb3BzIGZvciBhcHBzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY2FsbCBgc3ludGgoKWAgYmVmb3JlIHRoZSBwcm9ncmFtIGV4aXRzLlxuICAgKlxuICAgKiBJZiB5b3Ugc2V0IHRoaXMsIHlvdSBkb24ndCBoYXZlIHRvIGNhbGwgYHN5bnRoKClgIGV4cGxpY2l0bHkuIE5vdGUgdGhhdFxuICAgKiB0aGlzIGZlYXR1cmUgaXMgb25seSBhdmFpbGFibGUgZm9yIGNlcnRhaW4gcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzLCBhbmRcbiAgICogY2FsbGluZyBgc3ludGgoKWAgaXMgc3RpbGwgcmVjb21tZW5kZWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWUgaWYgcnVubmluZyB2aWEgQ0RLIENMSSAoYENES19PVVRESVJgIGlzIHNldCksIGBmYWxzZWBcbiAgICogb3RoZXJ3aXNlXG4gICAqL1xuICByZWFkb25seSBhdXRvU3ludGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGRpcmVjdG9yeSBpbnRvIHdoaWNoIHRvIGVtaXQgc3ludGhlc2l6ZWQgYXJ0aWZhY3RzLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIElmIHRoaXMgdmFsdWUgaXMgX25vdF8gc2V0LCBjb25zaWRlcnMgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBDREtfT1VURElSYC5cbiAgICogICAgICAgICAgICBJZiBgQ0RLX09VVERJUmAgaXMgbm90IGRlZmluZWQsIHVzZXMgYSB0ZW1wIGRpcmVjdG9yeS5cbiAgICovXG4gIHJlYWRvbmx5IG91dGRpcj86IHN0cmluZztcblxuICAvKipcbiAgICogSW5jbHVkZSBjb25zdHJ1Y3QgY3JlYXRpb24gc3RhY2sgdHJhY2UuXG4gICAqIEBkZWZhdWx0IHRydWUgc3RhY2sgdHJhY2VzIGFyZSBpbmNsdWRlZCB1bmxlc3MgcmVsYXRlZCBjb250ZXh0IGlzIHNldC5cbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrVHJhY2VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5jbHVkZSBydW50aW1lIHZlcnNpb25pbmcgaW5mb3JtYXRpb25cbiAgICogQGRlZmF1bHQgdHJ1ZSBydW50aW1lIGluZm8gaXMgaW5jbHVkZWQgdW5sZXNzIHJlbGF0ZWQgY29tdGV4dCBpcyBzZXQuXG4gICAqL1xuICByZWFkb25seSBydW50aW1lSW5mbz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgY29udGV4dCB2YWx1ZXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQ29udGV4dCBzZXQgYnkgdGhlIENMSSBvciB0aGUgYGNvbnRleHRgIGtleSBpbiBgY2RrLmpzb25gIGhhcyBwcmVjZWRlbmNlLlxuICAgKlxuICAgKiBDb250ZXh0IGNhbiBiZSByZWFkIGZyb20gYW55IGNvbnN0cnVjdCB1c2luZyBgbm9kZS5nZXRDb250ZXh0KGtleSlgLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIGFkZGl0aW9uYWwgY29udGV4dFxuICAgKi9cbiAgcmVhZG9ubHkgY29udGV4dD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgY29uc3RydWN0IHRyZWUgbWV0YWRhdGEgYXMgcGFydCBvZiB0aGUgQ2xvdWQgQXNzZW1ibHkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHJlYWRvbmx5IHRyZWVNZXRhZGF0YT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQSBjb25zdHJ1Y3Qgd2hpY2ggcmVwcmVzZW50cyBhbiBlbnRpcmUgQ0RLIGFwcC4gVGhpcyBjb25zdHJ1Y3QgaXMgbm9ybWFsbHlcbiAqIHRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAqXG4gKiBZb3Ugd291bGQgbm9ybWFsbHkgZGVmaW5lIGFuIGBBcHBgIGluc3RhbmNlIGluIHlvdXIgcHJvZ3JhbSdzIGVudHJ5cG9pbnQsXG4gKiB0aGVuIGRlZmluZSBjb25zdHJ1Y3RzIHdoZXJlIHRoZSBhcHAgaXMgdXNlZCBhcyB0aGUgcGFyZW50IHNjb3BlLlxuICpcbiAqIEFmdGVyIGFsbCB0aGUgY2hpbGQgY29uc3RydWN0cyBhcmUgZGVmaW5lZCB3aXRoaW4gdGhlIGFwcCwgeW91IHNob3VsZCBjYWxsXG4gKiBgYXBwLnN5bnRoKClgIHdoaWNoIHdpbGwgZW1pdCBhIFwicm9zIHRlbXBsYXRlXCIgZnJvbSB0aGlzIGFwcCBpbnRvIHRoZVxuICogZGlyZWN0b3J5IHNwZWNpZmllZCBieSBgb3V0ZGlyYC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFN0YWdlIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGBBcHBgIGNsYXNzLlxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgYG9iamAgaXMgYW4gYEFwcGAuXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBldmFsdWF0ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0FwcChvYmo6IGFueSk6IG9iaiBpcyBBcHAge1xuICAgIHJldHVybiBBUFBfU1lNQk9MIGluIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIENESyBhcHBsaWNhdGlvbi5cbiAgICogQHBhcmFtIHByb3BzIGluaXRpYWxpemF0aW9uIHByb3BlcnRpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkIGFzIGFueSwgXCJcIiwge1xuICAgICAgb3V0ZGlyOiBwcm9wcy5vdXRkaXIgPz8gcHJvY2Vzcy5lbnZbY3hhcGkuT1VURElSX0VOVl0sXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgQVBQX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuICAgIHRoaXMubG9hZENvbnRleHQocHJvcHMuY29udGV4dCk7XG5cbiAgICBpZiAocHJvcHMuc3RhY2tUcmFjZXMgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm5vZGUuc2V0Q29udGV4dChjeGFwaS5ESVNBQkxFX01FVEFEQVRBX1NUQUNLX1RSQUNFLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvU3ludGggPVxuICAgICAgcHJvcHMuYXV0b1N5bnRoICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwcm9wcy5hdXRvU3ludGhcbiAgICAgICAgOiBjeGFwaS5PVVRESVJfRU5WIGluIHByb2Nlc3MuZW52O1xuICAgIGlmIChhdXRvU3ludGgpIHtcbiAgICAgIC8vIHN5bnRoKCkgZ3VhcmFudHVlZXMgaXQgd2lsbCBvbmx5IGV4ZWN1dGUgb25jZSwgc28gYSBkZWZhdWx0IG9mICd0cnVlJ1xuICAgICAgLy8gZG9lc24ndCBiaXRlIG1hbnVhbCBjYWxsaW5nIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgIHByb2Nlc3Mub25jZShcImJlZm9yZUV4aXRcIiwgKCkgPT4gdGhpcy5zeW50aCgpKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMudHJlZU1ldGFkYXRhID09PSB1bmRlZmluZWQgfHwgcHJvcHMudHJlZU1ldGFkYXRhKSB7XG4gICAgICBuZXcgVHJlZU1ldGFkYXRhKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZENvbnRleHQoZGVmYXVsdHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fSkge1xuICAgIC8vIHByaW1lIHdpdGggZGVmYXVsdHMgcGFzc2VkIHRocm91Z2ggY29uc3RydWN0b3JcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkZWZhdWx0cykpIHtcbiAgICAgIHRoaXMubm9kZS5zZXRDb250ZXh0KGssIHYpO1xuICAgIH1cblxuICAgIC8vIHJlYWQgZnJvbSBlbnZpcm9ubWVudFxuICAgIGNvbnN0IGNvbnRleHRKc29uID0gcHJvY2Vzcy5lbnZbY3hhcGkuQ09OVEVYVF9FTlZdO1xuICAgIGNvbnN0IGNvbnRleHRGcm9tRW52aXJvbm1lbnQgPSBjb250ZXh0SnNvbiA/IEpTT04ucGFyc2UoY29udGV4dEpzb24pIDoge307XG5cbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0RnJvbUVudmlyb25tZW50KSkge1xuICAgICAgdGhpcy5ub2RlLnNldENvbnRleHQoaywgdik7XG4gICAgfVxuICB9XG59XG4iXX0=