const sumRootToLeaf = (tree) => {
  return sumRootToLeafHelper(tree, 0);
};

const sumRootToLeafHelper = (tree, partialPathSum) => {
  if (!tree) {
    return null;
  }
  
  partialPathSum = partialPathSum * 2 + tree.data;
  if (tree.left == null && tree.right == null) { // leaf
    return partialPathSum;
  }
  else { // non-leaf
    return sumRootToLeafHelper(tree.left, partialPathSum) + sumRootToLeafHelper(tree.right, partialPathSum);
  }
};
