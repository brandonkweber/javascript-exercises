const removeFromArray = function(arr) {
    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; ++i) {
            let arrayLength = arr.length;
            for (let j = 0; j < arrayLength;) {
                if (arr[j] === arguments[i]) {
                    arr.splice(j, 1);
                    --arrayLength;
                } else {
                    j++;
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
