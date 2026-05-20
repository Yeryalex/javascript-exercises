const removeFromArray = function(arrList, ...argValues) {

	for (let j = 0; j <= argValues.length - 1; j++) {
			
			let position = arrList.indexOf(argValues[j]);
			if (position >= 0)
				arrList.splice(position, 1);
	}

	return (arrList);
};

console.log(removeFromArray([1, 2, 2, 4], 2, 5, 7, 1));

// Do not edit below this line
module.exports = removeFromArray;
