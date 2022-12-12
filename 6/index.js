const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const edge1 = [1, 2, 3, 4];
const edge2 = [1, 4, 5, 6];

let newArr = [];
var mergeTwoLists = function (list1, list2) {
  let x = newArr;
  console.log(x);
  let l1head = list1[0];
  let l2head = list2[0];
  if (list1.length === 0 || list2.length === 0) return x;
  if (l1head === l2head) {
    newArr.push(list1.shift());
    mergeTwoLists(list1, list2);
  } else {
    if (l1head > l2head) {
      newArr.push(list2.shift());
      mergeTwoLists(list1, list2);
    } else {
      newArr.push(list1.shift());
      mergeTwoLists(list1, list2);
    }
  }
};

console.log(mergeTwoLists(list1, list2));
