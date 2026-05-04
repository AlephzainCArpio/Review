// ===== Task 1 =====
function greetUser (name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function howAreYou() {
    console.log("How are you?");
}
greetUser("Alephzain", howAreYou);

// ===== Task 2 =====
function processGrades(scores, onPass, onFail) {
  scores.forEach(score => {
    if (score >= 75) {
      onPass(score);
    } else {
      onFail(score);
    }
  });
}

function onPass(score) {
  console.log(score + " - Passed");
}

function onFail(score) {
  console.log(score + " - Failed");
}

const grades = [90, 60, 75, 45, 85];
processGrades(grades, onPass, onFail);

// ===== Task 3 =====
function fetchUser(id, callback) {
  setTimeout(function() {
    if (id <= 0) {
      callback("Invalid ID", null);
    } else {
      const user = { id: id, name: "Alephzain" };
      callback(null, user);
    }
  }, 1000);
}

fetchUser(1, function(error, result) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("User: " + result.name);
  }
});

fetchUser(-1, function(error, result) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("User: " + result.name);
  }
});