const removeFromArray = function(arrList, ...argValues) {

	let newArray = arrList;

	for (let i = 0; i <= argValues.length - 1; i++) {

		newArray = newArray.filter((element) => element !== argValues[i]);
	}
	return (newArray);


//	return (arrList.filter((element) => !argValues.includes(element)));
};

console.log(removeFromArray([1, 2, 2,  4], 2, 5, 7));

// Do not edit below this line
module.exports = removeFromArray;
