/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count=prev=0
    intervals.sort((a,b)=>a[1]-b[1])//[[1,2],[2,3],[1,3],[3,4]]
    for(let i=1; i<intervals.length;i++){
        if(intervals[i][0]<intervals[prev][1])count++
        else prev=i
    }    
return count
};
