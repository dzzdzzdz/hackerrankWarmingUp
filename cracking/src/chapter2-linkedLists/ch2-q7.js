'use strict';

export const isIntersection = (list1, list2) => {
  if (!list1 || !list2) return false;

  let length1 = getLength(list1), length2 = getLength(list2);
  let diff = Math.abs(length1-length2);

  if (length1 > length2) {
    while (diff-- > 0) list1 = list1.next;
  } else {
    while (diff-- > 0) list2 = list2.next;
  }
  while (list1 && list2) {
    if (list1 === list2) return list1;
    list1 = list1.next;
    list2 = list2.next;
  }
};

const getLength = (list) => {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
};
