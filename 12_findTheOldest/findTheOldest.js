const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(array) {

    for(let person of array){

        if(!("yearOfDeath" in person)){
    
            person["currentYear"] = new Date().getFullYear();
        }
    }

    const peopleAges = array.map(person => {

        const age = ("yearOfDeath" in person ? person.yearOfDeath : person.currentYear) - person.yearOfBirth;
        return {
            person: person,
            age
        }
    });

    const peopleAgesSorted = peopleAges.sort((a, b) => {

        let aAge = a.age;
        let bAge = b.age;

        return aAge > bAge ? -1 : 1;
    });

    return peopleAgesSorted[0].person
};

// Do not edit below this line
module.exports = findTheOldest;
