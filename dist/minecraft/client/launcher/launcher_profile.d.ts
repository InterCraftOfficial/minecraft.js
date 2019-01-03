import { IProfile } from "./core/types";
import { LauncherProfileList } from ".";
/**
 * Possible profile types
 */
export declare enum LauncherProfileType {
    Custom = "custom",
    LatestRelease = "latest-release",
    LatestSnapshot = "latest-snapshot"
}
export default class LauncherProfile {
    /**
     * Reference to the list of profiles this is a part of
     */
    private __profiles?;
    /**
     * Profile information
     */
    private __id;
    private __name?;
    private __type?;
    private __created?;
    private __lastUsed?;
    private __versionId?;
    private __gameDir?;
    private __javaDir?;
    private __javaArgs;
    private __resolution?;
    /**
     * Create a new profile
     */
    constructor(type: LauncherProfileType);
    /**
     * Load a profile from JSON
     */
    constructor(id: string, profile: IProfile);
    /**
     * Initialize the profile values from the given JSON
     */
    protected init(id: string, profile: IProfile): void;
    /**
     * Delete the profile from the launcher profiles (if assigned)
     */
    delete(): boolean;
    /**
     * Convert the profile to JSON format
     */
    json(): IProfile;
    /**
     * Get the date the profile was created
     */
    created(): void;
    /**
     * Get the game directory
     */
    gameDir(): string;
    /**
     * Get the Id
     */
    id(): string;
    /**
     * Get the java arguments
     */
    javaArgs(): string[];
    /**
     * Get the Java directory
     */
    javaDir(): string | undefined;
    /**
     * Get the date the profile was last used
     */
    lastUsed(): Date | undefined;
    /**
     * @TODO Get a Version object instead
     * Get the last version ID
     */
    lastVersionId(): string | undefined;
    /**
     * Get the name of the profile
     */
    name(): string | undefined;
    /**
     * Get the initial game resolution
     */
    resolution(): {
        width: number;
        height: number;
    } | undefined;
    /**
     * Get the profile type
     */
    type(): LauncherProfileType | undefined;
    /**
     * Get the date the profile was created
     */
    setCreated(created: Date): this;
    /**
     * Get the game directory
     */
    setGameDir(dir: string): this;
    /**
     * Set the ID of a profile
     */
    setId(id: string): this;
    /**
     * Set the java arguments
     */
    setJavaArgs(args: Array<string>): this;
    /**
     * Get the Java directory
     */
    setJavaDir(dir: string): this;
    /**
     * Set the date the profile was last used
     */
    setLastUsed(lastUsed: Date): this;
    /**
     * Set the last version ID
     */
    setLastVersionId(version: string): this;
    /**
     * Set the name of the profile
     */
    setName(name: string): this;
    /**
     * [NOT FOR STANDARD USE] Set the profile list that the profile is a part of
     */
    setProfileList(profiles: LauncherProfileList): this;
    /**
     * Set the initial game resolution
     */
    setResolution(resolution?: [number, number]): this;
    /**
     * Set the profile type
     */
    setType(type: LauncherProfileType): this;
}
