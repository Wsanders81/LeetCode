class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		for (let val of vals) {
            this.push(val)
        }
	}
	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
            
		}
		this.tail.next = newNode;
        this.tail = newNode
	}
    
}
function reverseList(head){
    // current node
    let currentNode = head; 
    // save prev node outside loop 
    let prev = null; 
    
    while(currentNode){
        // save next node temp. What we're going to advannce to
        let nextNode = currentNode.next; 
        // set current node next to prev node
        currentNode.next = prev; 
        // set prev to current node
        prev = currentNode; 
        // advance current node
        currentNode = nextNode; 


    
    }
    return prev; 
}
function isPalindromeLinkedList(head){
    let letters = ""
    let currentNode = head
    
    while(currentNode){
        console.log(currentNode.val)
        letters+= currentNode.val
        currentNode = currentNode.next
    }
    
    let rightIdx = letters.length - 1
    let leftIdx = 0; 
    while(leftIdx < rightIdx){
        if(letters[leftIdx] !== letters[rightIdx]){
            return false
        }
        leftIdx++
        rightIdx--
    }
    return true
}
function mergeTwoList(list1, list2){
    let currLeftList = list1.head
    let currRightList = list2.head
    let dummyTail = new Node(null); 
    let head = dummyTail
    while(currLeftList && currRightList){
        if(currLeftList.val < currRightList.val){
            dummyTail.next = new Node(currLeftList.val)
            console.log(dummyTail.next)
            currLeftList = currLeftList.next; 
            dummyTail = dummyTail.next; 
            
        } else if(currRightList < currLeftList){
            dummyTail.next = new Node(currRightList.val); 
            currRightList = currRightList.next; 
            dummyTail = dummyTail.next; 
        } else {
            dummyTail.next = new Node(currRightList.val); 
            currRightList = currRightList.next
            dummyTail = dummyTail.next; 
        }
        
        }
        return head.next; 
}
const list1 = new LinkedList([ 1, 3, 5, 7, 9 ]);
const list2 = new LinkedList([ 2,4,6,8 ]);

// console.log(mergeTwoList(list1, list2))
const palindrome = new LinkedList(["A", "B", "C", "B", "A"])
// console.log(reverseList(newList.head))
// console.log(isPalindromeLinkedList(palindrome.head))
