// I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

const fs = require("fs");
fs.readFile("hello.txt", () => console.log("this is readFile 1"));
new Promise((resolve) => resolve("Hi")).then(() =>
  console.log("this is Promise.resolve 1")
);
process.nextTick(() => console.log("this is process.nextTick 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
for (let i = 0; i < 2000000000; i++) {}
