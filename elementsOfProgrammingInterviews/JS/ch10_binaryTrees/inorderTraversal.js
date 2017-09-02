const inorderTraversal = (tree) => { // Using O(1) space
  let prev = null, curr = tree;
  let results = [];
  while (curr) {
    let next = {};
    if (curr.parent == prev) { // We came down to curr from prev
      if (curr.left) { // Keep going left
        next = curr.left;
      }
      else {
        results.push(curr.data);
        // Done with left, so go right if right is not empty. Otherwise, go up.
        next = (curr.right) ? curr.right : curr.parent;
      }
    }
    else if (curr.left == prev) {
      results.add(curr.data);
      // Done with left, so go right if right is not empty. Otherwise, go up.
      next = (curr.right) ? curr.right : curr.parent;
    }
    else {
      next = curr.parent;
    }
    prev = curr;
    curr = next;
  }
  return results;
};
