const { LinkedListNode } = require('./LinkedListNode.js');

class LinkedList {

  constructor(values) {
    this.head = null;
    this.tail = null;

    if (values === undefined) {
      return
    } else {
      if (!Array.isArray(values)) {
        return console.error('Usage: LinkedList(<vals>) where vals is either an array of values or ommitted')
      }
      for (let i = 0; i < values.length; i++) {
        this.addToTail(values[i])
      }
      
    }
  }

  addToTail(value) {
    let node = new LinkedListNode(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node; 
      this.tail = node;
    }
  }

}

exports.LinkedList = LinkedList;