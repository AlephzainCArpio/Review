// =======Task 1======
const user = { name: "Alephzain", age: 24, city: "Capas" };

const jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(typeof jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name);
console.log(parsedUser.age);
console.log(parsedUser.city);
console.log(typeof parsedUser);

// =======Task 2======
function getUserInfo(jsonString) {
    const parsedUser = JSON.parse(jsonString);
    return `Name: ${parsedUser.name} | Age: ${parsedUser.age} | City: ${parsedUser.city}`;
}

const jsonString1 = '{"name":"Alephzain","age":24,"city":"Capas"}';
const jsonString2 = '{"name":"John","age":30,"city":"Manila"}';
const jsonString3 = '{"name":"Jane","age":25,"city":"Cebu"}';

console.log(getUserInfo(jsonString1));
console.log(getUserInfo(jsonString2));
console.log(getUserInfo(jsonString3));

//=======Task 3
const students = [
  { name: "John", score: 90 },
  { name: "Jane", score: 60 },
  { name: "Mark", score: 75 }
];
const jsonString = JSON.stringify(students);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
parsed.forEach(student => {
  const grade = student.score >= 75 ? "Passed" : "Failed";
  console.log(student.name + " - " + grade);
});

try {
  const broken = JSON.parse("name: John, score: 90");
  console.log(broken);
} catch (error) {
  console.log("Error caught: invalid JSON");
}