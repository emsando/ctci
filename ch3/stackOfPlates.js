/*
  Imagine a stack of plates. If the stack gets too high, it might topple. Therefore we would likely start a new stack when
  the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimis this. SoS should be composed 
  of several stacks and should create a new stack once the previous one exceeds capactiy. SoS.push() and SoS.pop() should 
  behave identically to a single stack.
*/

class SetOfStacks {
  constructor(size) {
    this.substacks = [[]];
    this.stackSize = size;
    this.current = 0;
  }

  push(value) {
    if (this.substacks[this.current].length === this.stackSize) {
      this.substacks.push([]);
      this.current++;
    }
    this.substacks[this.current].push(value);
  }

  pop() {
    let value = this.substacks[this.current].pop();
    if (this.substacks[this.current].length === 0) {
      this.substacks.pop();
      this.current--;
    }
  }
}

let stacks = new SetOfStacks(3);
for (let i = 0; i < 12; i++) {
  stacks.push(i);
}
console.log(stacks.substacks);
stacks.pop();
stacks.pop();
stacks.pop();
console.log(stacks.substacks);