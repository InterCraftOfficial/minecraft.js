import { IAccount } from "./types";
/**
 * Authenticate a Minecraft account
 */
export declare function authenticate(username: string, password: string, clientToken?: string, requestUser?: boolean): Promise<IAccount>;
/**
 * Refresh a Minecraft account
 */
export declare function refresh(accessToken: string, clientToken: string): Promise<IAccount>;
/**
 * Validate the given access token
 */
export declare function validate(accessToken: string, clientToken?: string): Promise<{}>;
/**
 * Invalidate the given access token
 */
export declare function invalidate(accessToken: string, clientToken?: string): Promise<{}>;
/**
 * Sign out by invalidating all access tokens
 */
export declare function signout(username: string, password: string): Promise<{}>;
