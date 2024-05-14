var message = "Hello World";

function logMessage() {
  console.log(this); // global
  console.log(this.message); // undefined
}

logMessage();

// in browser it will work as it references window which has global var message
// in node this references to global object which has not var message.
// Node.js was designed to behave differently with everything being local by default.
