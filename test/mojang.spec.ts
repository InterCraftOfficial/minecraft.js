import { expect } from "chai";
import { Mojang } from "../src";
import * as dotenv from "dotenv";
import "mocha";
import { IAccount, IProfile, ITexturePropertyValue } from "../src/mojang/api/types";

dotenv.config({ path: "test/.env" });

let testAuth = <string>process.env["TEST_AUTH"] == "true";
let username = <string>process.env["MOJANG_USERNAME"];
let password = <string>process.env["MOJANG_PASSWORD"];
let name     = <string>process.env["USERNAME"];
let uuid     = <string>process.env["UUID"];

describe("Mojang API", () => {

	it("retrieved services", () => {
		return Mojang.Api.status();
	});
	it("fetched UUID from username", () => {
		return Mojang.Api.uuidFromUsername(name);
	});
	it("fetched UUID from username with timestamp", () => {
		return Mojang.Api.uuidFromUsername(name, 0);
	});
	it("fetched name history", () => {
		return Mojang.Api.nameHistory(uuid);
	});
	it("fetched profiles from usernames", () => {
		return Mojang.Api.profiles([name]);
	});
});

if (testAuth && username && password) {
	describe("Mojang Auth API", () => {

		let account : IAccount;
		let profile : IProfile;
		let textures: ITexturePropertyValue;

		it("authenticated account", () => {
			return Mojang.Api.Auth.authenticate(username, password, undefined, true).then((result) => {
				account = result;
			});
		});
		it("refreshed account", () => {
			return Mojang.Api.Auth.refresh(account.accessToken, account.clientToken).then((result) => {
				account = result
			});
		});
		it("validated account", () => {
			return Mojang.Api.Auth.validate(account.accessToken, account.clientToken);
		});
		it("fetch profile", () => {
			return Mojang.Api.profile(account.selectedProfile.id).then((result) => {
				profile = result;
			});
		});
		it("fetch texture", () => {
			textures = Mojang.Api.textures(profile);
			console.log(profile, textures);
			expect(textures).to.not.equal(undefined);
		})
		it("invalidated access token ", () => {
			return Mojang.Api.Auth.invalidate(account.accessToken, account.clientToken);
		});
		it("signed out", () => {
			return Mojang.Api.Auth.signout(username, password);
		});
	});
} else {
	console.log("Skipping Mojang Auth API tests");
}
