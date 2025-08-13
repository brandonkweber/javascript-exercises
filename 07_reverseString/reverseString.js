const reverseString = function(inputString) {
    //push it into a stack then pop.
    let stringArr = [];
    let reverseArr = ''; 
    for (let i = 0; i < inputString.length; i++) {
        stringArr.push(inputString.charAt(i));
    }
    for (let i = 0; i < inputString.length; i++) {
        reverseArr += stringArr.pop();
    }
    return reverseArr;
};

// Do not edit below this line
module.exports = reverseString;
