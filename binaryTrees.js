/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */
  
    minDepth() {
      if(!this.root) return 0; 
      let BFS = (node) => {
        if(node.left === null && node.right === null) return 1; 
        if(node.left === null) return BFS(node.right) + 1; 
        if(node.right === null) return BFS(node.left) + 1; 
        return Math.min(BFS(node.left), BFS(node.right)) + 1
      }
      return BFS(this.root)
    }
  
    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */
  
    maxDepth() {
      let maxDepth = 0; 
      let BFS = (node, level) => {
        if(node === null) return
        if(level > maxDepth) maxDepth = level
        BFS(node.left, level + 1)
        BFS(node.right, level + 1)
      }
      BFS(this.root, 1)
      return maxDepth
    }
    
  
    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */
  
    maxSum() {
      let total = 0; 
      const BFS = (node) => {
        if(node === null) return 0; 
        const leftSum = BFS(node.left)
        const rightSum = BFS(node.right)
        total = Math.max(total, node.val + leftSum + rightSum)
        return Math.max(leftSum + node.val, rightSum + node.val, 0)
      }
      BFS(this.root)
      return total; 
    }
  
    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */
  
    nextLarger(lowerBound) {
      if(!this.root) return null; 
      let toVisitQueue = [this.root]
      let closestNum = null; 
      while(toVisitQueue.length) {
        let currentNode = queue.shift(); 
        let currentVal = currentNode.val; 
        let higherThanLowerBound = currentVal > lowerBound; 
        let reassignClosest = currentVal < closest || closest === null; 
        if(higherThanLowerBound && reassignClosest) {
          closest = currentVal
        }
        if(currentNode.left) toVisitQueue.push(currentNode.left)
        if(currentNode.right) toVisitQueue.push(currentNode.right)
      }
      return closest; 
    }
  
    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */
  
    areCousins(node1, node2) {
  
    }
  
    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */
  
    static serialize() {
  
    }
  
    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  
    static deserialize() {
  
    }
  
    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */
  
    lowestCommonAncestor(node1, node2) {
      
    }
  }
  
  let smallTree;
  let largeTree;
  let emptyTree;
  
  
    emptyTree = new BinaryTree();
  
    // build small tree;
    let smallLeft = new BinaryTreeNode(5);
    let smallRight = new BinaryTreeNode(5);
    let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
    smallTree = new BinaryTree(smallRoot);
  
    // build large tree
    let node6 = new BinaryTreeNode(1);
    let node5 = new BinaryTreeNode(1);
    let node4 = new BinaryTreeNode(2);
    let node3 = new BinaryTreeNode(3, node4, node6);
    let node2 = new BinaryTreeNode(5, node3, node5);
    let node1 = new BinaryTreeNode(5);
    let root = new BinaryTreeNode(6, node1, node2);
    largeTree = new BinaryTree(root);
  console.log(smallTree)
   console.log(emptyTree.minDepth())
  console.log(smallTree.minDepth())
  console.log(largeTree.minDepth())
  module.exports = { BinaryTree, BinaryTreeNode };
  