/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
   let stack=[], nums2, nums1

    let operators={
        '+':(nums1,nums2)=>nums1+nums2,
        '-':(nums1,nums2)=>nums1-nums2,
        '*':(nums1,nums2)=>nums1*nums2,
        '/':(nums1,nums2)=>Math.trunc(nums1/nums2)
    }
   for(let i=0; i<tokens.length;i++){
       if(operators[tokens[i]]){
           nums2=stack.pop()
           nums1=stack.pop()
           stack.push(operators[tokens[i]](nums1,nums2))
       }else stack.push(parseInt(tokens[i]))
   } 
 return stack.pop() 
}