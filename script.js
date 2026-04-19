const title = document.getElementById("title");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
});
const backBtn = document.getElementById("btn2");
backBtn.addEventListener("click", () => {
  title.textContent = "Hello World";
}); 
const input = document.getElementById("input");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
  title.textContent = input.value;
});

const count = document.getElementById("count");
const countBtn = document.getElementById("countBtn");
let counter = 0;
countBtn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
});