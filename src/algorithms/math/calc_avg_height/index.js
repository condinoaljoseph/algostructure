function calcAvgHeight(data) {
    var people = Object.keys(data); // ['Matt', 'Jason']
    var isEmpty = people.length === 0 && data.constructor === Object;
    var aveHeight = 0;
    if (isEmpty)
        return null;
    people.forEach(function (person) {
        aveHeight += data[person].height;
    });
    return aveHeight / people.length;
}
module.exports = calcAvgHeight;
