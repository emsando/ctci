/* 
  A magic index in an array is defined to be an index such that array[i] = i.
  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in an array.
*/

const findMagicIndex = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < mid) {
      left = mid + 1;
    } else if (array[mid] > mid) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return null;
}

/* 
  ANALYSIS:
    Time complexity: O(log n)
    Space complexity: O(1);
*/


/* 
  Follow up: what if the values are not distinct?

  For this case, I think a recursive solution is cleaner:
*/

const findMagicIndex2 = (array, start, end) => {
  if (end < start) {
    return null
  }

  let mid = Math.floor((start + end) / 2);

  if (array[mid] === mid) {
    return mid;
  }

  // check left
  let leftEnd = Math.min(mid - 1, array[mid]);
  let left = findMagicIndex2(array, start, leftEnd);
  if (left) {
    return left;
  }

  let rightStart = Math.max(mid + 1, array[mid]);
  let right = findMagicIndex2(array, rightStart, end);
  if (right) {
    return right;
  }
}

// ==== Tests ====
var array = [-10, -5, -2, 0, 4, 8, 20];
var result = findMagicIndex(array);
console.log(result); // 4

array = [-10, -5, -2, 0, 4, 8, 20, 21];
result = findMagicIndex(array);
console.log(result); // 4

array = [-3, 1, 3, 6, 7, 8, 9]
result = findMagicIndex(array);
console.log(result); // 1

array = [-3, 1, 3, 6, 7, 8, 9, 10]
result = findMagicIndex(array);
console.log(result); // 1

array = [5, 4, 3, 2, 1]
result = findMagicIndex(array);
console.log(result); // null

array = [-2, 1];
result = findMagicIndex(array);
console.log(result); // 1

array = [-5, 2, 2, 2, 3, 4, 5, 6, 7, 9, 20, 21];
result = findMagicIndex2(array, 0, array.length);
console.log(result); // 2 (left is checked first)

array = [-5, 0, 1, 2, 3, 4, 5, 6, 7, 9, 20, 21];
result = findMagicIndex2(array, 0, array.length);
console.log(result); // 9