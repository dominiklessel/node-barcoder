
/**
 * Module dependencies
 */

var Test = require('tape');
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

Test('Barcoder', function( t ) {

  t.plan( 1 );

  t.test('.validate()', function( tt ) {

    tt.plan( 6 );

    tt.test('Valid GTIN-8 should return `true`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin8.valid ), true );
    });

    tt.test('Valid GTIN-13 should return `true`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin13.valid ), true );
    });

    tt.test('Valid GTIN-14 should return `true`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin14.valid ), true );
    });

    tt.test('Inalid GTIN-8 should return `false`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin8.invalid ), false );
    });

    tt.test('Inalid GTIN-13 should return `false`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin13.invalid ), false );
    });

    tt.test('Inalid GTIN-14 should return `false`', function( ttt ) {
      ttt.plan( 1 );
      ttt.equal( Barcoder.validate( input.gtin14.invalid ), false );
    });

  });

});
