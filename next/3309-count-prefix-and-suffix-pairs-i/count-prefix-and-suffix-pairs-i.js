/**
 * @param {string[]} words
 * @return {number}
 */
function isPrefixAndSuffix(word1, word2) {
    return word2.startsWith(word1) && word2.endsWith(word1);
}

var countPrefixSuffixPairs = function(words) {
    let count = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};