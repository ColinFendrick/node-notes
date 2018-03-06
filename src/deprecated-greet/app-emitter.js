var Emitter = require("./emitter");

var emtr = new Emitter();

// Creating listeners
emtr.on("greet", function() {
	console.log("Someone said hello");
});

emtr.on("greet", function() {
	console.log("A greeting occcured!");
});

// Emitting the event "greet"
emtr.emit("greet");