const calcAvgHeight = require("./index");

function Person(h, w) {
	this.height = h;
	this.weight = w;
}

const people = {
	Matt: new Person(174, 69),
	Jason: new Person(190, 103)
};

const emptyPeople = {};

test("calculates people object height to be 182", () => {
	expect(calcAvgHeight(people)).toBe(182);
});

test("calculates people object height to be null", () => {
	expect(calcAvgHeight(emptyPeople)).toBe(null);
});
