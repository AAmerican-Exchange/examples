// JavaScript program for linked-list implementation of queue

class QNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(key) {
    // Create a new LL node
    let temp = new QNode(key);

    // If queue is empty, then new node is this.head and this.tail both
    if (this.tail == null) {
      this.head = this.tail = temp;
      return;
    }

    // Add the new node at the end of queue and change this.tail
    this.tail.next = temp;
    this.tail = temp;
  }

  dequeue() {
    // If queue is empty, return NULL.
    if (this.head == null) {
      return null;
    }

    // Store previous this.head and move this.head one node athis.head
    let temp = this.head;
    this.head = this.head.next;

    // If this.head becomes NULL, then change this.tail also as NULL
    if (this.head == null) {
      this.tail = null;
    }

    return temp;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
console.log("Queue this.head : " + queue.head.key + "\n");
console.log("Queue this.tail : " + queue.tail.key + "\n");
