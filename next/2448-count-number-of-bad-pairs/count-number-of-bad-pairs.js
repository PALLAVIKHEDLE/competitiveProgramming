/**
 * @param {number[]} nums
 * @return {number}
 */
  var countBadPairs = function(nums) {
      //Map Approach
 let map={},goodPairs = 0,n = nums.length
    for(let i = 0 ;i<n ; i++){
        let difference = nums[i] - i
        goodPairs += (map[difference]??0) //increase goodpairs by simply checking for numbers  who has same difference as of (nums[i]) from thier index
        map[difference] = map[difference]? map[difference]+1 :1;
    }
    let totalPairs = (n*(n-1))/2
    return totalPairs-goodPairs//totalPairs = goodpairs + badPairs
      //brute force
   // let count = 0;
   // for (let i = 0; i < nums.length - 1; i++) {
   //     for (let j = i + 1; j < nums.length; j++) {
   //         if (j - i !== nums[j] - nums[i]) {
   //             count++;
   //         }
   //     }
   // }
   // return count;
};