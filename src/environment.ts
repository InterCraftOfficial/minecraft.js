import { join as joinPath } from "path";

/**
 * Operating systems that Minecraft recognizes
 */
export const OS_LINUX   = "linux";
export const OS_OSX     = "osx";
export const OS_WINDOWS = "windows";

/**
 * Detect the current operating system
 */
export function detectOs(): string {
	switch (process.platform) {
		case "win32": 
			return OS_WINDOWS;
		case "darwin": 
			return OS_OSX;
		default: 
			return OS_LINUX;
	}
};

/**
 * Search for the Java path on the system
 */
export function detectJavaPath() {
	return new Promise((resolve, reject) => {
		require("find-java-home")(function(err: any, home: string) {
			err ? reject(err): resolve(home);
		})
	});
};

/**
 * Get the default path for Minecraft
 */
export function defaultMinecraftPath() {
	switch (os) {
		case OS_WINDOWS: 
			return joinPath(<string> process.env.APPDATA, ".minecraft");
		case OS_OSX: 
			return "~/Library/Application Support/minecraft";
		default: 
			return "~/.minecraft";
	}
};

// Environment Configuration -----------------------------------------------------------------------

// The current operating system
export let os = detectOs();

// The path to the Java installation
export let javaPath = "/usr/bin/java";

// The path to the .minecraft folder
export let minecraftPath = defaultMinecraftPath();
