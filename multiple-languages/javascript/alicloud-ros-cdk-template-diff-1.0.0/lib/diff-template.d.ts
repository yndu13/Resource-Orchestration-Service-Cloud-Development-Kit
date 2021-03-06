import * as types from './diff/types';
export * from './diff/types';
/**
 * Compare two ROS templates and return semantic differences between them.
 *
 * @param currentTemplate the current state of the stack.
 * @param newTemplate     the target state of the stack.
 *
 * @returns a +types.TemplateDiff+ object that represents the changes that will happen if
 *      a stack which current state is described by +currentTemplate+ is updated with
 *      the template +newTemplate+.
 */
export declare function diffTemplate(currentTemplate: {
    [key: string]: any;
}, newTemplate: {
    [key: string]: any;
}): types.TemplateDiff;
/**
 * Compare two ROS resources and return semantic differences between them
 */
export declare function diffResource(oldValue: types.Resource, newValue: types.Resource): types.ResourceDifference;
