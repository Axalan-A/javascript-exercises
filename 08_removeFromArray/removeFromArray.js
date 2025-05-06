const removeFromArray = function(originalArray, ...elementsToRemove) {
    let newArray = []
    nextElement:
    for (let element of originalArray){
        if (!elementsToRemove.includes(element)){
            newArray.push(element)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
