const isSymmetric = (tree) => {
    return tree == null || checkSymmetric(tree.left, tree.right);
};

const checkSymmetric = (subTree1, subTree2) => {
  if (subTree1 == null && subTree2 == null) {
    return true;
  }
  else if (!subTree1 == null && !subTree2 == null) {
    return subTree1.data == subTree2.data && checkSymmetric(subTree1.left, subTree2.right) && checkSymmetric(subTree2.left, subTree1.right);
  }
  // One subtree is empty, the other is not.
  else {
    return false;
  }
};
