const removeFromArray = function() {
    const myArr = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        while (myArr.includes(arguments[i])) {
            myArr.splice(myArr.indexOf(arguments[i]), 1);
        }
    }
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
