let x = 1000021;
let z = 1200001;

var isPalindrome = function (x) {
  let y = x.toString();
  for (let i = 0; i < y.length; i++) {
    // loop forward and loop backward, compare character
    console.log(`y[${i}]: ${y[i]}`);
    console.log(`y[${y.length - 1 - i}]: ${y[y.length - 1 - i]}`);
    if (y[i] !== y[y.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(x));
