import { IProfile } from "./core/types";
import { Utils } from "../../";
import { LauncherProfileList } from ".";

/**
 * Possible profile types
 */
export enum LauncherProfileType {
	Custom         = "custom",
	LatestRelease  = "latest-release",
	LatestSnapshot = "latest-snapshot"
}

export default class LauncherProfile
{
	/**
	 * Reference to the list of profiles this is a part of
	 */
	private __profiles?: LauncherProfileList;

	/**
	 * Profile information
	 */
	private __id          : string;
	private __name       ?: string;
	private __type       ?: LauncherProfileType;
	private __created    ?: Date;
	private __lastUsed   ?: Date;
	private __versionId  ?: string;
	private __gameDir    ?: string;
	private __javaDir    ?: string;
	private __javaArgs    : Array<string> = [];
	private __resolution ?: {
		width : number,
		height: number
	};

	/**
	 * Create a new profile
	 */
	constructor (type: LauncherProfileType);

	/**
	 * Load a profile from JSON
	 */
	constructor (id: string, profile: IProfile);

	/**
	 * Create the profile instance
	 */
	constructor (id: string, profile?: any) {
		if (profile === undefined) {
			this.__id   = Utils.Uuid.generate().toString();
			this.__type = <LauncherProfileType>id;
		} else {
			this.__id = id;
			this.init(id, profile);
		}
	}

	/**
	 * Initialize the profile values from the given JSON
	 */
	protected init (id: string, profile: IProfile) {
		this.__id         = id;
		this.__name       = profile.name;
		this.__type       = <LauncherProfileType>profile.type;
		this.__created    = Utils.stringToDate(<string>profile.created);
		this.__lastUsed   = Utils.stringToDate(<string>profile.lastUsed);
		this.__versionId  = profile.lastVersionId;
		this.__gameDir    = profile.gameDir;
		this.__javaDir    = profile.javaDir;
		this.__javaArgs   = Utils.parseArgumentString(profile.javaArgs || "");
		this.__resolution = profile.resolution;
	}

	// Methods -------------------------------------------------------------------------------------

	/**
	 * Delete the profile from the launcher profiles (if assigned)
	 */
	delete () {
		if (this.__profiles) {
			return this.__profiles.remove(this);
		}
		return false;
	}

	/**
	 * Convert the profile to JSON format
	 */
	json () {
		return <IProfile>{
			name         : this.__name,
			type         : this.__type,
			created      : Utils.dateToString(this.__created),
			lastUsed     : Utils.dateToString(this.__lastUsed, true),
			lastVersionId: this.__versionId,
			gameDir      : this.__gameDir,
			javaDir      : this.__javaDir,
			javaArgs     : (this.__javaArgs.length && this.__javaArgs.join(' ')) || undefined,
			resolution   : this.__resolution
		};
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
	 * Get the ID of the profile
	 */
	id () {
		return this.__id;
	}

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
	lastUsed () {
		return this.__lastUsed;
	}

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
	 * Set the ID of a profile
	 */
	setId (id: string) {
		this.__id = id;
		return this;
	}

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
	setLastUsed (lastUsed: Date) {
		this.__lastUsed = lastUsed;
		return this;
	}

	/**
	 * Set the last version ID
	 */
	setLastVersionId (version: string) {}

	/**
	 * Set the name of the profile
	 */
	setName (name: string) {}

	/**
	 * [NOT FOR STANDARD USE] Set the profile list that the profile is a part of
	 */
	setProfileList(profiles: LauncherProfileList) {
		this.__profiles = profiles;
		return this;
	}

	/**
	 * Set the initial game resolution
	 */
	setResolution (resolution: [number, number]) {}

	/**
	 * Set the profile type
	 */
	setType (type: LauncherProfileType) {}
}
