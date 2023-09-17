/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
//1. 
    // let map={}, resultArray=[]
    // for(let i=0; i<nums.length;i++){
    //     let val=map[nums[i]]
    //     if(val==undefined) map[nums[i]]=1
    // }
    // // console.log('map',map)
    // for(key in map){
    //     resultArray.push(key)
    // }
    // console.log('resultArray',resultArray)

    // let sorted=resultArray.sort((a,b)=>b-a)
    // console.log('sorted',sorted, sorted[k-1])
    
//2. 
    // nums.sort((a, b) => b - a);
    // return nums[k-1];
    
//3. 
        let minHeap=new MinPriorityQueue()
        nums.forEach((num)=>add(num))
        
    
   function add(val){
        let isUnderCapacity=minHeap.size()<k
        if(isUnderCapacity){
            minHeap.enqueue(val)
            return top()
        }
        
        let isLarger=top()<val
        if(isLarger){
            minHeap.dequeue()
            minHeap.enqueue(val)
        }
       return top()  
    }
     function  top () {
        return minHeap.front()?.element || 0
    }
return top()
    
};