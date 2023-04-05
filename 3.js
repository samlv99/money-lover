// Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó.
// Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3. Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.

function ListCombinations(nums, n) {
  let haha = [];
  nums = removeDuplicate(nums);
  if (nums.length <= n) return nums;

  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     haha.push([nums[i], nums[j]]);
  //   }
  // }

  const backtrack = (index, str, n, j) => {
    console.log(index);
    console.log("n", n);
    console.log("j", j);
    if (str.length === n) {
      haha.push(str);
      return;
    }
    // if (index + 1 == n) return;
    // if (nums[index] == nums[nums.length - 1]) return;
    for (
      let i = index;
      i < (j !== undefined ? nums.length : nums.length - n + 1);
      i++
    ) {
      if (str == nums[i]) {
        continue;
      }
      index === 0
        ? backtrack(index + 1, str + nums[i], n)
        : backtrack(index + 1, str + nums[i], n, 1);
    }
  };

  backtrack(0, "", n);

  return haha;
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

// console.log(ListCombinations([1, 1, 2, 7, 5, 4, 7, 19], 2));
console.log(ListCombinations([1, 1, 2, 3], 2));
