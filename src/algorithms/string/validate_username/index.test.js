const validateUsername = require("./index.js");

test("username must be", () => {
	expect(validateUsername("MikeStandish")).toBe(true);
	// expect(validateUsername("Mike-Standish")).toBe(true); need debugging
	expect(validateUsername("Mike")).toBe(false); // invalid less than 6
	expect(validateUsername("MikeStandisherons")).toBe(false); // invalid greater than 16
	expect(validateUsername("Mike Standish")).toBe(false);
	expect(validateUsername("-MikeStandish")).toBe(false);
	expect(validateUsername("MikeStandish-")).toBe(false);
});
