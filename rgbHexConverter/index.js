// the hexadecimal values of certain letters
const LETTER_VALUES = {
  'a' : 10,
  'b' : 11,
  'c' : 12,
  'd' : 13,
  'e' : 14,
  'f' : 15
};

function rgbHexConverter(...args) {
  if (args.length === 3) {    // rgb(num1, num2, num3)
    let hexCode = "#";
    let r = args[0].toString(16);
    let g = args[1].toString(16);
    let b = args[2].toString(16);
    return hexCode + r + g + b;
  } else if (args.length === 1) {   // #abc123
    let substr = args[0].substring(1).split("");  // drop the hash and split into 6 values
    let numValues = substr.map(val => {
      if (Number.isInteger(+val)) return +val;    // convert a string into a number if possible
      else {
        val = val.toLowerCase();      // make sure the letter is lowercased
        return LETTER_VALUES[val];    // convert it to its hex value
      }
    });
    
    let r = numValues[0] * 16 + numValues[1];   // converts two numbers into a single hex value
    let g = numValues[2] * 16 + numValues[3];
    let b = numValues[4] * 16 + numValues[5];

    return [r, g, b];
  } else {
    return "Invalid input. Please enter either three numbers or a 7-character string (like '#f724bc')"
  }
}

module.exports = { rgbHexConverter };