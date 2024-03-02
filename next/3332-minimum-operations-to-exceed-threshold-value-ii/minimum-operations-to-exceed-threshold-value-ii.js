/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let result = 0;
    const numbersQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; ++i) {
        numbersQueue.enqueue(nums[i]);
    }

    let x, y;
    while (numbersQueue.size() > 1) {
        x = numbersQueue.dequeue().element;
        if (x >= k) break;
        y = numbersQueue.dequeue().element;
        ++result;
        numbersQueue.enqueue(Math.min(x, y) * 2 + Math.max(x, y));
    }

    return result;
//    let minOperation = 0;
//     nums.sort((a, b) => a - b);
//     while (nums.length >= 2 && nums[0] < k) {
//         let val = nums[0] * 2 + nums[1]; 
//         nums.splice(0, 2); 
//         nums.unshift(val); 
//         minOperation++;
//         nums.sort((a, b) => a - b); 
//     }
//     return nums[0] < k ? -1 : minOperation; 
};
