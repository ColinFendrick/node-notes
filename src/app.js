// function statement
const greet = name => console.log(`Hey ${name}`);

// first-class function
const logGreeting = (fn, str) => fn(str);

// function expression
const greetMe = logGreeting(greet, "Colin");