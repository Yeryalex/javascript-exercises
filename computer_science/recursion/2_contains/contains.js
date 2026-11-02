const contains = function(object, check) {
    
    if (typeof object !== "object" || object === null) return false;
    
    for (let value of Object.values(object)) {
        
        if (Number.isNaN(value) && Number.isNaN(check)) return true;
        if (value === check) return true;

        if (typeof value === "object") {
            if (contains(value, check)) return true;
        }
    
    }
    return false;
}

// Do not edit below this line
module.exports = contains;
