class LinkedListNode {

  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  setNext(value) {
    let node = new LinkedListNode(value);
    node.prev = this;
    if (this.next === null) {
      this.next = node;
    } else {
      node.next = this.next;
      this.next = node;
    }
  }

}

exports.LinkedListNode = LinkedListNode;