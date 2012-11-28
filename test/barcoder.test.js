
var should   = require('should');
var Barcoder = require('../lib/barcoder');

var validEan13 = '9330071314999';
var invalidEan13 = '0016T20054453';

describe('Barcoder', function () {

  describe('new Barcoder()', function() {
    it('should init without errors', function( done ) {
      new Barcoder('ean13');
      done();
    });
    it('should throw an error, because of the missing format', function( done ) {
      (function() {
        new Barcoder();
      }).should.throw();
      done();
    });
  });

  describe('validate()', function() {

    it('should return true, when validating a valid EAN13', function( done ) {
      var validator = new Barcoder('ean13');
      validator.validate( validEan13 ).should.be.true;
      done();
    });

    it('should return false, when validating an invalid EAN13', function( done ) {
      var validator = new Barcoder('ean13');
      validator.validate( invalidEan13 ).should.be.false;
      done();
    });

  });

});