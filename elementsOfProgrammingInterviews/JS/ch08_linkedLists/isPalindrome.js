const isPalindrome = (list) => {
  if (!list) {
    return true;
  }
  
  // Find second half of list
  let slow = list, fast = list;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  
  // Compare first half and reversed second half lists
  let firstHalf = list,
      secondHalf = reverse(slow);
      
  while (secondHalf && firstHalf) {
    if (secondHalf.data != firstHalf.data) {
      return false;
    }
    secondHalf = secondHalf.next;
    firstHalf = firstHalf.next;
  }
  
  return true;
};

const reverse = (list) => {
  let previous, node = list.next;
  while (node) {
    let temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  
  return previous;
}
