console.log(this); // In browser: Window object
                   // In Node.js: {} (empty module object)
                   
// this in a regular function called on its own — "this" is the global object. In strict mode it's undefined.
function showThis() {
  console.log(this);
}
showThis(); // Browser: Window | Node.js: global

// this in a Method (most common use) 
// When a function is called as a method of an object, this = that object. This is the core use case.
const user = {
  name: "Alephzain",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // "Hello, Alephzain"

// this in an Arrow Function
// Arrow functions do not have their own "this". They inherit "this" from the surrounding context.
const user = {
  name: "Alephzain",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // "Hello, undefined"

