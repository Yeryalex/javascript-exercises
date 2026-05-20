const add = function(num1, num2) {
	
	return (num1 + num2);
};

const subtract = function(first, second) {
	
	return (first - second);
};

const sum = function(numbers) {
	
	let result = 0;

	numbers.forEach((element) => result += element);
	return (result);
};

const multiply = function(numbers) {

	let result = 1;

	numbers.forEach((element) => result *= element);
	return (result);
};

const power = function(base, exponent) {
	
	return (base ** exponent);
};

const factorial = function(number) {
	
	let result = 1;

	if (number === 0)
		return (1);
	for (let i = 1; i <= number; i++)
		result *= i;
	return (result);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
