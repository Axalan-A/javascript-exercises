const repeatString = function(stringToRepeat, timesToRepeat) {
    let repeatedString = "";
    if (timesToRepeat >= 0){
        for (let i = 0; i < timesToRepeat; i++){
            repeatedString += stringToRepeat
        }
    } else {
        repeatedString = "ERROR"
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
