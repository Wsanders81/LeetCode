var numIslands = function(grid) {
	// double loop
	// once we find a 1 then we search for all adjacent 1's and mark 0;
	let numOfIslands = 0;
	let rows = grid.length;
	if (rows === 0) return 0;
	let cols = grid[0].length;

	let markAsVisited = function(x, y) {
		// if x coord less than 0, out of bounds, if x coord > num rows in grid, out
		// if y greater than grid[0].length, out, if y less than 0 out or if grid coords are water (0)
		if (x < 0 || x >= rows || y > cols || y < 0 || grid[x][y] == 0) return;

		grid[x][y] = 0;
		//bottom
		markAsVisited(x + 1, y);
		//left
		markAsVisited(x, y - 1);
		//right
		markAsVisited(x, y + 1);
		//up
		markAsVisited(x - 1, y);
	};

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] == 1) {
				markAsVisited(i, j);
				numOfIslands += 1;
			}
		}
	}
	return numOfIslands;
};

console.log(
	numIslands([
		[ '1', '1', '0', '0', '0' ],
		[ '1', '1', '0', '0', '0' ],
		[ '0', '0', '1', '0', '0' ],
		[ '0', '0', '0', '1', '1' ]
	])
);
function shortestPath(start, end) {
    if (start === end) {
      return [start.value];
    }

    var queue = [start];
    let visited = new Set();
    let predecessors = {};
    let path = [];

    while (queue.length) {
      let currentVertex = queue.shift();

      if (currentVertex === end) {
        let stop = predecessors[end.value];
        while (stop) {
          path.push(stop);
          stop = predecessors[stop];
        }
        path.unshift(start.value);
        path.reverse();
        return path;
      }

      visited.add(currentVertex);
      for (let vertex of currentVertex.adjacent) {
        if (!visited.has(vertex)) {
          predecessors[vertex.value] = currentVertex.value;
          queue.push(vertex);
        }
      }
    }
  }
function canFinish(numCourses, prerequisites) {
	const prerequisiteMap = new Map();
	const visitSet = new Set();

	// map each course to prerequisite list
	//initialize blank map with each course in it set to empty array
	for (let i = 0; i < numCourses; i++) prerequisiteMap.set(i, []);
	// deconstruct prerequisites => course , prerequisite
	for (let [ course, prerequisite ] of prerequisites) {
		//get course from map and push prerequisite onto array
		prerequisiteMap.get(course).push(prerequisite);
	}

	const dfs = (course) => {
		// if we have visited this course before, it's a cycle return false
		if (visitSet.has(course)) return false;
		// if there is no prerequisite for this course, return true
		if (prerequisiteMap.get(course).length === 0) return true;

		// currently visiting this course
		visitSet.add(course);
		for (let prerequisite of prerequisiteMap.get(course)) {
			if (!dfs(prerequisite)) return false;
		}
		// we're no longer visiting this course
		visitSet.delete(course);

		// this course can be taken so for optimization we can
		// cache it by making its prerequisites an empty list
		// so that we don't have to repeat the process for this
		// course again (next time it'll return true immediately
		// on line 15)
		prerequisiteMap.set(course, []);

		return true;
	};

	// we have to manually go through every course since the
	// graph nodes might not be fully connected
	for (let i = 0; i < numCourses; i++) {
		if (!dfs(i)) return false;
	}

	return true;
}
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
	[ 'PHX', 'LAX' ],
	[ 'PHX', 'JFK' ],
	[ 'JFK', 'OKC' ],
	[ 'JFK', 'HEL' ],
	[ 'JFK', 'LOS' ],
	[ 'MEX', 'BKK' ],
	[ 'MEX', 'LIM' ],
	[ 'MEX', 'EZE' ],
	[ 'LIM', 'BKK' ]
];
//the graph
const adjacencyList = new Map();
// add node
function addNode(airport) {
	adjacencyList.set(airport, []);
}
// add edge, undirected
function addEdge(origin, destination) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => {
	addEdge(route[0], route[1]);
});

function bfs(start) {}

function nonRepeating(str) {
	let freqCounter = {};
	for (let letter of str) {
		freqCounter[letter] = freqCounter[letter] ? freqCounter[letter] + 1 : 1;
	}
	for (let letter of str) {
		if (freqCounter[letter] === 1) return letter;
	}
}
// console.log(nonRepeating('helloh world'));
// console.log(nonRepeating('abacddbec'));
class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
class LinkedList {
	constructor(vals) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		for (let val of vals) {
			this.push(val);
		}
	}
	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
			this.length++; 
			return; 
		}
		this.tail.next = node;
		this.tail = node;
		this.length++;
	}
	findNthElementFromEnd(n){
		let currentNode = this.head; 
		let i = 1; 
		while(currentNode){
			if(i === this.length - n) return currentNode; 
			currentNode = currentNode.next; 
			i++; 

		}
	}
}
const newList = new LinkedList([ 1, 2, 3, 4, 5, 6, 7 ]);
console.log(newList.findNthElementFromEnd(0))

// Given two strings, return true if the second
// string is an anagram of the first string
function freqCounter(string) {
	const strArr = string.split('');
	let freq = {};
	for (let letter of strArr) {
		freq[letter] = freq[letter] ? freq[letter] + 1 : 1;
	}
	return freq;
}

function anagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	let str1Freq = freqCounter(str1);
	let str2Freq = freqCounter(str2);
	for (let key in str1Freq) {
		if (!str2Freq[key]) return false;
		if (str1Freq[key] > str2Freq[key]) return false;
	}
	return true;
}

// Given an array of unique numbers and a number,
// return true if there exists a pair of numbers in the array that sum to the
// number given?
function uniqueNum(arr, num, left = 0, right = arr.length - 1) {
	//create 2 pointers: one left, one right.
	// check sum of array at left idx and right
	// if sum is larger, move right idx - 1
	// if sum is smaller than num, move left idx + 1
	// base case
    if (arr[left] >= arr[right]) return false;
	if (arr[left] + arr[right] === num) {
		console.log(arr[left], arr[right]);
		return true;
	}
	if (arr[left] + arr[right] > num) {
		right--;
		return uniqueNum(arr, num, left, right);
	}
	if (arr[left] + arr[right] < num) {
		left++;
		return uniqueNum(arr, num, left, right);
	}
	return false;
}
console.log(uniqueNum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 2));

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
	let right = mergeSort(arr.slice(mid, 0));
	return merge(left, right);
}

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