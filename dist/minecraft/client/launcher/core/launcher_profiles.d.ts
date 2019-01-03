import { ILauncherProfiles } from "./types";
/**
 * Read the launcher_profiles.json file
 */
export declare function read(file: string): Promise<ILauncherProfiles>;
/**
 * Write the launcher_profiles.json file
 */
export declare function write(file: string, obj: ILauncherProfiles): Promise<ILauncherProfiles>;
/**
 * Parse and validate a launcher_profiles JSON object
 */
export declare function parse(obj: ILauncherProfiles): ILauncherProfiles;
/**
 * Generate a new launcher_profiles JSON object
 */
export declare function generate(): ILauncherProfiles;
/**
 * Get the default launcher version
 */
export declare function defaultLauncherVersion(): {
    name: string;
    format: number;
    profilesFormat: number;
};
