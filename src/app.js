// function statement
const greet = str => {
	console.log(str);
};

const logGreeting = (fn, str) => {
	fn(str);
};
logGreeting(greet, "hey dummy");