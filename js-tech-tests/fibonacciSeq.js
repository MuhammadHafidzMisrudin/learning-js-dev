const fibonacciSequence = (num) => {
  let arrFibSeq = [];
  let seq = 0;

  if (num === 0) {
    return 0;
  }
  if (num <= 1) {
    return 1;
  }

  seq = fibonacciSequence(num-1) + fibonacciSequence(num-2);
  return seq;
}

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }
  return arr;
}

console.log(fibonacciSequence(6));
console.log(fib(6));
