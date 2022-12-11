/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

const TEST1 = "()";
const TEST2 = "()[]{}";
const TEST3 = "(]";

const EDGE1 = "([...)]"; // false
const EDGE2 = "([...)]"; // false
const EDGE3 = "..}.{}"; // false
const EDGE4 = "["; // false

// Algorithm: Create an object that contains each set of opening and closing brackets.

// refactor the design.

/*
Loop through each character. For each character, check if character is anOpeningBracket or aClosingBracket. 

If anOpeningBracket, push its corresponding closingBracket to bracketsToClose array. 

If aClosingBracket, check if bracketsToClose last element is its corresponding openingBracket (if true, splice it from bracketsToClose). if false, the function returns false

*/

function isStringValid(s) {
  let bracketsToClose = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    // check if character is an opening bracket
    if (brackets[character]) bracketsToClose.push(brackets[character]);
    // check if character is a closing bracket
    if (Object.values(brackets).includes(character)) {
      // check if bracketsToClose last element is its corresponding openingBracket
      if (bracketsToClose[bracketsToClose.length - 1] === character) {
        // if true, splice it from bracketsToClose
        bracketsToClose.splice(bracketsToClose.length - 1, 1);
      } else {
        // closing bracket precedes opening bracket
        return false;
      }
    }
  }
  return bracketsToClose.length > 0 ? false : true;
}

console.log(isStringValid(TEST1));
console.log(isStringValid(TEST2));
console.log(isStringValid(TEST3));
console.log(isStringValid(EDGE1));
console.log(isStringValid(EDGE2));
console.log(isStringValid(EDGE3));
console.log(isStringValid(EDGE4));
