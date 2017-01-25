const matrixInSpiralOrder = (matrix) => {
  if (matrix.length === 0) {
    return;
  }
  
  let i,
      top = 0,
      bot = matrix.length - 1,
      left = 0,
      right = matrix[0].length - 1;
  
  while (true) {
    // Print top row left to right
    for (i = left; i <= right; i++) {
      console.log(matrix[top][i]);
    }
    top++;
    if (top > bot || left > right) {
      break;
    }
    // Print rightmost column top to bottom
    for (i = top; i <= bot; i++) {
      console.log(matrix[i][right]);
    }
    right--;
    if (top > bot || left > right) {
      break;
    }
    // Print the bottom row right to left
    for (i = right; i >= left; i--) {
      console.log(matrix[bot][i]);
    }
    bot--;
    if (top > bot || left > right) {
      break;
    }
    // Print the leftmost column bottom to up
    for (i = bot; i >= top; i--) {
      console.log(matrix[i][left]);
    }
    left++;
    if (top > bot || left > right) {
      break;
    }
  }
};
