/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const map = {};
  let res=''
    for (const char of order)  map[char] = 0;

    for (const char of s) {
        if (map[char] !== undefined) map[char]++;
    }

    for (const char of order) res += char.repeat(map[char]);

    for (const char of s) {
        if (!order.includes(char))res += char;
    }
    return res;
};