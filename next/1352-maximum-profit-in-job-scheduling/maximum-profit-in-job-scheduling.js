/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs=[]
  for(let i=0; i<startTime.length;i++){
      jobs.push({start:startTime[i],end:endTime[i],profit:profit[i]})
  }  
  jobs.sort((a,b)=>a.end-b.end)
    // Initialize dp array to store maximum profit at each index
    const dp=new Array(startTime.length)
    dp[0]=jobs[0].profit
    const binarySearch=((jobs, index)=>{
        let low=0, high=index-1
        while(low<=high){
            let mid=Math.floor((low+high)/2)
            if(jobs[mid].end<=jobs[index].start){
                if(jobs[mid+1].end<=jobs[index].start)low=mid+1
                else return mid
            }else high=mid-1
        }
    return -1    
    })
// Iterate through jobs and fill the dp array
    for (let i = 1; i < startTime.length; i++) {
        let currentProfit = jobs[i].profit;
        const prevJobIndex = binarySearch(jobs, i);
        if (prevJobIndex !== -1) {
            currentProfit += dp[prevJobIndex];
        }
        dp[i] = Math.max(currentProfit, dp[i - 1]);
    }
    return dp[startTime.length - 1];
};