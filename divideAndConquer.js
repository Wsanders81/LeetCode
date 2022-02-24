function countZeroes(array) {
	zeroCount = 0;
	leftIdx = 0;
	rightIdx = array.length - 1;
	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(array[middleIdx] !== 0) {
            leftIdx = middleIdx + 1; 
        }
        else if(array[middleIdx] === 0){
            zeroCount += rightIdx - middleIdx + 1; 
            rightIdx = middleIdx -1
            
        }
	}
    return zeroCount; 
}
function findFloor(arr, num) {
    let leftIdx = 0; 
    let rightIdx = arr.length - 1; 
    if(arr[rightIdx] < num) {
        return arr[rightIdx]
    }
      while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    let middleVal = arr[middleIdx]
    if(arr[rightIdx] < num) {
        return arr[rightIdx]
    } else if (arr[middleIdx] > num) {
        rightIdx = middleIdx - 1; 
    }}
    return -1
  }

  function divideAndConquer(arr, num, leftIdx, rightIdx){
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]
        if(middleVal > num){
            rightIdx = middleIdx - 1
        } else if(middleVal < num){
            leftIdx = middleIdx + 1
        } else return middleIdx
    }
    return -1
}

function findRotatedIndex(arr, num) {
  let leftIdx; 
  let rightIdx; 
  let middleIdx = Math.floor((arr.length -1 )/ 2)
  if(arr[middleIdx] > arr[middleIdx + 1] && arr[0] > num){
    leftIdx = middleIdx + 1
    rightIdx = arr.length - 1; 
    return divideAndConquer(arr, num, leftIdx, rightIdx)
  } 
  if(arr[middleIdx] > arr[middleIdx + 1] && arr[0] <= num  ){
      
      leftIdx = 0
      rightIdx = middleIdx
      return divideAndConquer(arr, num, leftIdx, rightIdx)
  } 
  
  
  return -1

  
}