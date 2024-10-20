function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = i * result;
  }
  return result;
}

const k = factorial(5);
console.log("factorial value of n is", k);

//Big-O = O(n)`
