import Profile from "./profile";
export default class Profiles {
    /**
     * Store the list of profiles as an array
     */
    private __profiles;
    constructor();
    /**
     * Add a new account
     */
    add(profile: Profile): void;
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
