const isPalindrome = (list) => {
    // Iterative solution
    let slow = list;
    let fast = list;
    let stack = [];
    while (fast && fast.next) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast) slow = slow.next; // checks if length is odd, then moves slow up
    while (slow) {
        if (stack.pop() !== slow.data) return false;
        slow = slow.next;
    }
    return true;
}