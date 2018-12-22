export default class Account
{

	/**
	 * Stored here for login method convenience
	 */
	private clientToken    ?: string;
	private isAuthenticated : boolean = false;

	constructor () {}

	// Methods -------------------------------------------------------------------------------------

	/**
	 * Authenticate the Minecraft account. Additional information will be available
	 */
	authenticate (password : string) {}

	/**
	 * Refresh the account
	 */
	refresh () {}

	/**
	 * Validate the account's access token
	 */
	validate () {}

	/**
	 * Invalidate the user's access token
	 */
	invalidate () {}

	/**
	 * Invalidate all access tokens
	 */
	signout (password: string) {}

	// Accessors/Mutators --------------------------------------------------------------------------

	/**
	 * Get the account's access token
	 */
	accessToken () {}

	/**
	 * Get the account ID
	 */
	id () {}

	/**
	 * Get the email associated with the account
	 */
	email () {}

	/**
	 * Get the user's profile
	 */
	profile () {}

	/**
	 * Mojang has yet to implement this feature, but here it is
	 */
	profiles () {}
}
