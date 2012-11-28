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

```js
var Barcoder = require('barcoder');

var ean1 = '0016T20054453';
var ean2 = '9330071314999';
      
var validator = new Barcoder('ean13');

console.log( ean1 + ' is valid: ' + validator.validate( ean1 ) );
console.log( ean2 + ' is valid: ' + validator.validate( ean2 ) );
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

(The MIT License)

Copyright (c) 2012 rocket eleven GmbH <dominik@rocketeleven.de>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.