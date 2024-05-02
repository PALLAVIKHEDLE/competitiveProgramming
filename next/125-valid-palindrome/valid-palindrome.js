/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     function replacesString(string){
          return string.replace(/[^A-Z0-9]+/gi, "").toLowerCase()
      }
      let str=replacesString(s)
    let left=0, right=str.length-1;
    while(left<right){
        if(str[left]!==str[right])return false
        left++
        right--
    }
return true
};