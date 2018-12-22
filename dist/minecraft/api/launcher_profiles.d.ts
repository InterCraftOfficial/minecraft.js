import { ILauncherProfiles } from "./types";
/**
 * Read a launcher_profiles.json file
 */
export declare function read(file?: string): Promise<ILauncherProfiles>;
/**
 * Parse and validate a launcher_profiles JSON object
 */
export declare function parse(obj: ILauncherProfiles): ILauncherProfiles;
/**
 * Generate a new launcher_profiles JSON object
 */
export declare function generate(): void;
export declare function defaultLauncherVersion(): {
    name: string;
    format: number;
    profilesFormat: number;
};
