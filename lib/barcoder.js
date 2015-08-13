
'use strict';

/*!
 * Barcoder v2.0.0
 */

(function() {

  /**
   * Version
   */

  var version = '2.0.0';

  /**
   * Config
   */

  var validationRegex = /^\d{8,14}$/;

  /**
   * Converts strings to intergers
   *
   * @param  {String} numString
   * @return {Integer}
   * @api private
   */
  var toInt = function( numString ) {
    return parseInt( numString, 10 );
  };

  /**
   * Tests if a number is odd
   *
   * @param  {Integer} num
   * @return {Boolean}
   * @api private
   */
  var isOdd = function( num ) {
    return (num % 2) === 1;
  }

  /**
   * Calculates a checksum (Modulo 10)
   * GTIN implementation factor 3
   *
   * @param  {String/Integer} gtin
   * @return {Integer}
   * @api private
   */
  var calculateChecksum = function( gtin ) {

    gtin = parseInt( gtin, 10 ).toString();
    var chunks = gtin.split('').map( toInt ).reverse();
    var checksum = 0;

    // Remove first chuck (checksum)
    chunks.shift();

    // sum numbers and multiply accordingly
    chunks.forEach(function( number, index ) {
      checksum += isOdd(index) ? number : number*3;
    });

    // calc checksum
    checksum %= 10;
    checksum = (checksum === 0) ? 0 : (10 - checksum);

    return checksum;

  };

  /**
   * Barcoder class
   *
   * @param {string}  format    Ignored in v2
   * @param {Object}  options   Ignored in v2
   * @api public
   */
  var Barcoder = function ( format, options ) {};

  /**
   * Validates a barcode
   *
   * @param  {string}  barcode   EAN/GTIN barcode
   * @return {Boolean}
   * @api public
   */
  Barcoder.prototype.validate = function( barcode ) {

    var self = this;

    if ( validationRegex.exec( parseInt(barcode).toString() ) === null ) {
      return false;
    }

    var checksum = parseInt( barcode.substring( barcode.length - 1 ), 10 );
    var calcChecksum = calculateChecksum( barcode );

    return ( checksum === calcChecksum );

  };

  /**
   * Export
   */

  if ( 'undefined' !== typeof module && module.exports ) {
    module.exports = new Barcoder();
    exports.version = version;
  }

  if ( 'undefined' === typeof ender ) {
    this['Barcoder'] = new Barcoder();
  }

  if ( 'function' === typeof define && define.amd ) {
    define('Barcoder', [], function () {
      return new Barcoder();
    });
  }

}).call( this );
