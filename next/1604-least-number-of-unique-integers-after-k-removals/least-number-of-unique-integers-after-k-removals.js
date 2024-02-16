/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map={}
    for(let num of arr){
        map[num]=(map[num]||0)+1
    }
    let nums=Object.entries(map).sort((a,b)=>b[1]-a[1])
    console.log('nums',nums, nums[nums.length-1])
    while(k>0){
        let count=nums[nums.length-1][1]
    console.log('count',count)

        if(k<count)break
        k-=count
        nums.pop()
    }
return nums.length    
};