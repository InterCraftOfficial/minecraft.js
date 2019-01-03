import LauncherAuthDatabase    from "./launcher_auth_database";
import LauncherProfile         from "./launcher_profile";
import LauncherProfileList     from "./launcher_profile_list";
import LauncherSettings        from "./launcher_settings";
import * as launcherProfiles   from "./core/launcher_profiles";
import { ILauncherProfiles }   from "./core/types";
import { Uuid }                from "../../../util";
import { environment, Mojang } from "../../../";
//import { IAccount } from "mojang/api/types";


export default class LauncherProfiles
{
	/**
	 * Load the launcher_profiles.json file
	 */
	public static load (file ?: string) {
		let path = file || environment.defaultLauncherProfilesPath();
		return new Promise<LauncherProfiles>((resolve, reject) => {
			launcherProfiles.read(path).then((profiles) => {
				let parsedProfiles = launcherProfiles.parse(profiles);
				resolve(new this(parsedProfiles, path));
			}).catch((err) => {
				reject(err);
			})
		});
	}

	/**
	 * Generate a new set of launcher profiles
	 */
	public static generate () {
		return new this(launcherProfiles.generate());
	}

	/**
	 * The user database
	 */
	private __authDb: LauncherAuthDatabase;

	/**
	 * The list of launcher profiles available
	 */
	private __profiles: LauncherProfileList;

	/**
	 * The settings for the launcher
	 */
	private __settings: LauncherSettings;

	/**
	 * The path to the launcher_profiles.json file
	 */
	private __path ?: string;

	/**
	 * General data
	 */
	private __analyticsFailCount ?: number;
	private __analyticsToken     ?: Uuid;
	private __clientToken         : Uuid;
	private __selectedProfile    ?: LauncherProfile;

	protected constructor (profiles: ILauncherProfiles, path ?: string) {
		this.__authDb   = new LauncherAuthDatabase(profiles.authenticationDatabase);
		this.__profiles = new LauncherProfileList(profiles.profiles);
		this.__settings = new LauncherSettings(profiles.settings);

		this.__analyticsFailCount = profiles.analyticsFailcount;
		this.__clientToken        = Uuid.loadOrGenerate(profiles.clientToken);
		if (profiles.analyticsToken) {
			this.__analyticsToken = Uuid.loadOrGenerate(profiles.analyticsToken);
		}
	}

	// Methods ------------------------------------------------------------------------------------

	/**
	 * Convert the launcher profiles to the standard JSON format
	 */
	json () {
		let result: ILauncherProfiles = {
			authenticationDatabase: this.__authDb.json(),
			clientToken           : this.__clientToken.toString(),
			launcherVersion       : launcherProfiles.defaultLauncherVersion(),
			profiles              : this.__profiles.json(),
			settings              : this.__settings.json()
		};
		return result;
	}

	/**
	 * Write the launcher_profiles.json file to disk
	 */
	save () {
		return new Promise((resolve, reject) => {
			let json = this.json();
			let path = this.__path || environment.defaultLauncherProfilesPath();
			launcherProfiles.write(path, json).then(resolve).catch(reject);
		});
	}

	// Accessors -----------------------------------------------------------------------------------

	/**
	 * Get the analytics fail count
	 */
	analyticsFailCount () {
		return this.__analyticsFailCount;
	}

	/**
	 * Get the analytics token
	 */
	analyticsToken () {
		return this.__analyticsToken;
	}

	/**
	 * Get the client token
	 */
	clientToken () {
		return this.__clientToken;
	}

	/**
	 * Get the launcher version
	 */
	launcherVersion () {
		// return this.__version;
	}

	/**
	 * Get the path to the launcher_profiles.json file
	 */
	path () {
		return this.__path;
	}

	/**
	 * Fetch and manage profiles
	 */
	profiles () {
		return this.__profiles;
	}

	/**
	 * Get the selected profile
	 */
	selectedProfile () {
		return this.__selectedProfile;
	}

	/**
	 * Get the selected user
	 */
	selectedUser () {}

	/**
	 * Get the launcher settings
	 */
	settings () {
		return this.__settings;
	}

	/**
	 * Get the authentication database
	 */
	users () {
		return this.__authDb;
	}

	// Mutators ------------------------------------------------------------------------------------

	/**
	 * Set the analytics fail count
	 */
	setAnalyticsFailCount (count: number) {
		this.__analyticsFailCount = count;
		return this;
	}

	/**
	 * Set the analytics token
	 */
	setAnalyticsToken (token: Uuid) {
		this.__analyticsToken = token;
		return this;
	}

	/**
	 * Set the client token
	 */
	setClientToken (token: Uuid) {
		this.__clientToken = token;
		return this;
	}

	/**
	 * Set the path to the launcher_profiles.json file
	 */
	setPath (path: string) {
		this.__path = path;
		return this;
	}

	/**
	 * Set the selected profile
	 */
	setSelectedProfile (profile: LauncherProfile) {
		this.__selectedProfile = profile;
		return this;
	}

	/**
	 * @TODO Not sure the best way to implement this...
	 *
	 * Should take in an account instance of some sort,
	 * but it also needs the profile for that account...
	 * There could be an object that represents the
	 * account profile which has a reference to the
	 * account that owns that profile. Maybe...
	 */
	setSelectedUser () {}

	/**
	 * Set the launcher settings
	 */
	setSettings (settings : LauncherSettings) {
		this.__settings = settings;
		return this;
	}
}
