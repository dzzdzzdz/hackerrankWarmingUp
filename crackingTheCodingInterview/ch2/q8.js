const loopDetection = (list) => {
    let slow = list;
    let fast = list;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    if (!fast || !fast.next) return null; // no loop
    slow = list;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};