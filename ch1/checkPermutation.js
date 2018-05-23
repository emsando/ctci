/*
Given two strings, check if one is a permutation of the other. 
*/

const checkPermutation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  let s1letters = {}; 
  let s2letters = {};

  for (let i = 0; i < s1.length; i++) {
    s1letters[s1[i]] = (s1letters[s1[i]] || 0) + 1;
    s2letters[s2[i]] = (s2letters[s2[i]] || 0) + 1;
  }

  for (let key in s1letters) {
    if (s1letters[key] !== s2letters[key]) {
      return false
    }
  }

  return true;
}

console.log(checkPermutation('racecar', 'carrace')); // true
console.log(checkPermutation('soccer', 'hockey')); // false
console.log(checkPermutation('alabama', 'blmaaaa')); // true
console.log(checkPermutation('happy', 'heyfriendshowareyou')); // false

/* 
  ANALYSIS:
  Time complexity is O(n)
  Space complexity is O(n)
*/
