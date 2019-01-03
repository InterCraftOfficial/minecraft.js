import { ISettings } from "./core/types";

export enum ProfileSorting {
	ByPlayerName = "byPlayerName"
}

export default class LauncherSettings
{
	/**
	 * Store the settings
	 */
	private __settings: ISettings;

	constructor (settings?: ISettings) {
		this.__settings = settings ? <ISettings>JSON.parse(JSON.stringify(settings)) : {};
	}

	// Methods -------------------------------------------------------------------------------------

	json () {
		let result = JSON.parse(JSON.stringify(this.__settings));
		return Object.keys(result).length == 0 ? undefined: result;
	}

	// Accessors -----------------------------------------------------------------------------------

	crashAssistance () {
		return this.__settings.crashAssistance;
	}

	enableAdvanced () {
		return this.__settings.enableAdvanced;
	}

	enableAnalytics () {
		return this.__settings.enableAnalytics;
	}

	enableHistorical () {
		return this.__settings.enableHistorical;
	}

	enableSnapshots () {
		return this.__settings.enableSnapshots;
	}

	keepLauncherOpen () {
		return this.__settings.keepLauncherOpen;
	}

	locale () {
		return this.__settings.locale;
	}

	profileSorting () {
		return <ProfileSorting>this.__settings.profileSorting;
	}

	showGameLog () {
		return this.__settings.showGameLog;
	}

	showMenu () {
		return this.__settings.showMenu;
	}

	// Mutators ------------------------------------------------------------------------------------

	setCrashAssistance (crashAssistance ?: boolean) {
		this.__settings.crashAssistance = crashAssistance;
	}

	setEnableAdvanced (enableAdvanced ?: boolean) {
		this.__settings.enableAdvanced = enableAdvanced;
	}

	setEnableAnalytics (enableAnalytics ?: boolean) {
		this.__settings.enableAnalytics = enableAnalytics;
	}

	setEnableHistorical (enableHistorical ?: boolean) {
		this.__settings.enableHistorical = enableHistorical;
	}

	setEnableSnapshots (enableSnapshots ?: boolean) {
		this.__settings.enableSnapshots = enableSnapshots;
	}

	setKeepLauncherOpen (keepLauncherOpen ?: boolean) {
		this.__settings.keepLauncherOpen = keepLauncherOpen;
	}

	setLocale (locale ?: string) {
		this.__settings.locale = locale;
	}

	setProfileSorting (profileSorting ?: ProfileSorting) {
		this.__settings.profileSorting = profileSorting;
	}

	setShowGameLog (showGameLog ?: boolean) {
		this.__settings.showGameLog = showGameLog;
	}

	setShowMenu (showMenu ?: boolean) {
		this.__settings.showMenu = showMenu;
	}
}
