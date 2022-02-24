class Node {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
	// Depth first traversal => Use a stack
	DFSearch(val) {
		const toVisitStack = [ this ];

		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			if (current.val === val) {
				return current;
			}
			console.log('VISITING', current.val);
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
	}
	BFSearch(val) {
		const toVisitQueue = [ this ];

		while (toVisitQueue.length) {
			const current = toVisitQueue.shift();
			if (current.val === val) {
				return current;
			}
			console.log('VISITING', current.val);
			for (let child of current.children) {
				toVisitQueue.push(child);
			}
		}
	}
}
const tree = new Node(0, [
	new Node(1, [ new Node(3), new Node(5) ]),
	new Node(2, [ new Node(4), new Node(6) ])
]);
class Tree {
	constructor(root) {
		this.root = root;
	}
	findInTreeDFS(val) {
		return this.root.DFSearch(val);
	}
	findInTreeBFS(val) {
		return this.root.BFSearch(val);
	}
	treeSum() {
		let toVisitStack = [ this.root ];
		let sum = 0;
		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			sum += current.val;
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
		return sum;
	}
    treeEvens(){
        let toVisitStack = [ this.root ]; 
        let count = 0; 
        while(toVisitStack.length){
            const current = toVisitStack.pop(); 
            if(current.val % 2 === 0) count++; 
            for(let child of current.children){
                toVisitStack.push(child)
            }
        }
        return count; 
    }
    numGreater(x){
        let toVisitStack = [ this.root ]; 
        let count = 0; 
        while(toVisitStack.length){
            const current = toVisitStack.pop(); 
            if(current.val > x) count++; 
            for(let child of current.children){
                toVisitStack.push(child)
            }
        }
        return count; 
    }
	sumValues() {
		if(!this.root) return 0; 
		let toVisitStack = [this.root]
		let total = 0; 
		while(toVisitStack.length){
		  const current = toVisitStack.pop()
		  total += current.val
		  for(let child of current.children) {
			toVisitStack.push(child)
		  }
		}
		return total
	  }
	  countEvens() {
		if(!this.root) return 0; 
	
		let toVisitQueue = [this.root]
		let total = 0 ;
		while(toVisitQueue.length){
		  const current = toVisitQueue.shift()
		  console.log(current)
		  if(current.val % 2 === 0) total += 1
		  for(let child of current.children) {
			console.log(child)
			toVisitQueue.push(child)
		  }
		}
		return total; 
	  }
	  numGreater(lowerBound) {
		if(!this.root) return 0; 
	
		let toVisitStack = [this.root]
		let totalGreaterThan = 0; 
		while(toVisitStack.length){
		  const current = toVisitStack.pop()
		  console.log(current)
		  if(current.val > lowerBound) totalGreaterThan += 1; 
		  for(let child of current.children) {
			toVisitStack.push(child)
		  }
		}
		return totalGreaterThan; 
	
	  }
}
const newTree = new Tree(tree);

// Depth first reversal
