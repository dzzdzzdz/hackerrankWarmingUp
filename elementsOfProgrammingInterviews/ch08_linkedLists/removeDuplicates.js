const removeDuplicates = (list) => {
  let iter = list;
  while (iter) {
    let nextDistinct = iter.next;
    while (nextDistinct && nextDistinct.data == iter.data) {
      nextDistinct = nextDistinct.next;
    }
    iter.next = nextDistinct;
    iter = nextDistinct;
  }
  return list;
};
