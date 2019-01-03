export default class Uuid {
    /**
     * Load a UUID from a string
     */
    static load(uuid: string): Uuid | undefined;
    /**
     * Generate a new UUID
     */
    static generate(): Uuid;
    /**
     * Attempt to load the given UUID, otherwise generate a new one
     */
    static loadOrGenerate(uuid: string): Uuid;
    /**
     * Test if the given UUID is valid
     */
    static isValid(uuid: string): boolean;
    /**
     * The stored UUID string
     */
    private __uuid;
    /**
     * protected constructor to ensure UUID's are valid
     */
    protected constructor(uuid: string);
    /**
     * Convert the UUID to a standard string.
     *
     * @param {Boolean} format Use 8-4-4-4-12 formatting
     */
    toString(format?: boolean): string;
}
