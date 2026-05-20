const repeatString = function(stringToRepeat, numberRep) {

	if (numberRep < 0)
		return ("ERROR");
	let repeatedString = "";
	for (let i = 0; i < numberRep; i++) {
		repeatedString = repeatedString + stringToRepeat;
	}
	return (repeatedString);
};

// Do not edit below this line
module.exports = repeatString;
