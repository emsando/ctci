const printList = (list) => {
  let node = list.head;
  let result = '';

  while(node) {
    result += node.value + ' ';
    node = node.next;
  }

  console.log('List values: ', result);
}

module.exports.printList = printList;