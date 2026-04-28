// Declaration
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
sayHello("Alephzain");

function add(a, b) {
  console.log(a + b);
}
add(2, 3);

function multiply(a, b) {
  console.log(a * b);
}
multiply(2, 3);

// Expression (arrow)
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Alephzain");

const introduce = (name, age) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("Alephzain", 24);