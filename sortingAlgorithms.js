//** Bubble Sort */
let bubbleSortArr = [ 99, 1, 10, 2, 9, 50, 5 ];
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
			}
		}
	}
	return arr;
}

// console.log(bubbleSort(bubbleSortArr))

const mergeSortArray = [ 5, 3, 2, 1, 4, 6, 9, 8, 7, 10 ];
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
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

console.log(mergeSort([ 5, 3, 2, 1, 4, 6, 9, 8, 7, 10 ]));
// console.log(merge([ 1, 5, 9 ], [ 2, 6, 10 ]));
