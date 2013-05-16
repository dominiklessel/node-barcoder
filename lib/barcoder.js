/*!
 * Barcoder v1.0.0
 * Copyright (c) 2012 rocket eleven GmbH <dominik@rocketeleven.de>
 * MIT Licensed
 */

(function() {

  /**
   * Library version.
   */

  var version = '1.0.0';

  /**
   * Supported formats
   */

  var formats = {
    'ean8'   : { validChars : /^\d+$/, validLength : 8 },
    'ean12'  : { validChars : /^\d+$/, validLength : 12 },
    'ean13'  : { validChars : /^\d+$/, validLength : 13 },
    'ean14'  : { validChars : /^\d+$/, validLength : 14 },
    'ean18'  : { validChars : /^\d+$/, validLength : 18 },
    'gtin12' : { validChars : /^\d+$/, validLength : 12 },
    'gtin13' : { validChars : /^\d+$/, validLength : 13 },
    'gtin14' : { validChars : /^\d+$/, validLength : 14 }
  };

  /**
   * Validates the checksum (Modulo 10)
   * GTIN implementation factor 3
   *
   * @param  {String} value The barcode to validate
   * @return {Boolean}
   * @api private
   */

  var validateGtin = function( value ) {
    var barcode = value.substring( 0, value.length - 1 );
    var checksum = parseInt( value.substring( value.length - 1 ), 10 );
    var calcSum = 0;
    var calcChecksum = 0;
    barcode.split('').map(function( number, index ) {
      number = parseInt( number, 10 );

      // if the gtin has an even length the summation and multiplication of the number have to be switched
      if(value.length%2 === 0) {
        index += 1;
      }

      if ( index % 2 === 0 ) {
        calcSum += number;
      }
      else {
        calcSum += number * 3;
      }
    });
    calcSum %= 10;
    calcChecksum = (calcSum === 0) ? 0 : (10 - calcSum);
    if ( calcChecksum !== checksum ) {
      return false;
    }
    return true;
  };

  /**
   * Barcoder class
   *
   * @param {string}  format    See formats
   * @param {Object}  options   Valid option `enableZeroPadding`, defaults to `true`
   * @api public
   */

  var Barcoder = function ( format, options ) {
    if ( !format ) throw new Error( '"format" required' );
    if ( !formats[format] ) throw new Error( '"format" invalid' );
    this.format =  formats[format];
    this.options = (options) ? options : { enableZeroPadding : true };
    if ( !this.options.enableZeroPadding ) {
      this.options.enableZeroPadding = true;
    }
  };

  /**
   * Validates a barcode
   *
   * @param  {string}  barcode   EAN/GTIN barcode
   * @return {Boolean}
   * @api public
   */

  Barcoder.prototype.validate = function( barcode ) {
    var self = this;
    var validChars = self.format.validChars;
    var validLength = self.format.validLength;
    var enableZeroPadding = self.options.enableZeroPadding;
    if ( validChars.exec( barcode ) === null ) {
      return false;
    }
    if ( enableZeroPadding && barcode.length < validLength ) {
      var missingZeros = validLength - barcode.length;
      while( missingZeros-- ) {
        barcode = '0' + barcode;
      }
    }
    else if ( !enableZeroPadding && barcode.length != validLength ) {
      return false;
    }
    else if ( barcode.length > validLength ) {
      return false;
    }
    return validateGtin( barcode );
  };

  /**
   * Export
   */

  if ( 'undefined' !== typeof module && module.exports ) {
    module.exports = Barcoder;
    exports.version = version;
  }

  if ( 'undefined' === typeof ender ) {
    this['Barcoder'] = Barcoder;
  }

  if ( 'function' === typeof define && define.amd ) {
    define('Barcoder', [], function () {
      return Barcoder;
    });
  }

}).call( this );
