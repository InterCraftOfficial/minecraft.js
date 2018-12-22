export default class LauncherProfiles {
    private __authDb;
    private __profiles;
    constructor();
    /**
     * Get the analytics fail count
     */
    analyticsFailCount(): void;
    /**
     * Get the analytics token
     */
    analyticsToken(): void;
    /**
     * Get the client token
     */
    clientToken(): void;
    /**
     * Get the launcher version
     */
    launcherVersion(): void;
    /**
     * Fetch and manage profiles
     */
    profiles(): void;
    /**
     * Get the selected profile
     */
    selectedProfile(): void;
    /**
     * Get the selected user
     */
    selectedUser(): void;
    /**
     * Get the launcher settings
     */
    settings(): void;
    /**
     * Get the authentication database
     */
    users(): void;
    /**
     * Set the analytics fail count
     */
    setAnalyticsFailCount(count: number): void;
    /**
     * Set the analytics token
     */
    setAnalyticsToken(token: string): void;
    /**
     * Set the client token
     */
    setClientToken(): void;
    /**
     * Set the selected profile
     */
    setSelectedProfile(): void;
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
    setSettings(): void;
}
