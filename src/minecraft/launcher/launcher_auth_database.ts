import User from "minecraft/user";
import { IAuthDatabase } from "./core/types";

export default class LauncherAuthDatabase
{
	/**
	 * Create a manager for the authentication database
	 */
	constructor (authDabatase: IAuthDatabase) {

	}

	/**
	 * Add a new account
	 */
	add (account: User) {}

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
	 * Remove an account
	 */
	remove () {}
}
