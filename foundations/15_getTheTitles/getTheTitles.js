const getTheTitles = function(infoObject) {

const numbers = [4, 9, 16, 25];
numbers.map(Math.sqrt)

	console.log(numbers);
	let titles = [];

	for (let i = 0; i <= infoObject.length - 1; i++)
		titles.push(infoObject[i].title);
	return (titles);
};


const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
