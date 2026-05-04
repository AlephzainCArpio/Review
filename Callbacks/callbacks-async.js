// Callback with asynchronous operations
function getUser(id, callback) {
  setTimeout(function() {
    const user = { id: id, name: "Alephzain" };
    callback(user);
  }, 1000);
}

getUser(1, function(user) {
  console.log("Got user: " + user.name); 
});

// Callback with error handling
function divide(a, b, callback) {
  if (b === 0) {
    callback("Cannot divide by zero", null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, function(error, result) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Result: " + result); 
  }
});

divide(10, 0, function(error, result) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Result: " + result);
  }
});