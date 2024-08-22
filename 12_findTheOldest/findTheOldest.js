const findTheOldest = function(people) {
    const oldest = people.sort((personOne, personTwo) => {
        personOne.yearOfDeath ??= new Date().getFullYear();
        personTwo.yearOfDeath ??= new Date().getFullYear();
        if ((personOne.yearOfDeath - personOne.yearOfBirth) < (personTwo.yearOfDeath-personTwo.yearOfBirth)) {
            return -1
        }
        else {
            return 1
        }
    })    
    return oldest[oldest.length-1]

};
// Do not edit below this line
module.exports = findTheOldest;
