/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
 for (let i = 0; i < words.length; i++) {
        let word = words[i],
            start = 0,
            end = word.length - 1;
        while (start <= end) {
            if (word[start] !== word[end])break;
            start++;
            end--;
        }
        if (start > end) return word;
    }
return '';
};