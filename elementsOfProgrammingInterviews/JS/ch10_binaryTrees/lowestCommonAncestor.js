const lowestCommonAncestor = (curr, A, B) => {
  if (curr == null) {
    return null;
  }
  
  if (curr == A || curr == B) {
    return curr;
  }
  
  var left = lowestCommonAncestor(curr.left, A, B);
  var right = lowestCommonAncestor(curr.right, A, B);
  
  if (left != null && right != null) {
    return curr;
  }
  
  if (left == null) {
    return right;
  }
  else {
    return left;
  }
};
