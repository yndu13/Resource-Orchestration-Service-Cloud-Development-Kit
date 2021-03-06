import { TokenizedStringFragments } from "../string-fragments";
import { IResolvable } from "../resolvable";
/**
 * Central place where we keep a mapping from Tokens to their String representation
 *
 * The string representation is used to embed token into strings,
 * and stored to be able to reverse that mapping.
 *
 * All instances of TokenStringMap share the same storage, so that this process
 * works even when different copies of the library are loaded.
 */
export declare class TokenMap {
    /**
     * Singleton instance of the token string map
     */
    static instance(): TokenMap;
    private readonly stringTokenMap;
    private readonly numberTokenMap;
    private tokenCounter;
    /**
     * Generate a unique string for this Token, returning a key
     *
     * Every call for the same Token will produce a new unique string, no
     * attempt is made to deduplicate. Token objects should cache the
     * value themselves, if required.
     *
     * The token can choose (part of) its own representation string with a
     * hint. This may be used to produce aesthetically pleasing and
     * recognizable token representations for humans.
     */
    registerString(token: IResolvable, displayHint?: string): string;
    /**
     * Generate a unique string for this Token, returning a key
     */
    registerList(token: IResolvable, displayHint?: string): string[];
    /**
     * Create a unique number representation for this Token and return it
     */
    registerNumber(token: IResolvable): number;
    /**
     * Lookup a token from an encoded value
     */
    tokenFromEncoding(x: any): IResolvable | undefined;
    /**
     * Reverse a string representation into a Token object
     */
    lookupString(s: string): IResolvable | undefined;
    /**
     * Reverse a string representation into a Token object
     */
    lookupList(xs: string[]): IResolvable | undefined;
    /**
     * Split a string into literals and Tokens
     */
    splitString(s: string): TokenizedStringFragments;
    /**
     * Reverse a number encoding into a Token, or undefined if the number wasn't a Token
     */
    lookupNumberToken(x: number): IResolvable | undefined;
    /**
     * Find a Token by key.
     *
     * This excludes the token markers.
     */
    lookupToken(key: string): IResolvable;
    private registerStringKey;
    private registerNumberKey;
}
