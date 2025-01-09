/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

var prefixCount = function (words, pref) {
  return words.reduce((acc, curr) => acc + Number(curr.startsWith(pref)), 0);
};