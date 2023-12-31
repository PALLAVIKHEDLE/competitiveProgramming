/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) { 
   let max_length = -1, substringCount = {};

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.substring(i, j);
            if (allCharactersSame(substring)) {
                if (substringCount[substring] === undefined) {
                    substringCount[substring] = 1;
                } else {
                    substringCount[substring]++;
                }
            }
        }
    }

    for (const [substring, count] of Object.entries(substringCount)) {
        if (count >= 3) {
            max_length = Math.max(max_length, substring.length);
        }
    }

    return max_length;
};

function allCharactersSame(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[0]) {
            return false;
        }
    }
    return true;
}