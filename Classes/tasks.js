//=========Tasks 1=========
class Car{
    constructor(year,brand,model){
        this.year = year;
        this.brand = brand;
        this.model = model;
    }
    getInfo(){
        return this.year + " " + this.brand + " " + this.model;
    }
}
const car1 = new Car(2020,"Toyota","Supra");
const car2 = new Car(2019,"Honda","Civic");
const car3 = new Car(2023,"Ford","Mustang");
console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());

//=========Tasks 2=========
class Animal { 
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this.name + " makes a sound.";
    }
}

class Dog extends Animal {
    speak() {
        return this.name + " barks.";
    }
}

class Cat extends Animal {
    speak() {
        return this.name + " meows.";
    }
}
const dog = new Dog("Buddy");
console.log(dog.speak());
const cat = new Cat("Kitty");
console.log(cat.speak());

//=========Tasks 3=========
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  getInfo() {
    return this.name + " | " + this.course + " | Adult: " + this.isAdult();
  }
}

const s = new Student("Alephzain", 24, "Computer Science");
console.log(s.getInfo());