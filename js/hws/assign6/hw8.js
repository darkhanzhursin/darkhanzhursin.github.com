const result = function (exports, module) {
  // Inside this function, 'exports' and 'module' are the parameters that are passed in.
  // The 'exports' and 'module' parameters represent the values passed to the function when it's invoked using the apply method.

  exports = module.exports; // This line is trying to ensure that 'exports' refers to the same object as 'module.exports'.
  console.log(module.exports);

  exports.firstname = "John"; // This adds a 'firstname' property to the 'exports' object.
  console.log(module.exports);

  module.exports.lastname = "Smith"; // This adds a 'lastname' property to the 'module.exports' object.
  console.log(module.exports);

  // Here, a new object is being assigned to 'exports', breaking the reference between 'exports' and 'module.exports'.
  exports = {
    getFullName: function () {
      console.log("John Smith");
    },
  };

  // The function returns 'module.exports', which is the object that contains both 'firstname' and 'lastname' properties.
  return module.exports;

  // first parameter thisArg
  // The value of this provided for the call to func. If the function is not in strict mode,
  // null and undefined will be replaced with the global object, and primitive values will be converted to objects.
  // second parameter argsArray: An array-like object, specifying the arguments with which func should be called,
  // or null or undefined if no arguments should be provided to the function.
  // so exports = null, module = { exports: {} } which is object with expotrs empty object property
}.bind(null, null, { exports: {} })();

//call(null, null, { exports: {} });
//apply(null, [null, { exports: {} }]);

// { firstname: 'John', lastname: 'Smith' }
console.log(result); // Logs the result of the function call, which is the 'module.exports' object with 'firstname' and 'lastname' properties.
