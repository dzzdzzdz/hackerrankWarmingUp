'use strict';

export const findStartOfLoopSet = (list) => {
  let visited = new Set();
  while (list) {
    if (visited.has(list)) return list;
    visited.add(list);
    list = list.next;
  }
  return null;
};

export const findStartOfLoopRunner = (list) => {
  let slow = list;
  let fast = list;

  // Meeting point will be loopSize-k steps into the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break; // Collision
  }
  // Error check: no meeting point == no loop
  if (!fast || !fast.next) return null;
  // Move slow to Head. Keep fast at meetingPoint. Each are k steps from the loop start.
  // If they move at the same pace, they must meet at loop start
  slow = list;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // Both now point to loop start
  return slow;
};
