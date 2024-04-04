/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=maxNum=0
    for(let c of s){
        if(c==='('){
            count++
            if(maxNum<count)maxNum=count
        }else if(c==')')count--
    }
 return maxNum   
};