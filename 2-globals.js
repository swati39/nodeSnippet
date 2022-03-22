//globals
// •	__dirname  path to current directory
// •	__filename  file name
// •	require  function to use modules  (CommonJS)
// •	process  info about the env(environment) where the program is being executed

console.log("====================================");
console.log(__dirname);
console.log("====================================");
console.log("====================================");
console.log(__filename);
console.log("====================================");

setInterval(() => {
  console.log("Hacking");
}, 2000);

setTimeout(() => {
  console.log("====================================");
  console.log("Hi I am Timeout");
  console.log("====================================");
}, 1000);
