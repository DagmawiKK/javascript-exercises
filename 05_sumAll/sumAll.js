const sumAll = function(num1, num2) {
    let count = 0;
    if (Number.isNaN(num1) || Number.isNaN(num2)|| num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for(let i = num1; i < num2 - 1; i++) {
        count = count + i + 1;
    }
    return count + num1 + num2;
};

// Do not edit below this line
module.exports = sumAll;
