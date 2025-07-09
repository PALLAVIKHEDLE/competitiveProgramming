/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const freeTime=[]
    let currTime=0
    for(let i=0; i<startTime.length; i++){
        freeTime.push([currTime, startTime[i]])
        currTime=endTime[i]
    }
    if(currTime<eventTime){
        freeTime.push([currTime, eventTime])
    }
    k++
    let maxFreeTime=currFreeTime=0
    for(let i=0; i<freeTime.length; i++){
        currFreeTime+=freeTime[i][1]-freeTime[i][0]
        if(i>=k){
            currFreeTime-=freeTime[i-k][1]-freeTime[i-k][0]
        }
        maxFreeTime=Math.max(maxFreeTime,currFreeTime)
    }
    return maxFreeTime
};