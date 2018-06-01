const { LinkedList } = require('./LinkedList.js')
const { printList } = require('./printList.js')

// Remove duplicates from an unsorted linked list 
// How would you solve this problem if a temporary buffer is not allowed? 

const removeDupsSingle = (list) => {
  let node = list.head;
  if (!node) {
    return;
  }
  let table = {}
  table[node.value] = true;
  
  while(node.next) {
    let value = node.next.value
    if (table[value]) {
      // remove from list
      node.next = node.next.next
      continue;
    }
    table[value] = true;
    node = node.next
  }
}

const removeDupsDouble = (list) => {
  let table = {};
  let node = list.head;
  
  while(node) {
    let value = node.value
    if (table[value]) {
      // remove from list
      node.prev.next = node.next
      if (node.next) {
        node.next.prev = node.prev;
      }
    }
    table[value] = true;
    node = node.next
  }
}

let list = new LinkedList([1, 3, 3, 5, 5, 5, 5, 7, 2, 3, 5, 7, 7]);
console.log('Remove duplicates from singly linked list:')
printList(list);
removeDupsSingle(list);
printList(list);

list = new LinkedList([1, 3, 3, 5, 5, 5, 5, 7, 2, 3, 5, 7, 7])
console.log('Remove duplicates from doubly linked list:')
printList(list);
removeDupsDouble(list);
printList(list);