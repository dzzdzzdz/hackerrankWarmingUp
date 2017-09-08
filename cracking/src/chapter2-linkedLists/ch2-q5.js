'use strict';

export const sumLists = (list1, list2) => {
  let res = createNode(0);
  let tail = res;
  let carry = 0, sum = 0;

  if (!list1 && !list2 && carry === 0) return null;

  while (list1 && list2) {
    sum = list1.val + list2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    list1 = list1.next;
    list2 = list2.next;
  }

  list1 = list1 || list2; // find whichever list isn't at the end
  while (list1) {
    sum = list1.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    list1 = list1.next;
  }

  if (carry > 0) tail.next = createNode(carry);

  return res.next;
};

const createNode = (val, next) => {
  return { val: val, next: next || null };
};
