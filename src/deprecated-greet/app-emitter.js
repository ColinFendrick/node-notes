var Emitter = require("events");
var config = require("./config");

var emtr = new Emitter();

// Creating listeners
emtr.on(config.events.GREET, function () {
	console.log("Someone said hello");
});

emtr.on(config.events.GREET, function () {
	console.log("A greeting occcured!");
});

// Emitting the event "greet"
emtr.emit(config.events.GREET);