'use strict';

export const partition = (node, x) => {
  let smallerHead = null, smallerTail = null, largerHead = null, largerTail = null;

  while (node) {
    let next = node.next;
    node.next = null;

    if (node.val < x) {
      if (!smallerHead) smallerHead = smallerTail = node;
      else smallerTail = smallerTail.next = node;
    }
    else {
      if (!largerTail) largerTail = largerHead = node;
      else largerTail = largerTail.next = node;
    }
    node = next;
  }
  if (smallerTail) smallerTail.next = largerHead;

  return smallerHead || largerHead;
};
