/* 
  Implement a function to check if a binary tree is balanced. For the purposes of this question,
  a balanced tree is defined to be a tree such that the heights of the two subtress of any node
  never differ by more than one.
*/

const checkBalanced = (node) => {
  if (!node) {
    return false;
  }

  let rightDepth = 0;
  let leftDepth = 0; 

  let queue = [] // simple queue - this could easily be optimized
  
  if (node.left) {
    let struct = {
      node: node.left,
      side: 'left',
      level: 1
    }
    queue.push(struct);
  }
  if (node.right) {
    let struct = {
      node: node.right,
      side: 'right',
      level: 1
    }
    queue.push(struct);
  }

  while(queue.length) {
    let current = queue.shift();
    let side = current.side;
    if (side === 'left') {
      leftDepth = current.level;
    } else {
      rightDepth = current.level
    }

    let diff = Math.abs(rightDepth - leftDepth);
    if (diff > 1) {
      return false;
    }

    if (current.node.left) {
      let struct = {
        node: current.node.left,
        side: side,
        level: current.level + 1
      }
      queue.push(struct);
    }

    if (current.node.right) {
      let struct = {
        node: current.node.right,
        side: side,
        level: current.level + 1
      }
      queue.push(struct);
    }    
  }

  return true;
}

/* 
  ANALYSIS: 
  Time Complexity: O(n) where n is nodes in the tree
  Space Complexity: O(n) - at the last level we have around 1/2n nodes in the queue

  A recursive solution would have O(depth) space complexity which in many cases would be better. 

  However, in many cases a BFS can find that the tree is unbalanced faster. Interesting trade off decisions to be made!
*/