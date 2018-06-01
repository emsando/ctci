/* 
  Find number of permutations of S in B
  Example: 
  Given S = 'abbcd' and B = 'babcdbaefdbbacbddfae' 
  Output should be 5 
*/

const countPerms = (s, b) => {
  let count = 0;
  let sLen = s.length;

  let ptr = 0; 

  while (ptr <= b.length - sLen) {
    let copy = s;
    let step = 1; 
    for (let i = ptr + sLen - 1; i >= ptr; i--) {
      if (copy.includes(b[i])) {
        let charIndex = copy.indexOf(b[i]);
        copy = copy.slice(0, charIndex) + copy.slice(charIndex + 1);
        if (copy === '') {
          count++;
        }
      } else {
        step = i - ptr || 1;
        break
      }
    }
    ptr += step;
  }

  return count;
}

let result = countPerms('abbcd', 'babcdbaefdbbacbddfae');
console.log(result); // 5

result = countPerms ('red', 'red');
console.log(result); // 1

result = countPerms('red', 'redfffdreffferdfff');
console.log(result); // 3
