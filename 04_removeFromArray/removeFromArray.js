const removeFromArray = function(array, ...arrNum) {
    let newArr = [];
    for (const arrO of array){
        if(arrNum.includes(arrO) == false){
            newArr.push(arrO);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
