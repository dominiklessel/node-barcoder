
/*!
 * Barcoder v1.1.1
 */

(function() {

  'use strict';

  /**
   * Library version.
   */

  var version = '1.1.1';

  /**
   * Supported formats
   */

  var minValidLength = 6;
  var maxValidLength = 18;
  var usualValidChars = /^\d+$/;

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
    var chars = barcode.split('');

    for ( var index = 0; index<chars.length;index++ ) {
      var number = chars[index];
      number = parseInt( number, 10 );
      if ( value.length % 2 === 0 ) {
        index += 1;
      }
      if ( index % 2 === 0 ) {
        calcSum += number;
      }
      else {
        calcSum += number * 3;
      }
    }

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

    if ( format && !formats[format] ) throw new Error( '"format" invalid' );

    this.format = (format) ? formats[format] : 'autoSelect';
    this.options = options || { enableZeroPadding : true };

    if ( typeof this.options.enableZeroPadding === 'undefined' ) {
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

    if ( self.format === 'autoSelect' ) {

      if ( barcode.length < minValidLength || barcode.length > maxValidLength ) {
        return false;
      }

      var isValidGtin = validateGtin( barcode );
      var paddedBarcode = barcode;
      var successfullyPadded = false;

      if ( !isValidGtin ) {
        var possiblyMissingZeros = maxValidLength - barcode.length;
        while( possiblyMissingZeros-- ) {
          paddedBarcode = '0' + paddedBarcode;
          if ( validateGtin( paddedBarcode ) ) {
            isValidGtin = true;
            successfullyPadded = true;
            break;
          }
        }
      }

      return {
        possibleType: (barcode.length > 8) ? 'GTIN' + barcode.length : 'EAN8 / padded GTIN',
        isValid: isValidGtin
      };

    }

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
