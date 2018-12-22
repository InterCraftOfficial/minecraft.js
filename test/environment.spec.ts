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

	it("should be a Linux path", () => {
		environment.os = environment.OS_LINUX;
		expect(environment.defaultMinecraftPath()).to.equal("~/.minecraft");
	});

	it("should be an OSX path", () => {
		environment.os = environment.OS_OSX;
		expect(environment.defaultMinecraftPath()).to.equal("~/Library/Application Support/minecraft");
	});

	it("should be a Windows path", () => {
		environment.os = environment.OS_WINDOWS;
		expect(environment.defaultMinecraftPath()).to.matches(/C\:\\Users\\(.*)\\AppData\\Roaming\\.minecraft/);
	});
});
