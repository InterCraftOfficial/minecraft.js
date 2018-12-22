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
	return obj;
}

/**
 * Generate a new launcher_profiles JSON object
 */
export function generate () {
	// Generate a new launcher profiles JSON object
}

export function defaultLauncherVersion () {
	return {
		name          : "2.1.1462",
		format        : 21,
		profilesFormat: 2
	};
}
