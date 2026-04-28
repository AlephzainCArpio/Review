for (let i = 0; i < 100; i++) {
  console.log(i);
}

let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log("Number: " + numbers[i]);
  if (i === numbers.length - 1) {
    console.log("Last number: " + numbers[i]);
  }
}

let num = [10, 15, 20, 25, 30];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log("Even: " + num[i]);
  } else {
    console.log("Odd: " + num[i]);
  }
}