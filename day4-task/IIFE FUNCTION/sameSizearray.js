// return median of two sorted arrays of the same size
let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

let median = (function(arr1, arr2) {
  const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const middleIndex = Math.floor(combinedArray.length / 2);

  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
})(array1, array2);

console.log(median); 