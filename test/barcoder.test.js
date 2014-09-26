
/**
 * Module dependencies
 */

var should   = require('should');
var Barcoder = require('../');

/**
 * Input
 */

var input = {
  gtin8: {
    valid: '55123457',
    invalid: '55123458'
  },
  gtin13: {
    valid: '9330071314999',
    invalid: '0016T20054453'
  },
  gtin14: {
    valid: '09781861978769',
    invalid: '09781861978768'
  },
}

describe('Barcoder', function () {

  describe('.validate()', function() {

    it('Valid GTIN-8 should return `true`', function( done ) {
      Barcoder.validate( input.gtin8.valid ).should.be.an.instanceOf(Boolean).and.equal.true;
      done();
    });

    it('Valid GTIN-13 should return `true`', function( done ) {
      Barcoder.validate( input.gtin13.valid ).should.be.an.instanceOf(Boolean).and.equal.true;
      done();
    });

    it('Valid GTIN-14 should return `true`', function( done ) {
      Barcoder.validate( input.gtin14.valid ).should.be.an.instanceOf(Boolean).and.equal.true;
      done();
    });

    it('Invalid GTIN-8 should return `false`', function( done ) {
      Barcoder.validate( input.gtin8.invalid ).should.be.an.instanceOf(Boolean).and.equal.false;
      done();
    });

    it('Invalid GTIN-13 should return `false`', function( done ) {
      Barcoder.validate( input.gtin13.invalid ).should.be.an.instanceOf(Boolean).and.equal.false;
      done();
    });

    it('Invalid GTIN-14 should return `false', function( done ) {
      Barcoder.validate( input.gtin14.invalid ).should.be.an.instanceOf(Boolean).and.equal.false;
      done();
    });

  });

});
