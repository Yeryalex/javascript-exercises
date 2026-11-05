const pascal = function(n) {

const currentLine = [1];
if (n === 1) {
    return currentLine;
}

const previousLine = pascal(n - 1);
previousLine.forEach((number, i) => {
    let value = previousLine[i + 1] ?? 0;
    currentLine.push(number + value); 
})
return currentLine;
};
  
// Do not edit below this line
module.exports = pascal;
