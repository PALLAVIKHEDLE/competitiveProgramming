/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    // left and right are used to find the index of the element to the left and right of a given index i in a circular array (ring).
//left(i): If i is 0, it returns the index of the last element in the array (ring.length - 1), otherwise it returns i - 1.
//right(i): If i is the last index of the array (ring.length - 1), it returns 0 (the first index), otherwise it returns i + 1.
    let left = i => i === 0 ? ring.length - 1 : i - 1;
    let right = i => i === ring.length - 1 ? 0 : i + 1;
    let dp = ring.split("").map(() => 0);

    for (let i = key.length - 1; i >= 0; i--) {
        let dp1 = ring.split("").map((x, j) => (x === key[i]) ? dp[j] : Infinity);
        for (let j = 0; j < ring.length * 2; j++) {
            let x = j % ring.length;
            dp1[x] = Math.min(dp1[x], dp1[left(x)] + 1);
            let y = ((ring.length * 2) - 1 - j) % ring.length;
            dp1[y] = Math.min(dp1[y], dp1[right(y)] + 1);
        }
        dp = dp1;
    }
    return dp[0] + key.length;
};