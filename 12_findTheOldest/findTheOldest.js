const findTheOldest = function(persons) {
    let maxAge = 0;
    let age = 0;
    let maxAgeHolder;
    persons.forEach(person => {
        age = (person.yearOfDeath ?? 2024) - person.yearOfBirth;
        if (age > maxAge) {
            maxAgeHolder = person;
            maxAge = age;
        }
    });
    return maxAgeHolder;
};

// Do not edit below this line
module.exports = findTheOldest;
