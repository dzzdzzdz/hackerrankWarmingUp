const rotateMatrixClockwise = (matrix) => {
  let size = matrix[0].length;
  
  for (let i = 0; i < size / 2; i++) {
    for (let j = i; j < size - 1 - i; j++) {
      // Store current cell in temp
      let temp = matrix[i][j];
      // Move value from left to top
      matrix[i][j] = matrix[size-1-j][i];
      // Move value from bottom to left
      matrix[size-1-j][i] = matrix[size-1-i][size-1-j];
      // Move value from right to bottom
      matrix[size-1-i][size-1-j] = matrix[j][size-1-i];
      // Assign temp to right
      matrix[j][size-1-i] = temp;
    }
  }
  return matrix;
};
