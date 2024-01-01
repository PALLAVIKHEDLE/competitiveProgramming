/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let words=s.trim().split(" ")
   console.log('words',words)
   return words.length?words[words.length-1].length:0 
};