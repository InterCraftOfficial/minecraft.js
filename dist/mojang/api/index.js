"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth = __importStar(require("./auth"));
exports.Auth = Auth;
const fs = __importStar(require("fs"));
const got = __importStar(require("got"));
const querystring = __importStar(require("querystring"));
const FormData = __importStar(require("form-data"));
const urls_1 = require("../../util/urls");
/**
 * Get the status of various Mojang services
 */
function status() {
    return new Promise((resolve, reject) => {
        got.get(urls_1.URL_MOJANG_STATUS, {
            json: true
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.status = status;
;
/**
 * Get the UUID of a user given a username. If provided, get the UUID at the given timestamp
 */
function uuidFromUsername(username, timestamp) {
    return new Promise((resolve, reject) => {
        let url = `${urls_1.URL_MOJANG_API}/users/profiles/minecraft/${username}`;
        if (timestamp != undefined)
            url += `?at=${timestamp}`;
        got.get(url, { json: true })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.uuidFromUsername = uuidFromUsername;
;
/**
 * Fetch the username history of a player from the given UUID
 */
function nameHistory(uuid) {
    return new Promise((resolve, reject) => {
        got.get(`${urls_1.URL_MOJANG_API}/user/profiles/${uuid}/names`, {
            json: true,
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.nameHistory = nameHistory;
;
/**
 * Fetch players from the given list of usernames. Maximum of 100 at once
 */
function profiles(usernames) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_API}/profiles/minecraft`, {
            json: true,
            body: usernames
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.profiles = profiles;
;
/**
 * Fetch a detailed profile of a user given their UUID
 */
function profile(uuid) {
    return new Promise((resolve, reject) => {
        got.get(`${urls_1.URL_MOJANG_SESSIONS}/session/minecraft/profile/${uuid}`, {
            json: true
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.profile = profile;
;
/**
 * Fetch the texture information from the given profile
 */
function textures(profile) {
    let value = Buffer.from(profile.properties[0].value, "base64");
    return JSON.parse(value.toString());
}
exports.textures = textures;
;
/**
 * Change the skin for the selected profile
 */
function changeSkin(accessToken, uuid, url, alex = false) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_API}/user/profile/${uuid}/skin`, {
            headers: { "Authorization": `Bearer ${accessToken}` },
            body: querystring.stringify({
                model: alex ? "slim" : "",
                url: url
            })
        })
            .then(() => { resolve(); })
            .catch((err) => { reject(err); });
    });
}
exports.changeSkin = changeSkin;
;
/**
 * Upload a new skin from a local image file
 */
function uploadSkin(accessToken, uuid, path) {
    let form = new FormData.default();
    form.append("file", fs.createReadStream(path));
    return new Promise((resolve, reject) => {
        got.delete(`${urls_1.URL_MOJANG_API}/user/profile/${uuid}/skin`, {
            headers: { "Authorization": `Bearer ${accessToken}` },
            body: form
        })
            .then(() => { resolve(); })
            .catch((err) => { reject(err); });
    });
}
exports.uploadSkin = uploadSkin;
;
/**
 * Reset to the default skin
 */
function resetSkin(accessToken, uuid) {
    return new Promise((resolve, reject) => {
        got.delete(`${urls_1.URL_MOJANG_API}/user/profile/${uuid}/skin`, {
            headers: { "Authorization": `Bearer ${accessToken}` }
        })
            .then(() => { resolve(); })
            .catch((err) => { reject(err); });
    });
}
exports.resetSkin = resetSkin;
;
//# sourceMappingURL=index.js.map