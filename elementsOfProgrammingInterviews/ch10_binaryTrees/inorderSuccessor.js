const inorderSuccessor = (node) => {
  let iter = node;
  // If right subtree exists, then traverse right subtree's leftmost node
  if (iter.right) {
    iter = iter.right;
    while (iter.left) {
      iter = iter.left;
    }
    return iter;
  }
  // Find closest ancestor whose left subtree contains node
  while (iter.right && iter.parent.right == iter) {
    iter = iter.parent;
  }
  
  // If return value of null, then we are on right most node and no successor exists
  return iter.parent;
};
