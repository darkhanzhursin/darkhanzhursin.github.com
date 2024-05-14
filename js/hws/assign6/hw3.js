const fs = require("fs");

fs.readFile("hello.txt", () => {
  console.log("readFile...."); // 3
});

setTimeout(() => console.log("timeout"), 0); // 1

setImmediate(() => console.log("Immediate")); // 2
