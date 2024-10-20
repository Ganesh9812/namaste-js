function getFibonacci(n) {
  let fib = [0, 1];
  if (n === 0) return [0];

  if (n === 1) return [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const result = getFibonacci(4);

console.log(result, "fibnocci result");

// 0 --0
// 1 --1
// 2---1
// 3 ---2
// 4 ---3
// 5 ---5

//Big-O = O(n)
