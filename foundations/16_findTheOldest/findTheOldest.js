const findTheOldest = function(peopleInfo) {
	
	let date = new Date();
	let referenceAge = [];
	let personGreatestAge = "";
	let greatestAge = 0;
	let index = 0;

	for (let i = 0; i < peopleInfo.length; i++) {
		
		if (peopleInfo[i].yearOfDeath) {
			referenceAge.push([i, peopleInfo[i].yearOfDeath - peopleInfo[i].yearOfBirth]);
		}
		else {
			referenceAge.push([i, date.getFullYear() - peopleInfo[i].yearOfBirth]);
		}
	}

	for (let i = 0; i < referenceAge.length; i++) {
		
		if (i == 0) {
			greatestAge = referenceAge[i][1]
			index = i;
		};
		if (greatestAge < referenceAge[i][1])
		{
			greatestAge = referenceAge[i][1];
			index = i;
		}
	}
	return (peopleInfo[index]);
};

// Do not edit below this line
module.exports = findTheOldest;
