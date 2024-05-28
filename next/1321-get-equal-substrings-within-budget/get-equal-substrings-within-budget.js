/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let ans= Number.MIN_SAFE_INTEGER, currWindow=0, start=0
    for(let right=0; right<s.length; right++){
        currWindow+=Math.abs(s.charCodeAt(right)-t.charCodeAt(right))
        while(currWindow>maxCost){
            currWindow-=Math.abs(s.charCodeAt(start)-t.charCodeAt(start))
            start++
        }
        ans=Math.max(ans, right-start+1)
    }
return ans
};