// JavaScript program for linked-list implementation of queue
class QNode
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
	}
}

let head = null, tail = null;

function enqueue(key)
{
	// Create a new LL node
		let temp = new QNode(key);

		// If queue is empty, then new node is head and tail both
		if (tail == null) {
			head = tail = temp;
			return;
		}

		// Add the new node at the end of queue and change tail
		tail.next = temp;
		tail = temp;
}


function dequeue()
{
	// If queue is empty, return NULL.
		if (head == null)
			return;

		// Store previous head and move head one node ahead
		let temp = head;
		head = head.next;

		// If head becomes NULL, then change tail also as NULL
		if (head == null)
			tail = null;
}


enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
console.log("Queue head : " + head.key+"\n");
console.log("Queue tail : " + tail.key+"\n");

