import Profile from "./profile";

export default class Profiles
{
	/**
	 * Store the list of profiles as an array
	 */
	private __profiles: Array<Profile> = [];

	constructor () {}

	/**
	 * Add a new account
	 */
	add (profile: Profile) {}

	/**
	 * Fetch all accounts
	 */
	all () {}

	/**
	 * Get an account from the database
	 */
	get () {}

	/**
	 * Check if an account exists in the database
	 */
	exists () {}

	/**
	 * Remove an account
	 */
	remove () {}
}
