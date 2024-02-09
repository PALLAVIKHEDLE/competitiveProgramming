/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
   let prevEnd=-1, count=0
   intervals.sort((a,b)=>{
       if(a[0]!==b[0])return a[0]-b[0]
       else return b[1]-a[1]
   })
   for(const interval of intervals){
       const [start, end]=interval
       if(end>prevEnd){
           count++
           prevEnd=end
       }
   }
return count;
}