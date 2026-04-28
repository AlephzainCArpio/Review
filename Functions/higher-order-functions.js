// forEach with named function
function checkPass(score) {
  if (score >= 75) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
let scores = [90, 60, 80, 50];
scores.forEach(checkPass);

// Shared grade logic via function reference
function getGrade(score) {
  if (score > 100 || score < 0) return "Invalid";
  else if (score >= 90) return "Excellent";
  else if (score >= 75) return "Good";
  else if (score >= 50) return "Pass";
  else return "Failed";
}

let students = [
  { name: "John", score: 90 },
  { name: "Jane", score: 60 },
  { name: "Mark", score: 75 },
  { name: "Ana", score: 45 }
];

students.forEach(student => {
  console.log(student.name + " = " + getGrade(student.score));
});

// Collecting results into new array
let results = [];
students.forEach(student => {
  results.push({
    name: student.name,
    score: student.score,
    grade: getGrade(student.score)
  });
});
console.log(results);

// Rest params
const getAverage = (...scores) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  console.log(total / scores.length);
};
getAverage(90, 80, 70);
getAverage(100, 90, 80, 70, 60);