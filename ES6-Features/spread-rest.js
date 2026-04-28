// Spread
const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];
const allItems = [...fruits, ...veggies, "tomato"];
console.log(allItems);

// Rest
const getAverage = (...scores) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  console.log(total / scores.length);
};
getAverage(90, 80, 70);
getAverage(100, 90, 80, 70, 60);