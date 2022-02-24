function insert(intervals, newInterval){
    // These are already sorted
    // edge case: same number in both intervals is overlapping such as : [1,2][2,3]
    // if intervals are overlapping, take lowest of all intervals 
    // and highest of all overlapping intervals and create new interval

    // create output array
    // check new interval
    let result = []
    for(let i = 0; i < intervals.length; i++){
        // if end of new interval is less than beginning of 
        // current interval then we can insert it in front
        
        if(newInterval[1] < intervals[i][0]){
            result.push(newInterval)
            for(let j = i; j < intervals.length; j++){
                result.push(intervals[j])
            }
            return result; 
            
        // if beginning of new interval greater than end of current
        // interval. We're not overlapping so we can add current interval 
        // to result 
        } else if (newInterval[0] > intervals[i][1]){
            result.push(intervals[i])
        // else interval IS overlapping
        } else {
            // index 0 is min of both intervals
            // index 1 is max of both intervals
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
            console.log(newInterval)
        }
    }
    result.push(newInterval)
    return result; 
}
// console.log(insert([[1,2], [3,4], [5,6]], [0,3]))