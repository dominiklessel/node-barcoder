
var Barcoder = require('../lib/barcoder');

var ean1 = '0016T20054453';
var ean2 = '9330071314999';
      
var validator = new Barcoder('ean13');

console.log( ean1 + ' is valid: ' + validator.validate( ean1 ) );
console.log( ean2 + ' is valid: ' + validator.validate( ean2 ) );
