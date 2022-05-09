const findTheOldest = function(people) {
    if()
    let findOld = people.sort((a, b) => {
        let aYearOfBi = a.yearOfBirth;
        let aYearOfDe = a.yearOfDeath;
        let bYearOfBi = b.yearOfBirth;
        let bYearOfDe = b.yearOfDeath;
  
        if(typeof(aYearOfDe) != 'number'){aYearOfDe = new Date().getFullYear();};
        if(typeof(bYearOfDe) != 'number'){bYearOfDe = new Date().getFullYear();};
  
        const numberOne = aYearOfDe - aYearOfBi;
        const numberTwo = bYearOfDe - bYearOfBi;
        return numberTwo - numberOne; 

    });return findOld[0];
};

// Do not edit below this line
module.exports = findTheOldest;



const nineTeen = people.some((date) => {
    CURRENT_YEAR = new Date().getFullYear();
    return (CURRENT_YEAR - date.year) >= 19; 
  })