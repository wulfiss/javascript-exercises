const findTheOldest = function(people) {
    
    const getAge = (death, birth) => {
        if(!death){death = new Date().getFullYear()};
        return death - birth;
    }

   
    let findOld = people.reduce((oldestOne, currentValue) => {
        let currentAge = getAge(currentValue.yearOfDeath, currentValue.yearOfBirth);
        let oldestAge = getAge(oldestOne.yearOfDeath, oldestOne.yearOfBirth);
        return oldestAge > currentAge ? oldestOne : currentValue;
        });
    

    return findOld;
};
    /*
    let findOld = people.sort((a, b) => {
        let aYearOfBi = a.yearOfBirth;
        let aYearOfDe = a.yearOfDeath;
        let bYearOfBi = b.yearOfBirth;
        let bYearOfDe = b.yearOfDeath;
  
        if(aYearOfDe == null){aYearOfDe = new Date().getFullYear();};
        if(bYearOfDe == null){bYearOfDe = new Date().getFullYear();};
  
        const numberOne = aYearOfDe - aYearOfBi;
        const numberTwo = bYearOfDe - bYearOfBi;
        return numberTwo - numberOne; 

    }); return findOld[0];
    */


// Do not edit below this line
module.exports = findTheOldest;
