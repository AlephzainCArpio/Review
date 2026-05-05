//Real world example of fetching JSON data from a server and processing it
//Using the Fetch API to get JSON data from a public API
fetch("https://api.example.com/user/1")
  .then(response => response.json()) // parse JSON automatically
  .then(user => {
    console.log(user.name);
  })
  .catch(error => {
    console.log("Error: " + error);
  });