// Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó.
// Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3. Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.

function ListCombinations(nums, n) {
  let output = [];
  nums = removeDuplicate(nums);
  nums = nums.sort((a, b) => a - b);

  if (nums.length <= n) return nums;

  const backtrack = (index, str, first) => {
    if (str.length === n) {
      output.push(str);
      return;
    }

    for (let i = index; i < (first ? nums.length - n + 1 : nums.length); i++) {
      if (
        str == nums[i] ||
        str.includes(nums[i]) ||
        str[str.length - 1] >= nums[i]
      ) {
        continue;
      }

      backtrack(index + 1, str + nums[i]);
    }
  };

  backtrack(0, "", true);

  return output;
}

// xóa những số trùng nhau trong mảng đầu vào
function removeDuplicate(nums) {
  let obj = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      result.push(nums[i]);
      obj[nums[i]] = true;
    }
  }

  return result;
}

console.log(ListCombinations([1, 1, 2, 7, 5, 4, 7, 9], 3));
// console.log(ListCombinations([1, 1, 2, 3], 3));
// console.log(ListCombinations([1, 2, 3, 4, 5], 3));
// console.log(ListCombinations([1, 3, 2, 4, 5], 3));
