const mergeSort = (array) => {
  // let left = 0;
  let right = array.length;
  let middle = Math.floor(right / 2);

  if (0 < right - 1) {
    let leftArr = array.slice(0, middle);
    let rightArr = array.slice(middle);
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, array)
  }
  return undefined;
};

const merge = (leftArr, rightArr, array) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let arrayPointer = 0; 

  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      array[arrayPointer] = leftArr[leftPointer];
      leftPointer++;
    } else {
      array[arrayPointer] = rightArr[rightPointer];
      rightPointer++;
    }
    arrayPointer++;
  }

  // handle any remainders on either side
  while (leftPointer < leftArr.length) {
    array[arrayPointer] = leftArr[leftPointer];
    leftPointer++;
    arrayPointer++;
  }
  while (rightPointer < rightArr.length) {
    array[arrayPointer] = rightArr[rightPointer];
    rightPointer++;
    arrayPointer++;
  }
};

let test = [4, 2, 3, 1];
let test1 = [4, 3, 2, 1];
let test2 = [5, 3, 4, 2, 1];
let test3 = [4, 2, 6, 4, 7, 1, 8, 5, 9, 3];
let test4 = [-3, -5, -6, -2, 7, 3, 9, 3, 0, 200, -3456, 1234, 4, -20, 600];

mergeSort(test);
mergeSort(test1);
mergeSort(test2);
mergeSort(test3);
mergeSort(test4);

console.log('Test 0: ', test);
console.log('Test 1: ', test1);
console.log('Test 2: ', test2);
console.log('Test 3: ', test3);
console.log('Test 4: ', test4);