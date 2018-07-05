/* 
  You have 3 towers and N disks of different sizes which can slide onto any tower. 
  The puzzle starts with disks sorted in ascending order of size from top to bottom.
  IE, each disk sits on top of an even larger one.

  You have the following constraints: 
    (1) Only one disk can be moved at a time
    (2) A disk is slid off the top of one tower onto another tower
    (3) A disk cannot be placed on top of a smaller disk
  
  Write a program to move the disks from the first tower to the last using stacks.  
*/

class Tower {
  constructor(name) {
    this.disks = [];
    this.name = name;
  }

  size() {
    return this.disks.length;
  }

  add(disk) {
    if (this.size > 0 && disk.size > this.disks[this.size - 1].size) {
      return console.log(`ERROR placing Disk ${disk.size} on ${this.name}`);
    }
    this.disks.push(disk);
  }

  moveTopTo(tower) {
    let top = this.disks.pop();
    tower.add(top);
  }

  moveDisks(n, destination, buffer) {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, destination);
      this.moveTopTo(destination);
      buffer.moveDisks(n - 1, destination, this);
    }
  }
}

class Disk {
  constructor(size) {
    this.size = size;
  }
}

const runPuzzle = (n) => {

  let towerA = new Tower('Tower A');
  let towerB = new Tower('Tower B');
  let towerC = new Tower('Tower C');

  for (let i = n; i > 0; i--) {
    let disk = new Disk(i)
    towerA.add(disk);
  }

  console.log(towerA.disks, towerB.disks, towerC.disks)
  towerA.moveDisks(n, towerC, towerB);
  console.log(towerA.disks, towerB.disks, towerC.disks)
}


runPuzzle(3);
runPuzzle(4);