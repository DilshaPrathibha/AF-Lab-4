const fs = require("fs");

fs.writeFile("output.txt", "Hello World from writeFile!", function (err) {
  if (err) throw err;
  console.log("File saved successfully!");
});