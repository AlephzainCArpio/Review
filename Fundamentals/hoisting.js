// Variable hoisting
console.log(age); // undefined
let age = 24;
console.log(age);

// Function declaration hoisting
greet(); // works
function greet() {
  console.log("Hello!");
}

// Function expression - NOT hoisted
sayBye(); // throws ReferenceError
const sayBye = () => {
  console.log("Bye!");
};

// var hoisting inside function
var x = 1;
function test() {
  console.log(x); // undefined (var hoisted inside scope)
  var x = 2;
  console.log(x);
}
test();
console.log(x);