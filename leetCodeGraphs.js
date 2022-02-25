

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
// console.log(cloneGraph2([[2,4],[1,3],[2,4],[1,3]]))
   
//!  417. Pacific Atlantic Water Flow

//* 200. Number of Islands

var numIslands = function(grid) {
    // var for num islands
    let numOfIslands = 0;
    // set rows check if empty
	let rows = grid.length;
	if (rows === 0) return 0;
	let cols = grid[0].length;

	let markAsVisited = function(x, y) {
		// boundaries
		if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] == 0) return;
		grid[x][y] = 0;
		markAsVisited(x + 1, y);
		markAsVisited(x - 1, y);
		markAsVisited(x, y + 1);
		markAsVisited(x, y - 1);
	};
	for (let i = 0; i < rows; i++) {
		
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] === '1') {
				console.log(grid[i][j]);
				markAsVisited(i, j);
				numOfIslands += 1;
			}
		}
	}
	return numOfIslands;
};

function longestConsecutive(nums){
    const numSet = new Set(nums)
    let longest = 0; 

    for(let num of nums){
        //if num does not have left neighbor in set
        if(!numSet.has(num - 1)){
            length = 0; 
            // check current number n + 0
            while(numSet.has(num + length)){
                length++; 
                longest = Math.max(longest, length)
            }
            
        }
    }
    return longest; 
}
console.log(longestConsecutive([100,1,200,3,4,2]))

// 417. Pacific Atlantic Water Flow
var pacificAtlantic = function(matrix) {
    let res = [];
    let min = -Infinity;
    let rows = matrix.length;
    let cols = matrix[0].length; 
    let pacific = new Array(rows).fill().map(() => new Array(cols).fill(0));
    let atlantic = new Array(rows).fill().map(() => new Array(cols).fill(0));
    
    // left & right
    for (let row = 0; row < rows; row ++) {
        dfs(matrix, row, 0, min, pacific)
        dfs(matrix, row, matrix[0].length - 1, min, atlantic)
    }
    // top & bottom
    for (let col = 0; col <  cols; col ++) {
        dfs(matrix, 0, col, min, pacific)
        dfs(matrix, matrix.length - 1, col, min, atlantic)
    }
    
    for (let row = 0; row < rows; row ++) {
        for (let col = 0; col < cols; col ++) {
            if (pacific[row][col] == 1 && atlantic[row][col] == 1) {
                res.push([row, col])
            }
        }
    }
    return res;
    
};

const dfs = (matrix, r, c, prevVal, ocean) => {
    // 1. Check necessary condition.
    if (r < 0 || c < 0 || r > matrix.length - 1 || c > matrix[0].length - 1) return;
    if (matrix[r][c] < prevVal) return;
    if (ocean[r][c] == 1) return;
    
    // 2. Process call.
    ocean[r][c] = 1;
    
    // 3. Call dfs as needed.
    dfs (matrix, r - 1, c, matrix[r][c], ocean);
    dfs (matrix, r + 1, c, matrix[r][c], ocean);
    dfs (matrix, r, c - 1, matrix[r][c], ocean);
    dfs (matrix, r, c + 1, matrix[r][c], ocean);
}