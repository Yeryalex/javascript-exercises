const fibonacci = function(limit) {


	if (limit == 0)
		return (0);
	if (limit < 0)
		return ("OOPS");
	let result = [];

	for (let i = 0; i < limit; i++) {
		if (i == 0 || i == 1)
			result.push(1);
		else
			result.push(result[i - 1 ] + result[i - 2])
	}
	return (result.pop());
};


// Do not edit below this line
module.exports = fibonacci;
