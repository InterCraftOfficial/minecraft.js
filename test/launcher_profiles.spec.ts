import { expect } from "chai";
import { Minecraft } from "../src";
import * as dotenv from "dotenv";
import "mocha";
import {
	LauncherProfile,
	LauncherProfileType,
	LauncherProfiles
} from "../src/minecraft/launcher";

let path = "test/data/launcher_profiles.json";
let launcherProfiles1: LauncherProfiles;
let launcherProfiles2: LauncherProfiles;

describe("Launcher Profiles", () => {
	it("generated a new set of launcher profiles", () => {
		launcherProfiles1 = LauncherProfiles.generate();
		launcherProfiles1.setPath(path);
	});

	it("created a profile", () => {
		let profile = new LauncherProfile(LauncherProfileType.Custom);
		profile.setLastUsed(new Date());
		expect(launcherProfiles1.profiles().add(profile)).to.equal(true);
		expect(launcherProfiles1.profiles().exists(profile)).to.equal(true);
	});

	it("saved the launcher profiles", () => {
		return launcherProfiles1.save();
	});

	it("loaded the set of launcher profiles", () => {
		return LauncherProfiles.load(path).then((launcherProfiles) => {
			launcherProfiles2 = launcherProfiles;
		});
	});

	it("saved and loaded launcher profiles match", () => {
		let str1 = JSON.stringify(launcherProfiles1.json());
		let str2 = JSON.stringify(launcherProfiles2.json());
		expect(str1).to.equal(str2);
	});
});
