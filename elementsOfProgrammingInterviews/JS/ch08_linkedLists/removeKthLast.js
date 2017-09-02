const removeKthLast = (list, k) => {
  let first = list.next;
  // Advance first pointer by k steps
  while (k-- > 0) {
    first = first.next;
  }
  
  let second = list;
  // Iterate until first reaches tail
  while (first != null) { 
    second = second.next;
    first = first.next;
  }
  // second points to the (k + 1)-th last node, deletes its successor.
  second.next = second.next.next;
  return list;
};
