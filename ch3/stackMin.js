/*
  How would you design a stack which in addition to push and pop has a function min which returns the minimum element? 
  Push, pop, and min should all operate in O(1) time.

  We can keep another stack, minStack, that stores the minimum element currently in the stack. Whenever an element is popped of the 
  main stack, we check to see if that was the minimum. If it was, we pop it off the min stack as well. Everytime an element is pushed
  onto our main stack, we check if it's less than or equal to the top of the minStack, and if so we push it on to minStack
*/

class Stack {
  constructor(){
    this.values = [];
    this.minStack = [];
  }

  push(value) {
    this.values.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    let value = this.values.pop();
    if (value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return value;
  }

  min() {
    return this.minStack[this.minStack.length - 1]
  }
}

let stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(2);
console.log(stack, stack.values, stack.min());

let val = stack.pop();
console.log(val, stack.values, stack.min());

