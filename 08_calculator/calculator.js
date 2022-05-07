const add = function(numOne, numTwo) {
  let addNum = numOne + numTwo;
  return addNum;
};

const subtract = function(numOne, numTwo) {
	let subNum = numOne - numTwo;
  return subNum;
};

const sum = function(arrNum) {
  let sumNum = 0;
  for (let x = 0; x < arrNum.length; x++){
    sumNum += arrNum[x];
  }
	return sumNum;
};

const multiply = function(arrNum) {
  let numMulti = 1;
  for(let num of arrNum){
    numMulti *= num;
  }
  return numMulti;
};

const power = function(numBase, numExp) {
  /*
	let numPower = 1;
  for (let x = 0; x < numExp; x ++){
    numPower *= numBase;
  }
  return numPower;
  */
  return Math.pow(numBase, numExp);
  
};

const factorial = function(numb){
  let fact = 1;
  if (numb > 0){
    for(numb; numb > 0; numb--){
      fact *= numb;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
