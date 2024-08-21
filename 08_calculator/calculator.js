const add = function() {
  return arguments[0] + arguments[1];
	
};
const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
	if (arguments[0].length == 0) {
    return 0;
  }
  return arguments[0].reduce((total, current)  => total += current, 0);
};

const multiply = function() {
	if (arguments[0].length == 0) {
    return 0;
  }
  return arguments[0].reduce((total, current)  => total *= current, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
  if (arguments[0] == 1 || arguments[0] == 0) {
    return 1;
  }
  let total = 1;
  for(let i = 1; i <= arguments[0]; i++) {
    total *= i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
