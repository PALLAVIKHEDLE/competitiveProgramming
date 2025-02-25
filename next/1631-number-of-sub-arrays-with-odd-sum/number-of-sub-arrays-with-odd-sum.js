/**
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = (_, O = 0) => {
    const o = _.reduce((o, Ø) => o + (O = (O + Ø) & 1), 0);
    return o*(_.length - o + 1) % (1e9 + 7);
};