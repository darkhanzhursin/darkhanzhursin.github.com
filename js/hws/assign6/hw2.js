console.log("start"); // 1 goes first synchronously

setTimeout(() => console.log("timeout 1"), 0); // 7 event loops

setTimeout(() => {
  console.log("timeout 2"); // 8

  process.nextTick(() => console.log("nextTick 3")); // 9
}, 0);

setTimeout(() => console.log("timeout 3"), 0); // 10

new Promise((resolve, reject) => resolve("Hello")).then(() =>
  console.log("Promise...1")
); // 5 right after nextTick

new Promise((resolve, reject) => resolve("Hello")).then(() =>
  console.log("Promise...2")
); // 6

process.nextTick(() => console.log("nextTick 1")); // 3 has most priority
process.nextTick(() => console.log("nextTick 2")); // 4

console.log("end"); // 2 synchromously
