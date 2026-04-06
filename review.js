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

function checkeven(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}
checkeven(4);
checkeven(7);

function findBigger(a, b) {
  if (a > b) {
    console.log(a + " is bigger than " + b);
  } else if (b > a) {
    console.log(b + " is bigger than " + a);
  } else {
    console.log("Both numbers are equal.");
  }
}
findBigger(5, 10);
findBigger(15, 8);
findBigger(12, 12);

function greetByTime(hour) {
  if (hour < 12) {
    console.log("Good morning!");
  } else if (hour < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  } 
}
greetByTime(9);
greetByTime(14);
greetByTime(20);