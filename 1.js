// Cho dãy số tự nhiên A. Cài đặt chương trình sắp xếp dãy số A từ nhỏ đến lớn và loại bỏ số không phải là số nguyên tố.

function findPrimeNumbers(nums) {
  nums = nums.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  });

  return nums.sort((a, b) => a - b);
}

console.log(findPrimeNumbers([2, 1, 3, 5, 8, 99, 9, 31])); // [2, 3, 5, 31]
