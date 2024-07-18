const repeatString = function(string, num) {
    let myStr = "";
    if (num < 0) {
        return 'ERROR';
    };
    for (; num > 0; num--) {
        myStr = myStr + string;
    };
    return myStr;
};

// Do not edit below this line
module.exports = repeatString;
