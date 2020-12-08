interface Person {
	height: number;
	weight: number;
}

interface People {
	Matt: Person;
	Jason: Person;
}

function calcAvgHeight(data: People): number | null {
	const people: any[] = Object.keys(data); // ['Matt', 'Jason']
	const isEmpty: boolean = people.length === 0 && data.constructor === Object;

	let aveHeight: number = 0;

	if (isEmpty) return null;

	people.forEach((person: keyof People) => {
		aveHeight += data[person].height;
	});

	return aveHeight / people.length;
}

module.exports = calcAvgHeight;
