/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let ans=[], min_diff=Number.MAX_SAFE_INTEGER
    let sortedArray=arr.sort((a,b)=>a-b)
    for(let i=1;i<sortedArray.length;i++){
        min_diff=Math.min(min_diff, sortedArray[i]-sortedArray[i-1])
    }

    for(let i=1; i<sortedArray.length;i++){
        if(sortedArray[i]-sortedArray[i-1]==min_diff)ans.push([sortedArray[i-1],sortedArray[i]])
    }
return ans
};