function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle, arr.length + 1));

    let mergedArray = mergeTwoSortedArraysBetterVersion(left, right);
    return mergedArray;
  }
}

function mergeTwoSortedArraysBetterVersion(firstArray, secondArray) {
  let newSortedArray = [];
  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] <= secondArray[j]) {
      newSortedArray.push(firstArray[i]);
      i++;
    } else if (firstArray[i] > secondArray[j]) {
      newSortedArray.push(secondArray[j]);
      j++;
    }
  }
  while (i < firstArray.length) {
    newSortedArray.push(firstArray[i]);
    i++;
  }
  while (j < secondArray.length) {
    newSortedArray.push(secondArray[j]);
    j++;
  }
  return newSortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
