const repeatString = function(string, num) {
    let addString = "";

    if(num < 0){
        addString = "ERROR";
    }else{
        for(let x = 0; x < num; x++){
             addString += string;
        }   
    }
    return addString;
};

// Do not edit below this line
module.exports = repeatString;
