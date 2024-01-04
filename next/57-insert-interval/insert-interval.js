/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let index=0, {length}=intervals, j=0
      //insert newInterval based on newInterval[0]
    for(let i=0; i<intervals.length;i++){
        if(intervals[i][0]>=newInterval[0])break      
        index++
    }
    intervals.splice(index,0,newInterval)//newInterval inserted 
    console.log('intervals',intervals)
    //[[1,3],[2,5],[6,9]] now need to handle overlapping intervals
   while(j<intervals.length-1){
       if(intervals[j][1]<intervals[j+1][0]){
           j++
           continue
       }
        //overlap
        intervals[j][1]=Math.max(intervals[j][1],intervals[j+1][1])
        intervals.splice(j+1,1)// remove[[1,5],[6,9]]
   }
    return intervals  
};