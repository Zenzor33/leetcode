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

function appLogic(str) {
  sum = 0;
  for (let i = 0; i < str.length; i++) {
    let currentAndNextChar = str[i] + str[i + 1];
    let currentChar = str[i];
    if (valueOfNumeral(currentAndNextChar).exception) {
      sum += valueOfNumeral(currentAndNextChar).value;
      i += 1;
    } else {
      sum += valueOfNumeral(currentChar).value;
    }
  }
  return sum;
}

function valueOfNumeral(str) {
  let exception = null;
  if (str.length === 1) {
    for (let i = 0; i < rulesArr.length; i++) {
      if (str === rulesArr[i].numeral) {
        exception = false;
        return { value: rulesArr[i].value, exception: exception };
      }
    }
  } else {
    // check if str is exception
    for (let i = 0; i < exceptionsArray.length; i++) {
      // if str is exception
      if (str === exceptionsArray[i].numeral) {
        exception = true;
        return { value: exceptionsArray[i].value, exception: exception };
      }
    }
    exception = false;
    return { exception: exception };
  }
}
