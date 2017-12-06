const listOfDepthsDFS = (tree) => {
    return makeListofDepthsDFS;
};

const makeListOfDepthsDFS = (tree, lists=[], depthLevel = 0) => {
    if (tree) {
        if (!lists[depthLevel]) lists[depthLevel] = new LinkedList();
        lists[depthLevel].append(tree.value);
        makeListsOfDepthsDFS(tree.left, lists, depthLevel+1);
        makeListsOfDepthsDFS(tree.right, lists, depthLevel+1);
    }
    return lists;
};

const listsOfDepthsBFS = (tree) => {
    if (!tree) return [];
    let queue = [tree.root];
    let lists = [];
    tree.root.depthLevel = 0;
    while (queue.length) {
        let parent = queue.shift();
        if (!lists[parent.depthLevel]) lists[depthLevel] = new LinkedList();
        lists[parent.depthLevel].append(tree.value);
        if (parent.left) {
            parent.left.depthLevel = parent.depthLevel + 1;
            queue.push(parent.left);
        }
        if (parent.right) {
            parent.right.depthLevel = parent.depthLevel + 1;
            queue.push(parent.right);
        }
    }
    return lists;
};