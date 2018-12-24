import LauncherProfile from "./launcher_profile";
import { IProfiles }   from "./core/types";

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
	 * Add a new account
	 */
	add (profile: LauncherProfile) {}

	/**
	 * Fetch all accounts
	 */
	all () {}

	/**
	 * Check if an account exists in the database
	 */
	exists () {}

	/**
	 * Get an account from the database
	 */
	get () {}

	/**
	 * Convert the profile list to JSON format
	 */
	json () {
		let result: IProfiles = {};
		return result;
	}

	/**
	 * Remove an account
	 */
	remove () {}
}
