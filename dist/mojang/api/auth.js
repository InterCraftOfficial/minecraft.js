"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const got = __importStar(require("got"));
const urls_1 = require("../../util/urls");
/**
 * Authenticate a Minecraft account
 */
function authenticate(username, password, clientToken, requestUser = false) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_AUTH}/authenticate`, {
            json: true,
            body: {
                agent: {
                    name: "Minecraft",
                    version: 1
                },
                username,
                password,
                clientToken,
                requestUser
            }
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.authenticate = authenticate;
/**
 * Refresh a Minecraft account
 */
function refresh(accessToken, clientToken) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_AUTH}/refresh`, {
            json: true,
            body: {
                accessToken,
                clientToken
            }
        })
            .then((response) => { resolve(response.body); })
            .catch((err) => { reject(err); });
    });
}
exports.refresh = refresh;
/**
 * Validate the given access token
 */
function validate(accessToken, clientToken) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_AUTH}/refresh`, {
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
exports.validate = validate;
/**
 * Invalidate the given access token
 */
function invalidate(accessToken, clientToken) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_AUTH}/invalidate`, {
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
exports.invalidate = invalidate;
/**
 * Sign out by invalidating all access tokens
 */
function signout(username, password) {
    return new Promise((resolve, reject) => {
        got.post(`${urls_1.URL_MOJANG_AUTH}/signout`, {
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
exports.signout = signout;
//# sourceMappingURL=auth.js.map