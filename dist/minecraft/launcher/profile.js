"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Possible profile types
 */
var ProfileType;
(function (ProfileType) {
    ProfileType["Custom"] = "custom";
    ProfileType["LatestRelease"] = "latest-release";
    ProfileType["LatestSnapshot"] = "latest-snapshot";
})(ProfileType = exports.ProfileType || (exports.ProfileType = {}));
class Profile {
    constructor() { }
    // Methods -------------------------------------------------------------------------------------
    delete() { }
    // Accessors/Mutators --------------------------------------------------------------------------
    /**
     * Get the date the profile was created
     */
    created() { }
    /**
     * Get the game directory
     */
    gameDir() { }
    /**
     * Get the java arguments
     */
    javaArgs() { }
    /**
     * Get the Java directory
     */
    javaDir() { }
    /**
     * Get the "key" for this profile
     */
    key() { }
    /**
     * Get the date the profile was last used
     */
    lastUsed() { }
    /**
     * @TODO Get a Version object instead
     * Get the last version ID
     */
    lastVersionId() { }
    /**
     * Get the name of the profile
     */
    name() { }
    /**
     * Get the initial game resolution
     */
    resolution() { }
    /**
     * Get the profile type
     */
    type() { }
    /**
     * Get the date the profile was created
     */
    setCreated(created) { }
    /**
     * Get the game directory
     */
    setGameDir(dir) { }
    /**
     * Get the java arguments
     */
    setJavaArgs(args) { }
    /**
     * Get the Java directory
     */
    setJavaDir(dir) { }
    /**
     * Set the "key" for the profile
     */
    setkey(key) { }
    /**
     * Set the date the profile was last used
     */
    setLastUsed(lastUsed) { }
    /**
     * Set the last version ID
     */
    setLastVersionId(version) { }
    /**
     * Set the name of the profile
     */
    setName(name) { }
    /**
     * Set the initial game resolution
     */
    setResolution(resolution) { }
    /**
     * Set the profile type
     */
    setType(type) { }
}
exports.default = Profile;
//# sourceMappingURL=profile.js.map