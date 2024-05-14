// Exports has 1 property
// exports = {
//   getFirstname: fn()
// }
exports.getFirstname = function () {
  console.log("Josh");
};

// Exports has 1 property, but it breaks a reference by creating a new object
// when we call this part from app.js it is an empty object {}
// exports = {
//   getLastname: fn()
// }
exports = {
  getLastname: function () {
    console.log("Edward");
  },
};

//console.log(exports);

// returns new anonymus fn, breaks reference to the old object
// after wrapping by Node: exports object is a reference to the module.exports
// Node will return the following: return module.exports;
module.exports = function () {
  console.log("Josh Edward");
};
