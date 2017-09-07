'use strict';

export const removeDuplicates = (linkedList) => {
  if (!linkedList) return linkedList;
  // Solution using O(1) space, but O(N^2) time
  let temp = linkedList;
  while (temp) {
    let runner = temp;
    while (runner.next) {
      if (runner.next.val === temp.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    temp = temp.next;
  }
  return linkedList;

  /* Solution using O(N) space
  let seen = new Set();
  let node = linkedList;
  seen.add(node.val); // add head
  while (node.next) {
    if (seen.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      seen.add(node.next.val);
      node = node.next;
    }
  }
  return linkedList;
  */
};
