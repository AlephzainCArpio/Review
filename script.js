const title = document.getElementById("title");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
});
const backBtn = document.getElementById("btn2");
backBtn.addEventListener("click", () => {
  title.textContent = "Hello World";
}); 