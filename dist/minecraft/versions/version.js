"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Version {
    /**
     * Load a version from a file
     */
    static load() {
        return new Version();
    }
}
/**
 * Version release types
 */
Version.ALPHA = "old_alpha";
Version.BETA = "old_beta";
Version.RELEASE = "release";
Version.SNAPSHOT = "snapshot";
exports.default = Version;
;
//# sourceMappingURL=version.js.map