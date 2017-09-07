'use strict';

export const returnKthToLast = (list, k) => {
  if (!list) throw new Error('invalid list');

  let length = getLength(list);
  if (length <= k) throw new Error('list is not long enough');

  let kthToLast = length - 1 - k;
  for (let i = 0; i < kthToLast; i++) {
    list = list.next;
  }
  return list.val;
};

const getLength = (list) => {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
};
