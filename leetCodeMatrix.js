//** */ 73. Set Matrix Zeroes

function setZeroes(matrix) {
	const columns = new Set();
	const rows = new Set();

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				rows.add(i);
				columns.add(j);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (rows.has(i) || columns.has(j)) {
				matrix[i][j] = 0;
			}
		}
	}
	return matrix;
}
// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
// console.log(setZeroes([ [ 0, 1, 2, 0 ], [ 3, 4, 5, 2 ], [ 1, 3, 1, 5 ] ]));

//   54. Spiral Matrix
function spiralOrder(matrix) {
	if (matrix.length === 0) return [];

	let result = [];
	let rowStart = 0;
	let rowEnd = matrix.length - 1;
	let colStart = 0;
	let colEnd = matrix[0].length - 1;
	//while loop
	// top first
	// loop over first array (top)
	while (true) {
		for (let i = colStart; i <= colEnd; i++) {
			result.push(matrix[rowStart][i]);
		}
		//increment row start to be next row
		rowStart++;
		// always starts over at top
		if (rowStart > rowEnd) return result;

		// right
		for (let i = rowStart; i <= rowEnd; i++) {
			result.push(matrix[i][colEnd]);
		}
		// ending column has been exhausted, decrement index
		colEnd--;
		if (colEnd < colStart) {
			return result;
		}
		// bottom
		for (let i = colEnd; i >= colStart; i--) {
			result.push(matrix[rowEnd][i]);
		}
		rowEnd--;
		if (rowEnd < rowStart) return result;
		// left
		for (let i = rowEnd; i >= rowStart; i--) {
			result.push(matrix[i][colStart]);
		}
		colStart++;
		if (colStart > colEnd) return result;
	}
	return result;
}

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));

// function wordSearch(board, word) {
// 	const rows = board.length;
// 	const cols = board[0].length;
// 	function DFS(r, c, i) {
// 		if (i === word.length) {
// 			return true;
// 		}
		
// 		if (
// 			r < 0 ||
// 			c < 0 ||
// 			r >= rows ||
// 			c >= cols ||
// 			word[i] !== board[r][c] 
// 		) {
// 			console.log(board)
// 			return false;
// 		}
// 		board[r][c] = 0; 
// 		let res =
// 			DFS(r + 1, c, i + 1) ||
// 			DFS(r - 1, c, i + 1) ||
// 			DFS(r, c + 1, i + 1) ||
// 			DFS(r, c - 1, i + 1);
// 		return res;
// 	}
// 	for (let i = 0; i < rows; i++) {
// 		for (let j = 0; j < cols; j++) {
// 			if (DFS(i, j, 0) === true) return true;
// 		}
// 	}
// 	return false;
// }
function wordSearch(board, word){
	const neighbors = [[0, -1], [-1, 0], [0,1], [1,0]]
    const find = (idx, x, y) => {
        if (idx === word.length) {
            return true
        }
        if (!board[x] || word[idx] !== board[x][y]) {
            return false
        }
        board[x][y] = "*"
        for (const [a, b] of neighbors) {
            if (find(idx+1, x+a, y+b)) {
                return true
            }
        }
        board[x][y] = word[idx]
        return false
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (find(0, i, j)) {
                return true
            }
        }
    }
    return false
}
console.log(
	wordSearch(
		[["C","A","A"],
		["A","A","A"],
		["B","C","D"]], "AAB")
);
