const reverseString = function(revString) {

	let reversedString = "";

	for (let i = revString.length - 1; i >= 0 ; i--) {
		reversedString = reversedString + revString[i];
	}
	return (reversedString);
};

// Do not edit below this line
module.exports = reverseString;
