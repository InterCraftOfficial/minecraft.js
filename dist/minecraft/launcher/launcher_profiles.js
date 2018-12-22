"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_database_1 = __importDefault(require("./authentication_database"));
const profiles_1 = __importDefault(require("./profiles"));
class LauncherProfiles {
    constructor() {
        this.__authDb = new authentication_database_1.default();
        this.__profiles = new profiles_1.default();
    }
    // Accessors -----------------------------------------------------------------------------------
    /**
     * Get the analytics fail count
     */
    analyticsFailCount() { }
    /**
     * Get the analytics token
     */
    analyticsToken() { }
    /**
     * Get the client token
     */
    clientToken() { }
    /**
     * Get the launcher version
     */
    launcherVersion() { }
    /**
     * Fetch and manage profiles
     */
    profiles() { }
    /**
     * Get the selected profile
     */
    selectedProfile() { }
    /**
     * Get the selected user
     */
    selectedUser() { }
    /**
     * Get the launcher settings
     */
    settings() { }
    /**
     * Get the authentication database
     */
    users() { }
    // Mutators ------------------------------------------------------------------------------------
    /**
     * Set the analytics fail count
     */
    setAnalyticsFailCount(count) { }
    /**
     * Set the analytics token
     */
    setAnalyticsToken(token) { }
    /**
     * Set the client token
     */
    setClientToken() { }
    /**
     * Set the selected profile
     */
    setSelectedProfile() { }
    /**
     * @TODO Not sure the best way to implement this...
     *
     * Should take in an account instance of some sort,
     * but it also needs the profile for that account...
     * There could be an object that represents the
     * account profile which has a reference to the
     * account that owns that profile. Maybe...
     */
    setSelectedUser() { }
    /**
     * Set the launcher settings
     */
    setSettings() { }
}
exports.default = LauncherProfiles;
//# sourceMappingURL=launcher_profiles.js.map