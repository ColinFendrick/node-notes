var greet = require("./greet1");
greet();

var greet2 = require("./greet2").greet;
greet2();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "Changed hello world!";

// This will call "Changed hello world!" since Node is caching the modules by the filename
// so if I alter the greet3 objet, it will be altered every time it is called
var greet3b = require("./greet3");
greet3b.greet();

var Greet4 = require("./greet4");
// I have to create a new instance of this object, since I am only exporting the constructor fn, not an instance of the object in Greet4
var grtr = new Greet4();
grtr.greet();

var greet5 = require("./greet5").greet;
greet5();