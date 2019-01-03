import { IAccount } from "mojang/api/types";
export default class User {
    /**
     * Authenticate a new user and return the instance
     */
    static authenticate(email: string, password: string): void;
    /**
     * Store the clientToken for convenience
     */
    private __clientToken?;
    /**
     * Store the account info after authentication
     */
    private __account?;
    /**
     * Genelat account information
     */
    private __id;
    private __accessToken;
    private __email;
    /**
     * @TODO This constructor is temporary. Need to figure out how to properly handle this...
     */
    constructor(accessToken: string, email: string);
    /**
     * Authenticate the Minecraft account. Additional information will be available
     *
     * Changed my mind on this one, gonna not return it lol
     */
    authenticate(password: string): Promise<{}>;
    /**
     * Refresh the account
     */
    refresh(): Promise<{}>;
    /**
     * Validate the account's access token
     */
    validate(): Promise<{}>;
    /**
     * Invalidate the user's access token
     */
    invalidate(): Promise<{}>;
    /**
     * Invalidate all access tokens
     */
    signout(password: string): Promise<{}>;
    accountInfo(): IAccount | undefined;
    /**
     * Get the account's access token
     */
    accessToken(): string;
    /**
     * Get the account ID
     */
    id(): void;
    /**
     * Check if the account has been authenticated
     */
    isAuthenticated(): boolean;
    /**
     * Get the email associated with the account
     */
    email(): string;
    /**
     * Get the user's profile
     */
    profile(): void;
    /**
     * Mojang has yet to implement this feature, but here it is
     */
    profiles(): void;
}
