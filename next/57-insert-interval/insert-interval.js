/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result=[], i
    for(i=0; i<intervals.length;i++){
        // 1. Interval ends before newInterval starts → push as is
        if(intervals[i][1]<newInterval[0])result.push(intervals[i])
        // 2. Interval starts after newInterval ends → stop merging
        else if(intervals[i][0]>newInterval[1])break
         // 3. Overlapping → merge
        else{
            newInterval[0]=Math.min(intervals[i][0], newInterval[0])
            newInterval[1]=Math.max(intervals[i][1], newInterval[1])
        }
    }
    //push merged new interval
    result.push(newInterval)
      // Push the rest of the intervals
 for(i; i<intervals.length; i++)result.push(intervals[i])
return result
};
// [1,3][2,5][6,9]
// [1,5][6,9]