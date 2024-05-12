console.log("start");
setTimeout(() => console.log("timeout 1"));

setTimeout(() => {
  console.log("timeout 3");
  process.nextTick(() => console.log("inside Timeout 3"));
});

setTimeout(() => console.log("timeout 2"));

new Promise((resolve) => resolve("Hi")).then(() => console.log("Promise 1"));
new Promise((resolve) => resolve("Hi")).then(() => console.log("Promise 2"));

process.nextTick(() => console.log("next Tick 1"));
process.nextTick(() => console.log("next Tick 2"));
console.log("end");
