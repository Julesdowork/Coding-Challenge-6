# RGB-HEX Converter

This nice, little script can convert RGB values into a HEX code, or convert a HEX code
into RGB values. Perfect for needing your color codes in a different format than the one
you have.

To install, run:
```
npm install @julesdowork/rgbhexconverter
```

A sample usage:
```
const { rgbHexConverter } = require('@julesdowork/rgbhexconverter')

var rgbVal = rgbHexConverter("#82c48a")           // [ 130, 196, 138 ]
var hexCode = rgbHexConverter(92, 144, 225)     // #5c90e1
```

Try it out yourself!