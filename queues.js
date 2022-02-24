/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
      this.size += 1; 
			return;
		}
		this.last.next = newNode;
		this.last = newNode;
    this.size += 1; 
		return;
	}

	/** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
    try {
      if(!this.size){
        throw new Error("Nothing here!")
      }
      if(this.size === 1) {
        
        const returnVal = this.first.val
        this.first = null; 
        this.last = null; 
        this.size = 0; 
        return returnVal;
      }
      const returnVal = this.first.val; 
      this.first = this.first.next;
      this.size -= 1; 
      return returnVal; 
      


    } catch(e) {throw e}
    
  }

	/** peek(): return the value of the first node in the queue. */

	peek() {
    console.log(this.first.val)
    return this.first.val
  }

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
    return this.size === 0; 
  }
}

const q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
console.log(q.isEmpty()) 


console.log(q)

module.exports = Queue;
