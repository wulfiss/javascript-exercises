const fibonacci = function(userVal) {
    let lastValue = 0;
    let nextValue = 1;
    let currentValue = 0;
    let fibonacciArray = [];

    for(let x = 0; x <= userVal; x++){
        fibonacciArray.push(currentValue);
        currentValue = lastValue + nextValue;
        nextValue = lastValue;
        lastValue = currentValue;
    }
    return fibonacciArray[fibonacciArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
