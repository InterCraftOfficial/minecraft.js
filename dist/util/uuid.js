"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_READ = /[\dA-F]{8}-(?:[\dA-F]{4}-){3}[\dA-F]{12}|[\dA-F]{32}/i;
const UUID_FORMAT = /([\dA-F]{8})-?([\dA-F]{4})-?([\dA-F]{4})-?([\dA-F]{4})-?([\dA-F]{12})/i;
class Uuid {
    /**
     * Load a UUID from a string
     */
    static load(uuid) {
        if (!this.isValid(uuid)) {
            return undefined;
        }
        return new Uuid(uuid.match(UUID_FORMAT).splice(1).join(''));
    }
    /**
     * Generate a new UUID
     */
    static generate() {
        let uuid = "";
        for (let i = 0; i < 32; i++) {
            uuid += Math.random().toString(16).substr(2, 1);
        }
        return new Uuid(uuid);
    }
    /**
     * Attempt to load the given UUID, otherwise generate a new one
     */
    static loadOrGenerate(uuid) {
        let result = this.load(uuid);
        return !result ? this.generate() : result;
    }
    /**
     * Test if the given UUID is valid
     */
    static isValid(uuid) {
        let result = uuid.match(UUID_READ);
        return Boolean(result && result[0] === uuid);
    }
    /**
     * protected constructor to ensure UUID's are valid
     */
    constructor(uuid) {
        this.__uuid = uuid.toLowerCase();
    }
    /**
     * Convert the UUID to a standard string.
     *
     * @param {Boolean} format Use 8-4-4-4-12 formatting
     */
    toString(format = false) {
        if (!format)
            return this.__uuid;
        return this.__uuid.match(UUID_FORMAT).splice(1).join('-');
    }
}
exports.default = Uuid;
//# sourceMappingURL=uuid.js.map