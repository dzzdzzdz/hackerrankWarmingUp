const partition = (list, x) => {
    let head = list;
    let tail = list;
    while (list) {
        let next = list.next;
        if (list.data < x) {
            list.next = head;
            head = list;
        } else {
            tail.next = list;
            tail = list;
        }
        list = next;
    }
    tail.next = null;
    return head;
};