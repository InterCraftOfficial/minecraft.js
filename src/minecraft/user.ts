import { IAccount } from "mojang/api/types";
import { Mojang } from "../";
import { resolve } from "path";
import { rejects } from "assert";

export default class User
{
	/**
	 * Authenticate a new user and return the instance
	 */
	static authenticate (email: string, password: string) {}

	/**
	 * Store the clientToken for convenience
	 */
	private __clientToken?: string;

	/**
	 * Store the account info after authentication
	 */
	private __account?: IAccount;

	/**
	 * Genelat account information
	 */
	private __id         : string;
	private __accessToken: string;
	private __email      : string;

	/**
	 * @TODO This constructor is temporary. Need to figure out how to properly handle this...
	 */
	constructor (accessToken: string, email: string) {
		this.__id          = "";
		this.__accessToken = accessToken;
		this.__email       = email;
	}

	// Methods -------------------------------------------------------------------------------------

	/**
	 * Authenticate the Minecraft account. Additional information will be available
	 *
	 * Changed my mind on this one, gonna not return it lol
	 */
	authenticate (password : string) {
		return new Promise((resolve, reject) => {
			Mojang.Api.Auth.authenticate(this.__email, password).then((account) => {
				this.__account     = account;
				this.__accessToken = account.accessToken;
				this.__clientToken = account.clientToken;
				resolve();
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * Refresh the account
	 */
	refresh () {
		return new Promise((resolve, reject) => {
			if (this.__clientToken == undefined) {
				reject();
				return;
			}
			Mojang.Api.Auth.refresh(this.__accessToken, this.__clientToken).then((account) => {
				this.__account = account;
				resolve();
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * Validate the account's access token
	 */
	validate () {
		return new Promise((resolve, reject) => {
			Mojang.Api.Auth.validate(this.__accessToken, this.__clientToken).then(() => {
				resolve();
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * Invalidate the user's access token
	 */
	invalidate () {
		return new Promise((resolve, reject) => {
			Mojang.Api.Auth.invalidate(this.__accessToken, this.__clientToken).then(() => {
				resolve();
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * Invalidate all access tokens
	 */
	signout (password: string) {
		return new Promise((resolve, reject) => {
			Mojang.Api.Auth.signout(this.__email, password).then(() => {
				resolve();
			}).catch((err) => {
				reject(err);
			});
		});
	}

	// Accessors/Mutators --------------------------------------------------------------------------

	accountInfo () {
		return this.__account;
	}

	/**
	 * Get the account's access token
	 */
	accessToken () {
		return this.__accessToken;
	}

	/**
	 * Get the account ID
	 */
	id () {
		//return this.__id;
	}

	/**
	 * Check if the account has been authenticated
	 */
	isAuthenticated () {
		return this.__account !== undefined;
	}

	/**
	 * Get the email associated with the account
	 */
	email () {
		return this.__email;
	}

	/**
	 * Get the user's profile
	 */
	profile () {

	}

	/**
	 * Mojang has yet to implement this feature, but here it is
	 */
	profiles () {}
}
