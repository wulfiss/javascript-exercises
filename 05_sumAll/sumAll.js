const sumAll = function(numOne, numTwo) {
    let largeNum;
    let minNum;
    let addNum = 0;

    if(numOne < 0 || typeof numOne != "number" || numTwo < 0 || typeof numTwo != "number"){
        addNum = "ERROR";
    }else{
        if (numOne < numTwo){
            largeNum = numTwo;
            minNum = numOne;
        }else{
            largeNum = numOne;
            minNum = numTwo;
        }

        for(let x = minNum; x <= largeNum; x++){
            addNum += x;
        }
    }
    return addNum;
};

// Do not edit below this line
module.exports = sumAll;
