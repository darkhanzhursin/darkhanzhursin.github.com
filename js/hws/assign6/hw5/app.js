// It causes an error: TypeError: getName is not a function
// in order to get a function we need to get function first from the opject:
// exports = { getName: fn } - require("./pattern1").getName;

const getName = require("./pattern1");

getName();
