/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
      //MAP APPROACH
    let map={}//freq
    let maxVal=0//max occurrences
    let maxValCount=0//no of task has max occurrences
    for(let i=0;i<tasks.length;i++){
        if(map[tasks[i]]==undefined) map[tasks[i]]=1
        else map[tasks[i]]=map[tasks[i]]+1
    }
    for(key in map){
        if(map[key]>maxVal){
            maxVal=map[key]
            maxValCount=1
        }else if(map[key]==maxVal) maxValCount++
    }
return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};