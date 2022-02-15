// ?? 75 blind leetcode questions
// ** Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum2 = function(nums, target) {
	var array = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [ i, j ];
		}
	}
};
// console.log(twoSum2([ 3, 2, 4 ], 6));

//** Max Profit */
function maxProfit(prices) {
	let maxProfit = 0;
	let min = prices[0];
	for (let i = 0; i < prices.length; i++) {
		if (min > prices[i]) {
			min = prices[i];
		}
		else if (prices[i] - min > maxProfit) {
			maxProfit = prices[i] - min;
		}
	}
	return maxProfit;
}
// maxProfit([ 7, 1, 5, 3, 6, 4 ]);
// maxProfit([ 7, 6, 4, 3, 1 ]);
maxProfit([ 1, 2 ]);

//* 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function containsDuplicate(nums) {
	let numObj = new Set();
	let isDupe = false;
	nums.forEach((num) => {
		if (numObj.has(num)) isDupe = true;
		// numObj[num] = numObj[num] ? numObj[num] + 1 : 1;
		numObj.add(num);
	});
	return isDupe;
}
console.log(containsDuplicate([ 1, 2, 3, 4 ]));

//?? Algorithm study plan
var binarySearch = function(nums, target) {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;
	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		console.log(nums[middleIdx]);
		if (nums[middleIdx] === target) return middleIdx;
		if (nums[middleIdx] < target) {
			leftIdx = middleIdx + 1;
		}
		if (nums[middleIdx] > target) {
			rightIdx = middleIdx - 1;
		}
	}
	return -1;
};
// console.log(binarySearch([ -1, 0, 3, 5, 9, 12 ], 9));
