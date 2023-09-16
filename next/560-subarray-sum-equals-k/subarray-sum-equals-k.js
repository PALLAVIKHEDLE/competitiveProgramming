/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let sum=0, count=0, map={0:1}
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k] !== undefined) {
            count += map[sum - k];
        }
        map[sum] = map[sum] === undefined ? 1 : map[sum] + 1;
    }
    return count;
    // let count = 0;
    
    // for(start = 0; start<nums.length;start++){
    //     let sum = 0;
    //     for(end = start; end <= nums.length; end++){
    //         sum+=nums[end];
    //         if(sum == k)
    //             count++;
    //     }
    // }
    // return count;
//     let count=0, sum=0, left=0
//     for(let i=0; i<nums.length; i++){
//         sum+=nums[i]
//         console.log('sum',sum, left)
//         while(sum==k){
//             // console.log('i',i-left+1)
//         // console.log('sum',sum, left, nums[left])
//             // count++
//             // left++
//             // sum=sum-nums[left]
//         // console.log('sum',sum, left)

//             count=i-left+1
//         }
//         // left++
//     }
//     console.log('Count', count,left)
// return count   
};
