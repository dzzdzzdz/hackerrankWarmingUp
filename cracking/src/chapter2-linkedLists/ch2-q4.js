'use strict';

export const partition = (node, x) => {
  let smallerHead = null, smallerTail = null, largerTail = null, largerHead = null;
  while (node) {
    let next = node.next;
    node.next = null;

    if (node.val < x) {
      if (!smallerHead) {
        smallerHead = node;
        smallerTail = smallerHead;
      } else {
        smallerTail.next = node;
        smallerTail = node;
      }
    }
    else {
      if (!largerHead) {
        largerHead = node;
        largerTail = largerHead;
      } else {
        largerTail.next = node;
        largerTail = node;
      }
    }
    node = next;
  }

  if (smallerTail) smallerTail.next = largerHead;

  return smallerHead || largerHead;

};
