let name = "Alephzain";
console.log(name);
let age = 24;
console.log(age);
let isStudent = false;
console.log(isStudent);
if (isStudent) {
  console.log("Welcome to the school");
} else {
  console.log("Access denied");
}
let isHungry = false;

if (isHungry) {
  console.log("Let's eat!");
} else {
  console.log("I'm full");
}
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


let hobbies = ["coding", "gaming", "traveling"];
console.log(hobbies);



function sayHello(name) {
  console.log("Hello, " + name + "!");
}
let message = sayHello("Alephzain");

function checkHunger(isHungry) {
  if (isHungry) {
    console.log("Let's eat!");
  } else {
    console.log("I'm full");
  }
}
checkHunger(true);
checkHunger(false);

function introduce(name, age) {
  console.log("My name is " + name + " and I am " + age + " years old.");
}
introduce("Alephzain", 24);
introduce("Alice", 30);

function add(a, b) {
  let result = a + b;
  console.log(result);
}

add(2, 3);
add(10, 5);
function multiply(a, b) {
  let result = a * b;
  console.log(result);
}
multiply(2, 3);
multiply(2, 100);

function checkAge(age) {
  if (age >= 18) {
    console.log("You are an adult.");
  } else if (age >= 13) {
    console.log("You are a minor.");
  } else {
    console.log("You are a child.");
  }
}
checkAge(24);
checkAge(16);
checkAge(18);
checkAge(12);

