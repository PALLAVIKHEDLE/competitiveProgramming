/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    // store free time intervals between meetings
    const freeTime=[]
    // Tracks current time pointer as we scan meetings
    let currTime=0
    for(let i=0; i<startTime.length; i++){
    // Add the free time interval between current time and next meeting's start
        freeTime.push([currTime, startTime[i]])
    // Move current time to the end of this meeting
        currTime=endTime[i]
    }
    if(currTime<eventTime){
// Add remaining free time after last meeting, if any
        freeTime.push([currTime, eventTime])
    }
    k++// Increase k to include up to k+1 free intervals
    let maxFreeTime=currFreeTime=0
    for(let i=0; i<freeTime.length; i++){
    // Add the current free interval to the window
        currFreeTime+=freeTime[i][1]-freeTime[i][0]
    // Remove the oldest interval if window size exceeds k
7    
        if(i>=k){
            currFreeTime-=freeTime[i-k][1]-freeTime[i-k][0]
        }
        // Update max free time found so far
        maxFreeTime=Math.max(maxFreeTime,currFreeTime)
    }
    return maxFreeTime
};