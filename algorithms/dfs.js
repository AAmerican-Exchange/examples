import BinarySearchTree from "../data-structures/BST.js";

function dfs(node) {
  console.log(node.data);
  node.left && dfs(node.left);
  node.right && dfs(node.right);
}

let bst = new BinarySearchTree();

bst.insert(3);
bst.insert(5);
bst.insert(1);
bst.insert(4);
bst.insert(2);

dfs(bst.getRootNode());
