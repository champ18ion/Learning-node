// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utility')
const data = require('./6-alternate-flav')
require('./7-mind-greanade');
console.log(data);
console.log(names);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)