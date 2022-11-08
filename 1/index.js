nums = [3, 2, 4];
target = 6;

// may not use the same element twice

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 === target && i != j) return [i, j];
    }
  }
};

console.log(twoSum(nums, target));
