/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let end=Math.floor(Math.sqrt(c)), start=0;
    while(start<=end){
        let sum=start**2+end**2 // start & end  raised to the power of 2
        if(sum==c)return true
        else if(sum<c)start++
        else end--
    }
return false
};
