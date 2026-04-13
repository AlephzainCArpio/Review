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

function calculator(a,b,operation) {
  if (operation === "add") {
    console.log(a + b);
  } else if (operation === "subtract") {
    console.log(a - b);
  } else if (operation === "multiply") {
    console.log(a * b);
  } else if (operation === "divide") {
    console.log(a / b);
  }
  else {    console.log("Invalid operation");
  }
}
calculator(10, 5, "add");
calculator(10, 5, "subtract");
calculator(10, 5, "multiply");
calculator(10, 5, "divide");

function checkGrade(score) {
  if (score >=100) {
    console.log(score + " = Invalid score");
  } else if (score >= 90) {
    console.log(score + " = Grade A");
  } else if (score >= 80) {
    console.log(score + " = Grade B");
  } else if (score >= 70) {
    console.log(score + " = Grade C");
  } else if (score >= 60) {
    console.log(score + " = Grade D");
  } else {
    console.log(score + " = Grade F");
  }
}
let studentScore = [95,85, 72, 60, 55,100, 110];
studentScore.forEach(checkGrade);

let fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "orange";
console.log(fruits);

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors[2] = "yellow";
console.log(colors);
console.log(colors[2])

let nums = [5, 10, 15, 20];
console.log(nums);
console.log(nums.length);
console.log(nums[nums.length - 1]);


for (let i = 0; i < 100; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: " + fruits[i]);
}

let numbers = [10,20,30,40,50];
for (let i = 0; i < numbers.length; i++) {
   console.log("Number: " + numbers[i]);
  if (i === numbers.length - 1) {
    console.log("Last number: " + numbers[i]);
  }
}
let num = [10, 15, 20, 25, 30];
for (let i = 0; i < num.length; i++) {
 if (num[i] % 2 === 0) {
  console.log("Even: " + num[i]);
} else {
  console.log("Odd: " + num[i]);
}
}

