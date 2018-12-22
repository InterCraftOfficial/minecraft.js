import { IAccount } from "mojang/api/types";

export default class User
{
	/**
	 * Authenticate a new user and return the instance
	 */
	static authenticate (email: string, password: string) {}

	// private __accessToken: string;
	// private __email      : string;

	/**
	 * Store the clientToken for convenience
	 */
	private __clientToken    ?: string;

	/**
	 * Store the account info after authentication
	 */
	private __account ?: IAccount;


	// constructor (user: IUser, account: IAccount) {

	// }

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

	accountInfo () {
		return this.__account;
	}

	/**
	 * Get the account's access token
	 */
	accessToken () {}

	/**
	 * Get the account ID
	 */
	id () {}

	/**
	 * Check if the account has been authenticated
	 */
	isAuthenticated () {
		return this.__account !== undefined;
	}

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
