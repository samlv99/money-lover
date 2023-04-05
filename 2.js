// Cài đặt chương trình tìm số thứ N trong dãy Fibonacci.

function findNthInFibonacci(n) {
  if (n <= 2) return 1;

  return findNthInFibonacci(n - 1) + findNthInFibonacci(n - 2);
}

console.log(findNthInFibonacci(11)); // 89
