import { ILauncherProfiles } from "../api/types";


export default class LauncherProfiles
{

	constructor () {

	}

	// Accessors -----------------------------------------------------------------------------------

	/**
	 * Get the analytics fail count
	 */
	analyticsFailCount () {}

	/**
	 * Get the analytics token
	 */
	analyticsToken () {}

	/**
	 * Get the client token
	 */
	clientToken () {}

	/**
	 * Get the launcher version
	 */
	launcherVersion () {}

	/**
	 * Fetch and manage profiles
	 */
	profiles () {}

	/**
	 * Get the selected profile
	 */
	selectedProfile () {}

	/**
	 * Get the selected user
	 */
	selectedUser () {}

	/**
	 * Get the launcher settings
	 */
	settings () {}

	/**
	 * Get the authentication database
	 */
	users () {}

	// Mutators ------------------------------------------------------------------------------------

	/**
	 * Set the analytics fail count
	 */
	setAnalyticsFailCount (count: number) { }

	/**
	 * Set the analytics token
	 */
	setAnalyticsToken (token: string) {}

	/**
	 * Set the client token
	 */
	setClientToken () {}

	/**
	 * Set the selected profile
	 */
	setSelectedProfile () {}

	/**
	 * @TODO Not sure the best way to implement this...
	 *
	 * Should take in an account instance of some sort,
	 * but it also needs the profile for that account...
	 * There could be an object that represents the
	 * account profile which has a reference to the
	 * account that owns that profile. Maybe...
	 */
	setSelectedUser (AccountProfile) {}
}
