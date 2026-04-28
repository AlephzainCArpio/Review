const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) resolve("Access Granted");
      else reject("Access Denied");
    }, 1000);
  });
};

const main = async () => {
  try {
    const result = await checkAge(20);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

main();