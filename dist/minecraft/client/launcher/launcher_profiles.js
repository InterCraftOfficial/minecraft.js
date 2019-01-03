"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const launcher_auth_database_1 = __importDefault(require("./launcher_auth_database"));
const launcher_profile_list_1 = __importDefault(require("./launcher_profile_list"));
const launcher_settings_1 = __importDefault(require("./launcher_settings"));
const launcherProfiles = __importStar(require("./core/launcher_profiles"));
const util_1 = require("../../../util");
const __1 = require("../../../");
//import { IAccount } from "mojang/api/types";
class LauncherProfiles {
    /**
     * Load the launcher_profiles.json file
     */
    static load(file) {
        let path = file || __1.environment.defaultLauncherProfilesPath();
        return new Promise((resolve, reject) => {
            launcherProfiles.read(path).then((profiles) => {
                let parsedProfiles = launcherProfiles.parse(profiles);
                resolve(new this(parsedProfiles, path));
            }).catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Generate a new set of launcher profiles
     */
    static generate() {
        return new this(launcherProfiles.generate());
    }
    constructor(profiles, path) {
        this.__authDb = new launcher_auth_database_1.default(profiles.authenticationDatabase);
        this.__profiles = new launcher_profile_list_1.default(profiles.profiles);
        this.__settings = new launcher_settings_1.default(profiles.settings);
        this.__analyticsFailCount = profiles.analyticsFailcount;
        this.__clientToken = util_1.Uuid.loadOrGenerate(profiles.clientToken);
        if (profiles.analyticsToken) {
            this.__analyticsToken = util_1.Uuid.loadOrGenerate(profiles.analyticsToken);
        }
    }
    // Methods ------------------------------------------------------------------------------------
    /**
     * Convert the launcher profiles to the standard JSON format
     */
    json() {
        let result = {
            authenticationDatabase: this.__authDb.json(),
            clientToken: this.__clientToken.toString(),
            launcherVersion: launcherProfiles.defaultLauncherVersion(),
            profiles: this.__profiles.json(),
            settings: this.__settings.json()
        };
        return result;
    }
    /**
     * Write the launcher_profiles.json file to disk
     */
    save() {
        return new Promise((resolve, reject) => {
            let json = this.json();
            let path = this.__path || __1.environment.defaultLauncherProfilesPath();
            launcherProfiles.write(path, json).then(resolve).catch(reject);
        });
    }
    // Accessors -----------------------------------------------------------------------------------
    /**
     * Get the analytics fail count
     */
    analyticsFailCount() {
        return this.__analyticsFailCount;
    }
    /**
     * Get the analytics token
     */
    analyticsToken() {
        return this.__analyticsToken;
    }
    /**
     * Get the client token
     */
    clientToken() {
        return this.__clientToken;
    }
    /**
     * Get the launcher version
     */
    launcherVersion() {
        // return this.__version;
    }
    /**
     * Get the path to the launcher_profiles.json file
     */
    path() {
        return this.__path;
    }
    /**
     * Fetch and manage profiles
     */
    profiles() {
        return this.__profiles;
    }
    /**
     * Get the selected profile
     */
    selectedProfile() {
        return this.__selectedProfile;
    }
    /**
     * Get the selected user
     */
    selectedUser() { }
    /**
     * Get the launcher settings
     */
    settings() {
        return this.__settings;
    }
    /**
     * Get the authentication database
     */
    users() {
        return this.__authDb;
    }
    // Mutators ------------------------------------------------------------------------------------
    /**
     * Set the analytics fail count
     */
    setAnalyticsFailCount(count) {
        this.__analyticsFailCount = count;
        return this;
    }
    /**
     * Set the analytics token
     */
    setAnalyticsToken(token) {
        this.__analyticsToken = token;
        return this;
    }
    /**
     * Set the client token
     */
    setClientToken(token) {
        this.__clientToken = token;
        return this;
    }
    /**
     * Set the path to the launcher_profiles.json file
     */
    setPath(path) {
        this.__path = path;
        return this;
    }
    /**
     * Set the selected profile
     */
    setSelectedProfile(profile) {
        this.__selectedProfile = profile;
        return this;
    }
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
    setSettings(settings) {
        this.__settings = settings;
        return this;
    }
}
exports.default = LauncherProfiles;
//# sourceMappingURL=launcher_profiles.js.map