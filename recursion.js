/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
    if(idx === nums.length) return 1; 
    return nums[idx] * product(nums, idx + 1)
    
    
  }
  /** longest: return the length of the longest word in an array of words. */
  
  function longest(words, idx = 0, longestWord = 0) {
    if(idx === words.length) return longestWord; 
    if(words[idx].length > longestWord) longestWord = words[idx].length; 
    return longest(words, idx + 1, longestWord) 
    
  }
  /** everyOther: return a string with every other letter. */
  
  function everyOther(str, idx = 0, output = "") {
    
   if(idx >= str.length) return output
    output += str[idx]
    
   return everyOther(str, idx + 2, output) 
  }
  
  /** isPalindrome: checks whether a string is a palindrome or not. */
  
  function isPalindrome(str, idx = 0) {
    let leftIdx = idx; 
    let rightIdx = str.length - idx - 1; 
    if(leftIdx >= rightIdx ) return true; 
    if(str[leftIdx] !== str[rightIdx]) return false
    return isPalindrome(str, idx + 1) 
  }
  
  /** findIndex: return the index of val in arr (or -1 if val is not present). */
  
  function findIndex(arr, val, idx = 0) {
    if(idx === arr.length) return -1; 
    if(arr[idx] === val) return idx; 
    return findIndex(arr, val, idx + 1)
  }
  
  
  /** revString: return a copy of a string, but in reverse. */
  
  function revString(str, idx = 0, output = "") {
    
    if(output.length === str.length) return output; 
    output += str[str.length - 1 - idx]
  
    
    return revString(str, idx + 1, output)
  }
  
  /** gatherStrings: given an object, return an array of all of the string values. */
  let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };
  function gatherStrings(obj) {
    let strArr = []
    for(let key in obj) {
      if(typeof obj[key] === "string") strArr.push(obj[key])
      if(typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]))
    }
    return strArr; 
  }
  
  
  /** binarySearch: given a sorted array of numbers, and a value,
   * return the index of that value (or -1 if val is not present). */
  
  function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
   
    if(leftIdx >= rightIdx) return - 1; 
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    if(arr[middleIdx] === val )return middleIdx; 
    if(arr[middleIdx] > val)  return binarySearch(arr, val, leftIdx, rightIdx = middleIdx - 1)
    if(arr[middleIdx] < val) return binarySearch(arr, val, leftIdx = middleIdx + 1, rightIdx)
  }
  console.log(binarySearch([1,2,3,4],1))
  console.log(binarySearch([1,2,3,4],3))
  console.log(binarySearch([1,2,3,4],5))
  module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch
  };
  