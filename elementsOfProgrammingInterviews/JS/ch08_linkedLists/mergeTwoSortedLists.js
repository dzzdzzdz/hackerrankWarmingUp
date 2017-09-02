const mergeTwoSortedLists = (list1, list2) => {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let head;
  
  if (list1.data < list2.data) {
    head = list1;
  }
  else {
    head = list2;
    list2 = list1;
    list1 = head;
  }
  
  while (list1.next != null) {
    if (list1.next.data > list2.data) {
      let temp = list1.next;
      list1.next = list2;
      list2 = temp;
    }
    else {
      list1 = list1.next;
    }
  }
  
  if (list1.next == null) {
    list1.next = list2;
  }

  return head;
};

var node0 = { data: 2 };
var node1 = { data: 5 };
var node2 = { data: 7 };
var node3 = { data: 3 };
var node4 = { data: 11 };
node0.next = node1;
node1.next = node2;
node3.next = node4;
var L1 = { head: node3 };
var L2 = { head: node0 };

mergeTwoSortedLists(L1.head, L2.head);
