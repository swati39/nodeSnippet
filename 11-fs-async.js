//fs-async
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return console.log(err);
  } else {
    console.log(result);
    writeFile(
      "./content/results.txt",
      "Hello I am async text",
      "utf8",
      (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }
});
