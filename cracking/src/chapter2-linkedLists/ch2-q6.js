'use strict';

export const isPalindromeWithLength = (list) => {
  let length = getLength(list);
  if (length <= 1) return true;

  let stack = [];

  for (let i = 0; i < Math.floor(length/2); i++) {
    stack.push(list.val);
    list = list.next;
  }

  if (length%2 === 1) list = list.next; // Skip over middle element if length is odd

  while (list) {
    if (list.val !== stack.pop()) return false;
    list = list.next;
  }
  return stack.length === 0;
};

export const isPalindromeNoLength = (list) => {
  /*
  // When length is known

  let length = getLength(list);

  if (length <= 1) return true;

  let stack = [];

  for (let i = 0; i < Math.floor(length/2); i++) {
    stack.push(list.val);
    list = list.next;
  }

  if (length % 2 === 1) list = list.next; // Skip middle element if odd

  while (list) {
    if (list.val !== stack.pop()) return false;
    list = list.next;
  }
  return stack.length === 0;
  */

  // When length isn't known
  let fast = list;
  let slow = list;
  let stack = [];
  while (fast && fast.next) { // Once fast reaches the end then stack will have half of list in reverse order
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) slow = slow.next; // Has odd number of elements so skip the middle

  while (slow) {
    let top = stack.pop();
    if (top !== slow.val) return false;
    slow = slow.next;
  }
  return stack.length === 0;
};

const getLength = (list) => {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
};
