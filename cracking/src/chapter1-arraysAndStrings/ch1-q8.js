'use strict';

export const zeroMatrix = (grid) => {
  if (!grid) throw new Error('invalid matrix');
  if (grid.length === 0) return grid;

  let rows = Array(grid.length).fill(false);
  let cols = Array(grid[0].length).fill(false);

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (grid[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (rows[i] || cols[j]) {
        grid[i][j] = 0;
      }
    }
  }
  return grid;
};
