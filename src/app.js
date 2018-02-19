// const greet = require("./greet");

// greet();

// const person = {
// 	name: {
// 		first: "John",
// 		last: "Doe"
// 	},
// 	greet: () => {
// 		console.log(`Hello, ${person.name.first} ${person.name.last}`);
// 	}
// };

// person.greet();

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greet = function() {
	console.log(`Hello, ${this.firstname} ${this.lastname}`);
};

const john = new Person("John", "Doe");
john.greet();
