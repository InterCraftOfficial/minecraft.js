import User from "minecraft/user";
import { IAuthDatabase } from "./core/types";
export default class LauncherAuthDatabase {
    /**
     * Create a manager for the authentication database
     */
    constructor(authDabatase: IAuthDatabase);
    /**
     * Add a new account
     */
    add(account: User): void;
    /**
     * Fetch all accounts
     */
    all(): void;
    /**
     * Check if an account exists in the database
     */
    exists(): void;
    /**
     * Get an account from the database
     */
    get(): void;
    /**
     * Convert the auth database to JSON format
     */
    json(): {};
    /**
     * Remove an account
     */
    remove(): void;
}
