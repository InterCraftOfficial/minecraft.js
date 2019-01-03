"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileSorting;
(function (ProfileSorting) {
    ProfileSorting["ByPlayerName"] = "byPlayerName";
})(ProfileSorting = exports.ProfileSorting || (exports.ProfileSorting = {}));
class LauncherSettings {
    constructor(settings) {
        this.__settings = settings ? JSON.parse(JSON.stringify(settings)) : {};
    }
    // Methods -------------------------------------------------------------------------------------
    json() {
        let result = JSON.parse(JSON.stringify(this.__settings));
        return Object.keys(result).length == 0 ? undefined : result;
    }
    // Accessors -----------------------------------------------------------------------------------
    crashAssistance() {
        return this.__settings.crashAssistance;
    }
    enableAdvanced() {
        return this.__settings.enableAdvanced;
    }
    enableAnalytics() {
        return this.__settings.enableAnalytics;
    }
    enableHistorical() {
        return this.__settings.enableHistorical;
    }
    enableSnapshots() {
        return this.__settings.enableSnapshots;
    }
    keepLauncherOpen() {
        return this.__settings.keepLauncherOpen;
    }
    locale() {
        return this.__settings.locale;
    }
    profileSorting() {
        return this.__settings.profileSorting;
    }
    showGameLog() {
        return this.__settings.showGameLog;
    }
    showMenu() {
        return this.__settings.showMenu;
    }
    // Mutators ------------------------------------------------------------------------------------
    setCrashAssistance(crashAssistance) {
        this.__settings.crashAssistance = crashAssistance;
    }
    setEnableAdvanced(enableAdvanced) {
        this.__settings.enableAdvanced = enableAdvanced;
    }
    setEnableAnalytics(enableAnalytics) {
        this.__settings.enableAnalytics = enableAnalytics;
    }
    setEnableHistorical(enableHistorical) {
        this.__settings.enableHistorical = enableHistorical;
    }
    setEnableSnapshots(enableSnapshots) {
        this.__settings.enableSnapshots = enableSnapshots;
    }
    setKeepLauncherOpen(keepLauncherOpen) {
        this.__settings.keepLauncherOpen = keepLauncherOpen;
    }
    setLocale(locale) {
        this.__settings.locale = locale;
    }
    setProfileSorting(profileSorting) {
        this.__settings.profileSorting = profileSorting;
    }
    setShowGameLog(showGameLog) {
        this.__settings.showGameLog = showGameLog;
    }
    setShowMenu(showMenu) {
        this.__settings.showMenu = showMenu;
    }
}
exports.default = LauncherSettings;
//# sourceMappingURL=launcher_settings.js.map