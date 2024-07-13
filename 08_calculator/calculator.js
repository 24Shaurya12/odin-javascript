const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(args) {
  return args.reduce((total, current) => total + current, 0);
};

const multiply = function(args) {
  return args.reduce((total, current) => total * current, 1);
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function (num) {
  let output = 1;
  for (let i = num; i > 1; i--) {
    output *= i;
  }
  return output;
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
