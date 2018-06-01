const { LinkedList } = require('./LinkedList.js');
const { LinkedListNode } = require('./LinkedListNode.js');

let list = new LinkedList();
console.log(list);

list = new LinkedList([1, 2, 3, 4]);
console.log(list.head, list.tail, list.head.next, list.tail.prev);

list = new LinkedList('this should error');