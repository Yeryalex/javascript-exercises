const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
	console.log(cleanedString);

  // Create a new reversed string for comparison
	//
	console.log(cleanedString.split("").reverse())
  const reversedString = cleanedString.split('').reverse().join('');
	console.log(reversedString);

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

palindromes("racecar!");
module.exports = palindromes;
