/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mid = Math.floor(s.length / 2), fCount = 0, sCount = 0;

    for (let i = 0; i < mid; i++) {
        if (vowels.includes(s[i].toLowerCase())) fCount++;
    }

    for (let i = mid; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) sCount++;
    }

    return fCount === sCount;
};