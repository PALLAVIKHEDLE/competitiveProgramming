/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
   let {length}=intervals, index=0
   //insert newInterval based on newInterval[0]
   while(index<length){
       if(intervals[index][0]>=newInterval[0])break
       index++
   }
   intervals.splice(index,0,newInterval)//newInterval insserted 
    //[[1,3],[2,5],[6,9]] now need to handle overlapping intervals
    let i=0
    while(i<intervals.length-1){
        if(intervals[i][1]<intervals[i+1][0]){
            i++
            continue

        }
        //overlap
        intervals[i][1]=Math.max(intervals[i][1],intervals[i+1][1])
        intervals.splice(i+1,1)// remove[[1,5],[6,9]]
    }
 return intervals   
};