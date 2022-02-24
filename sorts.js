function merge(arr1, arr2) {
	// create empty output array.
	const results = [];
	// use two pointers. One for first array , one for second array.
	let i = 0;
	let j = 0;
	// use while loop
	// while i is less than the length of first array AND
	// j is less than length of second array
	while (i < arr1.length && j < arr2.length) {
		// check which pointer has lower value and push to results array.
		// increment index pointers accordingly
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		}
		else {
			results.push(arr2[j]);
			j++;
		}
	}

	//check if all arrays are empty, if not push remaining values into output array
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	//return results
	return results;
}

let arr1 = [ 1, 5, 9, 100 ];
let arr2 = [ 2, 10, 80, 105 ];
// console.log(merge(arr1, arr2));
function mergeSort(arr) {
	// create base case. If array is length of 1 or 0. return array.
	if (arr.length <= 1) return arr;
	// find middle point of array
	let mid = Math.floor(arr.length / 2);
	// create variable for left side of array
	let left = mergeSort(arr.slice(0, mid));
	// create variable for right side of array
	let right = mergeSort(arr.slice(mid));
	// recursively call mergeSort on both left and right sides
	// finally call our merge function on the divided arrays
	return merge(left, right);
}

// Bubble sort
function bubbleSort(arr) {
	// use double loop
	// first loop to use first index
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			if (arr[i] > arr[j]) {
				[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
			}
		}
	}
	// inner loop to compare first index to next indexes, i + 1
	// if first index, i , is greater than i + 1, swap values
	// return arr
	return arr;
}

function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let output = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			output.push(arr1[i]);
			i++;
		}
		if (arr1[i] > arr2[j]) {
			output.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		output.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		output.push(arr2[j]);
		j++;
	}
	return output;
}

function mergeSort(arr) {
	//base case. return if less than or equal to 1
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	// keep dividing until one
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
// console.log(mergeSort([9,1,5,2,8,3,7,4,6,10]))
// console.log(merge([ 1, 5, 9, 10 ], [ 2, 6, 8, 11 ]));
// var numIslands = function(grid) {
// 	let n = grid.length;
// 	let m = grid[0] ? grid[0].length : 0;

// 	let dfs = function(x, y) {
// 		if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) {
// 			return;
// 		}
// 		// set gridd location to 0
// 		grid[x][y] = 0;
// 		//change all neighbors
// 		//up
// 		dfs(x - 1, y);
// 		//left
// 		dfs(x, y - 1);
// 		//down
// 		dfs(x + 1, y);
// 		//right
// 		dfs(x, y + 1);
// 	};
// 	let res = 0;
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < m; j++) {
// 			///if we find a zero then use dfs function to set all neighbors to 0
// 			if (grid[i][j] == 1) {
// 				// found a 1. let's increment res
// 				res++;
// 				dfs(i, j);
// 			}
// 		}
// 	}
// 	return res;
// };
// console.log(
// 	numIslands(
// 		[
//             ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
//           ]
// 	)
// );
