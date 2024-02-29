var simple_math = require('simple_math_for_tea')

function multiply(x, y){
	return x * y;
}

function divide(x, y){
	return x / y;
}

module.exports = {
	multiplication: multiply,
	division: divide
}