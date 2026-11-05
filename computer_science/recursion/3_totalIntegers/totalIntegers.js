const totalIntegers = function(arbitrary) {

    if (typeof arbitrary !== "object" || arbitrary === null) {
        return undefined;
    }
    
    function count(item) {
        
       if (Number.isInteger(item)) return 1;
        if (typeof item !== "object" || item === null) return 0;
        
        let counter = 0;
        
        const values = Object.values(item);
        
        for (const value of values) {
            counter += count(value);
        }
        return counter;
    }
    return  count(arbitrary);
};
  


// // Do not edit below this line
module.exports = totalIntegers;
