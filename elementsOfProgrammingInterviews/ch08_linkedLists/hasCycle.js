const hasCycle = (list) => {
  let fast = list, 
      slow = list;
      
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;
    }  
  }
  
  return false; // no cycle
};
