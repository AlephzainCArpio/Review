//What JSON looks like
//JSON stands for JavaScript Object Notation
//JSON is a way to store data in an organized and easy-to-access manner
// {
//   "name": "Alephzain",
//   "age": 24,
//   "isStudent": false,
//   "hobbies": ["coding", "gaming"],
//   "address": {
//     "city": "Capas",
//     "country": "Philippines"
//   }
// }

// Coverting JavaScript Object to JSON String
// JSON.stringify() is used to convert a JavaScript object into a JSON string
const user = {
  name: "Alephzain",
  age: 24
};

const jsonString = JSON.stringify(user);
console.log(jsonString); 
console.log(typeof jsonString); 

// Converting JSON String to JavaScript Object
// JSON.parse() is used to convert a JSON string back into a JavaScript object
const jsonString2 = '{"name":"Alephzain","age":24}';

const user = JSON.parse(jsonString2);
console.log(user.name); 
console.log(typeof user); 

//Commmon mistakes JSON VS Object
const user = { name: "Alephzain", age: 24 };

// This is a JavaScript OBJECT — keys don't need quotes
console.log(user.name);

// This is JSON — it's a STRING
const json = '{"name":"Alephzain","age":24}';
console.log(json.name); // undefined — it's a string, not an object

//Pretty-printing JSON
const user = {
  name: "Alephzain",
  age: 24,
    hobbies: ["coding", "gaming"],
    address: {
        city: "Capas",
        country: "Philippines"
    }
};
const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);
