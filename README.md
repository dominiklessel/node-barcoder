# Barcoder

Barcoder is a simple EAN/GTIN validator, built for [node.js](http://nodejs.org) and the browser.

## Currently supported formats:

- EAN8
- EAN12
- EAN13
- EAN14
- EAN18
- GTIN12
- GTIN13
- GTIN14

## In node.js

### Installation

```
$ npm install barcoder
```

### Usage

```
var Barcoder = require('barcoder');

var ean1 = '0016T20054453';
var ean2 = '9330071314999';
      
var validator = new Barcoder('ean13');

console.log( '%s ean1 is valid: %s', ean1, validator.validate( ean1 ) );
console.log( '%s ean2 is valid: %s', ean1, validator.validate( ean2 ) );

// or /w automatic type selection

validator = new Barcoder();

var validation1 = validator.validate( ean1 );
var validation2 = validator.validate( ean2 );

console.log( '%s is valid: %s and has guessed type: %s', ean1, validation1.isValid, validation1.possibleType );
console.log( '%s is valid: %s and has guessed type: %s', ean2, validation2.isValid, validation2.possibleType );

```

## In the Browser

Development: [barcoder.js](https://github.com/dominiklessel/barcoder/raw/master/lib/barcoder.js)  
Production:  [barcoder.min.js](https://github.com/dominiklessel/barcoder/raw/master/dist/barcoder.min.js)

### Usage

```html
<script src="barcoder.js"></script>
<script>
  var ean1 = '0016T20054453';
  var ean2 = '9330071314999';
  var validator = new Barcoder('ean13');
  console.log( ean1 + ' is valid: ' + validator.validate( ean1 ) );
  console.log( ean2 + ' is valid: ' + validator.validate( ean2 ) );
</script>
```

## License

I don't care about attribution, bro — It's all yours under [Creative Commons CC0](http://creativecommons.org/publicdomain/zero/1.0/).
