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
     * Authenticate the Minecraft account. Additional information will be available
     */
    authenticate(password: string): void;
    /**
     * Refresh the account
     */
    refresh(): void;
    /**
     * Validate the account's access token
     */
    validate(): void;
    /**
     * Invalidate the user's access token
     */
    invalidate(): void;
    /**
     * Invalidate all access tokens
     */
    signout(password: string): void;
    accountInfo(): IAccount | undefined;
    /**
     * Get the account's access token
     */
    accessToken(): void;
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
    email(): void;
    /**
     * Get the user's profile
     */
    profile(): void;
    /**
     * Mojang has yet to implement this feature, but here it is
     */
    profiles(): void;
}
