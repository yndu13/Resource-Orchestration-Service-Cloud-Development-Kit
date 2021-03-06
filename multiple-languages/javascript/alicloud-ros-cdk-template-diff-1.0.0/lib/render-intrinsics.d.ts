/**
 * Turn ROS intrinsics into strings
 *
 * ------
 *
 * This stringification is not intended to be mechanically reversible! It's intended
 * to be understood by humans!
 *
 * ------
 *
 * Turns Fn::GetAtt and Fn::Ref objects into the same strings that can be
 * parsed by Fn::Sub, but without the surrounding intrinsics.
 *
 * Evaluates Fn::Join directly if the second argument is a literal list of strings.
 *
 * For other intrinsics we choose a string representation that ROS
 * cannot actually parse, but is comprehensible to humans.
 */
export declare function renderIntrinsics(x: any): any;
