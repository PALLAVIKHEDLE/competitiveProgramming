/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1Array = s1.split(' ');
    let s2Array = s2.split(' ');
    let wordCount = {};

    // Count the occurrences of words in both sentences
    s1Array.forEach(word => wordCount[word] = (wordCount[word] || 0) + 1);
    s2Array.forEach(word => wordCount[word] = (wordCount[word] || 0) + 1);

    // Find the uncommon words (those that appear only once)
    let result = [];
    for (let word in wordCount) {
        if (wordCount[word] === 1) {
            result.push(word);
        }
    }

    return result;
};