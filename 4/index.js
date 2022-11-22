/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1
 Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// strs = ["dog", "racecar", "car"];
// a = flower
// a = f,l,o,w
// a = f,l

strs = ["dog", "racecar", "car"];

var longestCommonPrefix = function (strs) {
  let counts = 0;
  let x = strs.reduce((a, cv) => {
    //   console.log(`a: ${a}, a.length: ${a.length} cv: ${cv}`);
    if (counts === 0) {
      a = cv;
      counts = 1;
      return a;
    }
    if (counts === 404) {
      return (a = "");
    }
    let str1 = a;
    a = "";
    let str2 = cv;
    for (let i = 0; i < str1.length; i++) {
      let str1Letter = str1[i];
      let str2Letter = str2[i];
      if (str1Letter === str2Letter) {
        a += str1Letter;
      } else {
        return a;
      }
      // console.log(`a: ${a}, a.length: ${a.length} cv: ${cv}`);
      if (a.length === 0) {
        //   console.log("here");
        counts = 404;
      }
    }
    return a;
  }, "");
  return x;
};

console.log(longestCommonPrefix(strs));
