/*
  Given a binary tree, create a linked list of all the nodes at each depth
  Meaning, if you have a tree with depth D, you'll have D linked lists

  My note: a better name for this problem would be LISTS of depths
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const listOfDepths = (tree) => {
  let lists = []; 

  const traverse = (tree, currentDepth) => {

    if (lists[currentDepth] === undefined) {
      lists[currentDepth] = new LinkedList;
    }
    lists[currentDepth].addToTail(tree);

    if (tree.left) {
      traverse(tree.left, currentDepth + 1);
    }
    if (tree.right) {
      traverse(tree.right, currentDepth + 1);
    }
  };

  traverse(tree, 0);
  return lists;
}

let tree = {
  value: 'Level 0',
  right: {
    value: 'Level 1R',
    right: {
      value: 'Level 2R'
    },
    left: {
      value: 'Level 2L'
    }
  }, 
  left: {
    value: 'Level 1L',
    right: {
      value: 'Level 2R'
    },
    left: {
      value: 'Level 2L'
    }
  }
}


// ==== TESTS ====
let lists = listOfDepths(tree);
console.log(lists);
for (list of lists) {
  let node = list.head;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}