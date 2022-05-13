const caesar = function(text, numbShift) {

    let stringArr = Array.from(text);
    let stringArrFinal = [];
    let finalText = "";

    stringArr.forEach((e)=>{
        stringArrFinal.push(stringArrF(e.codePointAt(), numbShift))
    });

    stringArrFinal.forEach((e) => {
    finalText += String.fromCharCode(e);
    })

    return finalText;

    function stringArrF(code, numbShift){
	
	    if (code >= 97 && code <= 122 || code >= 65 && code <= 90){
            let tempNum = 0;
            let maxLimit = 0;
            let minLimit = 0;
        
		    if(code >= 97){
			    maxLimit = 122;
			    minLimit = 97;
		    }else{
			    maxLimit = 90; 
			    minLimit = 65;
		    }
	
		    tempNum = (code + numbShift);
	
		    if(tempNum > maxLimit){
			    while(tempNum > maxLimit){
				    tempNum = (tempNum - maxLimit) + (minLimit - 1);
			    }
                return tempNum;
		    }else if(tempNum < minLimit){
			    while(tempNum < minLimit){
				    tempNum = maxLimit - ((minLimit - 1) - tempNum);
			    }
			    return tempNum;
		    }else{
			    return tempNum;
			    }
	    }else{
	        return code;
	    }
    }

};
// Do not edit below this line
module.exports = caesar;
