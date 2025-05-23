const findTheOldest = function(people) {
    let date = new Date()
    let oldest = people.reduce(
        (oldest, current) => ((((current.yearOfDeath === undefined) ? date.getFullYear() : current.yearOfDeath) - current.yearOfBirth) 
        > ((((oldest.yearOfDeath === undefined) ? date.getFullYear() : oldest.yearOfDeath) - oldest.yearOfBirth))
        ? current: oldest))
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
