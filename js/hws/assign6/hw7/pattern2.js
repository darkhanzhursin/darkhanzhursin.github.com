// after wrapping by Node: exports object is a reference to the module.exports
// creates getFirstname property in the object
// exports = module.exports;
exports.getFirstname = function () {
  console.log("Josh");
};

// creates new object,  reference is broken
// exports != module.exports;
exports = {
  getLastname: function () {
    console.log("Edward");
  },
};

// add new getFullname to the existing object
module.exports.getFullname = function () {
  console.log("Josh Edward");
};
