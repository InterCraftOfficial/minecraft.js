import LauncherProfile from "./launcher_profile";
import { IProfiles } from "./core/types";
export default class LauncherProfileList {
    /**
     * Store the list of profiles as an array
     */
    private __profiles;
    /**
     * Create a manager for the launcher profiles
     */
    constructor(profiles: IProfiles);
    /**
     * Add a new lanucher profile
     */
    add(profile: LauncherProfile): boolean;
    /**
     * Fetch all launcher profiles
     */
    all(): LauncherProfile[];
    /**
     * Check if a launcher profile exists in the list
     */
    exists(profile: LauncherProfile): boolean;
    /**
     * Get an account from the database
     */
    get(id: string): LauncherProfile | undefined;
    /**
     * Convert the profile list to JSON format
     */
    json(): IProfiles;
    /**
     * Remove an account
     */
    remove(profile: LauncherProfile): boolean;
}
