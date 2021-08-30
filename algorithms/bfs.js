import BinarySearchTree from "../data-structures/BST.js";
import Queue from "../data-structures/queue.js";

function bfs(node) {
  let queue = new Queue();
  if (node == null) {
    return;
  }

  queue.enqueue(node);

  while (!queue.isEmpty()) {
    let curr = queue.dequeue();
    console.log(curr.data);
    if (curr.left != null) {
      queue.enqueue(curr.left);
    }
    if (curr.right != null) {
      queue.enqueue(curr.right);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(3);
bst.insert(1);
bst.insert(5);
bst.insert(4);
bst.insert(2);

bfs(bst.getRootNode());
