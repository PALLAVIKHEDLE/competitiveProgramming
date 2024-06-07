/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let word of dictionary) {
            if (arr[i].startsWith(word)) arr[i] = word;
        }
    }
    return arr.join(' '); 
};