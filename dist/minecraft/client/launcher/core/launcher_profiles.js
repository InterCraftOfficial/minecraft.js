"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile = __importStar(require("jsonfile"));
const __1 = require("../../../../");
/**
 * Read the launcher_profiles.json file
 */
function read(file) {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, { throws: false }, (err, obj) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(obj);
            }
        });
    });
}
exports.read = read;
/**
 * Write the launcher_profiles.json file
 */
function write(file, obj) {
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, obj, { throws: false, spaces: 2 }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.write = write;
/**
 * Parse and validate a launcher_profiles JSON object
 */
function parse(obj) {
    let launcherProfiles = generate();
    parseAnalytics(launcherProfiles, obj);
    parseClientToken(launcherProfiles, obj);
    parseSettings(launcherProfiles, obj);
    parseAuthDatabase(launcherProfiles, obj);
    parseProfiles(launcherProfiles, obj);
    return obj;
}
exports.parse = parse;
/**
 * Generate a new launcher_profiles JSON object
 */
function generate() {
    return {
        clientToken: "",
        authenticationDatabase: {},
        launcherVersion: defaultLauncherVersion(),
        profiles: {}
    };
}
exports.generate = generate;
/**
 * Get the default launcher version
 */
function defaultLauncherVersion() {
    return {
        name: "2.1.1462",
        format: 21,
        profilesFormat: 2
    };
}
exports.defaultLauncherVersion = defaultLauncherVersion;
/**
 * Parse the analytics section
 */
function parseAnalytics(lp, obj) {
    if (typeof obj.analyticsFailcount == "number") {
        lp.analyticsFailcount = obj.analyticsFailcount;
    }
    if (typeof obj.analyticsToken == "string") {
        lp.analyticsToken = obj.analyticsToken;
    }
}
/**
 * Parse the client token
 */
function parseClientToken(lp, obj) {
    if (typeof obj.clientToken == "string" && __1.Utils.Uuid.isValid(obj.clientToken)) {
        lp.clientToken = lp.clientToken;
    }
    else {
        lp.clientToken = __1.Utils.Uuid.generate().toString();
    }
}
/**
 * Parse the settings
 */
function parseSettings(lp, obj) {
    if (typeof obj.settings !== "object") {
        return;
    }
    lp.settings = {};
    if (typeof obj.settings.crashAssistance === "boolean") {
        lp.settings.crashAssistance = obj.settings.crashAssistance;
    }
    if (typeof obj.settings.enableAdvanced === "boolean") {
        lp.settings.enableAdvanced = obj.settings.enableAdvanced;
    }
    if (typeof obj.settings.enableAnalytics === "boolean") {
        lp.settings.enableAnalytics = obj.settings.enableAnalytics;
    }
    if (typeof obj.settings.enableHistorical === "boolean") {
        lp.settings.enableHistorical = obj.settings.enableHistorical;
    }
    if (typeof obj.settings.enableSnapshots === "boolean") {
        lp.settings.enableSnapshots = obj.settings.enableSnapshots;
    }
    if (typeof obj.settings.keepLauncherOpen === "boolean") {
        lp.settings.keepLauncherOpen = obj.settings.keepLauncherOpen;
    }
    if (typeof obj.settings.locale === "string") {
        lp.settings.locale = obj.settings.locale;
    }
    if (typeof obj.settings.profileSorting === "string") {
        lp.settings.profileSorting = obj.settings.profileSorting;
    }
    if (typeof obj.settings.showGameLog === "boolean") {
        lp.settings.showGameLog = obj.settings.showGameLog;
    }
    if (typeof obj.settings.showMenu === "boolean") {
        lp.settings.showMenu = obj.settings.showMenu;
    }
}
/**
 * Parse the authentication database
 */
function parseAuthDatabase(lp, obj) {
    if (typeof obj.authenticationDatabase !== "object") {
        return;
    }
    for (let id in obj.authenticationDatabase) {
        if (__1.Utils.Uuid.isValid(id)) {
            let profile = obj.authenticationDatabase[id];
            if (typeof profile.accessToken === "string" || typeof profile.username === "string") {
                let user = {
                    accessToken: profile.accessToken,
                    username: profile.username,
                    profiles: {}
                };
                if (parseAuthDatabaseProfiles(user, profile)) {
                    lp.authenticationDatabase[id] = user;
                }
            }
        }
    }
}
/**
 * Parse the individual profiles for a given user account
 */
function parseAuthDatabaseProfiles(user, obj) {
    if (typeof obj.profiles !== "object" || Object.keys(obj.profiles).length < 1) {
        return false;
    }
    for (let uuid in obj.profiles) {
        let profile = obj.profiles[uuid];
        if (!__1.Utils.Uuid.isValid(uuid) || typeof profile.displayName !== "string") {
            return false;
        }
        user.profiles[uuid] = {
            displayName: profile.displayName
        };
    }
    return true;
}
/**
 * Parse the profiles
 */
function parseProfiles(lp, obj) {
    if (typeof obj.profiles !== "object") {
        return;
    }
    for (let key in obj.profiles) {
        let profile = obj.profiles[key];
        if (typeof profile.type === "string") {
            let result = {
                type: profile.type
            };
            if (typeof profile.name === "string") {
                result.name = profile.name;
            }
            if (typeof profile.created === "string") {
                result.created = profile.created;
            }
            if (typeof profile.lastUsed === "string") {
                result.lastUsed = profile.lastUsed;
            }
            if (typeof profile.lastVersionId === "string") {
                result.lastVersionId = profile.lastVersionId;
            }
            if (typeof profile.gameDir === "string") {
                result.gameDir = profile.gameDir;
            }
            if (typeof profile.javaArgs === "string") {
                result.javaArgs = profile.javaArgs;
            }
            if (typeof profile.javaDir === "string") {
                result.javaDir = profile.javaDir;
            }
            if (typeof profile.resolution === "object") {
                let width = profile.resolution.width;
                let height = profile.resolution.height;
                if (Number.isInteger(width) && Number.isInteger(height)) {
                    result.resolution = {
                        width, height
                    };
                }
            }
            lp.profiles[key] = result;
        }
    }
}
//# sourceMappingURL=launcher_profiles.js.map