import * as path     from "path";
import * as jsonfile from "jsonfile";
import { Utils }     from "../../../../";
import {
	ILauncherProfiles,
	IProfile,
	IUser
} from "./types";

/**
 * Read the launcher_profiles.json file
 */
export function read (file: string) {
	return new Promise<ILauncherProfiles>((resolve, reject) => {
		jsonfile.readFile(file, {throws: false}, (err, obj) => {
			if (err) {
				reject(err);
			} else {
				resolve(obj);
			}
		});
	});
}

/**
 * Write the launcher_profiles.json file
 */
export function write (file: string, obj: ILauncherProfiles) {
	return new Promise<ILauncherProfiles>((resolve, reject) => {
		jsonfile.writeFile(file, obj, {throws: false, spaces: 2}, (err) => {
			if (err) {
				reject (err);
			} else {
				resolve();
			}
		});
	});
}

/**
 * Parse and validate a launcher_profiles JSON object
 */
export function parse (obj: ILauncherProfiles) {
	let launcherProfiles = generate();
	parseAnalytics(launcherProfiles, obj);
	parseClientToken(launcherProfiles, obj);
	parseSettings(launcherProfiles, obj);
	parseAuthDatabase(launcherProfiles, obj);
	parseProfiles(launcherProfiles, obj);
	return obj;
}

/**
 * Generate a new launcher_profiles JSON object
 */
export function generate (): ILauncherProfiles {
	return {
		clientToken           : "",
		authenticationDatabase: {},
		launcherVersion       : defaultLauncherVersion(),
		profiles              : {}
	}
}

/**
 * Get the default launcher version
 */
export function defaultLauncherVersion () {
	return {
		name          : "2.1.1462",
		format        : 21,
		profilesFormat: 2
	};
}

/**
 * Parse the analytics section
 */
function parseAnalytics (lp: ILauncherProfiles, obj: ILauncherProfiles) {
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
function parseClientToken (lp: ILauncherProfiles, obj: ILauncherProfiles) {
	if (typeof obj.clientToken == "string" && Utils.Uuid.isValid(obj.clientToken)) {
		lp.clientToken = lp.clientToken;
	} else {
		lp.clientToken = Utils.Uuid.generate().toString();
	}
}

/**
 * Parse the settings
 */
function parseSettings (lp: ILauncherProfiles, obj: ILauncherProfiles) {
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
function parseAuthDatabase (lp: ILauncherProfiles, obj: ILauncherProfiles) {
	if (typeof obj.authenticationDatabase !== "object") {
		return;
	}
	for (let id in obj.authenticationDatabase) {
		if (Utils.Uuid.isValid(id)) {
			let profile = obj.authenticationDatabase[id];
			if (typeof profile.accessToken === "string" || typeof profile.username === "string") {
				let user = {
					accessToken: profile.accessToken,
					username   : profile.username,
					profiles   : {}
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
function parseAuthDatabaseProfiles (user: IUser, obj: IUser) {
	if (typeof obj.profiles !== "object" || Object.keys(obj.profiles).length < 1) {
		return false;
	}
	for (let uuid in obj.profiles) {
		let profile = obj.profiles[uuid];
		if (!Utils.Uuid.isValid(uuid) || typeof profile.displayName !== "string") {
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
function parseProfiles (lp: ILauncherProfiles, obj: ILauncherProfiles) {
	if (typeof obj.profiles !== "object") {
		return;
	}
	for (let key in obj.profiles) {
		let profile = obj.profiles[key];
		if (typeof profile.type === "string") {
			let result: IProfile = {
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
				let width  = profile.resolution.width;
				let height = profile.resolution.height;
				if (Number.isInteger(width) && Number.isInteger(height)) {
					result.resolution = {
						width, height
					}
				}
			}
			lp.profiles[key] = result;
		}
	}
}
