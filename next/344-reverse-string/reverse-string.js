/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
     let start=0,end=s.length-1
   
    while(start<=end){
        [s[start],s[end]]=[s[end],s[start]]
    //    let temp=s[end]
    //     s[end]=s[start]
    //     s[start]=temp
        start++
        end--
    }
    return s
};