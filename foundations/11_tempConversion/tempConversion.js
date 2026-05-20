const convertToCelsius = function(temperature) {

	let toCelsius = (temperature - 32) * (5 / 9);

	return (parseFloat(toCelsius.toFixed(1)));
};

const convertToFahrenheit = function(temperature) {

	let toFahrenheit = (temperature * (9 / 5) + 32);
	return (parseFloat(toFahrenheit.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
