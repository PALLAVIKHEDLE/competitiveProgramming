/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
   let result =[],i;

    for (i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) result.push(intervals[i]);
        else if (intervals[i][0] > newInterval[1])break;
        else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        }
    }

    result.push(newInterval);

    for (i; i < intervals.length; i++)result.push(intervals[i]);
    
return result;
};
 




  
