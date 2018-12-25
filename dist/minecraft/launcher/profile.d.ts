/**
 * Possible profile types
 */
export declare enum LauncherProfileType {
    Custom = "custom",
    LatestRelease = "latest-release",
    LatestSnapshot = "latest-snapshot"
}
export default class Profile {
    constructor();
    delete(): void;
    /**
     * Get the date the profile was created
     */
    created(): void;
    /**
     * Get the game directory
     */
    gameDir(): void;
    /**
     * Get the java arguments
     */
    javaArgs(): void;
    /**
     * Get the Java directory
     */
    javaDir(): void;
    /**
     * Get the "key" for this profile
     */
    key(): void;
    /**
     * Get the date the profile was last used
     */
    lastUsed(): void;
    /**
     * @TODO Get a Version object instead
     * Get the last version ID
     */
    lastVersionId(): void;
    /**
     * Get the name of the profile
     */
    name(): void;
    /**
     * Get the initial game resolution
     */
    resolution(): void;
    /**
     * Get the profile type
     */
    type(): void;
    /**
     * Get the date the profile was created
     */
    setCreated(created: Date): void;
    /**
     * Get the game directory
     */
    setGameDir(dir: string): void;
    /**
     * Get the java arguments
     */
    setJavaArgs(args: Array<string>): void;
    /**
     * Get the Java directory
     */
    setJavaDir(dir: string): void;
    /**
     * Set the "key" for the profile
     */
    setkey(key: string): void;
    /**
     * Set the date the profile was last used
     */
    setLastUsed(lastUsed: Date): void;
    /**
     * Set the last version ID
     */
    setLastVersionId(version: string): void;
    /**
     * Set the name of the profile
     */
    setName(name: string): void;
    /**
     * Set the initial game resolution
     */
    setResolution(resolution: [number, number]): void;
    /**
     * Set the profile type
     */
    setType(type: LauncherProfileType): void;
}
