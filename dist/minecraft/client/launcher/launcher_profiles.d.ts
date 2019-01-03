import LauncherAuthDatabase from "./launcher_auth_database";
import LauncherProfile from "./launcher_profile";
import LauncherProfileList from "./launcher_profile_list";
import LauncherSettings from "./launcher_settings";
import { ILauncherProfiles } from "./core/types";
import { Uuid } from "../../../util";
export default class LauncherProfiles {
    /**
     * Load the launcher_profiles.json file
     */
    static load(file?: string): Promise<LauncherProfiles>;
    /**
     * Generate a new set of launcher profiles
     */
    static generate(): LauncherProfiles;
    /**
     * The user database
     */
    private __authDb;
    /**
     * The list of launcher profiles available
     */
    private __profiles;
    /**
     * The settings for the launcher
     */
    private __settings;
    /**
     * The path to the launcher_profiles.json file
     */
    private __path?;
    /**
     * General data
     */
    private __analyticsFailCount?;
    private __analyticsToken?;
    private __clientToken;
    private __selectedProfile?;
    protected constructor(profiles: ILauncherProfiles, path?: string);
    /**
     * Convert the launcher profiles to the standard JSON format
     */
    json(): ILauncherProfiles;
    /**
     * Write the launcher_profiles.json file to disk
     */
    save(): Promise<{}>;
    /**
     * Get the analytics fail count
     */
    analyticsFailCount(): number | undefined;
    /**
     * Get the analytics token
     */
    analyticsToken(): Uuid | undefined;
    /**
     * Get the client token
     */
    clientToken(): Uuid;
    /**
     * Get the launcher version
     */
    launcherVersion(): void;
    /**
     * Get the path to the launcher_profiles.json file
     */
    path(): string | undefined;
    /**
     * Fetch and manage profiles
     */
    profiles(): LauncherProfileList;
    /**
     * Get the selected profile
     */
    selectedProfile(): LauncherProfile | undefined;
    /**
     * Get the selected user
     */
    selectedUser(): void;
    /**
     * Get the launcher settings
     */
    settings(): LauncherSettings;
    /**
     * Get the authentication database
     */
    users(): LauncherAuthDatabase;
    /**
     * Set the analytics fail count
     */
    setAnalyticsFailCount(count: number): this;
    /**
     * Set the analytics token
     */
    setAnalyticsToken(token: Uuid): this;
    /**
     * Set the client token
     */
    setClientToken(token: Uuid): this;
    /**
     * Set the path to the launcher_profiles.json file
     */
    setPath(path: string): this;
    /**
     * Set the selected profile
     */
    setSelectedProfile(profile: LauncherProfile): this;
    /**
     * @TODO Not sure the best way to implement this...
     *
     * Should take in an account instance of some sort,
     * but it also needs the profile for that account...
     * There could be an object that represents the
     * account profile which has a reference to the
     * account that owns that profile. Maybe...
     */
    setSelectedUser(): void;
    /**
     * Set the launcher settings
     */
    setSettings(settings: LauncherSettings): this;
}
