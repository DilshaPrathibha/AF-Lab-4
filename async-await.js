const condition = true; // change to false to test catch

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve("Async/Await Success!");
  else reject("Async/Await Failure!");
});

async function run() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();