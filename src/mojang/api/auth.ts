import * as got from "got";
import { URL_MOJANG_AUTH } from "../../util/urls";
import { IAccount } from "./types";

/**
 * Authenticate a Minecraft account
 */
export function authenticate(username: string, password: string, clientToken?: string, requestUser = false) {
	return new Promise<IAccount>((resolve, reject) => {
		got.post(`${URL_MOJANG_AUTH}/authenticate`, {
			json: true,
			body: {
				agent: {
					name   : "Minecraft",
					version: 1
				},
				username,
				password,
				clientToken,
				requestUser
			}
		})
		.then((response) => { resolve(<IAccount>response.body); })
		.catch((err) => { reject(err); });
	});
}

/**
 * Refresh a Minecraft account
 */
export function refresh(accessToken: string, clientToken: string) {
	return new Promise<IAccount>((resolve, reject) => {
		got.post(`${URL_MOJANG_AUTH}/refresh`, {
			json: true,
			body: {
				accessToken,
				clientToken
			}
		})
		.then((response) => { resolve(<IAccount>response.body); })
		.catch((err) => { reject(err); });
	});
}

/**
 * Validate the given access token
 */
export function validate(accessToken: string, clientToken ?: string) {
	return new Promise((resolve, reject) => {
		got.post(`${URL_MOJANG_AUTH}/refresh`, {
			json: true,
			body: {
				accessToken,
				clientToken
			}
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err); });
	});
}

/**
 * Invalidate the given access token
 */
export function invalidate(accessToken: string, clientToken ?: string) {
	return new Promise((resolve, reject) => {
		got.post(`${URL_MOJANG_AUTH}/invalidate`, {
			json: true,
			body: {
				accessToken,
				clientToken
			}
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err); });
	});
}

/**
 * Sign out by invalidating all access tokens
 */
export function signout(username: string, password: string) {
	return new Promise((resolve, reject) => {
		got.post(`${URL_MOJANG_AUTH}/signout`, {
			json: true,
			body: {
				username,
				password
			}
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err); });
	});
}
