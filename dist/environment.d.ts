/**
 * Operating systems that Minecraft recognizes
 */
export declare const OS_LINUX = "linux";
export declare const OS_OSX = "osx";
export declare const OS_WINDOWS = "windows";
/**
 * Detect the current operating system
 */
export declare function detectOs(): string;
/**
 * Search for the Java path on the system
 */
export declare function detectJavaPath(): Promise<{}>;
/**
 * Get the default path for Minecraft
 */
export declare function defaultMinecraftPath(): string;
export declare let os: string;
export declare let javaPath: string;
export declare let minecraftPath: string;
