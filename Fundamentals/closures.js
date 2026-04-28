// Basic closure
function outer() {
  let message = "I am from outer";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// Closure factory
function makeGreeter(greeting) {
  return (name) => {
    console.log(`${greeting} ${name}!`);
  };
}
const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");
sayHello("Alephzain");
sayHi("Alephzain");

// Closure with multiplier
function makeMultiplier(multiplier) {
  return (number) => number * multiplier;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5));
console.log(triple(5));

// Closure with state (counter)
function makeCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());