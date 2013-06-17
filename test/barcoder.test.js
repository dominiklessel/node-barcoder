
var should   = require('should');
var Barcoder = require('../lib/barcoder');

var validEan8  = '55123457';
var validEan13 = '9330071314999';
var validPaddedEan13 = '0000000695152';
var validUnPaddedEan13 = '695152';
var validEan14 = '09781861978769';

var invalidEan8  = '55123458';
var invalidEan13 = '0016T20054453';
var invalidEan14 = '09781861978768';

describe('Barcoder', function () {

  describe('new Barcoder()', function() {
    it('should init without errors', function( done ) {
      new Barcoder('ean13');
      done();
    });
  });

  describe('Barcoder(\'ean13\').validate()', function() {

    it('Valid EAN13 should return true', function( done ) {
      var validator = new Barcoder('ean13');
      validator.validate( validEan13 ).should.be.true;
      done();
    });

    it('Invalid EAN13 should return false', function( done ) {
      var validator = new Barcoder('ean13');
      validator.validate( invalidEan13 ).should.be.false;
      done();
    });

  });

  describe('Barcoder(\'ean14\').validate()', function() {

    it('Valid EAN14 should return true', function( done ) {
      var validator = new Barcoder('ean14');
      validator.validate( validEan14 ).should.be.true;
      done();
    });

    it('Invalid EAN14 should return false', function( done ) {
      var validator = new Barcoder('ean14');
      validator.validate( invalidEan14 ).should.be.false;
      done();
    });

  });

  describe('Barcoder().validate()', function() {

    it('Valid EAN8 should return true', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( validEan8 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.true;
      done();
    });

    it('Valid EAN13 should return true', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( validEan13 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.true;
      done();
    });

    it('Valid zero padded EAN13 should return true', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( validPaddedEan13 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.true;
      done();
    });

    it('Valid unpadded EAN13 should return true', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( validUnPaddedEan13 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.true;
      done();
    });

    it('Valid EAN14 should return true', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( validEan14 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.true;
      done();
    });

    it('Invalid EAN8 should return false', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( invalidEan8 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.false;
      done();
    });

    it('Invalid EAN13 should return false', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( invalidEan13 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.false;
      done();
    });

    it('Invalid EAN14 should return false', function( done ) {
      var validator = new Barcoder();
      var result = validator.validate( invalidEan14 );
      result.should.be.a('object');
      result.should.have.property('possibleType');
      result.isValid.should.be.false;
      done();
    });

  });

});
