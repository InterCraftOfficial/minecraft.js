import LauncherProfile from "./launcher_profile";
import { IProfiles }   from "./core/types";
import { Utils }       from "../../../";

export default class LauncherProfileList
{
	/**
	 * Store the list of profiles as an array
	 */
	private __profiles: Array<LauncherProfile> = [];

	/**
	 * Create a manager for the launcher profiles
	 */
	constructor (profiles: IProfiles) {
		for (let id in profiles) {
			let profile = new LauncherProfile(id, profiles[id]);
			this.__profiles.push(profile);
		}
	}

	/**
	 * Add a new lanucher profile
	 */
	add (profile: LauncherProfile) {
		if (this.exists(profile)) {
			return false;
		}
		this.__profiles.push(profile);
		return true;
	}

	/**
	 * Fetch all launcher profiles
	 */
	all () {
		return this.__profiles.slice();
	}

	/**
	 * Check if a launcher profile exists in the list
	 */
	exists (profile: LauncherProfile) {
		return this.__profiles.indexOf(profile) !== -1;
	}

	/**
	 * Get an account from the database
	 */
	get (id: string) {
		for (let profile of this.__profiles) {
			if (profile.id() == id) {
				return profile;
			}
		}
		return undefined;
	}

	/**
	 * Convert the profile list to JSON format
	 */
	json () {
		let result: IProfiles = {};
		this.__profiles.forEach((profile) => {
			result[profile.id()] = profile.json();
		})
		return result;
	}

	/**
	 * Remove an account
	 */
	remove (profile: LauncherProfile) {
		return Boolean(Utils.removeFromArray(this.__profiles, profile));
	}
}
