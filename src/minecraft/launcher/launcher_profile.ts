import { IProfile } from "./core/types";

/**
 * Possible profile types
 */
export enum ProfileType {
	Custom         = "custom",
	LatestRelease  = "latest-release",
	LatestSnapshot = "latest-snapshot"
}

export default class LauncherProfile
{
	constructor (id: string, profile: IProfile) {

	}

	// Methods -------------------------------------------------------------------------------------

	delete () {}

	json () {
	}

	// Accessors/Mutators --------------------------------------------------------------------------

	/**
	 * Get the date the profile was created
	 */
	created () {}

	/**
	 * Get the game directory
	 */
	gameDir () {}

	/**
	 * Get the java arguments
	 */
	javaArgs () {}

	/**
	 * Get the Java directory
	 */
	javaDir () {}

	/**
	 * Get the "key" for this profile
	 */
	key () {}

	/**
	 * Get the date the profile was last used
	 */
	lastUsed () {}

	/**
	 * @TODO Get a Version object instead
	 * Get the last version ID
	 */
	lastVersionId () {}

	/**
	 * Get the name of the profile
	 */
	name () {}

	/**
	 * Get the initial game resolution
	 */
	resolution () {}

	/**
	 * Get the profile type
	 */
	type () {}

	/**
	 * Get the date the profile was created
	 */
	setCreated (created: Date) {}

	/**
	 * Get the game directory
	 */
	setGameDir (dir: string) {}

	/**
	 * Get the java arguments
	 */
	setJavaArgs (args: Array<string>) {}

	/**
	 * Get the Java directory
	 */
	setJavaDir (dir: string) {}

	/**
	 * Set the "key" for the profile
	 */
	setkey (key: string) {}

	/**
	 * Set the date the profile was last used
	 */
	setLastUsed (lastUsed: Date) {}

	/**
	 * Set the last version ID
	 */
	setLastVersionId (version: string) {}

	/**
	 * Set the name of the profile
	 */
	setName (name: string) {}

	/**
	 * Set the initial game resolution
	 */
	setResolution (resolution: [number, number]) {}

	/**
	 * Set the profile type
	 */
	setType (type: ProfileType) {}
}
