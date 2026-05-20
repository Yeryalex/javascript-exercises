const palindromes = function (sentence) {

	const re = /[^a-zA-Z0-9]+/;
	let palindrome = sentence.split(re).join("").toUpperCase();
	let reversed = palindrome.split("").reverse().join("");
/*
	let firstHalf = palindrome.slice(0, palindrome.length / 2).toUpperCase().split("");
	let secondHalf = palindrome.slice(palindrome.length / 2).toUpperCase().split("").reverse();
	

	for (let i = 0; i <= firstHalf.length - 1; i++) {

		if (firstHalf[i] != secondHalf[i])
			return (false);
	}


	return (true);
*/

	return (palindrome === reversed);
};

console.log("hola" === "aloh")
// Do not edit below this line
module.exports = palindromes;
