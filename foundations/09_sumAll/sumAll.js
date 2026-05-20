const sumAll = function(num1, num2) {

	
	if ((num1 || num2) < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
		return ("ERROR");
	let minValue = Math.min(num1, num2);
	let maxValue = Math.max(num1, num2);
	let result = 0;

	for (let i = minValue; i <= maxValue; i++)	
		result += i;

	return (result);
};


console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
