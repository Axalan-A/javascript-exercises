const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(numArray) {
	return numArray.reduce((sum, current) => sum + current, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((prod, current) => prod * current, 1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let product = 1
  for(let i = 2; i <= a; i++){
    product = product*i
  }
  return product
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
