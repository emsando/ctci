const { LinkedList } = require('./LinkedList.js')
const { printList } = require('./printList.js')

// Implement an algorithm to find the kth to last element of a singly linked list
// note the above imports a doubly linked list, but the code below doesn't use any node.prev properties (treated as single)

const kthToLast = (list, k) => {
  let current = list.head;
  let runner = list.head;
  let runnerCount = 1;
  
  while(runnerCount < k) {
    runner = runner.next
    runnerCount++
  }
  while(runner.next) {
    current = current.next;
    runner = runner.next;
  }

  return current;
}

let list = new LinkedList([8, 7, 6, 5, 4, 3, 2, 1]);
let result = kthToLast(list, 3);
console.log(result);

result = kthToLast(list, 4);
console.log(result);

result = kthToLast(list, 2);
console.log(result);