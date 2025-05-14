const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890"

    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter(element => alphanumeric.includes(element))
        .join("")
    return cleanedString === cleanedString.split("").reverse().join("")

};

// Do not edit below this line
module.exports = palindromes;
