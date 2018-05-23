/*
Implement an algorithm to determine ifa string has all unique characters. 
What if you can't use addtional data structures? 
*/

const isUniqueWithHashTable = (string) => {
  let letters = {};
  for (let i = 0; i < string.length; i++) {
    if (letters[string[i]]) {
      return false;
    }
    letters[string[i]] = true;
  }
  return true;
}

console.log(isUniqueWithHashTable('hampster')); // true
console.log(isUniqueWithHashTable('racecar')); // false
console.log(isUniqueWithHashTable('abcdefghijklmnopqrstuv')); // true

/* 
  ANALYSIS:
  Time complexity is O(n)
  Space complexity is O(n)
  At a certain point you could argue they are both actually O(1) depending on what characters can be included in the string.
  For example, if it's only the english alphabet, largest n before you get a result will always be 26

  If you can't use any additional space, you have to do two for loops to check if a given character is present down the line. 
  Time complexity is O(n^2)
*/