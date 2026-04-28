// Basic catch
try {
  const result = someUndefinedVariable;
} catch (error) {
  console.log("Something went wrong:", error.message);
}
console.log("This still runs");

// Catch out-of-bounds
const getUser = (users, index) => users[index].name;
const users = [{ name: "John" }, { name: "Jane" }];
try {
  console.log(getUser(users, 5));
} catch (error) {
  console.log("Error: " + error.message);
}

// Custom throw
const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a and b must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  console.log(a / b);
};

try { divide(10, 2); } catch (e) { console.log("Error: " + e.message); }
try { divide(10, 0); } catch (e) { console.log("Error: " + e.message); }
try { divide(10, "a"); } catch (e) { console.log("Error: " + e.message); }