import { ISettings } from "./core/types";
export declare enum ProfileSorting {
    ByPlayerName = "byPlayerName"
}
export default class LauncherSettings {
    /**
     * Store the settings
     */
    private __settings;
    constructor(settings?: ISettings);
    json(): any;
    crashAssistance(): boolean | undefined;
    enableAdvanced(): boolean | undefined;
    enableAnalytics(): boolean | undefined;
    enableHistorical(): boolean | undefined;
    enableSnapshots(): boolean | undefined;
    keepLauncherOpen(): boolean | undefined;
    locale(): string | undefined;
    profileSorting(): ProfileSorting;
    showGameLog(): boolean | undefined;
    showMenu(): boolean | undefined;
    setCrashAssistance(crashAssistance?: boolean): void;
    setEnableAdvanced(enableAdvanced?: boolean): void;
    setEnableAnalytics(enableAnalytics?: boolean): void;
    setEnableHistorical(enableHistorical?: boolean): void;
    setEnableSnapshots(enableSnapshots?: boolean): void;
    setKeepLauncherOpen(keepLauncherOpen?: boolean): void;
    setLocale(locale?: string): void;
    setProfileSorting(profileSorting?: ProfileSorting): void;
    setShowGameLog(showGameLog?: boolean): void;
    setShowMenu(showMenu?: boolean): void;
}
