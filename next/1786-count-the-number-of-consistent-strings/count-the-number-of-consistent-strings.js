/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedChars = {};
    let output = 0;

    // Create an object to store allowed characters
    for (let i = 0; i < allowed.length; i++) {
        allowedChars[allowed[i]] = true;
    }

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isConsistent = true;
        
        // Check if each character in the word is in the allowed object
        for (let j = 0; j < word.length; j++) {
            if (!allowedChars[word[j]]) {
                isConsistent = false;
                break;
            }
        }
        // If the word is consistent, increment the output
        if (isConsistent) output++;
    }

    return output;
};