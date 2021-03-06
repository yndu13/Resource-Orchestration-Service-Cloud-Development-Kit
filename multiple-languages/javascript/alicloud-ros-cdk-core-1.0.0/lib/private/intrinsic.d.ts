import { IResolvable, IResolveContext } from "../resolvable";
/**
 * Token subclass that represents values intrinsic to the target document language
 *
 * This class will disappear in a future release and should not be used.
 *
 * @experimental
 */
export declare class Intrinsic implements IResolvable {
    /**
     * The captured stack trace which represents the location in which this token was created.
     */
    readonly creationStack: string[];
    private readonly value;
    constructor(value: any);
    resolve(_context: IResolveContext): any;
    /**
     * Convert an instance of this Token to a string
     *
     * This method will be called implicitly by language runtimes if the object
     * is embedded into a string. We treat it the same as an explicit
     * stringification.
     */
    toString(): string;
    /**
     * Turn this Token into JSON
     *
     * Called automatically when JSON.stringify() is called on a Token.
     */
    toJSON(): any;
    /**
     * Creates a throwable Error object that contains the token creation stack trace.
     * @param message Error message
     */
    protected newError(message: string): any;
}
