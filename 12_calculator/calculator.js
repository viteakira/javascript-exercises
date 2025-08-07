const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myNums) {
  let sum = 0;

	for (let i = 0; i < myNums.length; i++ ) {
    sum += myNums[i];
  }

  return sum;
};

const multiply = function(myNums) {
  let sum = myNums[0];

	for (let i = 1; i < myNums.length; i++ ) {
    sum *= myNums[i];
  }

  return sum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {

  let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
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

