import * as path     from "path";
import * as env      from "../../environment";
import * as jsonfile from "jsonfile";
import { ILauncherProfiles } from "./types";

/**
 * Read a launcher_profiles.json file
 */
export function read (file ?: string) {
	file = file || path.join(env.minecraftPath, "launcher_profiles.json");
	return new Promise<ILauncherProfiles>((resolve, reject) => {
		jsonfile.readFile(<string>file, {throws: false}, (err, obj) => {
			if (err) {
				reject(err);
			} else {
				resolve(parse(obj));
			}
		});
	});
}

/**
 * Parse and validate a launcher_profiles JSON object
 */
export function parse (obj : ILauncherProfiles) {
	let launcherProfiles = generate();
	// Stuff to do here...
}

/**
 * Generate a new launcher_profiles JSON object
 */
export function generate () : ILauncherProfiles {
	return {
		analyticsFailcount: undefined,
		analyticstoken    : undefined,
		clientToken       : undefined,
		selectedProfile   : undefined,
		settings          : {
			enableAnalytics : undefined,
			enableAdvanced  : undefined,
			keepLauncherOpen: undefined,
			showMenu        : undefined,
			locale          : undefined,
			profileSorting  : undefined,
			showGameLog     : undefined,
			crashAssistance : undefined,
			enableSnapshots : undefined,
			enableHistorical: undefined
		},
		launcherVersion: defaultLauncherVersion(),
		profiles       : {

		},
		selectedUser : {

		}
	}
}

export function defaultLauncherVersion () {
	return {
		name          : "2.1.1462",
		format        : 21,
		profilesFormat: 2
	};
}
