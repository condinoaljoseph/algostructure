const sum = require("./index");

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 1)).toBe(2);
	expect(sum(1, 2)).toBe(3);
	expect(sum(1, 3)).toBe(4);
	expect(sum(1, 4)).toBe(5);
	expect(sum(1, 5)).toBe(6);
	expect(sum(1, 6)).toBe(7);
	expect(sum(1, 7)).toBe(8);
	expect(sum(1, 8)).toBe(9);
	expect(sum(1, 9)).toBe(10);
	expect(sum(1, 10)).toBe(11);
});
