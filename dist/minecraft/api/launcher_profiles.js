"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const env = __importStar(require("../../environment"));
const jsonfile = __importStar(require("jsonfile"));
/**
 * Read a launcher_profiles.json file
 */
function read(file) {
    file = file || path.join(env.minecraftPath, "launcher_profiles.json");
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, { throws: false }, (err, obj) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(parse(obj));
            }
        });
    });
}
exports.read = read;
/**
 * Parse and validate a launcher_profiles JSON object
 */
function parse(obj) {
    let launcherProfiles = generate();
    // Stuff to do here...
    return obj;
}
exports.parse = parse;
/**
 * Generate a new launcher_profiles JSON object
 */
function generate() {
    // Generate a new launcher profiles JSON object
}
exports.generate = generate;
function defaultLauncherVersion() {
    return {
        name: "2.1.1462",
        format: 21,
        profilesFormat: 2
    };
}
exports.defaultLauncherVersion = defaultLauncherVersion;
//# sourceMappingURL=launcher_profiles.js.map