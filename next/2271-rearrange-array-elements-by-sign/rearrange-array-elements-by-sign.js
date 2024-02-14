/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos=[], neg=[], final=[]
    for(let num of nums){
        if(num>0)pos.push(num)
        else neg.push(num)
    }
    for(let i=0; i<pos.length;i++){
        final.push(pos[i])
        final.push(neg[i])
    }
    return final
};