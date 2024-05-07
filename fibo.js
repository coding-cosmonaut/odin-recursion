function fibonacciRecursion(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibonacciRecursion(n, arr);
  }
}

console.log(fibonacciRecursion(8)) // [0, 1, 1, 2, 3, 5, 8, 13]