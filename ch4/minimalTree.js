/*
  Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary
  search tree with minimal height
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const minTree = (array, start, end) => {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(array[mid]);
  node.left = minTree(array, start, mid - 1);
  node.right = minTree(array, mid + 1, end);

  return node;
}

const minimalTree = (array) => {
  return minTree(array, 0, array.length - 1);
}

let tree = minimalTree([1, 20, 35, 40, 41, 42, 43]);

// ==== TEST ==== 
const inOrderTraversal = (treeNode) => {
  if (treeNode !== null) {
    inOrderTraversal(treeNode.left);
    console.log(treeNode.value)
    inOrderTraversal(treeNode.right);
  }
}

inOrderTraversal(tree);