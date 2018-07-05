/* 
  Imagine a robot sitting on the upper left corner of a grid with r rows and c columns.
  The robot can only move right and down, and certain cells are "off limits".
  Design an algorithm to find a path for the robot from top left to bottom right.
*/

const getPath = (maze) => {
  if (maze.length === 0) {
    return null;
  };
  
  let rows = maze.length;
  let cols = maze[0].length;
  let path = [];
  let failedPoints = new Set();

  const checkPathFromPoint = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    };

    // spots "off limits" flagged with a 1
    if (maze[row][col] === 1) {
      return false;
    }

    let point = `${row}${col}`;

    if (failedPoints.has(point)) {
      return false;
    };

    let finalPoint = (row === rows - 1) && (col === cols - 1);

    if (finalPoint || checkPathFromPoint(row, col + 1) || checkPathFromPoint(row + 1, col)) {
      // in production code this would likely be a Point class so we could programmatically access row & col with ease
      path.push(`Row: ${row}, Col: ${col}`);
      return true;
    }

    failedPoints.add(point);
    return false;
  };

  checkPathFromPoint(0, 0);
  return path.length ? path.reverse() : null;
}

var maze = [];
var result = getPath(maze);
console.log(result);

maze = [
  [0, 0, 0],
  [0, 0, 0]
];
result = getPath(maze);
console.log(result); // ["Row: 0, Col: 0", "Row: 0, Col: 1", "Row: 0, Col: 2", "Row: 1, Col: 2"]

maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];
result = getPath(maze);
console.log(result); // null

maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
result = getPath(maze);
console.log(result); // null

maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
];
result = getPath(maze);
console.log(result); // ["Row: 0, Col: 0", "Row: 0, Col: 1", "Row: 1, Col: 1", "Row: 1, Col: 2", "Row: 1, Col: 3", "Row: 2, Col: 3", "Row: 3, Col: 3", "Row: 3, Col: 4"]

/* 
  ANALYSIS: 
  Time Complexity: O(n) where n is spaces in the grid - so O(rows * cols);
  Space Complexity: O(n)

  Without memoizing the checkPathFromPoint calls by adding points to failedPoints the time complexity would be 2^(rows * cols)
  as every point has two other points it needs to check. 
*/