/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;
    word = word.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = 'bcdfghjklmnpqrstvwxyz'; 

    let vowelFlag = false,consonantFlag = false;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!(/[a-zA-Z0-9]/).test(char)) return false; 
        if (vowels.includes(char)) vowelFlag = true;
        else {
            if (consonants.includes(char)) consonantFlag = true;
        }
    }
return vowelFlag && consonantFlag;
};