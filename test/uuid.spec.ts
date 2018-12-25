import { expect } from "chai";
import "mocha";
import { Utils } from "../src";

const validUuid1   = "abcdef12-123a-456b-789c-123456789def";
const validUuid2   = "abcdef12123a456b789c123456789def";
const invalidUuid1 = "invalid UUID";
const invalidUuid2 = "abcdef12-123a-456b-789c-123456789deg";
const invalidUuid3 = "abcdef12123a456b789c123456789deg";

/**
 * A useful container to make managing UUIDs easier
 */
describe("UUID container", () => {

	let uuid = Utils.Uuid.load(validUuid1);

	it("should load successfully", () => {
		expect(uuid).to.not.equal(undefined);
	});

	it("should be valid", () => {
		expect(Utils.Uuid.isValid(validUuid2)).to.equal(true);
	});

	it("should fail to load", () => {
		expect(Utils.Uuid.load(invalidUuid1)).to.equal(undefined);
	});

	it("should be invalid", () => {
		expect(Utils.Uuid.isValid(invalidUuid2)).to.equal(false);
		expect(Utils.Uuid.isValid(invalidUuid3)).to.equal(false);
	});

	it("should be formatted correctly", () => {
		expect(uuid).to.not.equal(undefined);
		expect((<Utils.Uuid>uuid).toString(true)).to.equal(validUuid1);
		expect((<Utils.Uuid>uuid).toString(false)).to.equal(validUuid2);
	});
});
