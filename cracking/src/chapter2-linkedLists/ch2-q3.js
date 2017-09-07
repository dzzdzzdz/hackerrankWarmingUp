'use strict';

export const deleteMiddleNode = (node) => {
  if (!node || !node.next) throw new Error('invalid node');
  let next = node.next;
  node.val = next.val;
  node.next = next.next;
};
