class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Alephzain", 24);
const user2 = new User("John", 30);

console.log(user1.name); 
console.log(user2.name); 

//Adding a method to the User class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, I am " + this.name;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const user = new User("Alephzain", 24);
console.log(user.greet());  
console.log(user.isAdult()); 