const repeatString = function(string, num) {
    let fullStr = '';
    let i = 0;
    if (num < 0) {
        return 'ERROR';
    }
    while (i < num) {
        fullStr += string;
        ++i;
    }
    return fullStr;
};

// Do not edit below this line
module.exports = repeatString;
