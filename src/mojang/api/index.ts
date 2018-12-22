import * as Auth from "./auth";
import * as fs from "fs";
import * as got from "got";
import * as querystring from "querystring";
import * as FormData from "form-data";
import {
	URL_MOJANG_STATUS, URL_MOJANG_API, URL_MOJANG_SESSIONS
} from "../../util/urls";
import {
	IServiceStatus, IUsernameUuid, IPlayer, INameRecord, IProfile, ITexturePropertyValue
} from "./types";

/**
 * Get the status of various Mojang services
 */
export function status() {
	return new Promise<Array<IServiceStatus>>((resolve, reject) => {
		got.get(URL_MOJANG_STATUS, {
			json: true
		})
		.then((response) => { resolve(<Array<IServiceStatus>>response.body) })
		.catch((err) => { reject(err) });
	});
};

/**
 * Get the UUID of a user given a username. If provided, get the UUID at the given timestamp
 */
export function uuidFromUsername(username: string, timestamp?: number) {
	return new Promise<IUsernameUuid>((resolve, reject) => {
		let url = `${URL_MOJANG_API}/users/profiles/minecraft/${username}`;
		if (timestamp != undefined)
			url += `?at=${timestamp}`;
		got.get(url, { json: true })
		.then((response) => { resolve(<IUsernameUuid>response.body) })
		.catch((err) => { reject(err) });
	});
};

/**
 * Fetch the username history of a player from the given UUID
 */
export function nameHistory(uuid: string) {
	return new Promise<Array<INameRecord>>((resolve, reject) => {
		got.get(`${URL_MOJANG_API}/user/profiles/${uuid}/names`, {
			json: true,
		})
		.then((response) => { resolve(<Array<INameRecord>>response.body) })
		.catch((err) => { reject(err) });
	});
};

/**
 * Fetch players from the given list of usernames. Maximum of 100 at once
 */
export function profiles(usernames: Array<string>) {
	return new Promise<Array<IPlayer>>((resolve, reject) => {
		got.post(`${URL_MOJANG_API}/profiles/minecraft`, {
			json: true,
			body: usernames
		})
		.then((response) => { resolve(<Array<IPlayer>>response.body) })
		.catch((err) => { reject(err) });
	});
};

/**
 * Fetch a detailed profile of a user given their UUID
 */
export function profile(uuid: string) {
	return new Promise<IProfile>((resolve, reject) => {
		got.get(`${URL_MOJANG_SESSIONS}/session/minecraft/profile/${uuid}`, {
			json: true
		})
		.then((response) => { resolve(<IProfile>response.body) })
		.catch((err) => { reject(err) });
	});
};

/**
 * Fetch the texture information from the given profile
 */
export function textures(profile: IProfile) {
	let value = Buffer.from(profile.properties[0].value, "base64");
	return <ITexturePropertyValue> JSON.parse(value.toString());
};

/**
 * Change the skin for the selected profile
 */
export function changeSkin(accessToken:string, uuid: string, url: string, alex = false) {
	return new Promise((resolve, reject) => {
		got.post(`${URL_MOJANG_API}/user/profile/${uuid}/skin`, {
			headers: { "Authorization": `Bearer ${accessToken}` },
			body   : querystring.stringify({
				model: alex ? "slim": "",
				url  : url
			})
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err) });
	});
};

/**
 * Upload a new skin from a local image file
 */
export function uploadSkin(accessToken: string, uuid: string, path: string) {
	let form = new FormData.default();
	form.append("file", fs.createReadStream(path));
	return new Promise((resolve, reject) => {
		got.delete(`${URL_MOJANG_API}/user/profile/${uuid}/skin`, {
			headers: { "Authorization": `Bearer ${accessToken}` },
			body   : form
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err) });
	});
};

/**
 * Reset to the default skin
 */
export function resetSkin(accessToken: string, uuid: string) {
	return new Promise((resolve, reject) => {
		got.delete(`${URL_MOJANG_API}/user/profile/${uuid}/skin`, {
			headers: { "Authorization": `Bearer ${accessToken}` }
		})
		.then(() => { resolve(); })
		.catch((err) => { reject(err) });
	});
};

export {
	Auth
};
