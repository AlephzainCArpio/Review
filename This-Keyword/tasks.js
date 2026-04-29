// ========== Task 1 ==========
const car = {
  brand: "Toyota",
  model: "Supra",
  year: 2020,
  getCarInfo: function () {
    return this.year + " " + this.brand + " " + this.model;
  }
};
console.log(car.getCarInfo());

// ========== Task 2 ==========

const classroom = {
  students: ["John", "Jane", "Mark"],
  teacher: "Mr. Cruz",
  introduce: function () {
    this.students.forEach(element => {
      console.log(this.teacher + " teaches " + element);
    });
  }
};
classroom.introduce();
