const greet = require("./greet");

greet();

const person = {
	name: {
		first: "John",
		last: "Doe"
	},
	greet: () => {
		console.log(`Hello, ${person.name.first} ${person.name.last}`);
	}
};

person.greet();
