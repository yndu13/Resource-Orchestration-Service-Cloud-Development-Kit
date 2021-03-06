"use strict";
// --------------------------------------------------------------------------------
// This file defines context keys that enable certain features that are
// implemented behind a flag in order to preserve backwards compatibility for
// existing apps. When a new app is initialized through `cdk init`, the CLI will
// automatically add enable these features by adding them to the generated
// `cdk.json` file. In the next major release of the CDK, these feature flags
// will be removed and will become the default behavior.
// --------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.FUTURE_FLAGS = exports.NEW_STYLE_STACK_SYNTHESIS_CONTEXT = exports.ENABLE_DIFF_NO_FAIL = exports.ENABLE_DIFF_NO_FAIL_CONTEXT = exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT = void 0;
/**
 * If this is set, multiple stacks can use the same stack name (e.g. deployed to
 * different environments). This means that the name of the synthesized template
 * file will be based on the construct path and not on the defined `stackName`
 * of the stack.
 *
 * This is a "future flag": the feature is disabled by default for backwards
 * compatibility, but new projects created using `cdk init` will have this
 * enabled through the generated `cdk.json`.
 */
exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT = "ros-cdk:enableStackNameDuplicates";
/**
 * IF this is set, `cdk diff` will always exit with 0.
 *
 * Use `cdk diff --fail` to exit with 1 if there's a diff.
 */
exports.ENABLE_DIFF_NO_FAIL_CONTEXT = "ros-cdk:enableDiffNoFail";
/** @deprecated use `ENABLE_DIFF_NO_FAIL_CONTEXT` */
exports.ENABLE_DIFF_NO_FAIL = exports.ENABLE_DIFF_NO_FAIL_CONTEXT;
/**
 * Switch to new stack synthesis method which enable CI/CD
 */
exports.NEW_STYLE_STACK_SYNTHESIS_CONTEXT = "ros-cdk:newStyleStackSynthesis";
/**
 * This map includes context keys and values for feature flags that enable
 * capabilities "from the future", which we could not introduce as the default
 * behavior due to backwards compatibility for existing projects.
 *
 * New projects generated through `cdk init` will include these flags in their
 * generated `cdk.json` file.
 *
 * When we release the next major version of the CDK, we will flip the logic of
 * these features and clean up the `cdk.json` generated by `cdk init`.
 *
 * Tests must cover the default (disabled) case and the future (enabled) case.
 */
exports.FUTURE_FLAGS = {
    [exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT]: "true",
    [exports.ENABLE_DIFF_NO_FAIL_CONTEXT]: "true",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUZBQW1GO0FBQ25GLHVFQUF1RTtBQUN2RSw2RUFBNkU7QUFDN0UsZ0ZBQWdGO0FBQ2hGLDBFQUEwRTtBQUMxRSw2RUFBNkU7QUFDN0Usd0RBQXdEO0FBQ3hELG1GQUFtRjs7O0FBRW5GOzs7Ozs7Ozs7R0FTRztBQUNVLFFBQUEsb0NBQW9DLEdBQy9DLG1DQUFtQyxDQUFDO0FBRXRDOzs7O0dBSUc7QUFDVSxRQUFBLDJCQUEyQixHQUFHLDBCQUEwQixDQUFDO0FBQ3RFLG9EQUFvRDtBQUN2QyxRQUFBLG1CQUFtQixHQUFHLG1DQUEyQixDQUFDO0FBRS9EOztHQUVHO0FBQ1UsUUFBQSxpQ0FBaUMsR0FDNUMsZ0NBQWdDLENBQUM7QUFFbkM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ1UsUUFBQSxZQUFZLEdBQUc7SUFDMUIsQ0FBQyw0Q0FBb0MsQ0FBQyxFQUFFLE1BQU07SUFDOUMsQ0FBQyxtQ0FBMkIsQ0FBQyxFQUFFLE1BQU07Q0FJdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgZGVmaW5lcyBjb250ZXh0IGtleXMgdGhhdCBlbmFibGUgY2VydGFpbiBmZWF0dXJlcyB0aGF0IGFyZVxuLy8gaW1wbGVtZW50ZWQgYmVoaW5kIGEgZmxhZyBpbiBvcmRlciB0byBwcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Jcbi8vIGV4aXN0aW5nIGFwcHMuIFdoZW4gYSBuZXcgYXBwIGlzIGluaXRpYWxpemVkIHRocm91Z2ggYGNkayBpbml0YCwgdGhlIENMSSB3aWxsXG4vLyBhdXRvbWF0aWNhbGx5IGFkZCBlbmFibGUgdGhlc2UgZmVhdHVyZXMgYnkgYWRkaW5nIHRoZW0gdG8gdGhlIGdlbmVyYXRlZFxuLy8gYGNkay5qc29uYCBmaWxlLiBJbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlIG9mIHRoZSBDREssIHRoZXNlIGZlYXR1cmUgZmxhZ3Ncbi8vIHdpbGwgYmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgdGhlIGRlZmF1bHQgYmVoYXZpb3IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIElmIHRoaXMgaXMgc2V0LCBtdWx0aXBsZSBzdGFja3MgY2FuIHVzZSB0aGUgc2FtZSBzdGFjayBuYW1lIChlLmcuIGRlcGxveWVkIHRvXG4gKiBkaWZmZXJlbnQgZW52aXJvbm1lbnRzKS4gVGhpcyBtZWFucyB0aGF0IHRoZSBuYW1lIG9mIHRoZSBzeW50aGVzaXplZCB0ZW1wbGF0ZVxuICogZmlsZSB3aWxsIGJlIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3QgcGF0aCBhbmQgbm90IG9uIHRoZSBkZWZpbmVkIGBzdGFja05hbWVgXG4gKiBvZiB0aGUgc3RhY2suXG4gKlxuICogVGhpcyBpcyBhIFwiZnV0dXJlIGZsYWdcIjogdGhlIGZlYXR1cmUgaXMgZGlzYWJsZWQgYnkgZGVmYXVsdCBmb3IgYmFja3dhcmRzXG4gKiBjb21wYXRpYmlsaXR5LCBidXQgbmV3IHByb2plY3RzIGNyZWF0ZWQgdXNpbmcgYGNkayBpbml0YCB3aWxsIGhhdmUgdGhpc1xuICogZW5hYmxlZCB0aHJvdWdoIHRoZSBnZW5lcmF0ZWQgYGNkay5qc29uYC5cbiAqL1xuZXhwb3J0IGNvbnN0IEVOQUJMRV9TVEFDS19OQU1FX0RVUExJQ0FURVNfQ09OVEVYVCA9XG4gIFwicm9zLWNkazplbmFibGVTdGFja05hbWVEdXBsaWNhdGVzXCI7XG5cbi8qKlxuICogSUYgdGhpcyBpcyBzZXQsIGBjZGsgZGlmZmAgd2lsbCBhbHdheXMgZXhpdCB3aXRoIDAuXG4gKlxuICogVXNlIGBjZGsgZGlmZiAtLWZhaWxgIHRvIGV4aXQgd2l0aCAxIGlmIHRoZXJlJ3MgYSBkaWZmLlxuICovXG5leHBvcnQgY29uc3QgRU5BQkxFX0RJRkZfTk9fRkFJTF9DT05URVhUID0gXCJyb3MtY2RrOmVuYWJsZURpZmZOb0ZhaWxcIjtcbi8qKiBAZGVwcmVjYXRlZCB1c2UgYEVOQUJMRV9ESUZGX05PX0ZBSUxfQ09OVEVYVGAgKi9cbmV4cG9ydCBjb25zdCBFTkFCTEVfRElGRl9OT19GQUlMID0gRU5BQkxFX0RJRkZfTk9fRkFJTF9DT05URVhUO1xuXG4vKipcbiAqIFN3aXRjaCB0byBuZXcgc3RhY2sgc3ludGhlc2lzIG1ldGhvZCB3aGljaCBlbmFibGUgQ0kvQ0RcbiAqL1xuZXhwb3J0IGNvbnN0IE5FV19TVFlMRV9TVEFDS19TWU5USEVTSVNfQ09OVEVYVCA9XG4gIFwicm9zLWNkazpuZXdTdHlsZVN0YWNrU3ludGhlc2lzXCI7XG5cbi8qKlxuICogVGhpcyBtYXAgaW5jbHVkZXMgY29udGV4dCBrZXlzIGFuZCB2YWx1ZXMgZm9yIGZlYXR1cmUgZmxhZ3MgdGhhdCBlbmFibGVcbiAqIGNhcGFiaWxpdGllcyBcImZyb20gdGhlIGZ1dHVyZVwiLCB3aGljaCB3ZSBjb3VsZCBub3QgaW50cm9kdWNlIGFzIHRoZSBkZWZhdWx0XG4gKiBiZWhhdmlvciBkdWUgdG8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIGV4aXN0aW5nIHByb2plY3RzLlxuICpcbiAqIE5ldyBwcm9qZWN0cyBnZW5lcmF0ZWQgdGhyb3VnaCBgY2RrIGluaXRgIHdpbGwgaW5jbHVkZSB0aGVzZSBmbGFncyBpbiB0aGVpclxuICogZ2VuZXJhdGVkIGBjZGsuanNvbmAgZmlsZS5cbiAqXG4gKiBXaGVuIHdlIHJlbGVhc2UgdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB0aGUgQ0RLLCB3ZSB3aWxsIGZsaXAgdGhlIGxvZ2ljIG9mXG4gKiB0aGVzZSBmZWF0dXJlcyBhbmQgY2xlYW4gdXAgdGhlIGBjZGsuanNvbmAgZ2VuZXJhdGVkIGJ5IGBjZGsgaW5pdGAuXG4gKlxuICogVGVzdHMgbXVzdCBjb3ZlciB0aGUgZGVmYXVsdCAoZGlzYWJsZWQpIGNhc2UgYW5kIHRoZSBmdXR1cmUgKGVuYWJsZWQpIGNhc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBGVVRVUkVfRkxBR1MgPSB7XG4gIFtFTkFCTEVfU1RBQ0tfTkFNRV9EVVBMSUNBVEVTX0NPTlRFWFRdOiBcInRydWVcIixcbiAgW0VOQUJMRV9ESUZGX05PX0ZBSUxfQ09OVEVYVF06IFwidHJ1ZVwiLFxuXG4gIC8vIFdlIHdpbGwgYWR2ZXJ0aXNlIHRoaXMgZmxhZyB3aGVuIHRoZSBmZWF0dXJlIGlzIGNvbXBsZXRlXG4gIC8vIFtORVdfU1RZTEVfU1RBQ0tfU1lOVEhFU0lTXTogJ3RydWUnLFxufTtcbiJdfQ==