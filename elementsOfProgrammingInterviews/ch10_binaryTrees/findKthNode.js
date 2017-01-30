const findKthNode = (tree, k) => {
  let leftSize = tree.left != null ? tree.left.size : 0;
  while (tree) {
    if (leftSize + 1 < k) { // k-th node is on the right side
      k -= (leftSize + 1);
      tree = tree.right;
    }
    else if (leftSize + 1 == k) { // k is current node
      return iter;
    }
    else { // k-th node is on the left
      tree = tree.left;
    }
  }
  
  return null;
};
