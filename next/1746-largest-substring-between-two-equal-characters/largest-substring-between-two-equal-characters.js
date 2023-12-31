/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let maxLength = -1;
   for (let i = 0; i < s.length; i++) {
       for (let j = i + 1; j < s.length; j++) {
           if (s[i] == s[j]) {
               maxLength = Math.max(maxLength, j - i - 1);
           }
       }
   }
   return maxLength;
};