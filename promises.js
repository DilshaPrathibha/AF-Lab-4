const condition = true;  // change to false to test rejection

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });