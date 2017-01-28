const reverseSinglyLinkedList = (list) => {
  let previous, node = list.next;
  
  while (node) {
    let temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  
  return previous;
};

var node1 = { data: 11 },
    node2 = { data: 7 },
    node3 = { data: 5 },
    node4 = { data: 3 },
    node5 = { data: 2};
    
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var L1 = node1;
    
reverseSinglyLinkedList(L1);
