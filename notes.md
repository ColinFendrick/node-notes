### V8 is a javascript engine written in C++. It can bind javascript code to C++ functions to work Javascript code into a C++ function.
This allows print, load, etc JS keyword functions to run in the console through C++.

Server-side code that performs requested jobs. Client requests services.

HTTP is the standard request/response language for the internet.
Google chrome runs C++ for things like DOM manipulation that are outside of ECMAscript specifications.

Browser/client in this instance is running Javascript, web services are running PHP/C#/Ruby, etc

Node runs javascript on web server so we only need one language

To manage a server, Javascript needs 
* ways to organize code into reusable pieces
* ways to deal with files
* ways to deal with databases
* ability to communicate over the internet
* ability to accept requests and send responses
* deal with work that takes a long time

Node is a set of features available in C++ through the node module

Javascript code involves `process.binding` to grab the C++ code and wrap it

Node gets pointed at the javascript files to run

First-class functions: functions work as variables in javascript

Expression: block of code that results in a value

Inheritance is when objects get access to the properties and methods of another through proto object.

Function constructors are functions that are used to construct object via the `new` keyword and the 'this' keyword.

Passing primitives to a function or whatever points to a specific spot in memory. The new variable points to a different location in memory. By value.

By memory passing: when an object is passed to a function, the new variable points to the same location in memory.

NodeJS  takes advantage of passing by reference to alter properties of objects

Immediately invoked function expressions were used to fake modules before modules existed

module.js is used to compile our code on loading a module with the require keyword
It wraps our code in a function then sends it as a string to v8.

Module.exports is what the require function returns.

Since the code is wrapped in a function that is given these things as function parameters this works through node.




