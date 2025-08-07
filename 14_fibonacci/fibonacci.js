const fibonacci = function (n) {
  // convert strings to numbers
  n = Number(n);

  // bail out on negatives
  if (n < 0) return "OOPS";

  // base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // iteratively compute the nth fib
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
