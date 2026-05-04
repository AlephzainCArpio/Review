// Basic Callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alephzain", sayBye);

// Callback with data
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(5, 3, function(result) {
  console.log("Result: " + result);
});

// Callbacks in array methods
// forEach and map both take callbacks
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});

const doubled = numbers.map(function(num) {
  return num * 2;
});