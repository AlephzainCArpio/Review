const printStudent = (student) => {
  const { name, score } = student;
  console.log(`${name} Scored: ${score}`);
};

const student = { name: "John", score: 90 };
printStudent(student);