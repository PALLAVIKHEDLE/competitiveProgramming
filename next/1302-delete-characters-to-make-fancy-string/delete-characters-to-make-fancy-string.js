/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans='', count=1;
    ans+=s[0]
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1])count+=1
        else count=1
        if(count<3)ans+=s[i]
    }
    return ans
};