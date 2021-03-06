import { Intrinsic } from "./private/intrinsic";
/**
 * An intrinsic Token that represents a reference to a construct.
 *
 * References are recorded.
 */
export declare abstract class Reference extends Intrinsic {
    /**
     * Check whether this is actually a Reference
     */
    static isReference(x: any): x is Reference;
    readonly target: IConstruct;
    readonly displayName: string;
    constructor(value: any, target: IConstruct, displayName?: string);
}
import { IConstruct } from "./construct-compat";
