const reverseString = function(string) {
    let myStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        myStr = myStr + string[i];
    };
    return myStr;
};

// Do not edit below this line
module.exports = reverseString;
