/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countOfSubstrings = (word, k) => {
    const isVowel = c => "aeiou".includes(c);

    const atLeastK = (word, k) => {
        let numValidSubstrings = 0;
        let start = 0;
        let end = 0;
        let vowelCount = new Map();
        let consonantCount = 0;

        while (end < word.length) {
            let newLetter = word[end];

            (isVowel(newLetter)) ?
                vowelCount.set(newLetter, (vowelCount.get(newLetter) || 0) + 1) :
                consonantCount++;

            while (vowelCount.size === 5 && consonantCount >= k) {
                numValidSubstrings += word.length - end;
                let startLetter = word[start];

                if (isVowel(startLetter)) {
                    vowelCount.set(startLetter, vowelCount.get(startLetter) - 1);
                    if (vowelCount.get(startLetter) === 0) {
                        vowelCount.delete(startLetter);
                    }
                } else {
                    consonantCount--;
                }
                start++;
            }

            end++;
        }

        return numValidSubstrings;
    };

    return atLeastK(word, k) - atLeastK(word, k + 1);
};