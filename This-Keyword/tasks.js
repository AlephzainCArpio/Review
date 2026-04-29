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