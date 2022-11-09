/*
Algorithm:

Function valueOfNumeral(str) returns value of numeral. If str.length > 1, check for expcetion, return value. If str.length === 1, return value.

*/

let rulesArr = [
  { numeral: "I", value: 1 },
  { numeral: "V", value: 5 },
  { numeral: "X", value: 10 },
  { numeral: "L", value: 50 },
  { numeral: "C", value: 100 },
  { numeral: "D", value: 500 },
  { numeral: "M", value: 1000 },
];

let exceptionsArray = [
  { numeral: "IV", value: 4 },
  { numeral: "IX", value: 9 },
  { numeral: "XL", value: 40 },
  { numeral: "XC", value: 90 },
  { numeral: "CD", value: 400 },
  { numeral: "CM", value: 900 },
];
let s = "V";
let s2 = "LVIII";
let s3 = "MCMXCIV";

function valueOfNumeral(str) {
  let exception = null;
  if (str.length === 1) {
    for (let i = 0; i < rulesArr.length; i++) {
      if (str === rulesArr[i].numeral) return rulesArr[i].value;
    }
  } else {
    // check if str is exception
    for (let i = 0; i < exceptionsArray.length; i++) {
      // if str is exception
      if (str === exceptionsArray[i].numeral) {
        exception = true;
        return exceptionsArray[i].value;
      } else {
        for (let i = 0; i < rulesArr.length; i++) {
          if (str === rulesArr[i].numeral) return rulesArr[i].value;
        }
      }
    }
  }
}
