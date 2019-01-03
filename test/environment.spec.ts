import { expect } from "chai";
import "mocha";
import { environment } from "../src";

/**
 * Minecraft default folder for each operating system
 */
describe("Minecraft path", () => {
	it("should be defined", () => {
		expect(environment.minecraftPath).to.not.equal("");
		expect(environment.minecraftPath).to.not.equal(undefined);
	});

	if (environment.os == environment.OS_LINUX) {
		it("should be a Linux path", () => {
			expect(environment.defaultMinecraftPath()).to.equal("~/.minecraft");
		});
	} else if (environment.os == environment.OS_OSX) {
		it("should be an OSX path", () => {
			expect(environment.defaultMinecraftPath()).to.equal("~/Library/Application Support/minecraft");
		});
	} else {
		it("should be a Windows path", () => {
			expect(environment.defaultMinecraftPath()).to.matches(/C\:\\Users\\(.*)\\AppData\\Roaming\\.minecraft/);
		});
	}
});
