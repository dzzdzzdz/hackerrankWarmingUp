const returnKthToLast = (list) => {
    let p1 = list;
    let p2 = list;
    for (let i = 0; i < k; i++) {
        if (!p1) return null;
        p1 = p1.next;
    }
    while (p1) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
};