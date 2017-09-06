'use strict';

export const rotateMatrix = (grid) => {
  if (!grid || grid.length === 0 || grid.length !== grid[0].length) throw new Error('invalid grid');
  if (grid.length < 2) return grid;
  let size = grid.length-1;
  for (let i = 0; i < size/2; i++) {
    for (let j = i; j < size-i; j++) {
      let temp = grid[i][j];
      grid[i][j] = grid[size-j][i];
      grid[size-j][i] = grid[size-i][size-j];
      grid[size-i][size-j] = grid[j][size-i];
      grid[j][size-i] = temp;
    }
  }

  /*
  let n = grid.length;
  for (let layer = 0; layer < n /2; layer++) {
    let first = layer, last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = grid[first][i];
      grid[first][i] = grid[last-offset][first];
      grid[last-offset][first] = grid[last][last-offset];
      grid[last][last-offset] = grid[i][last];
      grid[i][last] = top;
    }
  }
  */
  return grid;
};
