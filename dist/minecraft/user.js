"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
class User {
    /**
     * Authenticate a new user and return the instance
     */
    static authenticate(email, password) { }
    /**
     * @TODO This constructor is temporary. Need to figure out how to properly handle this...
     */
    constructor(accessToken, email) {
        this.__id = "";
        this.__accessToken = accessToken;
        this.__email = email;
    }
    // Methods -------------------------------------------------------------------------------------
    /**
     * Authenticate the Minecraft account. Additional information will be available
     *
     * Changed my mind on this one, gonna not return it lol
     */
    authenticate(password) {
        return new Promise((resolve, reject) => {
            __1.Mojang.Api.Auth.authenticate(this.__email, password).then((account) => {
                this.__account = account;
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
    refresh() {
        return new Promise((resolve, reject) => {
            if (this.__clientToken == undefined) {
                reject();
                return;
            }
            __1.Mojang.Api.Auth.refresh(this.__accessToken, this.__clientToken).then((account) => {
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
    validate() {
        return new Promise((resolve, reject) => {
            __1.Mojang.Api.Auth.validate(this.__accessToken, this.__clientToken).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Invalidate the user's access token
     */
    invalidate() {
        return new Promise((resolve, reject) => {
            __1.Mojang.Api.Auth.invalidate(this.__accessToken, this.__clientToken).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Invalidate all access tokens
     */
    signout(password) {
        return new Promise((resolve, reject) => {
            __1.Mojang.Api.Auth.signout(this.__email, password).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    // Accessors/Mutators --------------------------------------------------------------------------
    accountInfo() {
        return this.__account;
    }
    /**
     * Get the account's access token
     */
    accessToken() {
        return this.__accessToken;
    }
    /**
     * Get the account ID
     */
    id() {
        //return this.__id;
    }
    /**
     * Check if the account has been authenticated
     */
    isAuthenticated() {
        return this.__account !== undefined;
    }
    /**
     * Get the email associated with the account
     */
    email() {
        return this.__email;
    }
    /**
     * Get the user's profile
     */
    profile() {
    }
    /**
     * Mojang has yet to implement this feature, but here it is
     */
    profiles() { }
}
exports.default = User;
//# sourceMappingURL=user.js.map