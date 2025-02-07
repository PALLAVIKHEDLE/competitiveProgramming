/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let ballColors = new Map();
    let colorCount = new Map();
    let result = [];
    let distinctColors = 0;

    for (let [ball, color] of queries) {
        if (ballColors.has(ball)) {
            let prevColor = ballColors.get(ball);
            colorCount.set(prevColor, colorCount.get(prevColor) - 1);
            if (colorCount.get(prevColor) === 0) {
                distinctColors--;
            }
        }

        ballColors.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        if (colorCount.get(color) === 1) {
            distinctColors++;
        }

        result.push(distinctColors);
    }

    return result;
};