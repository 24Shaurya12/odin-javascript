const removeFromArray = function (array, ...checker) {
    let returnArray = [];
    for (eachElement of array) {
        let present = false;
        for (eachChecker of checker) {
            if (eachChecker === eachElement) {
                present = true;
            }
        }
        if (present === false) {
            returnArray.push(eachElement);
        }
    } 
    return returnArray;
};

console.log(removeFromArray([1, 2, 3], 3));

// Do not edit below this line
module.exports = removeFromArray;
