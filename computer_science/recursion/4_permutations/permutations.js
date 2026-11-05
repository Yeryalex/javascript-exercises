const permutations = function(array) {
  
    let result = [];
    let collection = [];
    for (let i = 0; i < array.length; i++) {
        // collection[i] = array[i];
        collection.push(array[i]);
        collection.push(array[i + 1]);
        // console.log(array[i])
    }
};
  


permutations([1, 2, 3]); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Do not edit below this line
module.exports = permutations;


