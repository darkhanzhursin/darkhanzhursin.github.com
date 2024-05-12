const fs = require("fs");
console.log("start");
fs.readFile("hello.txt", () => console.log("I/O"));
new Promise((resolve) => resolve("Hi")).then(() =>
  console.log("this is Promise.resolve 1")
);
process.nextTick(() => console.log("this is process.nextTick 1"));
console.log("end");
