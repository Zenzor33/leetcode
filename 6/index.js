const list1 = [1, 2, 3, 4];
const list2 = [1, 3, 5, 6];

const edge1 = [1, 2, 3, 4];
const edge2 = [1, 4, 5, 6];

// let newArr = [];
var mergeTwoLists = function (list1, list2, newArr = []) {
  let l1head = list1[0];
  let l2head = list2[0];
  if (list1.length === 0 && list2.length === 0) return newArr;
  if (l1head === l2head) {
    newArr.push(list1.shift());
    return mergeTwoLists(list1, list2, newArr);
  } else {
    if (l1head > l2head || !l1head) {
      newArr.push(list2.shift());
      return mergeTwoLists(list1, list2, newArr);
    } else if (l2head > l1head || !l2head) {
      newArr.push(list1.shift());
      return mergeTwoLists(list1, list2, newArr);
    }
  }
};

let ans = mergeTwoLists(list1, list2);
console.log(ans);
