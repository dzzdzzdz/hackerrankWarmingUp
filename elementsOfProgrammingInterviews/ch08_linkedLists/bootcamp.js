// Search for a key.
const search = (node, key) => {
    while (node != null && node.data != key) {
	node = node.next;
    }

    // If key was not present in the list, node will have become null.
    return node;
};

// Insert new node after a specified node.
const insertAfter = (node, newNode) => {
    newNode.next = node.next;
    node.next = newNode;
};

// Delete a node immediately following aNode. Assumes aNode is not a tail.
const deleteList = (aNode) => {
    aNode.next = aNode.next.next;
};
