// this — arrow function INSIDE a method (correct use)
// in this case, the arrow function inherits "this" from the method, which is the user object. So it works as expected.
const user = {
  name: "Alephzain",
  hobbies: ["coding", "gaming"],
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);
    });
  }
};
user.showHobbies();
// "Alephzain likes coding"
// "Alephzain likes gaming"

// this — losing context
// when we assign a method to a variable and call it, "this" loses its original context (the user object) and becomes undefined (in strict mode) or the global object (in non-strict mode). This is a common trap.
const user = {
  name: "Alephzain",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

const fn = user.greet;
fn(); // "Hello, undefined"

// Fixing lost context with .bind()
// We can use .bind() to lock "this" to the user object, even when the function is called in a different context.
const user = { 
  name: "Alephzain",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
const fn = user.greet.bind(user);
fn(); // "Hello, Alephzain"
