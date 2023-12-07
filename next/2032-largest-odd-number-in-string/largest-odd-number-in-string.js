/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
       let max ="";
    for (let i =num.length-1; i>=0; i--) {
       let val=parseInt(num[i])
        if(val%2!==0) return num.substring(0,i+1)
    }
 return max
};