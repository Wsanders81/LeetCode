

//  1    2  
//  3    4
// return copy of graph
// use hash map
function Node(val, neighbors){
    this.val = val === undefined ? 0 : val; 
    this.neighbors = neighbors === undefined ? [] : neighbors; 
}
function cloneGraph(node){
    let map = {};

    return traverse(node);
    
    function traverse  (node) {
        
        if(!node) return node;
        if(!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor))
        }
        return map[node.val]
    }
}
// create function that takes adjacency list and turns into nodes
var cloneGraph2 = function(node) {
    if (!node) {
        return;
    }
    console.log(node)
    
    let cloneMap = new Map();
   
    let nodeCopy = new Node(node.val);
    cloneMap.set(node.val, nodeCopy)
   
    let stack = [];
    stack.push([node, nodeCopy]);
    
    while(stack.length > 0) {
        const [oldNode, newNode] = stack.pop();

        const neighbors = oldNode.neighbors;
        
        if (neighbors.length > 0) {
            for (let neighbor of neighbors) {
                
                if(cloneMap.has(neighbor.val)) {
                    newNode.neighbors.push(cloneMap.get(neighbor.val))
                } else {
                    let copyChild = new Node(neighbor.val);
                    
                    cloneMap.set(neighbor.val, copyChild);
                    
                    stack.push([neighbor, copyChild]);    
                    
                    newNode.neighbors.push(copyChild);
                }
                
            }
        }

    }
    
    return cloneMap.get(node.val);
};
console.log(cloneGraph2([[2,4],[1,3],[2,4],[1,3]]))
   