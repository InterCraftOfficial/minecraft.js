import User from "minecraft/user";
export default class AuthenticationDatabase {
    constructor();
    /**
     * Add a new account
     */
    add(account: User): void;
    /**
     * Fetch all accounts
     */
    all(): void;
    /**
     * Get an account from the database
     */
    get(): void;
    /**
     * Check if an account exists in the database
     */
    exists(): void;
    /**
     * Remove an account
     */
    remove(): void;
}
