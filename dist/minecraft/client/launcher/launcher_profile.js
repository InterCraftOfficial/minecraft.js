"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../../");
/**
 * Possible profile types
 */
var LauncherProfileType;
(function (LauncherProfileType) {
    LauncherProfileType["Custom"] = "custom";
    LauncherProfileType["LatestRelease"] = "latest-release";
    LauncherProfileType["LatestSnapshot"] = "latest-snapshot";
})(LauncherProfileType = exports.LauncherProfileType || (exports.LauncherProfileType = {}));
class LauncherProfile {
    /**
     * Create the profile instance
     */
    constructor(id, profile) {
        this.__javaArgs = [];
        if (profile === undefined) {
            this.__id = __1.Utils.Uuid.generate().toString();
            this.__type = id;
        }
        else {
            this.__id = id;
            this.init(id, profile);
        }
    }
    /**
     * Initialize the profile values from the given JSON
     */
    init(id, profile) {
        this.__id = id;
        this.__name = profile.name;
        this.__type = profile.type;
        this.__created = __1.Utils.stringToDate(profile.created);
        this.__lastUsed = __1.Utils.stringToDate(profile.lastUsed);
        this.__versionId = profile.lastVersionId;
        this.__gameDir = profile.gameDir;
        this.__javaDir = profile.javaDir;
        this.__javaArgs = __1.Utils.parseArgumentString(profile.javaArgs || "");
        this.__resolution = profile.resolution;
    }
    // Methods -------------------------------------------------------------------------------------
    /**
     * Delete the profile from the launcher profiles (if assigned)
     */
    delete() {
        if (this.__profiles) {
            return this.__profiles.remove(this);
        }
        return false;
    }
    /**
     * Convert the profile to JSON format
     */
    json() {
        return {
            name: this.__name,
            type: this.__type,
            created: __1.Utils.dateToString(this.__created),
            lastUsed: __1.Utils.dateToString(this.__lastUsed, true),
            lastVersionId: this.__versionId,
            gameDir: this.__gameDir,
            javaDir: this.__javaDir,
            javaArgs: (this.__javaArgs.length && this.__javaArgs.join(' ')) || undefined,
            resolution: this.__resolution
        };
    }
    // Accessors/Mutators --------------------------------------------------------------------------
    /**
     * Get the date the profile was created
     */
    created() { }
    /**
     * Get the game directory
     */
    gameDir() {
        return __dirname;
    }
    /**
     * Get the Id
     */
    id() {
        return this.__id;
    }
    /**
     * Get the java arguments
     */
    javaArgs() {
        return this.__javaArgs;
    }
    /**
     * Get the Java directory
     */
    javaDir() {
        return this.__javaDir;
    }
    /**
     * Get the date the profile was last used
     */
    lastUsed() {
        return this.__lastUsed;
    }
    /**
     * @TODO Get a Version object instead
     * Get the last version ID
     */
    lastVersionId() {
        return this.__versionId;
    }
    /**
     * Get the name of the profile
     */
    name() {
        return this.__name;
    }
    /**
     * Get the initial game resolution
     */
    resolution() {
        return this.__resolution;
    }
    /**
     * Get the profile type
     */
    type() {
        return this.__type;
    }
    /**
     * Get the date the profile was created
     */
    // Mutators ------------------------------------------------------------------------------------
    setCreated(created) {
        this.__created = created;
        return this;
    }
    /**
     * Get the game directory
     */
    setGameDir(dir) {
        this.__gameDir = dir;
        return this;
    }
    /**
     * Set the ID of a profile
     */
    setId(id) {
        this.__id = id;
        return this;
    }
    /**
     * Set the java arguments
     */
    setJavaArgs(args) {
        this.__javaArgs = args;
        return this;
    }
    /**
     * Get the Java directory
     */
    setJavaDir(dir) {
        this.__javaDir = dir;
        return this;
    }
    /**
     * Set the date the profile was last used
     */
    setLastUsed(lastUsed) {
        this.__lastUsed = lastUsed;
        return this;
    }
    /**
     * Set the last version ID
     */
    setLastVersionId(version) {
        this.__versionId = version;
        return this;
    }
    /**
     * Set the name of the profile
     */
    setName(name) {
        this.__name = name;
        return this;
    }
    /**
     * [NOT FOR STANDARD USE] Set the profile list that the profile is a part of
     */
    setProfileList(profiles) {
        this.__profiles = profiles;
        return this;
    }
    /**
     * Set the initial game resolution
     */
    setResolution(resolution) {
        if (!resolution) {
            this.__resolution = undefined;
        }
        else {
            this.__resolution = {
                width: resolution[0],
                height: resolution[1]
            };
        }
        return this;
    }
    /**
     * Set the profile type
     */
    setType(type) {
        this.__type = type;
        return this;
    }
}
exports.default = LauncherProfile;
//# sourceMappingURL=launcher_profile.js.map