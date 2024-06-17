const add = function(numOne, numTwo) {

	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	
	return numOne - numTwo;
};

const sum = function(array) {

	let sum = 0;

	for(let elem of array){

		sum += elem;
	}

	return sum;
};

const multiply = function(array) {

	let product = 1;

	for(let elem of array){

		product *= elem;
	}

	return product;
};

const power = function(numOne, numTwo) {

	return numOne ** numTwo;
};

const factorial = function(num) {

	let factorial = 1;

	for(let i = 1; i <= num; i++){

		factorial *= i;
	}

	return factorial;
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
