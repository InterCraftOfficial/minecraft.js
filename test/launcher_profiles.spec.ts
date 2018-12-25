import { expect } from "chai";
import { Minecraft } from "../src";
import * as dotenv from "dotenv";
import "mocha";
import { LauncherProfiles } from "../src/minecraft/launcher";

let path = "test/data/launcher_profiles.json";
let launcherProfiles: LauncherProfiles;

describe("Launcher Profiles", () => {
	it("should generate a new set of launcher profiles", () => {
		launcherProfiles = LauncherProfiles.generate();
		launcherProfiles.setPath(path);
		launcherProfiles.save();
	});
});
