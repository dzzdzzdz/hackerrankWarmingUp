const minimalTree = (arr) => {
    if (!arr || !arr.length) return null;
    return makeMinimalTree(arr, 0, arr.length-1);
};

const makeMinimalTree = (arr, start, end) => {
    if (end < start) return null;
    let middleIndex = Math.floor((start+end)/2);
    let rootNode = new TreeNode(arr[middleIndex]);
    rootNode.left = makeMinimalTree(arr, start, middleIndex-1);
    rootNode.right = makeMinimalTree(arr, middleIndex+1, end);

    return rootNode;
};