/* 
  A child is running up a staircase with n steps and can hop either 1, 2, or 3 steps at a time.
  Implement a method to count how many possible ways the child can run up the stairs.
*/

const possibleSteps = (n) => {
  const steps = new Array(n);
  if (n < 2) {
    return n;
  }

  // init the last 3 steps with number of ways to the top
  steps[n - 1] = 1;
  steps[n - 2] = 2;
  steps[n - 3] = 4;

  let ptr = n - 4;
  while (ptr >= 0) {
    steps[ptr] = steps[ptr + 3] + steps[ptr + 2] + steps[ptr + 1];
    ptr--;
  }

  return steps[0];
}

for (let i = 1; i < 8; i++) {
  let result = possibleSteps(i);
  console.log(result);
}

// Output: 1 2 4 7 13 24 44

/* 
  ANALYSIS: 
  Time Complexity: O(n)
  Space Complexity: O(n)

  We could reduce the space complexity by only ever storing 5 variables: current step c, ways from c, c + 1, c + 2, and c + 3
  and shifting the values "over" as we progress towards n, returning c when c === n. 
*/