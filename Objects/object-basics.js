let car = {
  brand: "Toyota",
  speed: 120,
  getInfo: function () {
    return this.brand + " - " + this.speed + " km/h";
  }
};
console.log(car.getInfo());

let studentInfo = {
  name: "Alephzain",
  score: 85,
  getGrade: function () {
    if (this.score >= 90) return "Excellent";
    else if (this.score >= 75) return "Good";
    else if (this.score >= 50) return "Pass";
    else return "Failed";
  }
};
console.log(studentInfo.name + " = " + studentInfo.getGrade());

// Shared method via reference
function getGrade() {
  if (this.score >= 90) return "Excellent";
  else if (this.score >= 75) return "Good";
  else if (this.score >= 50) return "Pass";
  else return "Failed";
}

let students = [
  { name: "John", score: 90, getGrade },
  { name: "Jane", score: 60, getGrade },
  { name: "Mark", score: 75, getGrade },
  { name: "Ana", score: 45, getGrade }
];

students.forEach(student => {
  console.log(student.name + " = " + student.getGrade());
});