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
// maxProfit([ 1, 2 ]);

//* 217. Contains Duplicate
// ??Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
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
// console.log(containsDuplicate([ 1, 2, 3, 4 ]));

// ** 238. Product of Array Except Self
// ?? Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// ??The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// ??You must write an algorithm that runs in O(n) time and without using the division operation.
function productExceptSelf(nums) {
	let output = [];
	for (let i = 0; i < nums.length; i++) {
		let left = i - 1;
		let right = nums.length - 1;
		let product = 1;
		let numsToMultiply = [];
		while (left >= 0) {
			product *= nums[left];
			// numsToMultiply.push(nums[left]);
			left--;
		}
		while (right > i) {
			product *= nums[right];
			// numsToMultiply.push(nums[right]);
			right--;
		}
		output.push(product);
	}
	return output;
}
console.log(productExceptSelf([ 1, 2, 3, 4 ]));

//** 53. Maximum Subarray */

function maxSubArray(nums) {
	let maxSub = 0;
	let curSum = 0;
	for (let num of nums) {
		// if curSum ever below zero then reset curSum
		if (curSum < 0) {
			curSum = 0;
		}
		// add current number to curSum
		curSum += num;
		maxSub = Math.max(maxSub, curSum);
	}
	return maxSub;
}
// console.log(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));

//!!! 152. Maximum Product Subarray
//?? Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

//?? The test cases are generated so that the answer will fit in a 32-bit integer.

//?? A subarray is a contiguous subsequence of the array.

function maxProduct(nums) {}

//** 153. Find Minimum in Rotated Sorted Array */

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
function findMin(nums) {
	let left = 0;
	let right = nums.length - 1;
	while (nums[left] > nums[right]) {
		let tempNum = nums.shift();
		nums.push(tempNum);
	}
	return nums[0];
}
// console.log(findMin([ 4, 5, 6, 7, 0, 1, 2 ]));
//** 33. Search in Rotated Sorted Array */

function search(nums, target) {
	function binarySearch(arr, num, leftIdx, rightIdx) {
		while (leftIdx <= rightIdx) {
			const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
			console.log(middleIdx);
			if (arr[middleIdx] === num) return middleIdx;
			if (arr[middleIdx] > num) {
				rightIdx = middleIdx - 1;
			}
			else if (arr[middleIdx] < num) {
				leftIdx = middleIdx + 1;
			}
		}
		return -1;
	}
	function findPivot(arr) {
		//find index of minimum element
		let min = arr[0];
		let minIdx = 0;
		for (let i = 0; i < arr.length; i++) {
			if (min > arr[i]) {
				min = arr[i];
				minIdx = i;
			}
		}
		return minIdx;
	}
	const pivot = findPivot(nums);
	let left = 0;
	let right = nums.length - 1;
	console.log('pivot', nums[pivot]);
	if (nums[pivot] === target) return pivot;
	if (pivot === 0) {
		console.log('in order');
		return binarySearch(nums, target, left, right);
	}
	if (nums[pivot - 1] >= target && nums[0] <= target) {
		console.log('left side');
		right = pivot - 1;

		return binarySearch(nums, target, left, right);
	}
	else {
		console.log('right side');
		left = pivot;
		return binarySearch(nums, target, left, right);
	}
}
// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([ 5,1,3 ], 3));
// console.log(search([ 4, 5, 6, 7, 0, 1, 2 ], 3));

//!! 15. 3Sum

//** 678. Valid Parenthesis String */
//* containing *'s as wild
function checkValidString(str) {
    if(str[0] === ")") return false; 
	let parenStack = [];
    let starStack = []
    // put ( , * in corresponding stack
    // index is important here
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' ) {
			parenStack.push(i);
		}
        if(str[i] === "*") {
            starStack.push(i)
        }
		if (str[i] === ')') {
            // first check ( stack
            if(parenStack.length > 0){
                parenStack.pop(); 
                // then check * stack
            } else if(starStack.length > 0){
                
                starStack.pop(); 
            } else {
                return false; 
            }
			
		}
	}
	//check ( stack against star stack. if stars have higher 
    // index, pop star stack & parenstack
    while(parenStack.length > 0){
        if(starStack.length === 0) {
            return false; 
        } else if (parenStack[parenStack.length - 1] < starStack[starStack.length - 1]){
            parenStack.pop()
            starStack.pop()
        } else {
            return false ;
        }

    }
	return true;
}
// console.log(checkValidString('(*)'));
// console.log(checkValidString('*(()*))'));

//** */ 11. Container with Most Water
function maxArea(height) {
	//double pointer technique
	let res = 0;
	let left = 0;
	let right = height.length - 1;
	while (left < right) {
		const area = (right - left) * Math.min(height[left], height[right]);
		res = Math.max(res, area);
		if (height[left] < height[right]) {
			left++;
		}
		else right--;
	}
	return res;
}
console.log(maxArea([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]));
//** O(n^2) */
function maxAreaBruteForce(height) {
	res = 0;

	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			//can only be as full as lowest height
			area = (j - i) * Math.min(height[i], height[j]);
			res = Math.max(res, area);
		}
	}
	return res;
}

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
