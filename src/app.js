const greet = require("./greet");

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

// function Person(firstname, lastname) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// }

// Person.prototype.greet = function() {

// 	console.log(`Hello, ${this.firstname} ${this.lastname}`);
// };

// const john = new Person("John", "Doe");
// john.greet();

//by value
const change = b => {
	b = 2;
};

const a = 1;
change(a);
console.log(a);

//by reference
function changeObj(d) {
	d.prop1 = () => {};
	d.prop2 = {};
}

const c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

//immediately invoked function expression
(function (params) {
	console.log("this is how we used to fake modules", params);
}("params"));
