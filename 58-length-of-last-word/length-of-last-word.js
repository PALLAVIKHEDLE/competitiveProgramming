/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let words=s.trim().split(" ")//converting the trimmed string into an array of words
   return words.length>0?words[words.length-1].length:0
};