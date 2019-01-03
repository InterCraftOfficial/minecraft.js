"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const launcher_profile_1 = __importDefault(require("./launcher_profile"));
const __1 = require("../../../");
class LauncherProfileList {
    /**
     * Create a manager for the launcher profiles
     */
    constructor(profiles) {
        /**
         * Store the list of profiles as an array
         */
        this.__profiles = [];
        for (let id in profiles) {
            let profile = new launcher_profile_1.default(id, profiles[id]);
            this.__profiles.push(profile);
        }
    }
    /**
     * Add a new lanucher profile
     */
    add(profile) {
        if (this.exists(profile)) {
            return false;
        }
        this.__profiles.push(profile);
        return true;
    }
    /**
     * Fetch all launcher profiles
     */
    all() {
        return this.__profiles.slice();
    }
    /**
     * Check if a launcher profile exists in the list
     */
    exists(profile) {
        return this.__profiles.indexOf(profile) !== -1;
    }
    /**
     * Get an account from the database
     */
    get(id) {
        for (let profile of this.__profiles) {
            if (profile.id() == id) {
                return profile;
            }
        }
        return undefined;
    }
    /**
     * Convert the profile list to JSON format
     */
    json() {
        let result = {};
        this.__profiles.forEach((profile) => {
            result[profile.id()] = profile.json();
        });
        return result;
    }
    /**
     * Remove an account
     */
    remove(profile) {
        return Boolean(__1.Utils.removeFromArray(this.__profiles, profile));
    }
}
exports.default = LauncherProfileList;
//# sourceMappingURL=launcher_profile_list.js.map