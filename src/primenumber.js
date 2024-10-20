function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const k = primeNumber(23);

console.log("is it primer number", k);

//Big-O=O(n)

// n = a*b, one of the two factors a or b is less than or equal to the square root of the n
