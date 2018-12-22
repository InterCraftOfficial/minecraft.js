

export default class Version
{
	/**
	 * Version release types
	 */
	static readonly ALPHA    = "old_alpha";
	static readonly BETA     = "old_beta";
	static readonly RELEASE  = "release";
	static readonly SNAPSHOT = "snapshot";

	/**
	 * Load a version from a file
	 */
	static load() {
		return new Version();
	}
};
