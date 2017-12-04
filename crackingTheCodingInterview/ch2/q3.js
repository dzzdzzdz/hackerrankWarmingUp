const deleteMiddleNode = (node) => {
    if (!node || !node.next) throw Error("invalid node");
    node.data = node.next.data;
    node.next = node.next.next;
};