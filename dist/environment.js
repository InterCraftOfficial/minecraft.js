"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
/**
 * Operating systems that Minecraft recognizes
 */
exports.OS_LINUX = "linux";
exports.OS_OSX = "osx";
exports.OS_WINDOWS = "windows";
/**
 * Detect the current operating system
 */
function detectOs() {
    switch (process.platform) {
        case "win32":
            return exports.OS_WINDOWS;
        case "darwin":
            return exports.OS_OSX;
        default:
            return exports.OS_LINUX;
    }
}
exports.detectOs = detectOs;
;
/**
 * Search for the Java path on the system
 */
function detectJavaPath() {
    return new Promise((resolve, reject) => {
        require("find-java-home")(function (err, home) {
            err ? reject(err) : resolve(home);
        });
    });
}
exports.detectJavaPath = detectJavaPath;
;
/**
 * Get the default path for Minecraft
 */
function defaultMinecraftPath() {
    switch (exports.os) {
        case exports.OS_WINDOWS:
            return path_1.join(process.env.APPDATA, ".minecraft");
        case exports.OS_OSX:
            return "~/Library/Application Support/minecraft";
        default:
            return "~/.minecraft";
    }
}
exports.defaultMinecraftPath = defaultMinecraftPath;
;
/**
 * Get the default path to the launcher_profiles.json file
 */
function defaultLauncherProfilesPath() {
    return path_1.join(exports.minecraftPath, "launcher_profiles.json");
}
exports.defaultLauncherProfilesPath = defaultLauncherProfilesPath;
// Environment Configuration -----------------------------------------------------------------------
// The current operating system
exports.os = detectOs();
// The path to the Java installation
exports.javaPath = "/usr/bin/java";
// The path to the .minecraft folder
exports.minecraftPath = defaultMinecraftPath();
//# sourceMappingURL=environment.js.map