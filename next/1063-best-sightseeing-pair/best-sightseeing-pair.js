/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let ans = 0, Prev = values[0];

        for (let j = 1; j < values.length; j++) {
            ans = Math.max(ans, Prev + values[j] - j);
            Prev = Math.max(Prev, values[j] + j);
        }

        return ans;
};