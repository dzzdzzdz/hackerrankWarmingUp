const treeTraversal = (root) => {
    if (root) {
        // Preorder: Processes the root before the traversals of left and right children.
        console.log("Preorder: " + root.data);
        treeTraversal(root.left);
        treeTraversal(root.right);
        // Inorder: Processes the root after the traversal of left child and before the traversal of right child.
        treeTraversal(root.left);
        console.log("Inorder: " + root.data);
        treeTraversal(root.right);
        // Postorder: Processes the root after the traversals of left and right.
        treeTraversal(root.left);
        treeTraversal(root.right);
        console.log("Postorder: " + root.data);
    }
};
