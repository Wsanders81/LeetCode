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
