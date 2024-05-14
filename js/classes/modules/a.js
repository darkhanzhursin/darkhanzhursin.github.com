console.log("inside a.js");
var i = 10;
var j = 20;

// module is an object
// exports is a property of module
module.exports.word = "exported";
module.exports.sayHi = function () {
  console.log("Hi");
};

module.exports = {
  firstName: "John",
  lastName: "Smith",
};

console.log(module.exports);
