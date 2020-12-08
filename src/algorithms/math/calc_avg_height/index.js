function calcAvgHeight(data) {
	const people = Object.keys(data);
	const isEmpty = people.length === 0 && data.constructor === Object;
	let aveHeight = 0;

	if (isEmpty) return null;

	people.forEach((person) => {
		aveHeight += data[person].height;
	});

	return aveHeight / 2;
}

module.exports = calcAvgHeight;
