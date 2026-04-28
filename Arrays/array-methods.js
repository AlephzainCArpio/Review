// Basics
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);
fruits[1] = "orange";
console.log(fruits);

let nums = [5, 10, 15, 20];
console.log(nums.length);
console.log(nums[nums.length - 1]);

// map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const scores = [70, 80, 60, 90];
const updatedScores = scores.map((score) => score + 10);
console.log(updatedScores);

// filter
const bigNumbers = [10, 25, 30, 45, 50].filter((num) => num > 30);
console.log(bigNumbers);

const passedStudents = [
  { name: "John", score: 90 },
  { name: "Jane", score: 60 },
  { name: "Mark", score: 75 },
  { name: "Ana", score: 45 }
].filter((student) => student.score >= 75);
console.log(passedStudents);

// reduce
const total = [10, 20, 30, 40].reduce((sum, num) => sum + num, 0);
console.log(total);

const product = [1, 2, 3, 4, 5, 6].reduce((result, num) => result * num, 1);
console.log(product);

// Chaining
const chainResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log(chainResult);