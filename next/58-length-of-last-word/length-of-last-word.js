/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ')
    return words.pop().length
};