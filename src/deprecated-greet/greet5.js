var greeting = "Hello world!!!!";

function greet() {
	console.log(greeting);
}

// Common way to export, only exposing the function, not the variable
module.exports = {
	greet: greet
};