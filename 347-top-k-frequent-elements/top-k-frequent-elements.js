/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map={}, frequentArray=[], sortedArray=[], outputArray=[]
    for(let i=0;i<nums.length;i++){
        let val=map[nums[i]]
        if(val==undefined) map[nums[i]]=1
        else map[nums[i]]=val+1
    }

    for(key in map) frequentArray.push(map[key])

    sortedArray=frequentArray.sort((a,b)=>b-a)
    for(let i=0;i<sortedArray.length;i++){
        for(key in map){
            let val=map[key]
            if(val==sortedArray[i]){
                if(k>0){
                    outputArray.push(key)
                    map[key]=null
                    k--
                }
            }
        }
    }
return outputArray
};