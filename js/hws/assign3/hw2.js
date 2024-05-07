let i = 0;
setTimeout(() => console.log(i), 100);

for (let j = 0; j < 100000000; j++) {
  i++;
}

// After the loop, as setTimeout doesn't pause the execution of the main thread
