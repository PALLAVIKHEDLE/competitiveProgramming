/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let map={}

    for(let match of matches){
        if(map[match[0]]==undefined)map[match[0]]=0
        if(map[match[1]]==undefined)map[match[1]]=0
        map[match[1]]++
    }

    let ans=[[],[]]
    for(let [key,value] of Object.entries(map)){
        if(value === 0)ans[0].push(key)
        if(value === 1)ans[1].push(key)
    }
    return ans
};