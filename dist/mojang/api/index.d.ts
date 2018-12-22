import * as Auth from "./auth";
import { IServiceStatus, IUsernameUuid, IPlayer, INameRecord, IProfile, ITexturePropertyValue } from "./types";
/**
 * Get the status of various Mojang services
 */
export declare function status(): Promise<IServiceStatus[]>;
/**
 * Get the UUID of a user given a username. If provided, get the UUID at the given timestamp
 */
export declare function uuidFromUsername(username: string, timestamp?: number): Promise<IUsernameUuid>;
/**
 * Fetch the username history of a player from the given UUID
 */
export declare function nameHistory(uuid: string): Promise<INameRecord[]>;
/**
 * Fetch players from the given list of usernames. Maximum of 100 at once
 */
export declare function profiles(usernames: Array<string>): Promise<IPlayer[]>;
/**
 * Fetch a detailed profile of a user given their UUID
 */
export declare function profile(uuid: string): Promise<IProfile>;
/**
 * Fetch the texture information from the given profile
 */
export declare function textures(profile: IProfile): ITexturePropertyValue;
/**
 * Change the skin for the selected profile
 */
export declare function changeSkin(accessToken: string, uuid: string, url: string, alex?: boolean): Promise<{}>;
/**
 * Upload a new skin from a local image file
 */
export declare function uploadSkin(accessToken: string, uuid: string, path: string): Promise<{}>;
/**
 * Reset to the default skin
 */
export declare function resetSkin(accessToken: string, uuid: string): Promise<{}>;
export { Auth };
