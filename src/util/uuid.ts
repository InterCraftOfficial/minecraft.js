const UUID_READ   = /[\dA-F]{8}-(?:[\dA-F]{4}-){3}[\dA-F]{12}|[\dA-F]{32}/i;
const UUID_FORMAT = /([\dA-F]{8})-?([\dA-F]{4})-?([\dA-F]{4})-?([\dA-F]{4})-?([\dA-F]{12})/i;

export default class Uuid
{
	/**
	 * Load a UUID from a string
	 */
	public static load (uuid: string) {
		if (!this.isValid(uuid)) {
			return undefined;
		}
		return new Uuid((<RegExpMatchArray>uuid.match(UUID_FORMAT)).splice(1).join(''));
	}

	/**
	 * Generate a new UUID
	 */
	public static generate () {
		let uuid = "";
		for (let i = 0; i < 32; i++) {
			uuid += Math.random().toString(16).substr(2, 1);
		}
		return new Uuid(uuid);
	}

	/**
	 * Attempt to load the given UUID, otherwise generate a new one
	 */
	public static loadOrGenerate (uuid: string) {
		let result = this.load(uuid);
		return !result ? this.generate(): result;
	}

	/**
	 * Test if the given UUID is valid
	 */
	public static isValid (uuid: string) {
		let result = uuid.match(UUID_READ);
		return Boolean(result && result[0] === uuid);
	}

	/**
	 * The stored UUID string
	 */
	private __uuid: string;

	/**
	 * protected constructor to ensure UUID's are valid
	 */
	protected constructor (uuid: string) {
		this.__uuid = uuid.toLowerCase();
	}

	/**
	 * Convert the UUID to a standard string.
	 *
	 * @param {Boolean} format Use 8-4-4-4-12 formatting
	 */
	public toString (format: boolean = false) {
		if (!format)
			return this.__uuid;
		return (<RegExpMatchArray>this.__uuid.match(UUID_FORMAT)).splice(1).join('-');
	}
}
