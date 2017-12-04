const sumLists = (l1, l2, carry) => {
    if (!l1 || !l2 || !carry) return null;
    let result = new linkedList();
    let value = carry || 0;
    if (l1) value += l1.data;
    if (l2) value += l2.data;
    result.data = value % 10;
    if (l1 || l2) {
        let next = sumLists(l1 ? l1.next : null, l2 ? l2.next : null, value >= 10 ? 1 : 0);
        result.next = next;
    }
    return result;
};