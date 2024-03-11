/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
//   const map = {};
//   let res=''
//     for (const char of order)  map[char] = 0;

//     for (const char of s) {
//         if (map[char] !== undefined) map[char]++;
//     }

//     for (const char of order) res += char.repeat(map[char]);

//     for (const char of s) {
//         if (!order.includes(char))res += char;
//     }
//     return res;
let map = {};
    let res = '';

    // Count frequency of characters in s
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    // Iterate through order, append characters in the order they appear
    for (let char of order) {
        if (map[char] !== undefined) {
            res += char.repeat(map[char]);
            delete map[char];
        }
    }

    // Append remaining characters in s that are not in order
    for (let char in map) {
        res += char.repeat(map[char]);
    }

    return res;

};