const hasPathSum = (tree, targetSum) => {
  return hasPathSumHelper(tree, 0, targetSum);
};

const hasPathSumHelper = (node, partialSum, targetSum) => {
  if (node == null) {
    return false;
  }
  partialSum += node.data;
  if (!node.left && !node.right) {
    return partialSum == targetSum;
  }
  else {
    return hasPathSumHelper(node.left, partialSum, targetSum) || hasPathSumHelper(node.right, partialSum, targetSum);
  }
};
