// Given a roman numeral, convert it to an integer.

/*
EXCEPTIONS:

I can be placed before V (5) and X (10) to make 4 and 9. 

X can be placed before L (50) and C (100) to make 40 and 90. 

C can be placed before D (500) and M (1000) to make 400 and 900.
*/

// rules

let rulesArr = [
  { numeral: "I", value: 1 },
  { numeral: "V", value: 5 },
  { numeral: "X", value: 10 },
  { numeral: "L", value: 50 },
  { numeral: "C", value: 100 },
  { numeral: "D", value: 500 },
  { numeral: "M", value: 1000 },
];

// exceptions

let exceptionsArray = ["IV", "IX", "XL", "XC", "CD", "CM"];
let exceptionsArray2 = [
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

// solution: Iteratively loop through each character and check if the next two character creates an exception. If the next two characters are an exception, add their value and increment to the first character after the exception.

let val = 0;
for (let i = 0; i < s3.length; i++) {
  if (s3.length === 1) {
    valueOfNumeral(s[0]);
  } else if (s3.length > 1) {
    // check current and next characters
    let currentAndNextNumerals = s3[i] + s3[i + 1];
    if (isException(currentAndNextNumerals)) {
      let num = valueOfNumeral(currentAndNextNumerals);
      val += num;
      i += 1;
    } else {
      let num = valueOfNumeral(s3[i]);
      val += num;
    }
  }
}

// Create a function that returns the numeric value of a roman numeral
function valueOfNumeral(str) {
  if (str.length === 1) {
    for (let i = 0; i < rulesArr.length; i++) {
      if (rulesArr[i].numeral === str) {
        return rulesArr[i].value;
      }
    }
  } else if (str.length > 1) {
    if (isException(str)) {
      for (let i = 0; i < exceptionsArray2.length; i++) {
        if (str === exceptionsArray2[i].numeral)
          return exceptionsArray2[i].value;
      }
    }
  }
}

// Create a function isException that checks if two characters form a combination that matches an exception. Return true if an exception is formed, else false.

function isException(str) {
  if (str.length === 2) {
    if (exceptionsArray.includes(str)) return true;
    else return false;
  } else if (str.length === 1) {
    return false;
  } else {
    return null;
  }
}
