/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let {length}=customers
    let currTime=totalTime=0;
    for(let i=0; i<length; i++){
        if(currTime<=customers[i][0]){
            totalTime+=customers[i][1]
            currTime=customers[i][0]+customers[i][1]
        }else{
            totalTime+=(currTime-customers[i][0]+customers[i][1])
            currTime+=customers[i][1]
        }
    }
    return totalTime/length
};