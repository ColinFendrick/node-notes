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
