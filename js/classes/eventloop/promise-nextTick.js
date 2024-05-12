console.log("start");
new Promise((resolve) => resolve("hi")).then(() =>
  console.log("Promise is resolved")
);

process.nextTick(() => console.log("NextTick is executed"));
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");

// log(start) -> executed first
// Promise ->
