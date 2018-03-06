var person = {
	firstname: "",
	lastname: "",
	greet: function() {
		`Hello ${this.firstname} ${this.lastname}`;
	}
};

var john = Object.create(person);
john.firstname = "John";