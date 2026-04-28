const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) resolve("Access Granted");
      else reject("Access Denied");
    }, 1000);
  });
};

checkAge(20)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  