const sumAll = function(num1, num2) {
    let sum = 0;
    let arrNums = [num1, num2];
    if (arrNums.some(num => typeof num !== 'number' || !Number.isInteger(num) || num < 0)) {
        return 'ERROR';
    }
    arrNums.sort();
    for (let i = arrNums[0]; i <= arrNums[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
