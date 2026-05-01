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
const cat = new Cat("Kitty");

console.log(dog.speak());
console.log(cat.speak());

// calling the parent class method using super
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);        
    this.breed = breed; 
  }

  getInfo() {
    return this.name + " is a " + this.breed;
  }
}

const dog = new Dog("Buddy", "Labrador");
console.log(dog.getInfo());