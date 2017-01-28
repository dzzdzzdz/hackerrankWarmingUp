const listPivoting = (list, k) => {
  let lessHead = {},
      equalHead = {},
      greaterHead = {},
      lessIter = lessHead,
      equalIter = equalHead,
      greaterIter = greaterHead;
  
  // Populate 3 lists
  let iter = list;
  while (iter) {
    if (iter.data < k) {
      lessIter.next = iter;
      lessIter = iter;
    }
    else if (iter.data == k) {
      equalIter.next = iter;
      equalIter = iter;
    }
    else {
      greaterIter.next = iter;
      greaterIter = iter;
    }
    iter = iter.next;
  }
  
  // Combine 3 lists
  greaterIter.next = null;
  equalIter.next = greaterHead.next;
  lessIter.next = equalHead.next;
  
  return lessHead.next;
};
