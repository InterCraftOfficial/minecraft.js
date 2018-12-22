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
function read(file) {
    file = path.join(env.minecraftPath, "launcher_profiles.json");
    console.log(file);
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, { throws: false }, (err, obj) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(obj);
            }
        });
    });
}
exports.read = read;
//# sourceMappingURL=api.js.map