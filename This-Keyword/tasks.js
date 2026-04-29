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


// ========== Task 3 ==========

const bank = {
  owner: "Alephzain",
  balance: 1000,
  transactions: [200, -500, 150, -100],
  getSummary: function () {
    const net = this.transactions.reduce((sum, amount) => sum + amount, 0);
    return this.owner + " final balance: " + (this.balance + net);
  }
};

console.log(bank.getSummary());
