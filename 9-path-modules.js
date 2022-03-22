//path.sep
//path.join
//path.basename
//path.resolve

const path = require("path");
console.log("====================================");
console.log(path.sep);
console.log("====================================");

const filepath = path.join("content", "subfolder", "test.txt");
console.log("====================================");
console.log(filepath);
console.log("====================================");

const base = path.basename(filepath);
console.log(base);

const res = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(res);
